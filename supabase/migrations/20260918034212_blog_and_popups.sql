begin;
create table public.cms_entries (
 id uuid primary key default gen_random_uuid(),
 kind text not null check(kind in ('blog','popups')),
 slug text not null check(slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and length(slug)<=120),
 content jsonb not null check(jsonb_typeof(content)='object' and octet_length(content::text)<150000),
 version bigint not null check(version>0),
 updated_at timestamptz not null default now(),
 unique(kind,slug)
);
create table public.cms_entry_publications (
 id uuid primary key references public.cms_entries(id),
 kind text not null check(kind in ('blog','popups')),
 slug text not null,
 content jsonb not null check(jsonb_typeof(content)='object' and octet_length(content::text)<150000 and coalesce(content->>'image','') not like 'draft:%'),
 version bigint not null,
 starts_at timestamptz,
 ends_at timestamptz,
 published_at timestamptz not null default now(),
 check(ends_at is null or starts_at is null or ends_at>starts_at),
 unique(kind,slug)
);
alter table public.cms_entries enable row level security;
alter table public.cms_entry_publications enable row level security;
revoke all on public.cms_entries, public.cms_entry_publications from anon, authenticated;
grant select,insert,update on public.cms_entries to authenticated;
grant select,insert,update,delete on public.cms_entry_publications to authenticated;
grant select on public.cms_entry_publications to anon;
create policy entries_admin on public.cms_entries for all to authenticated using ((select public.cms_is_admin())) with check ((select public.cms_is_admin()));
create policy entry_publications_admin on public.cms_entry_publications for all to authenticated using ((select public.cms_is_admin())) with check ((select public.cms_is_admin()));
create policy entry_publications_read on public.cms_entry_publications for select to anon,authenticated using ((starts_at is null or starts_at<=now()) and (ends_at is null or ends_at>now()));
create index entry_publications_kind_date on public.cms_entry_publications(kind,published_at desc);
create function public.cms_write_entry(p_action text,p_id uuid,p_kind text,p_content jsonb,p_version bigint)
returns uuid language plpgsql security invoker set search_path='' as $$
declare current_row public.cms_entries; entry_id uuid;
begin
 if not public.cms_is_admin() then raise exception 'FORBIDDEN' using errcode='42501'; end if;
 if p_kind is null or p_kind not in ('blog','popups') or p_version is null or p_version<0 then raise exception 'INVALID_INPUT'; end if;
 perform pg_advisory_xact_lock(9472702);
 if p_id is not null then
  select * into current_row from public.cms_entries where id=p_id and kind=p_kind for update;
  if not found or current_row.version<>p_version then raise exception 'VERSION_CONFLICT'; end if;
 elsif p_action<>'save' or p_version<>0 then raise exception 'VERSION_CONFLICT';
 end if;
 if p_action in ('save','publish') then
  if p_content is null or jsonb_typeof(p_content)<>'object' or coalesce(length(p_content->>'title'),0)=0 or coalesce(length(p_content->>'slug'),0)=0 then raise exception 'INVALID_CONTENT'; end if;
 end if;
 if p_action='save' then
  if p_id is null then
   insert into public.cms_entries(kind,slug,content,version) values(p_kind,p_content->>'slug',p_content,1) returning id into entry_id;
  else
   update public.cms_entries set slug=p_content->>'slug',content=p_content,version=version+1,updated_at=now() where id=p_id returning id into entry_id;
  end if;
 elsif p_action='publish' then
  if (p_content-'image') is distinct from (current_row.content-'image') then raise exception 'CONTENT_CONFLICT'; end if;
  insert into public.cms_entry_publications(id,kind,slug,content,version,starts_at,ends_at)
   values(p_id,p_kind,current_row.slug,p_content,p_version,nullif(p_content->>'startsAt','')::timestamptz,nullif(p_content->>'endsAt','')::timestamptz)
   on conflict(id) do update set slug=excluded.slug,content=excluded.content,version=excluded.version,starts_at=excluded.starts_at,ends_at=excluded.ends_at,published_at=now();
  entry_id:=p_id;
 elsif p_action='unpublish' then
  delete from public.cms_entry_publications where id=p_id;
  entry_id:=p_id;
 else raise exception 'INVALID_ACTION';
 end if;
 return entry_id;
end; $$;
revoke all on function public.cms_write_entry(text,uuid,text,jsonb,bigint) from public,anon;
grant execute on function public.cms_write_entry(text,uuid,text,jsonb,bigint) to authenticated;
commit;
