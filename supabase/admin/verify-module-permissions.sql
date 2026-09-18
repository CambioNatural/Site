-- Execute only after the module-permissions migration is approved and applied.
-- All test users, grants, publications and audit rows are rolled back.
begin;
select set_config('test.cms_admin',(select user_id::text from public.cms_admins limit 1),true);
select set_config('test.cms_user',gen_random_uuid()::text,true);
insert into auth.users(id,email) values(current_setting('test.cms_user')::uuid,'cms-permissions-test-'||current_setting('test.cms_user')||'@example.invalid');
select set_config('request.jwt.claim.sub',current_setting('test.cms_admin'),true);
set local role authenticated;
select public.cms_set_permissions(current_setting('test.cms_user')::uuid,array['blog'],'{}');
do $$ begin
 if jsonb_array_length(public.cms_list_users())<1 then raise exception 'USER_LIST_FAILED'; end if;
 begin perform public.cms_set_permissions(current_setting('test.cms_admin')::uuid,'{}','{}');raise exception 'ADMIN_DEMOTION_ALLOWED';exception when raise_exception then if sqlerrm<>'ADMIN_PROTECTED' then raise;end if;end;
 begin perform public.cms_set_permissions(current_setting('test.cms_user')::uuid,array['home'],'{}');raise exception 'STALE_PERMISSIONS_ALLOWED';exception when raise_exception then if sqlerrm<>'VERSION_CONFLICT' then raise;end if;end;
end $$;
reset role;
select set_config('request.jwt.claim.sub',current_setting('test.cms_user'),true);
set local role authenticated;
do $$ declare test_id uuid; begin
 if not public.cms_can_manage('blog') or public.cms_can_manage('home') or public.cms_can_manage('popups') then raise exception 'WRONG_MODULE_ACCESS';end if;
 if exists(select 1 from public.cms_drafts) then raise exception 'HOME_DRAFT_LEAK';end if;
 test_id:=public.cms_write_entry('save',null,'blog','{"slug":"permissions-transaction-test","title":"Test","body":"Test","summary":"","author":"","image":"","alt":""}',0);
 perform public.cms_write_entry('publish',test_id,'blog','{"slug":"permissions-transaction-test","title":"Test","body":"Test","summary":"","author":"","image":"","alt":""}',1);
 perform public.cms_write_entry('unpublish',test_id,'blog',null,1);
 begin perform public.cms_write_entry('save',null,'popups','{}',0);raise exception 'POPUP_WRITE_ALLOWED';exception when insufficient_privilege then null;end;
 begin perform public.cms_save_draft('{}',4);raise exception 'HOME_WRITE_ALLOWED';exception when insufficient_privilege then null;end;
 begin perform public.cms_list_users();raise exception 'USER_DIRECTORY_LEAK';exception when insufficient_privilege then null;end;
 begin perform public.cms_set_permissions(auth.uid(),array['home'],array['blog']);raise exception 'SELF_ESCALATION';exception when insufficient_privilege then null;end;
 begin insert into public.cms_module_permissions values(auth.uid(),'home');raise exception 'DIRECT_ESCALATION';exception when insufficient_privilege then null;end;
end $$;
reset role;
select set_config('request.jwt.claim.sub',current_setting('test.cms_admin'),true);
set local role authenticated;
select public.cms_set_permissions(current_setting('test.cms_user')::uuid,'{}',array['blog']);
reset role;
select set_config('request.jwt.claim.sub',current_setting('test.cms_user'),true);
set local role authenticated;
do $$ begin
 if public.cms_has_access() then raise exception 'REVOCATION_FAILED';end if;
 if exists(select 1 from public.cms_entries) then raise exception 'REVOKED_DRAFT_ACCESS';end if;
end $$;
reset role;
set local role anon;
do $$ begin
 begin perform public.cms_list_users();raise exception 'ANON_DIRECTORY_ACCESS';exception when insufficient_privilege then null;end;
end $$;
reset role;
select 'PASS: module isolation, publish, withdrawal, directory privacy, no escalation, protected admins, conflicts and revocation' as result;
rollback;
