# Identidad gráfica del CMS

Modo de uso: operación editorial. Extensión de la identidad vigente de Cambio Natural: logotipo tipográfico en dos líneas, Dela Gothic One para marca y títulos; Inter para campos y controles. No se introdujo un logotipo alternativo.

Cabecera común para Portada, Blog y Pop-ups, con navegación accesible y protección de cambios pendientes. El acceso utiliza la misma marca. Amarillo #f4e509 en la identidad y selección de sección; rosa #b8004c en publicación; superficies claras para edición prolongada. Las hojas de estilo previas se consolidaron en admin.css. El contenido y las acciones de datos conservan sus contratos.

Verificación: TypeScript con tipos explícitos, lint de los cuatro componentes y nueve pruebas CMS aprobadas. HTTP 200 en acceso y redirección 307 sin sesión en Blog. Contrastes calculados: texto sobre amarillo 12.39:1, blanco sobre rosa 6.68:1, texto secundario sobre fondo 6.43:1, etiqueta publicada 7.25:1.

Revisión visual pendiente: escritorio, móvil y zoom real 200 %. El control del navegador permanece restringido en esta tarea; las comprobaciones anteriores no sustituyen la inspección del render autenticado.
