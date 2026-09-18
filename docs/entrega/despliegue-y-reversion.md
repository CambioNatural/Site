# Cambio Natural — preparación de entrega

## Estado comprobado

- Rama de trabajo: `codex/mejoras-cambio-natural`.
- CMS para la portada y navegación compartida, conectado a Supabase `nyiamzhitbzfuurgmnca`.
- Publicación y borrador 3 conservan el contenido original. Historial 1, 2 y 3 creado durante pruebas. La versión 2 contiene la misma imagen del puente optimizada y almacenada en Supabase.
- Acceso administrador de `marcelo@torresllamas.com` verificado; registro público y acceso anónimo de Auth desactivados.
- RLS y autorización de escritura verificados. Función interna `rls_auto_enable` restringida para roles web; disparador probado mediante tabla transitoria con rollback.
- Security Advisor: 0 errores, 1 advertencia de protección de contraseñas filtradas, disponible a partir de Pro. No se contrató ningún plan.
- No hay push ni despliegue del sitio en esta etapa.

## Antes de desplegar

1. Completar la prueba de correo de recuperación y cierre de sesión. El propietario establece personalmente su contraseña.
2. Confirmar el proyecto de alojamiento del sitio y su integración Git. Registrar proveedor, proyecto, rama de producción y URL de vista previa. El repositorio por sí solo no verifica estos datos.
3. Revisar los cambios visuales y editoriales con el propietario. Mantener las variantes de escritorio/móvil y el enlace genérico del artículo hasta que el equipo entregue textos y URL aprobados.
4. Decidir si se mantiene Free o se contrata Pro para la protección contra contraseñas filtradas. Referencia: https://supabase.com/docs/guides/auth/password-security
5. Conservar copia de la versión desplegada actual y exportación de tablas CMS; conservar ambos buckets de imágenes. El historial CMS revierte contenido, no sustituye un respaldo de la base.
6. Conciliar las tres migraciones aplicadas manualmente por SQL Editor con el historial de Supabase antes de usar `db push`. Evitar ejecutar de nuevo la migración inicial sobre tablas existentes.

## Variables de entorno

Configurar en el alojamiento autorizado:

- `NEXT_PUBLIC_SUPABASE_URL`: URL de Cambio Natural.
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`: clave publicable del mismo proyecto.
- `NEXT_PUBLIC_SITE_URL`: origen HTTPS definitivo.

La aplicación no necesita `service_role` ni claves secretas. Usar `.env.example` como plantilla y conservar `.env.local` fuera de Git.

En Supabase Auth, establecer Site URL al origen definitivo y permitir su callback exacto `/auth/confirm`. Validar correo/SMTP y sus límites para uso real. El callback local actual es `http://127.0.0.1:3000/auth/confirm`; PKCE exige abrir el enlace en el mismo navegador donde se solicitó.

## Validación de una vista previa desplegada

- Instalar con el lockfile, ejecutar `npm run test:cms`, `npm run lint` y `npm run build`.
- Comprobar `/`, `/tools`, `/gatherings`, `/media-club`, `/we-are` y la navegación móvil.
- Iniciar sesión, guardar un borrador y verificar que el contenido público conserve la publicación anterior.
- Revisar vista previa, subir una imagen, publicar el contenido aprobado y comprobar lectura sin sesión.
- Comprobar recuperación de versión, cierre de sesión, bloqueo del panel y medios privados, y recuperación de contraseña.
- Probar anchos móviles y escritorio, navegación por teclado y zoom de navegador al 200%.
- Usar un proyecto Supabase de prueba si se harán cambios editoriales experimentales: las instancias que apuntan al mismo proyecto comparten contenido publicado.

## Reversión

- Contenido: en Publicaciones, recuperar una versión como borrador, revisarla y publicarla como una versión nueva.
- Código: restaurar el despliegue anterior desde el proveedor y verificar su URL. Registrar versión anterior antes del cambio.
- Base de datos: restaurar desde un respaldo verificado; no revertir migraciones eliminando tablas que ya contienen datos.
- Mantener imágenes históricas para que las publicaciones recuperables conserven sus referencias.

## Criterio de entrega

La entrega requiere aprobación visual/editorial, autorización de despliegue, estado exitoso del proveedor y comprobación del dominio público. Registrar estas evidencias por separado. Las pruebas locales y la publicación de contenido en Supabase no prueban un despliegue de producción.
