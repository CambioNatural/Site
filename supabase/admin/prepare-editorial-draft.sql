-- Ejecutado mediante el conector oficial de Supabase el 2026-09-18 02:51 UTC.
-- Registro de la operación v3 -> v4; no volver a ejecutar.
-- Solo modifica el borrador home v3; la publicación permanece intacta.
-- Si hay cambios posteriores, detenerse y reconciliar el contenido.
begin;
do $patch$
declare
  draft_content jsonb;
  draft_version bigint;
  item jsonb;
  field_path text[];
  patches jsonb := $editorial$[{"path": ["home", "hero", "intro", "text"], "before": "¿How do we meet and collaborate to lead towards agree", "after": "How do we meet and collaborate to lead towards a"}, {"path": ["home", "hero", "intro", "mobileText"], "before": "¿How do we meet and collaborate to lead towards a", "after": "How do we meet and collaborate to lead towards a"}, {"path": ["home", "initiatives", "2", "description", "text"], "before": "A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and earths natural systems, and what it means to act with responsibility in a world that asks us to rethink how we live and relate to one another.", "after": "A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and Earth’s natural systems, and what it means to act with responsibility in a world that asks us to rethink how we live and relate to one another."}, {"path": ["home", "initiatives", "2", "description", "mobileText"], "before": "A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and earths natural systems.", "after": "A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and Earth’s natural systems."}, {"path": ["home", "article", "category"], "before": "Article - Substrack", "after": "Article - Substack"}, {"path": ["home", "article", "excerpt", "text"], "before": "Have you ever thought about how the each crisis are conected? theres critila point that detonate and internonect cisis in each context...", "after": "Have you ever thought about how crises are connected? There is a critical point that triggers and connects crises in each context..."}, {"path": ["home", "article", "excerpt", "mobileText"], "before": "Have you ever thought about how each crisis is connected? there's a critical point that detonates and interconnects crises...", "after": "Have you ever thought about how crises are connected? There is a critical point that triggers and connects crises..."}, {"path": ["home", "newsletter", "title"], "before": "Lets Co-create together", "after": "Let’s co-create together"}, {"path": ["home", "newsletter", "description"], "before": "Short bi-monthly nuggets on Planetary Health, projects and researchs that are changing the world, delivered to your inbox - No spam, real action.", "after": "Short bi-monthly nuggets on Planetary Health, projects and research that are changing the world, delivered to your inbox - No spam, real action."}]$editorial$::jsonb;
begin
  perform pg_advisory_xact_lock(9472701);
  select content, version into draft_content, draft_version
    from public.cms_drafts where id = 'home' for update;
  if draft_version is distinct from 3::bigint then
    raise exception 'VERSION_CONFLICT: expected draft 3, found %', draft_version;
  end if;
  for item in select value from jsonb_array_elements(patches) loop
    select array_agg(value order by position) into field_path
      from jsonb_array_elements_text(item->'path') with ordinality as p(value, position);
    if (draft_content #> field_path) is distinct from (item->'before') then
      raise exception 'CONTENT_CONFLICT at %', array_to_string(field_path, '.');
    end if;
    draft_content := jsonb_set(draft_content, field_path, item->'after', false);
  end loop;
  update public.cms_drafts
    set content = draft_content, version = draft_version + 1, updated_at = now()
    where id = 'home' and version = draft_version;
  if not found then raise exception 'VERSION_CONFLICT'; end if;
end;
$patch$;
select id, version, updated_at from public.cms_drafts where id = 'home';
commit;
