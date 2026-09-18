begin;
create table public.cms_module_permissions(user_id uuid not null references auth.users(id) on delete cascade,module text not null check(module in ('home','blog','popups')),primary key(user_id,module));
alter table public.cms_module_permissions enable row level security;
revoke all on public.cms_module_permissions from anon,authenticated;
grant select on public.cms_module_permissions to authenticated;
create policy permission_self on public.cms_module_permissions for select to authenticated using(user_id=(select auth.uid()) or (select public.cms_is_admin()));
create function public.cms_can_manage(p_module text) returns boolean language sql stable security invoker set search_path='' as $$
 select auth.uid() is not null and (public.cms_is_admin() or exists(select 1 from public.cms_module_permissions where user_id=auth.uid() and module=p_module)); $$;
revoke all on function public.cms_can_manage(text) from public,anon;
grant execute on function public.cms_can_manage(text) to authenticated;
create function public.cms_has_access() returns boolean language sql stable security invoker set search_path='' as $$
 select auth.uid() is not null and (public.cms_is_admin() or exists(select 1 from public.cms_module_permissions where user_id=auth.uid())); $$;
revoke all on function public.cms_has_access() from public,anon;
grant execute on function public.cms_has_access() to authenticated;
create schema if not exists cms_private;
revoke all on schema cms_private from public,anon;
grant usage on schema cms_private to authenticated;
create table cms_private.permission_audit(id bigint generated always as identity primary key,actor uuid not null,target uuid not null,before_modules text[] not null,after_modules text[] not null,changed_at timestamptz not null default now());
alter table cms_private.permission_audit enable row level security;
revoke all on cms_private.permission_audit from public,anon,authenticated;
create function cms_private.list_users() returns jsonb language plpgsql security definer set search_path='' as $$
begin
 if auth.uid() is null or not public.cms_is_admin() then raise exception 'FORBIDDEN' using errcode='42501'; end if;
 return coalesce((select jsonb_agg(jsonb_build_object('id',u.id,'email',u.email,'confirmed',u.email_confirmed_at is not null,'lastSignIn',u.last_sign_in_at,'admin',exists(select 1 from public.cms_admins a where a.user_id=u.id),'modules',coalesce((select jsonb_agg(p.module order by p.module) from public.cms_module_permissions p where p.user_id=u.id),'[]'::jsonb)) order by u.created_at desc) from auth.users u),'[]'::jsonb);
end $$;
create function cms_private.set_permissions(p_user uuid,p_modules text[],p_expected text[]) returns void language plpgsql security definer set search_path='' as $$
declare previous text[]; expected text[]; desired text[];
begin
 if auth.uid() is null or not public.cms_is_admin() then raise exception 'FORBIDDEN' using errcode='42501'; end if;
 if p_modules is null or p_expected is null or exists(select 1 from unnest(p_modules) m where m is null or m not in ('home','blog','popups')) then raise exception 'INVALID_PERMISSIONS'; end if;
 perform pg_advisory_xact_lock(9472703);
 if not exists(select 1 from auth.users where id=p_user) then raise exception 'USER_NOT_FOUND'; end if;
 if exists(select 1 from public.cms_admins where user_id=p_user) then raise exception 'ADMIN_PROTECTED'; end if;
 select coalesce(array_agg(module order by module),'{}') into previous from public.cms_module_permissions where user_id=p_user;
 select coalesce(array_agg(distinct m order by m),'{}') into expected from unnest(p_expected) m;
 select coalesce(array_agg(distinct m order by m),'{}') into desired from unnest(p_modules) m;
 if previous is distinct from expected then raise exception 'VERSION_CONFLICT'; end if;
 delete from public.cms_module_permissions where user_id=p_user;
 insert into public.cms_module_permissions(user_id,module) select p_user,unnest(desired);
 insert into cms_private.permission_audit(actor,target,before_modules,after_modules) values(auth.uid(),p_user,previous,desired);
