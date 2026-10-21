begin;
alter table public.media_club_registrations drop constraint media_club_registrations_event_id_check;
alter table public.media_club_registrations add constraint media_club_registrations_event_id_check check(event_id='the-ai-doc-2026-11-19');
alter policy event_registration_insert on public.media_club_registrations with check(event_id='the-ai-doc-2026-11-19' and consent_version='event-contact-v1' and now()<'2026-11-20T01:00:00Z'::timestamptz);
commit;
