# Opción de CMS compatible con la base actual

Estado: recomendación preparada el 17 de septiembre de 2026; sin provisión, contratación ni migración remota.

## Recomendación

Conservar Next.js y el alojamiento actual, y usar Supabase para autenticación, PostgreSQL y almacenamiento. Construir el panel por secciones dentro de la aplicación. La compatibilidad se basa en Next.js 16.2.9 del repositorio y en la integración SSR documentada por Supabase; falta comprobar permisos y configuración del proyecto de hosting. La metadata de GitHub apunta a una URL de Vercel, pero no se inspeccionó la cuenta ni su facturación.

Esta elección concentra las tres dependencias de backend en un proveedor y admite publicación sin modificar código. Supabase aporta el backend; los formularios del CMS se desarrollan como parte de este proyecto. Un CMS administrado podría reducir trabajo del editor, pero añadiría su propio modelo de contenido, interfaz y restricciones. Elegirlo requeriría comparar sus límites y precio antes de sustituir esta propuesta.

## Diseño propuesto

- `home_documents`: documento fijo de portada con esquema versionado, borrador, versión publicada, revisión incremental y fechas. Los textos conservan variantes móviles opcionales hasta revisión editorial.
- `home_revisions`: snapshots de publicación para recuperar el estado anterior. Actualización transaccional con revisión esperada; rechazar ediciones concurrentes obsoletas.
- `site_admins`: usuarios invitados explícitamente. Sesión autenticada y pertenencia de administrador verificadas en servidor y políticas RLS para cada operación. Registro público desactivado.
- Medios: borradores en almacenamiento privado; publicar sólo activos aprobados y referenciados por la versión pública. Validar tipo real, dimensiones y peso, y usar nombres inmutables. Las imágenes no se eliminan mientras alguna revisión retenida las use.
- Panel: `/admin`, login, formularios por sección, guardar borrador, revisar, publicar y recuperar versión. Datos y mensajes de estado reales; nada persiste sólo en memoria o localStorage.
- Landing: lectura de contenido publicado en servidor. Refrescar caché tras publicación autorizada. Definir y probar la retención de la última publicación ante una caída de backend; evitar presentar una lectura fallida como contenido vacío.
- Recuperación de acceso: flujo de correo con dominio y SMTP configurados, remitente verificado y redirecciones permitidas. Claves privilegiadas únicamente en servidor, fuera del bundle y del repositorio.

## Costos externos verificados

Fuente oficial consultada: https://supabase.com/pricing

- Free: USD 0/mes, 500 MB de base y 1 GB de archivos; pausa tras una semana de inactividad. Recomendado aquí para desarrollo/prueba, condicionado a límites.
- Pro: desde USD 25/mes, primer proyecto incluido; para operación continua evaluar este plan y consumo real.
- Alojamiento, dominio, correo y excesos de consumo se revisan aparte. Estos valores no constituyen una cotización final ni están incluidos en los $4,500 MXN del documento.

Riesgo: Free puede pausar un proyecto con poca actividad; el sitio no debe depender de un supuesto de disponibilidad continua. El costo de producción requiere aceptación del propietario antes de contratar.

## Requisitos antes de conectar servicios

1. Identificar proyecto y cuenta de alojamiento, dominio y responsable técnico.
2. Confirmar cuenta propietaria de Supabase, región y presupuesto. Crear servicios después de acordar su alcance.
3. Recibir identidad del administrador, configurar invitación/recuperación y un entorno de prueba separado de producción.
4. Acordar alcance de navegación compartida y criterio editorial de variantes móvil/escritorio; conservar las otras cuatro páginas.
5. Validar login/logout, escritura rechazada sin autorización, persistencia entre sesiones, imágenes privadas de borrador, publicación, conflicto de revisiones y recuperación.

## Fuentes técnicas

- SSR con Next.js: https://supabase.com/docs/guides/auth/server-side/creating-a-client?queryGroups=framework&framework=nextjs
- Acceso a Storage mediante políticas: https://supabase.com/docs/guides/storage/security/access-control
- Precios y pausa del plan gratuito: https://supabase.com/pricing

No hay aún panel CMS ni backend desplegado. La implementación de portada entrega un modelo tipado como frontera para esta futura integración.