end $$;
revoke all on function cms_private.list_users(),cms_private.set_permissions(uuid,text[],text[]) from public,anon;
grant execute on function cms_private.list_users(),cms_private.set_permissions(uuid,text[],text[]) to authenticated;
create function public.cms_list_users() returns jsonb language sql security invoker set search_path='' as $$select cms_private.list_users();$$;
create function public.cms_set_permissions(p_user uuid,p_modules text[],p_expected text[]) returns void language sql security invoker set search_path='' as $$select cms_private.set_permissions(p_user,p_modules,p_expected);$$;
revoke all on function public.cms_list_users(),public.cms_set_permissions(uuid,text[],text[]) from public,anon;
grant execute on function public.cms_list_users(),public.cms_set_permissions(uuid,text[],text[]) to authenticated;
 drop policy cms_drafts_read on public.cms_drafts;
create policy cms_drafts_read on public.cms_drafts for select to authenticated using ((select public.cms_can_manage('home')));
 drop policy cms_drafts_insert on public.cms_drafts;
create policy cms_drafts_insert on public.cms_drafts for insert to authenticated with check ((select public.cms_can_manage('home')));
 drop policy cms_drafts_update on public.cms_drafts;
create policy cms_drafts_update on public.cms_drafts for update to authenticated using ((select public.cms_can_manage('home'))) with check ((select public.cms_can_manage('home')));
 drop policy cms_published_insert on public.cms_published;
create policy cms_published_insert on public.cms_published for insert to authenticated with check ((select public.cms_can_manage('home')));
 drop policy cms_published_update on public.cms_published;
create policy cms_published_update on public.cms_published for update to authenticated using ((select public.cms_can_manage('home'))) with check ((select public.cms_can_manage('home')));
 drop policy cms_revisions_read on public.cms_revisions;
create policy cms_revisions_read on public.cms_revisions for select to authenticated using ((select public.cms_can_manage('home')));
 drop policy cms_revisions_insert on public.cms_revisions;
create policy cms_revisions_insert on public.cms_revisions for insert to authenticated with check ((select public.cms_can_manage('home')) and published_by = (select auth.uid()));
 drop policy cms_media_read on storage.objects;
create policy cms_media_read on storage.objects for select to authenticated using (bucket_id in ('cms-drafts','cms-public') and (select public.cms_has_access()));
 drop policy cms_media_insert on storage.objects;
create policy cms_media_insert on storage.objects for insert to authenticated with check (bucket_id in ('cms-drafts','cms-public') and (select public.cms_has_access()));
drop policy entries_admin on public.cms_entries;
create policy entries_admin on public.cms_entries for all to authenticated using(public.cms_can_manage(kind)) with check(public.cms_can_manage(kind));
drop policy entry_publications_admin on public.cms_entry_publications;
create policy entry_publications_admin on public.cms_entry_publications for all to authenticated using(public.cms_can_manage(kind)) with check(public.cms_can_manage(kind));
create or replace function public.cms_save_draft(p_content jsonb, p_expected_version bigint) returns bigint language plpgsql security invoker set search_path = '' as $$
declare v bigint;
begin
 if not public.cms_can_manage('home') then raise exception 'FORBIDDEN' using errcode = '42501'; end if;
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
 if not public.cms_can_manage('home') then raise exception 'FORBIDDEN' using errcode = '42501'; end if;
 if p_expected_version is null or p_expected_version < 0 then raise exception 'VERSION_CONFLICT'; end if;
 perform pg_advisory_xact_lock(9472701);
 select version into v from public.cms_drafts where id='home' for update;
 if v is null or v <> p_expected_version then raise exception 'VERSION_CONFLICT'; end if;
 if p_content is null or jsonb_typeof(p_content) <> 'object' or not (p_content ? 'home' and p_content ? 'navigation') or octet_length(p_content::text) >= 200000 then raise exception 'INVALID_CONTENT'; end if;
 insert into public.cms_revisions(version,content,published_by) values(v,p_content,auth.uid());
 insert into public.cms_published(id,content,version) values('home',p_content,v) on conflict(id) do update set content=excluded.content,version=excluded.version,published_at=now();
 return v;
end; $$;
create or replace function public.cms_write_entry(p_action text,p_id uuid,p_kind text,p_content jsonb,p_version bigint)
returns uuid language plpgsql security invoker set search_path='' as $$
declare current_row public.cms_entries; entry_id uuid;
begin
 if not public.cms_can_manage(p_kind) then raise exception 'FORBIDDEN' using errcode='42501'; end if;
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
commit;
