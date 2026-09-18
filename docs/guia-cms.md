# Administración de Cambio Natural

Entrar a `/admin` con la cuenta autorizada. El contenido se organiza en Presentación, Quiénes somos, Iniciativas, Artículo, Newsletter y Navegación.

1. Editar texto o reemplazar imágenes PNG/JPEG/WebP de hasta 5 MB. Agregar texto alternativo cuando la imagen transmita información.
2. Guardar borrador. La versión móvil vacía utiliza el texto general.
3. Abrir Vista previa guardada y revisar escritorio/móvil. La vista previa requiere sesión.
4. Seleccionar Publicar cambios y confirmar. Esto cambia el contenido del sitio conectado al mismo proyecto Supabase.
5. Para volver a una publicación anterior, seleccionar Recuperar como borrador, revisar y publicar esa nueva versión.

Si otra sesión guardó antes, el panel conserva tus campos y avisa del conflicto. Copia los cambios que quieras conservar y recarga antes de continuar.

Las imágenes nuevas permanecen privadas hasta publicar. Una versión publicada mantiene sus imágenes para conservar el historial. El formulario de newsletter se gestiona en Substack.

## Puesta en marcha pendiente
La cuenta administradora debe crearse en Supabase Auth y su UUID debe quedar en `public.cms_admins`. Crear un usuario Auth por sí solo no da acceso editorial. Configurar las URLs de recuperación y completar las pruebas autenticadas descritas en `validacion/cms.md`.

Copiar `.env.example` como `.env.local` y completar la URL y clave publicable del proyecto. Usar exclusivamente la clave publicable. Configurar las mismas variables en el alojamiento autorizado. El servidor necesita Node compatible con Next.js 16 y sharp.


## Editor por secciones

El editor muestra una sección a la vez. Usa la navegación para cambiar entre Presentación, Quiénes somos, Iniciativas, Artículo destacado, Newsletter y pie, y Navegación y contacto. Los campos editados se conservan al cambiar de sección; «Modificado» identifica las secciones pendientes de guardar.

- **Guardar borrador** conserva todos los cambios de todas las secciones.
- **Guardar y ver** guarda y abre la vista previa cuando el guardado se confirma. Sin cambios pendientes, el botón se llama **Ver borrador**.
- **Publicar cambios** requiere un borrador guardado y una confirmación.
- **Recuperar versión** solicita confirmación antes de sustituir el borrador guardado. La publicación actual se conserva.

Las imágenes se comprueban antes de la subida (PNG, JPEG o WebP, máximo 5 MB) y también se validan en el servidor.
