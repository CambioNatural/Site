begin;
create table public.media_club_registrations (
 id uuid primary key default gen_random_uuid(),
 event_id text not null check(event_id='the-ai-doc-2026-11-19'),
 name text not null check(length(trim(name)) between 1 and 120),
 email text not null check(length(email)<=254 and email=lower(trim(email)) and email ~ '^[^[:space:]@]+@[^[:space:]@]+\.[^[:space:]@]+$'),
 language text not null check(language in ('es','en')),
 consent_version text not null check(consent_version='event-contact-v1'),
 created_at timestamptz not null default now(),
 unique(event_id,email)
);
alter table public.media_club_registrations enable row level security;
revoke all on public.media_club_registrations from public,anon,authenticated;
grant insert(event_id,name,email,language,consent_version) on public.media_club_registrations to anon,authenticated;
grant select on public.media_club_registrations to authenticated;
create policy event_registration_insert on public.media_club_registrations for insert to anon,authenticated with check(event_id='the-ai-doc-2026-11-19' and consent_version='event-contact-v1' and now()<'2026-11-20T01:00:00Z'::timestamptz);
create policy event_registration_admin_read on public.media_club_registrations for select to authenticated using ((select public.cms_can_manage('crm')));
commit;
