begin;
-- Only image source URLs may change when converting private draft media to public media.
-- Text, order, formatting, alt text and optimistic version checks remain unchanged.
create function public.cms_rich_text_without_image_sources(p_node jsonb)
returns jsonb language plpgsql immutable strict security invoker set search_path='' as $$
declare result jsonb := p_node; children jsonb;
begin
 if p_node->>'type'='image' then return p_node #- '{attrs,src}'; end if;
 if jsonb_typeof(p_node->'content')='array' then
  select coalesce(jsonb_agg(public.cms_rich_text_without_image_sources(value) order by ord),'[]'::jsonb)
  into children from jsonb_array_elements(p_node->'content') with ordinality as nodes(value,ord);
  result:=jsonb_set(result,'{content}',children);
 end if;
 return result;
end; $$;
revoke all on function public.cms_rich_text_without_image_sources(jsonb) from public,anon;
grant execute on function public.cms_rich_text_without_image_sources(jsonb) to authenticated;

create function public.cms_blog_images_are_public(p_content jsonb)
returns boolean language sql immutable strict security invoker set search_path='' as $$
 select not exists (
  select 1 from jsonb_path_query(p_content, '$.richText.** ? (@.type == "image")') as images(node)
  where coalesce(node #>> '{attrs,src}','') !~ '^(/images/[a-zA-Z0-9._-]+\.(png|jpg|jpeg|webp|svg)|https://nyiamzhitbzfuurgmnca\.supabase\.co/storage/v1/object/public/cms-public/[a-f0-9-]+\.(png|jpg|webp))$'
 );
$$;
revoke all on function public.cms_blog_images_are_public(jsonb) from public;
grant execute on function public.cms_blog_images_are_public(jsonb) to authenticated,anon;
alter table public.cms_entry_publications add constraint blog_inline_images_public check(public.cms_blog_images_are_public(content));

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
  if (p_content-'image'-'richText') is distinct from (current_row.content-'image'-'richText') or public.cms_rich_text_without_image_sources(p_content->'richText') is distinct from public.cms_rich_text_without_image_sources(current_row.content->'richText') then raise exception 'CONTENT_CONFLICT'; end if;
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
