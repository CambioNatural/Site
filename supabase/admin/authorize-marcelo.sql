-- Run only after confirmation to grant CMS administrator access.
-- Scoped to the verified Auth user and email in Cambio Natural.
begin;
do $$
begin
  if not exists (
    select 1 from auth.users
    where id = 'c338ddc3-8288-431d-89af-cd9481cf0762'::uuid
      and email = 'marcelo@torresllamas.com'
      and email_confirmed_at is not null
  ) then
    raise exception 'Expected confirmed user not found';
  end if;
  insert into public.cms_admins(user_id)
  values ('c338ddc3-8288-431d-89af-cd9481cf0762'::uuid)
  on conflict (user_id) do nothing;
end;
$$;
select u.email, a.user_id
from public.cms_admins a join auth.users u on u.id = a.user_id
where a.user_id = 'c338ddc3-8288-431d-89af-cd9481cf0762'::uuid;
commit;
