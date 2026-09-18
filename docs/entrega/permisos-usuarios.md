# Usuarios y permisos del CMS

## Implementado localmente

Ruta `/admin/users`, visible para los administradores generales. Lista cuentas existentes de Supabase Auth, permite buscar por correo y revisar los permisos de Portada, Blog y Pop-ups. Un permiso de módulo permite edición, guardado y publicación. No se crean cuentas ni se envían invitaciones desde esta pantalla.

Los administradores generales mantienen acceso completo. La pantalla no puede cambiar su condición de administrador ni retirar sus permisos. Las cuentas sin módulos pierden acceso al CMS, conservando su cuenta de autenticación. No se utilizan contraseñas ni claves de servicio para administrar permisos.

## Migración aplicada con autorización explícita

Archivo: `supabase/migrations/20260918181939_cms_module_permissions.sql`.

Aplicada el 18 de septiembre de 2026 en el proyecto Cambio Natural tras la autorización explícita del usuario. El bloqueo previo de revisión automática quedó resuelto con esa autorización.

Alcance concreto:

- Agrega la tabla de permisos por módulo y funciones de comprobación.
- Sustituye la comprobación de administrador global por permiso de módulo en las políticas y operaciones de Portada, Blog y Pop-ups.
- Permite a los usuarios con algún módulo acceder a la biblioteca compartida de imágenes del CMS. No aísla archivos por módulo o usuario.
- Agrega funciones restringidas a administradores generales para listar identificador, correo, confirmación, último inicio de sesión y permisos de cuentas existentes.
- Agrega registro privado de cambios de permisos con actor, destinatario, valores anteriores y nuevos.
- Comprueba el estado anterior para evitar sobrescritura concurrente de permisos.
- Mantiene las reglas públicas de lectura de publicaciones y sus fechas.

La pantalla `/admin/users` ya puede listar las cuentas y administrar permisos. No se asignaron permisos nuevos a cuentas reales durante esta implementación.

## Riesgos y validación

Una asignación errónea habilitaría a la cuenta elegida para editar y publicar todo el módulo. Un usuario con permisos en cualquier módulo puede leer la biblioteca privada de imágenes compartida. Retirar permisos bloquea las siguientes operaciones; no borra información ya descargada al navegador.

TypeScript y lint comprobados localmente. Las pruebas `supabase/admin/verify-module-permissions.sql` pasaron en Supabase con rollback: aislamiento por módulo, publicación y retiro, privacidad del directorio, rechazo de escalada de permisos, administradores protegidos, conflictos de edición y revocación. La revisión visual autenticada sigue pendiente.


Security Advisor: sin errores. Aviso informativo intencional: el registro privado de auditoría tiene RLS sin políticas, con acceso directo revocado y escritura solo mediante la función protegida. Persiste el aviso previo de protección contra contraseñas filtradas desactivada. Referencias: https://supabase.com/docs/guides/database/database-linter?lint=0008_rls_enabled_no_policy y https://supabase.com/docs/guides/auth/password-security#password-strength-and-leaked-password-protection
