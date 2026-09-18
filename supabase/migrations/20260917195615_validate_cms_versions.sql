begin;
create or replace function public.cms_save_draft(p_content jsonb, p_expected_version bigint) returns bigint language plpgsql security invoker set search_path = '' as $$
declare v bigint;
begin
 if not public.cms_is_admin() then raise exception 'FORBIDDEN' using errcode = '42501'; end if;
 if p_expected_version is null or p_expected_version < 0 then raise exception 'VERSION_CONFLICT'; end if;
 perform pg_advisory_xact_lock(9472701);
 select version into v from public.cms_drafts where id='home' for update;
 if coalesce(v,0) <> p_expected_version then raise exception 'VERSION_CONFLICT'; end if;
 v := coalesce(v,0) + 1;
 insert into public.cms_drafts(id,content,version) values ('home',p_content,v) on conflict(id) do update set content=excluded.content,version=excluded.version,updated_at=now();
 return v;
end; $$;
create or replace function public.cms_publish(p_expected_version bigint, p_content jsonb) returns bigint language plpgsql security invoker set search_path = '' as $$
declare v bigint;
begin
 if not public.cms_is_admin() then raise exception 'FORBIDDEN' using errcode = '42501'; end if;
 if p_expected_version is null or p_expected_version < 0 then raise exception 'VERSION_CONFLICT'; end if;
 perform pg_advisory_xact_lock(9472701);
 select version into v from public.cms_drafts where id='home' for update;
 if v is null or v <> p_expected_version then raise exception 'VERSION_CONFLICT'; end if;
 if p_content is null or jsonb_typeof(p_content) <> 'object' or not (p_content ? 'home' and p_content ? 'navigation') or octet_length(p_content::text) >= 200000 then raise exception 'INVALID_CONTENT'; end if;
 insert into public.cms_revisions(version,content,published_by) values(v,p_content,auth.uid());
 insert into public.cms_published(id,content,version) values('home',p_content,v) on conflict(id) do update set content=excluded.content,version=excluded.version,published_at=now();
 return v;
end; $$;
commit;
