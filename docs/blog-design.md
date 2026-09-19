# Diseño de las páginas del blog

Estado: implementación local documentada el 19 de septiembre de 2026. Alcance: `/blog`, `/blog/[slug]` y sus vistas previas privadas. Esta ficha describe el código existente; la composición se desarrolló desde la identidad del sitio y no dispone de una composición visual aprobada como referencia. Las reglas globales de marca quedan fuera de esta ficha.

## Overview

El listado presenta la publicación más reciente como apertura editorial y reúne las restantes en un archivo. El artículo prioriza título, resumen, imagen completa y lectura continua. Ambas superficies reutilizan la navegación, el pie y las fuentes Dela Gothic One e Inter del sitio. El cierre amarillo dirige al Media Club. El idioma de la interfaz pública es inglés.

## Colors

Hecho observado en `src/app/blog/blog.css`: papel (`#f7f7f2`) para el fondo, tinta (`#20211c`) para texto y botones, amarillo (`#f4e509`) para cabecera y cierre, y rosa (`#b8004c`) para enlaces de lectura y foco. Los metadatos usan gris (`#595b51`).

## Typography

Dela Gothic One identifica la cabecera, el título destacado, el título del artículo y los encabezados de sección. Inter sostiene las tarjetas, metadatos y cuerpo. El título del artículo escala entre 32 y 60 px. La lectura usa 18 px con interlínea 1.85; en móvil pasa a 17 px. Los encabezados del cuerpo mantienen niveles H2–H4 y los enlaces aparecen subrayados.

## Layout

- Contenedor general: máximo 1120 px, con 24 px de margen lateral mínimo; cabecera del artículo de hasta 960 px y columna de lectura de hasta 720 px.
- Primera página: destacado en dos columnas de proporción 1.2:1, seguido por archivo de tres columnas. La paginación pública contiene hasta nueve entradas por página; el destacado cuenta dentro de esas nueve. Las páginas posteriores presentan únicamente el archivo.
- A 760 px o menos: destacado, archivo y cierre se apilan en una columna; el margen lateral baja a 18 px y se reducen los espacios verticales.
- Las imágenes del listado usan recorte 4:3. La regla final del CSS conserva la imagen completa del artículo (`aspect-ratio: auto`, `object-fit: contain`, altura máxima 720 px), también en móvil.

## Elevation & Depth

La superficie se organiza con bloques de color, espacio y líneas horizontales. Las tarjetas carecen de sombra y comparten el fondo del documento.

## Shapes

Las imágenes y tarjetas tienen esquinas rectas. Los botones oscuros usan radio de 5 px, altura mínima de 48 px y texto blanco. Los enlaces de lectura tienen altura mínima de 44 px.

## Components

Las tarjetas muestran autor opcional, fecha, tiempo de lectura estimado, título, resumen opcional y enlace al artículo. El cálculo de lectura divide el texto plano entre 200 palabras por minuto y redondea hacia arriba, con mínimo de un minuto. Una portada ausente se sustituye por el nombre de Cambio Natural sobre amarillo en el listado; el artículo omite esa imagen.

El artículo reutiliza `BlogBody` para el texto plano o documento enriquecido validado. Incluye regreso al archivo, regreso al inicio y hasta tres publicaciones recientes adicionales cuando existen. Los estados vacíos, de error y de entrada ausente tienen acciones para continuar. La superficie pública incluye enlace para saltar al contenido; enlaces y botones muestran foco rosa de 3 px.

### Publicación y vistas previas

Hecho observado en rutas y documentación editorial: las páginas públicas consumen las copias de `cms_entry_publications`. Guardar en el CMS conserva un borrador; publicar actualiza la copia pública. Una publicación retirada devuelve 404 en su antigua ruta.

`/admin/preview/blog` muestra ejemplos en memoria, con un aviso explícito de contenido de muestra sin publicar. `/admin/preview/blog/[id]` muestra el borrador guardado y resuelve las imágenes privadas mediante el endpoint autenticado. Ambas requieren acceso al módulo y declaran exclusión de indexación. El artículo de vista previa muestra “Draft preview” en lugar de fecha de publicación. Los enlaces de regreso del artículo llevan al archivo público; el aviso superior facilita el regreso al editor y, en la muestra, a su portada privada.

## Do's and Don'ts

- Conservar la tipografía y los colores compartidos al ampliar estas páginas.
- Mantener la columna de lectura y verificar títulos largos, imágenes verticales y navegación por teclado al editar la composición.
- Distinguir siempre ejemplos, borradores guardados y publicaciones reales al presentar evidencia.
- Verificar la versión pública después de un despliegue autorizado. Esta ficha acredita el estado del código local; el despliegue y la aprobación visual del usuario requieren evidencia propia.

Fuentes de implementación: `src/components/blog/BlogViews.tsx`, `src/app/blog/blog.css`, las rutas públicas y privadas del blog. Operación editorial: `docs/guia-blog-popups.md`, sección “Páginas públicas del blog”; su párrafo inicial que deja el frontend para una etapa posterior corresponde al estado anterior.
