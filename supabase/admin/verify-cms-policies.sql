-- Read-only checks plus rejected writes, all rolled back.
begin;
set local role anon;
do $$ begin
 if (select count(*) from public.cms_published) <> 1 then raise exception 'Public content missing'; end if;
 begin perform 1 from public.cms_drafts; raise exception 'Draft leak'; exception when insufficient_privilege then null; end;
 begin perform public.cms_save_draft('{}'::jsonb,0); raise exception 'Anonymous write allowed'; exception when insufficient_privilege then null; end;
end; $$;
reset role;
set local role authenticated;
select set_config('request.jwt.claim.sub','00000000-0000-0000-0000-000000000001',true);
do $$ begin
 if public.cms_is_admin() then raise exception 'Unexpected admin'; end if;
 if exists(select 1 from public.cms_drafts) or exists(select 1 from public.cms_revisions) or exists(select 1 from public.cms_admins) then raise exception 'Private rows exposed'; end if;
 if exists(select 1 from storage.objects where bucket_id='cms-drafts') then raise exception 'Private storage exposed'; end if;
 begin perform public.cms_save_draft('{}'::jsonb,0); raise exception 'Non-admin write allowed'; exception when insufficient_privilege then null; end;
end; $$;
select set_config('request.jwt.claim.sub','c338ddc3-8288-431d-89af-cd9481cf0762',true);
do $$ begin
 if not public.cms_is_admin() then raise exception 'Admin missing'; end if;
 begin perform public.cms_save_draft('{}'::jsonb,null); raise exception 'Null accepted'; exception when raise_exception then if sqlerrm <> 'VERSION_CONFLICT' then raise; end if; end;
 begin perform public.cms_publish(null,'{}'::jsonb); raise exception 'Null accepted'; exception when raise_exception then if sqlerrm <> 'VERSION_CONFLICT' then raise; end if; end;
 if (select version from public.cms_drafts where id='home') <> 3 then raise exception 'Draft changed'; end if;
end; $$;
reset role;
select 'PASS: public read, private RLS, rejected unauthorized writes, NULL guards' as validation;
rollback;
