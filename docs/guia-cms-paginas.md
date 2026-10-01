# Edición del sitio

En `/admin`, abre **Páginas** y selecciona Home, Tools, Gatherings, Media Club, We Are, Blog o Ajustes generales.

1. Selecciona una sección o busca el texto que quieres cambiar.
2. Edita textos, reemplaza imágenes y actualiza enlaces. Las imágenes informativas deben tener texto alternativo.
3. Guarda el borrador. Cambiar de página dentro del selector conserva las ediciones pendientes.
4. Usa **Ver borrador** para revisar esa página. La vista previa requiere iniciar sesión.
5. Publica y confirma cuando el conjunto de cambios esté aprobado.

El borrador y las publicaciones incluyen todas las páginas. Publicar también aplica los cambios guardados en las otras páginas. Restaurar una versión recupera el conjunto del sitio en un nuevo borrador; después hay que publicarlo.

## Contenido disponible

- Home: presentación, imágenes decorativas, quiénes somos, elementos centrales, iniciativas, artículo destacado, newsletter, pie y SEO.
- Páginas interiores: textos, imágenes (incluidos logotipos), enlaces y SEO. Los textos idénticos de escritorio y celular dentro de una misma página comparten campo; las variantes diferentes se editan por separado.
- Blog: textos de portada, navegación, cierre y SEO. Los artículos se crean y editan en el módulo **Blog**, con su editor de formato.
- Ajustes generales: marca de texto del menú, etiquetas, destinos de navegación, reserva de llamada y URL de la publicación Substack (`https://PUBLICACION.substack.com/embed`).

Las plantillas conservan la composición actual. Agregar páginas nuevas, cambiar el orden de bloques o alterar el diseño requiere desarrollo. Las páginas interiores usan posiciones fijas en escritorio: revisar siempre textos largos en la vista previa y en celular.

## Permisos y compatibilidad

El permiso que antes se mostraba como Home ahora aparece como **Páginas**; conserva el identificador interno `home` y permite modificar el contenido de todas las páginas y ajustes comunes. Los permisos independientes de Blog, Pop-ups y Admin Tool se mantienen.

Se reutilizan las tablas, almacenamiento privado, control de versiones y funciones de publicación existentes. Los documentos anteriores reciben los valores predeterminados para los nuevos campos al cargarse. Este cambio no necesita una migración ni modifica por sí solo registros en Supabase.

Las imágenes subidas quedan en almacenamiento privado hasta publicar. La publicación procesa las imágenes de todas las páginas. Las rutas y enlaces se validan antes de guardar.
