-- Applied through the Supabase SQL Editor on 2026-09-17.
begin;
create table public.cms_admins (user_id uuid primary key references auth.users(id) on delete cascade);
alter table public.cms_admins enable row level security;
revoke all on public.cms_admins from anon, authenticated;
grant select on public.cms_admins to authenticated;
create policy cms_admin_self on public.cms_admins for select to authenticated using (user_id = (select auth.uid()));
create function public.cms_is_admin() returns boolean language sql stable security invoker set search_path = '' as $$ select auth.uid() is not null and exists (select 1 from public.cms_admins where user_id = auth.uid()); $$;
revoke all on function public.cms_is_admin() from public, anon;
grant execute on function public.cms_is_admin() to authenticated;
create table public.cms_drafts (id text primary key check (id = 'home'), content jsonb not null check (jsonb_typeof(content) = 'object' and content ? 'home' and content ? 'navigation' and octet_length(content::text) < 200000), version bigint not null default 1, updated_at timestamptz not null default now());
create table public.cms_published (id text primary key check (id = 'home'), content jsonb not null, version bigint not null, published_at timestamptz not null default now());
create table public.cms_revisions (version bigint primary key, content jsonb not null, published_at timestamptz not null default now(), published_by uuid references auth.users(id));
alter table public.cms_drafts enable row level security;
alter table public.cms_published enable row level security;
alter table public.cms_revisions enable row level security;
revoke all on public.cms_drafts, public.cms_published, public.cms_revisions from anon, authenticated;
grant select, insert, update on public.cms_drafts, public.cms_published to authenticated;
grant select, insert on public.cms_revisions to authenticated;
grant select on public.cms_published to anon;
create policy cms_drafts_read on public.cms_drafts for select to authenticated using ((select public.cms_is_admin()));
create policy cms_drafts_insert on public.cms_drafts for insert to authenticated with check ((select public.cms_is_admin()));
create policy cms_drafts_update on public.cms_drafts for update to authenticated using ((select public.cms_is_admin())) with check ((select public.cms_is_admin()));
create policy cms_published_read on public.cms_published for select to anon, authenticated using (true);
create policy cms_published_insert on public.cms_published for insert to authenticated with check ((select public.cms_is_admin()));
create policy cms_published_update on public.cms_published for update to authenticated using ((select public.cms_is_admin())) with check ((select public.cms_is_admin()));
create policy cms_revisions_read on public.cms_revisions for select to authenticated using ((select public.cms_is_admin()));
create policy cms_revisions_insert on public.cms_revisions for insert to authenticated with check ((select public.cms_is_admin()) and published_by = (select auth.uid()));
create function public.cms_save_draft(p_content jsonb, p_expected_version bigint) returns bigint language plpgsql security invoker set search_path = '' as $$
declare v bigint;
begin
 if not public.cms_is_admin() then raise exception 'FORBIDDEN' using errcode = '42501'; end if;
 perform pg_advisory_xact_lock(9472701);
 select version into v from public.cms_drafts where id='home' for update;
 if coalesce(v,0) <> p_expected_version then raise exception 'VERSION_CONFLICT'; end if;
 v := coalesce(v,0) + 1;
 insert into public.cms_drafts(id,content,version) values ('home',p_content,v) on conflict(id) do update set content=excluded.content,version=excluded.version,updated_at=now();
 return v;
end; $$;
create function public.cms_publish(p_expected_version bigint, p_content jsonb) returns bigint language plpgsql security invoker set search_path = '' as $$
declare v bigint;
begin
 if not public.cms_is_admin() then raise exception 'FORBIDDEN' using errcode = '42501'; end if;
 perform pg_advisory_xact_lock(9472701);
 select version into v from public.cms_drafts where id='home' for update;
 if v is null or v <> p_expected_version then raise exception 'VERSION_CONFLICT'; end if;
 if jsonb_typeof(p_content) <> 'object' or not (p_content ? 'home' and p_content ? 'navigation') or octet_length(p_content::text) >= 200000 then raise exception 'INVALID_CONTENT'; end if;
 insert into public.cms_revisions(version,content,published_by) values(v,p_content,auth.uid());
 insert into public.cms_published(id,content,version) values('home',p_content,v) on conflict(id) do update set content=excluded.content,version=excluded.version,published_at=now();
 return v;
end; $$;
revoke all on function public.cms_save_draft(jsonb,bigint), public.cms_publish(bigint,jsonb) from public, anon;
grant execute on function public.cms_save_draft(jsonb,bigint), public.cms_publish(bigint,jsonb) to authenticated;
insert into storage.buckets(id,name,public,file_size_limit,allowed_mime_types) values
 ('cms-drafts','cms-drafts',false,5242880,array['image/jpeg','image/png','image/webp']),
 ('cms-public','cms-public',true,5242880,array['image/jpeg','image/png','image/webp']);
create policy cms_media_read on storage.objects for select to authenticated using (bucket_id in ('cms-drafts','cms-public') and (select public.cms_is_admin()));
create policy cms_media_insert on storage.objects for insert to authenticated with check (bucket_id in ('cms-drafts','cms-public') and (select public.cms_is_admin()));
commit;
