# Correcciones editoriales de portada

## Estado verificado

- Aplicadas en `src/content/home.ts` (contenido local de respaldo).
- Aplicadas mediante el conector oficial de Supabase: borrador 4. Publicación conservada en versión 3.
- Verificación SQL posterior: exactamente los nueve cambios esperados; publicación idéntica a revisión 3; historial con tres revisiones.
- El contenido publicado del CMS tiene prioridad sobre el respaldo local.
- Validación: esquema del CMS válido y 5 pruebas del CMS aprobadas.

## Cambios aprobados

### home.hero.intro.text

Anterior: ¿How do we meet and collaborate to lead towards agree

Corregido: How do we meet and collaborate to lead towards a

### home.hero.intro.mobileText

Anterior: ¿How do we meet and collaborate to lead towards a

Corregido: How do we meet and collaborate to lead towards a

### home.initiatives.2.description.text

Anterior: A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and earths natural systems, and what it means to act with responsibility in a world that asks us to rethink how we live and relate to one another.

Corregido: A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and Earth’s natural systems, and what it means to act with responsibility in a world that asks us to rethink how we live and relate to one another.

### home.initiatives.2.description.mobileText

Anterior: A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and earths natural systems.

Corregido: A space for honest, thoughtful conversations about the media that shape our lives. We explore how personal choices connect with larger structures like power, governance and Earth’s natural systems.

### home.article.category

Anterior: Article - Substrack

Corregido: Article - Substack

### home.article.excerpt.text

Anterior: Have you ever thought about how the each crisis are conected? theres critila point that detonate and internonect cisis in each context...

Corregido: Have you ever thought about how crises are connected? There is a critical point that triggers and connects crises in each context...

### home.article.excerpt.mobileText

Anterior: Have you ever thought about how each crisis is connected? there's a critical point that detonates and interconnects crises...

Corregido: Have you ever thought about how crises are connected? There is a critical point that triggers and connects crises...

### home.newsletter.title

Anterior: Lets Co-create together

Corregido: Let’s co-create together

### home.newsletter.description

Anterior: Short bi-monthly nuggets on Planetary Health, projects and researchs that are changing the world, delivered to your inbox - No spam, real action.

Corregido: Short bi-monthly nuggets on Planetary Health, projects and research that are changing the world, delivered to your inbox - No spam, real action.

## Aplicación en el CMS

Completada en el proyecto `nyiamzhitbzfuurgmnca` el 2026-09-18 a las 02:51 UTC. La transacción comprobó versión 3 y los nueve valores anteriores antes de guardar borrador 4. Queda pendiente revisar la vista previa.

## Datos pendientes del responsable editorial

- URL específica de «Failure as a tool for liberation».
- Frecuencia del newsletter: dos veces al mes o cada dos meses.
- Modalidad del formulario: suscripción directa o lista de espera.

## Verificación visual pendiente

Revisar estos textos en escritorio y móvil, además del zoom real del navegador al 200 %. La herramienta de control del navegador detuvo la sesión por una restricción de acceso a la URL; estas verificaciones no se completaron.

## Evidencia de ejecución

`supabase/admin/prepare-editorial-draft.sql` conserva la transacción ejecutada. La consulta posterior confirmó `draft_version=4`, `published_version=3`, `exactly_nine_changes=true`, `published_matches_revision_3=true` y `revision_count=3`. No se modificaron imágenes, enlaces ni navegación. El script se detiene si se vuelve a ejecutar porque exige versión 3.
