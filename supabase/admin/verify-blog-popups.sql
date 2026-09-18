begin;
-- Read the already-authorized administrator, not an invented identity.
select set_config('request.jwt.claim.sub',(select user_id::text from public.cms_admins limit 1),true);
set local role authenticated;
do $$
declare test_id uuid; v bigint;
begin
 test_id:=public.cms_write_entry('save',null,'blog','{"slug":"transaction-test-blog","title":"Test","body":"Draft","summary":"","author":"","image":"","alt":""}',0);
 perform public.cms_write_entry('publish',test_id,'blog','{"slug":"transaction-test-blog","title":"Test","body":"Draft","summary":"","author":"","image":"","alt":""}',1);
 perform public.cms_write_entry('save',test_id,'blog','{"slug":"transaction-test-blog","title":"Test","body":"Private changes","summary":"","author":"","image":"","alt":""}',1);
 if (select content->>'body' from public.cms_entry_publications where id=test_id)<>'Draft' then raise exception 'DRAFT_LEAK'; end if;
 begin
  perform public.cms_write_entry('save',test_id,'blog','{"slug":"transaction-test-blog","title":"Test"}',1);
  raise exception 'STALE_WRITE_ALLOWED';
 exception when raise_exception then if sqlerrm<>'VERSION_CONFLICT' then raise; end if; end;
 test_id:=public.cms_write_entry('save',null,'popups','{"slug":"transaction-test-popup","title":"Future","body":"Scheduled","image":"","alt":"","startsAt":"2099-01-01T00:00:00Z","endsAt":"","delay":5,"frequency":"session","paths":["/"],"url":"","buttonLabel":""}',0);
 perform public.cms_write_entry('publish',test_id,'popups','{"slug":"transaction-test-popup","title":"Future","body":"Scheduled","image":"","alt":"","startsAt":"2099-01-01T00:00:00Z","endsAt":"","delay":5,"frequency":"session","paths":["/"],"url":"","buttonLabel":""}',1);
end $$;
reset role;
set local role anon;
do $$
begin
 if (select count(*) from public.cms_entry_publications where slug='transaction-test-blog')<>1 then raise exception 'PUBLIC_BLOG_UNREADABLE'; end if;
 if exists(select 1 from public.cms_entry_publications where slug='transaction-test-popup') then raise exception 'SCHEDULE_LEAK'; end if;
 begin perform 1 from public.cms_entries; raise exception 'DRAFT_ACCESS_ALLOWED'; exception when insufficient_privilege then null; end;
 begin perform public.cms_write_entry('save',null,'blog','{}',0); raise exception 'ANON_WRITE_ALLOWED'; exception when insufficient_privilege then null; end;
end $$;
reset role;
select set_config('request.jwt.claim.sub','00000000-0000-4000-8000-000000000001',true);
set local role authenticated;
do $$
begin
 if exists(select 1 from public.cms_entries) then raise exception 'NONADMIN_DRAFT_ACCESS'; end if;
 begin perform public.cms_write_entry('save',null,'blog','{}',0); raise exception 'NONADMIN_WRITE_ALLOWED'; exception when insufficient_privilege then null; end;
end $$;
reset role;
select 'PASS: drafts private, admin CRUD, version conflict, public blog, scheduled popup hidden, anonymous/nonadmin writes denied' as result;
rollback;
