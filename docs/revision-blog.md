# Revisión funcional del blog — 14 de octubre de 2026

## Fallo reproducido

En producción, el botón fijo de publicación abría una confirmación en el flujo normal de la página. Al editar un artículo largo, la confirmación quedaba fuera de la pantalla: se observó su botón a `top=-361px`. El editor mostraba el borrador 3 y la publicación 1. No se confirmó ni alteró la publicación del usuario durante la revisión.

La confirmación ahora usa un diálogo modal con el título del artículo y la versión. Los errores permanecen visibles dentro del diálogo. Una entrada existente muestra **Actualizar publicación**. El guardado sigue siendo previo a publicar para poder revisar el borrador.

## Imágenes

- **Portada:** se carga antes del cuerpo, aparece en la tarjeta del blog y al inicio del artículo.
- **Dentro del artículo:** sitúa el cursor entre párrafos y pulsa **Insertar imagen**. Selecciona PNG, JPEG o WebP de hasta 5 MB. La imagen pasa por la optimización y almacenamiento privado existentes.
- Selecciona una imagen del texto para editar su descripción o quitarla. Puede desplazarse arrastrándola dentro del editor.
- Guarda y abre la vista previa. El guardado conserva orden, formato y descripciones.
- Publicar convierte tanto la portada como las imágenes internas a medios públicos. El borrador original conserva sus referencias privadas. Una misma imagen repetida se prepara una sola vez por operación.

El botón **Ver publicación** apunta al slug publicado, incluso si el borrador cambia su dirección. Las vistas previas abren otra pestaña para conservar la edición actual. La vista previa local se desplaza al contenido al abrirla.

## Validación

- Pruebas del CMS y pruebas específicas de imágenes: formato, orden, persistencia tras JSON, rechazo de medios externos y conversión de todas las imágenes sin modificar el borrador.
- `npm run test:blog:db` usa PostgreSQL en memoria. Verifica crear, publicar, actualizar y republicar, control de versión, rechazo de cambios de texto no guardados, rechazo de imágenes privadas, denegación de acceso, retirar y republicar. No conecta con Supabase.
- Navegador local: diálogo visible al final de un artículo largo, publicación repetida, errores visibles, guardar y reabrir una imagen con descripción, formato de texto y vista previa. Las acciones de esta copia usan respuestas de prueba; no publican artículos reales.
- La selección automática de archivos de Chrome estuvo bloqueada por la extensión. Se verificó la recepción y procesamiento del archivo con una entrada de prueba que usa el mismo evento del selector y el mismo componente del editor.

## Migración y despliegue

La migración `20261014193808_blog_inline_images.sql` se aplicó el 14 de octubre de 2026 en el proyecto Cambio Natural (`nyiamzhitbzfuurgmnca`), antes del despliegue de la aplicación. Amplía la comparación de publicación para permitir únicamente el cambio de URL de las imágenes internas; conserva texto, orden, formato, descripciones, permisos y control de versión. Agrega una restricción que exige fuentes públicas válidas en esas imágenes.

La verificación en Supabase confirmó la restricción validada, las dos entradas y sus dos publicaciones conservadas, la aceptación de imágenes públicas, el rechazo de referencias privadas y la conservación de las descripciones al comparar contenido. La migración es compatible con la versión anterior de la aplicación; mantiene los artículos guardados y los permisos existentes.

El despliegue de la aplicación se activa mediante push a `main` y se verifica por el estado de Production asociado al commit en GitHub/Vercel.
