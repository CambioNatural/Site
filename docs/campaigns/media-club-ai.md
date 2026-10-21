# Media Club · The AI Doc

Diseño aprobado en conversación: campaña ES/EN «La IA y la vida que compartimos», post, carrusel de seis láminas e historia. Fecha confirmada por Marcelo: 19 noviembre 2026, 19:00 America/Mexico_City (20 noviembre 01:00 UTC). Landing por enlace directo, sin añadir al menú.

## Plan de ejecución
- Crear ilustración editorial original con image_gen, conservar PNG original y derivado WebP.
- Crear ruta /media-club/the-ai-doc con selector ES/EN, contexto, tres ejes y formulario nombre/correo/consentimiento.
- Crear tabla de inscripciones: inserción pública acotada, lectura privada para permiso CRM, unicidad por evento/correo. Validar entradas en servidor, sin revelar si un correo ya está inscrito.
- Crear lista privada en /admin/media-club. Confirmación en pantalla. Seguimiento de Zoom manual, sin correo automático ni suscripción a newsletter.
- Renderizar 16 PNG individuales: post + 6 carrusel + historia por idioma; crear índice visual y ZIP.
- Verificar compilación, validación de formulario, registro persistente, acceso privado, vista móvil/escritorio y ausencia de enlace en el menú.
- Publicar solo cambios de esta campaña desde una copia aislada del commit de producción; verificar URL pública y registrar resultado.

## Pendientes operativos
Idioma hablado del encuentro, política de visionado previo y enlace de Zoom los define el equipo. No se anuncian proyección ni disponibilidad de la película.

## Arte
Generado con herramienta integrada image_gen. Prompt: original editorial illustration, people in reciprocal conversation around a round table, branching plant and small screen, cut-paper and rough ink texture, white/black, cobalt #0070f9, pink #f90068, yellow #f4e509; no text, no logos, no movie-poster impersonation. Original en public/media-club-ai/conversation.png; derivado WebP para web.

## Resultado de validación
16 PNG exportados y revisados; dimensiones y ZIP verificados. Compilación y TypeScript correctos en copia aislada. ES/EN y ancho móvil 390 px verificados. Registro desde navegador confirmado en base de datos; pruebas de duplicado, correo inválido, consentimiento, honeypot y origen externo correctas. Acceso anónimo a lista privada redirige a /admin/login; anon sin lectura ni actualización en tabla. Tres registros de prueba retirados.

Publicación pausada por petición del usuario mientras se resuelve acceso a Vercel. El conector devuelve 403 para team_TYvl4xy7XbjkSVO8fBATd3bH; navegador muestra Not Found con la sesión actual. No hay URL pública verificada de esta landing.

La CLI Supabase terminó con código 137 al crear migración; se aplicaron migraciones por conector y se copiaron sus versiones reales al repositorio. La primera conserva la fecha histórica; la segunda aplica la corrección a noviembre.
