# Matriz de contenido editable de la portada

Tipo: propuesta de modelo basada en el código actual, no esquema implementado.
Base: 75ccd2367ee6d0d74b068a2b1182f6ed0b4680b4. Ruta pública cubierta: `/`.

| Grupo / ID sugerido | Campos del editor | Fuente actual | Consideración de migración |
|---|---|---|---|
| Navegación / navigation | Etiquetas y destinos de 4 enlaces existentes; texto y URL de Book a call | src/components/Navbar.tsx | Shared en cinco páginas. Recomendar alcance global explícito, orden/cantidad fijos. Logo e identidad conservados. |
| Hero / hero | Frase inicial, frase destacada; imagen wordmark y alternativa | src/app/page.tsx, comentarios Hero question / Hero / TOGETHER | Desktop dice `towards agree`; móvil dice `towards a`. Decisión editorial pendiente. El lema es SVG, no texto editable dentro de la imagen. Sustituir archivo permite cambiarlo; convertirlo a texto exige revisar fidelidad visual. |
| Introducción / about | Apertura destacada, párrafo, fotografía y alternativa | page.tsx, We are | Contenido textual equivalente en ambos árboles; estilos pueden variar. Imagen actual hero-photo-subtract.png. |
| Encabezado / initiativesHeading | Texto del encabezado de iniciativas | page.tsx, This is how we do it together | Una fuente para ambas vistas. |
| Iniciativa / crossSector | Título, descripción, imagen y alternativa | page.tsx, Cross-sector Collaboration Framework | Descripción móvil abreviada; preservar variante durante migración hasta revisión. Imagen cn-0104-2.png también usada como decoración. Distinguir referencia editorial de decorativa. |
| Iniciativa / doughnut | Título, descripción, imagen y alternativa | page.tsx, Global Doughnut méxico | Móvil omite colaboración con Coalición Tricolor; resolver criterio editorial. Imagen cn-0105-1.png. |
| Iniciativa / mediaClub | Título, descripción, imagen y alternativa | page.tsx, Media Club | Móvil abreviado; misma política que otras iniciativas. Imagen cn-0106-1.png. |
| Artículo / article | Categoría, título, extracto, imagen/alternativa, texto de enlace, URL | page.tsx, Article card | URL actual genérica de Substack; extractos diferentes con errores de redacción. Imagen article-bdfm.png. Se edita la tarjeta existente. |
| Newsletter / newsletter | Antetítulo, título, descripción, imagen/alternativa | page.tsx, Newsletter | Antetítulo móvil habla de waiting list; escritorio dice Join to Newsletter. Acordar cuál corresponde al servicio real. Imagen newsletter-metacrisis.png. |
| Pie / footer | Texto existente de atribución/licencia | page.tsx, Footer | Conservación literal inicial. Cambios de licencia requieren decisión del titular. Footer.tsx es otra implementación, no la consumida por portada. |

## Configuración técnica y activos de diseño

- Recomendación: URL del embed de Substack como configuración validada por dominio, no HTML libre pegado por el editor. Fuente: src/lib/links.ts y SubstackEmbed.tsx.
- Recomendación: mantener formas decorativas, colores, tipografías y posiciones como diseño. Las imágenes editoriales y el wordmark sí tendrán sustitución controlada. Si se requiere editar adornos, registrarlo expresamente en el inventario.
- Recomendación: los metadatos SEO ya existentes se conservan inicialmente. Derivar título/descripcion o añadir su edición requiere una decisión explícita para evitar divergencia con textos públicos.
- El editor conserva tres iniciativas y una tarjeta de artículo. No agrega bloques, botones ni rutas.

## Validaciones propuestas

Textos: campos obligatorios según sección, espacios normalizados, mostrar longitud; definir límites después de probar contenido real. Sin HTML ejecutable.
Enlaces: rutas internas existentes o https; rechazar javascript/data y destinos vacíos de botones existentes.
Imágenes: validar MIME real, tamaño y dimensiones; alternativas para editoriales; preservar el original antes de reemplazo. Uploads de raster preferidos; SVG requiere sanitización/flujo restringido.
Publicación: esquema validado completo, permisos de servidor, errores recuperables; guardar no equivale a publicar si se adopta borrador.
Consistencia: cada campo se prueba en ambas vistas y en otra sesión. No exigir al editor duplicar cambios para cada dispositivo.

## Prueba de aceptación por grupo

1. Capturar valor previo y modificar un texto, imagen y enlace representativos.
2. Guardar, recargar panel y comprobar persistencia.
3. Publicar y verificar cambio en portada desde otra sesión; validar ancho móvil/tablet/escritorio.
4. Comprobar el destino del enlace y que otros grupos siguen intactos.
5. Restaurar versión anterior y comprobar recuperación.
6. Intentar escritura sin sesión/autorización y comprobar rechazo del servidor.

Pendiente: valores editoriales definitivos, decisión sobre resúmenes móviles, administradores y servicios. Esta matriz no acredita funcionamiento del CMS.

## Actualización: primera etapa implementada

El inventario anterior describe la base original. Ahora la portada consume `src/content/home.ts` mediante `HomeLanding.tsx`, con variantes opcionales `mobileText`; Navbar usa `src/content/navigation.ts`. Se retiró el doble árbol de layout de la portada. El contenido sigue estático: la conexión a CMS se realizará después de definir y habilitar servicios. Ver `../validacion/primera-etapa.md`.
