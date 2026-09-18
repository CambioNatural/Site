# Blog y pop-ups

## Blog

En `/admin/manage/blog` se crean entradas con título, slug único, autor, resumen, cuerpo e imagen opcional. El cuerpo se guarda como texto con párrafos; no admite HTML ejecutable. Guardar conserva un borrador privado. Publicar copia ese borrador a la API pública. Las ediciones posteriores permanecen privadas hasta volver a publicar. Retirar publicación conserva el borrador.

API de lectura para construir el frontend del blog:

- `GET /api/content/blog`: publicaciones, 20 por página.
- `GET /api/content/blog?page=2`: siguiente página.
- `GET /api/content/blog?slug=mi-entrada`: búsqueda exacta; `items` vacío si no existe o está retirada.
- Respuesta: `{ items: [{ id, slug, content, version, published_at }], page, total }`.
- Métodos de escritura: acciones autenticadas del CMS; la API pública solo expone GET.

La página pública de listado/detalle del blog queda para la etapa de frontend. El backend y la gestión editorial ya están implementados.

## Pop-ups

En `/admin/manage/popups`, crear el aviso y guardar antes de activar. Configurar título, mensaje, imagen y botón opcional, páginas, inicio/final y segundos de espera (0–120). El texto y enlace del botón se completan juntos. Los enlaces aceptan HTTPS o las rutas públicas existentes. Las fechas se introducen en la zona horaria del dispositivo y se guardan en UTC.

La frecuencia puede ser una vez por sesión, cada 24 horas o cada 7 días en ese navegador. Se registra al mostrar el aviso y se reinicia cuando se publica una nueva versión. Si el navegador bloquea almacenamiento, el aviso puede reaparecer al recargar. Al coincidir varios avisos, se elige el publicado más recientemente entre los elegibles. Se considera como máximo la primera página de 100 avisos vigentes en la ruta.

El diálogo permite cerrar con el botón Close o Escape; el diálogo nativo mantiene el foco. Se muestra únicamente en Inicio, Tools, Gatherings, Media Club y We are, según la selección. Las páginas de administración y vista previa están excluidas. «Vista previa local» en el formulario muestra el contenido sin activarlo y puede incluir cambios sin guardar.

Los avisos se recuperan al entrar en una página pública. Un cambio de programación o desactivación se refleja en la siguiente carga; no hay actualización en tiempo real de una pestaña ya abierta.

Para newsletter puede usarse un enlace a la suscripción existente. La captura de correos dentro del pop-up no forma parte de este módulo inicial.

## Datos y acceso

- `cms_entries`: borradores privados de blog y pop-ups.
- `cms_entry_publications`: copias públicas, filtradas por vigencia.
- `cms_write_entry`: guardado/publicación/retiro con comprobación de versión y administrador.
- Imágenes: usa los buckets existentes y la optimización del CMS; los archivos privados se copian al publicar. Los archivos sustituidos se conservan; no hay limpieza automática.
- La migración `20260918034212_blog_and_popups.sql` se aplicó a Cambio Natural mediante el conector oficial.

## Verificación

Nueve pruebas del esquema aprobadas; TypeScript (tipos explícitos) y ESLint de los módulos aprobados. Pruebas SQL con rollback: guardado y publicación por administrador, cambios posteriores privados, conflicto de versión, lectura pública, exclusión de avisos futuros y rechazo de acceso de visitantes/no administradores. APIs públicas HTTP 200 con colecciones vacías; rutas administrativas HTTP 307 sin sesión.

La revisión visual y el recorrido autenticado de los nuevos formularios quedan pendientes por la restricción de control del navegador de esta tarea. No se crearon campañas ni entradas reales. La portada conserva borrador 4 y publicación 3. No se realizó despliegue.

Security Advisor: sin errores ni nuevos hallazgos de tablas; persiste el aviso previo de [protección contra contraseñas filtradas desactivada](https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection).

## Editor visual del blog

El cuerpo de las entradas usa Tiptap. Selecciona texto y aplica negrita, cursiva,
subrayado, tachado o enlaces. El selector de párrafo permite encabezados H2–H4;
el título de la entrada conserva el nivel principal. También hay listas, citas,
separadores, limpieza de formato y deshacer/rehacer. Los controles siguen el idioma
seleccionado en el administrador. La vista previa local incluye el formato y los
cambios todavía sin guardar.

Las entradas anteriores permanecen compatibles. `content.body` conserva una
versión de texto plano y `content.richText`, opcional, guarda el documento de
formato validado. La API del blog entrega ambos campos; los consumidores actuales
pueden seguir leyendo `body`. Para presentar el formato, usar `BlogBody` o un
renderizador del mismo esquema, evitando insertar HTML recibido. No hay una
migración de base de datos: el documento usa el JSON existente de la entrada.

El servidor valida los tipos de nodos, enlaces, profundidad, tamaño y coincidencia
entre texto plano y documento. Se conservan el guardado de borradores, publicación,
control de versiones y permisos existentes.
