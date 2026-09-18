# CMS — estado del 17 de septiembre de 2026

## Implementado
- Proyecto Supabase Cambio Natural: `nyiamzhitbzfuurgmnca` (acceso remoto mediante Chrome).
- Esquema aplicado desde SQL Editor; copia versionada en `supabase/migrations/20260917190820_create_home_cms.sql`. La aplicación manual no registra automáticamente el historial de migraciones CLI. Antes de un futuro `db push`, conciliar ese historial.
- Cuatro tablas con RLS: administradores, borrador, publicación, revisiones. Funciones SECURITY INVOKER para guardar y publicar con control de versión.
- Imágenes de borrador privadas y publicaciones en bucket público separado. Validación de formato/tamaño y conversión WebP sin metadatos.
- Editor `/admin`: texto de escritorio/móvil, imágenes y alt, enlaces existentes, borrador, vista previa, publicación explícita y recuperación como nuevo borrador.
- Lectura pública cacheada cinco minutos, invalidación al publicar. Contenido original hasta la primera publicación.
- Credenciales públicas en `.env.local` ignorado por Git; ninguna clave secret/service_role utilizada.
- Autorización de cada acción en servidor con usuario verificado y tabla cms_admins.

## Verificado
- Build Next 16.3.5 correcto (`cms-build.txt`).
- ESLint: 0 errores, 54 advertencias de imágenes heredadas (`cms-lint.txt`).
- Cinco pruebas de esquema: contenido inicial, enlaces peligrosos, medios externos, tamaño/estructura, edición válida.
- HTTP del build en 127.0.0.1:3001: inicio 200; `/admin` sin sesión redirige 307 a login; imagen privada sin sesión responde 401.
- Pantalla de acceso abierta mediante Chrome.
- Actualizaciones de Next, sharp y dependencias: npm audit reportó 0 vulnerabilidades tras las correcciones.

## Validación autenticada completada
- Cuenta de Marcelo creada, confirmada y autorizada por UUID con aprobación expresa. Script `supabase/admin/authorize-marcelo.sql`.
- Usuario entró al editor en el navegador integrado. Borrador 1 guardado; vista previa y publicación 1 correctas.
- Imagen pública existente del puente subida como WebP al bucket privado. Vista previa del borrador 2: imagen cargada, ancho natural 868 px. Petición sin sesión a esa imagen: HTTP 401.
- Segunda ventana con versión 1 intentó guardar un encabezado de prueba tras el guardado de versión 2. Se rechazó con VERSION_CONFLICT; el texto de prueba nunca se guardó ni publicó. Ventana retirada.
- Publicación 2 copió la imagen a cms-public y se verificó su carga desde Chrome sin sesión del CMS.
- Recuperación de publicación 1 como borrador 3 y publicación 3 correctas. El contenido e imagen originales quedaron restaurados. Recarga del editor confirma Borrador 3 / Publicación 3 y tres entradas de historial.
- Migración `20260917195615_validate_cms_versions.sql` aplicada por Chrome: rechaza versiones NULL/negativas también en RPC.
- `supabase/admin/verify-cms-policies.sql` ejecutado con rollback: lectura pública permitida; borradores, revisiones, lista de administradores e imágenes privadas ocultos para cuenta sin permiso; escritura anónima/no administradora rechazada; argumentos NULL rechazados. Resultado PASS.
- Site URL configurada en Supabase: http://127.0.0.1:3000; callback exacto permitido: http://127.0.0.1:3000/auth/confirm.
- Servidor de desarrollo reiniciado con Next 16.3.5 tras detectar incompatibilidad del proceso anterior con las dependencias actualizadas.
- Substack renderiza su formulario en Chrome; no se envió una suscripción.

## Pendiente antes del despliegue
1. Probar entrega del correo de recuperación y recorrido PKCE. El cambio de contraseña debe completarlo el usuario. No se envió correo de prueba ni se modificó su contraseña.
2. Security Advisor actualizado: 0 errores y 1 advertencia, protección contra contraseñas filtradas desactivada. Requiere Pro o superior (documentación oficial verificada). Decisión de servicio pendiente; no se cambió el plan.
3. Probar cierre de sesión; se dejó la sesión del usuario abierta para continuar editando.
4. Configurar URLs y variables del alojamiento definitivo, conciliar historial de migraciones aplicadas manualmente y desplegar con autorización. El CMS sí tiene contenido publicado en Supabase para la aplicación local; el sitio de producción no fue desplegado ni se hizo push.

## Limitaciones conocidas
- Un fallo/conflicto durante publicación puede dejar imágenes públicas sin referencia. La limpieza de medios requiere una política de retención futura; el contenido publicado conserva su versión anterior si el RPC falla.
- El historial del panel muestra las 20 publicaciones más recientes, la base conserva todas.
- Substack conserva su integración original; el envío de suscripciones no se ha validado.

## Cierre de permisos y recuperación
- Se inspeccionó `public.rls_auto_enable`: función event_trigger SECURITY DEFINER con search_path pg_catalog, utilizada por ensure_rls.
- Migración `20260918022825_restrict_rls_event_trigger.sql` aplicada mediante Chrome. EXECUTE revocado para PUBLIC, anon y authenticated. Consulta posterior: anon_execute=false, authenticated_execute=false, trigger_status=O.
- Tabla transitoria cms_rls_probe confirmó activación automática de RLS; toda la prueba se revirtió por rollback.
- Security Advisor confirmó que desaparecieron las dos advertencias de permisos.
- Registro público de usuarios desactivado; se mantiene la confirmación de correo y los accesos anónimos estaban desactivados.
- Solicitud de recuperación enviada desde Chrome en http://127.0.0.1:3000/admin/login; la aplicación recibió éxito de Supabase. Pendiente confirmación de entrega y cambio de contraseña por el propietario. Éxito de la solicitud no demuestra entrega del correo.
- Guía de preparación, variables, respaldo y reversión: `../entrega/despliegue-y-reversion.md`.
