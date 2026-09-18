# Cambio Natural: diagnóstico y plan de trabajo

Fecha: 17 de septiembre de 2026. Rama local: `codex/mejoras-cambio-natural`.
Base examinada: `75ccd2367ee6d0d74b068a2b1182f6ed0b4680b4`.
Fuente de alcance: propuesta-cambionatural-4500.pdf, páginas 1 y 2, revisada en esta conversación.

## Estado y límites de evidencia

Hecho: revisión estática del repositorio clonado desde GitHub. Se revisaron la landing, componentes compartidos, configuración, dependencias e inventario de rutas y activos. Este entregable agrega documentación local; la aplicación conserva su código original.
Pendiente: instalación y compilación, ejecución de lint, capturas y mediciones en navegador, acceso al proveedor de alojamiento, DNS y configuración de producción. Ningún hallazgo de código equivale por sí solo a una prueba en producción.

## Hallazgos

| ID | Tipo | Evidencia | Implicación y prioridad |
|---|---|---|---|
| H01 | Hecho | `package.json`: Next 16.2.9, React 19.2.4, Tailwind 4; scripts dev/build/start/lint. | Base existente reutilizable; revisar documentación local de Next antes de implementar, como exige AGENTS.md. |
| H02 | Hecho | Cinco rutas públicas en `src/app`: `/`, `/tools`, `/gatherings`, `/media-club`, `/we-are`. | P0: distinguir landing de sitio completo. Supuesto de trabajo: CMS para `/`; las otras cuatro rutas entran en regresión de componentes compartidos. |
| H03 | Hecho | No hay rutas administrativas, endpoints de escritura, capa de persistencia ni dependencias de auth/CMS en el código examinado. | P0: autenticación y CMS son desarrollo nuevo. El proveedor de hosting podría tener servicios externos aún no inspeccionados. |
| H04 | Hecho | `src/app/page.tsx` mantiene dos árboles de contenido con `hidden md:block` y `md:hidden`. Hero, tarjetas, artículo y newsletter tienen textos distintos. | P0: definir fuente editorial única y conservar variantes hasta decidir su unificación; un CMS necesita una política explícita para ambas vistas. |
| H05 | Hecho + inferencia | DesktopScale usa canvas 1440px, altura fija, transform scale y overflow hidden. La landing fija posiciones y altura 3085px. A 768px, 16px se escalan a aproximadamente 8.53px. | P0: cálculo derivado del código; la legibilidad real requiere navegador. El contenido editable puede invadir otras secciones o quedar recortado. Adaptar layout antes de habilitar edición libre. |
| H06 | Hecho + inferencia | Tarjeta móvil de artículo: bloque blanco left 257px + width 102px dentro de contenedor con márgenes laterales de 16px y overflow hidden. | P1: a 375px el ancho útil es 343px frente a 359px de extensión interna. Riesgo calculado de recorte de 16px; confirmar visualmente. |
| H07 | Hecho | `Read me` apunta a `https://substack.com/` en ambas vistas. | P1: obtener URL exacta del artículo. El destino actual es genérico. |
| H08 | Hecho | SubstackEmbed usa iframe `https://cambionatural.substack.com/embed`; Navbar contiene reserva Proton. | P1: preservar integraciones. Validar carga y navegación sin enviar suscripciones o reservas de prueba a terceros. |
| H09 | Hecho | Sin h1 en la landing; imágenes editoriales marcadas con alt vacío y aria-hidden; botón móvil usa focus:outline-none. | P1: revisar estructura semántica, alternativas de imagen y foco visible durante ajustes de accesibilidad. Distinguir activos decorativos. |
| H10 | Hecho | Navbar y DesktopScale se reutilizan en las cinco rutas. Footer y NewsletterSection existen, pero la landing duplica su contenido internamente. | P1: pasar datos explícitos; evitar cambiar por accidente contenido y estilos en otras rutas. |
| H11 | Hecho | Metadata, sitemap y robots apuntan a cambionatur.al; se usan fuentes de Google con next/font. | Pendiente: confirmar dominio/deploy y disponibilidad de fuentes al compilar. La configuración no demuestra estado operativo. |
| H12 | Hecho | Se verificaron 71 referencias literales `src="/images/..."` en TSX y todas existen. Ver CSV adjunto. | Check limitado a rutas literales: no valida imágenes dinámicas, calidad visual, carga pública ni enlaces remotos. |

## Alcance operativo

Hecho documental: ajustes visuales y responsive; panel autenticado; textos, imágenes y enlaces de secciones actuales editables; publicación conectada; pruebas y orientación. Dos rondas de comentarios consolidados; correcciones de bugs aparte; soporte de errores reportados durante 15 días naturales desde entrega.

Supuesto de trabajo: editar la portada `/`, sus elementos existentes y sus enlaces. Las otras páginas conservan su contenido y reciben pruebas de regresión cuando se toque navegación o estilos compartidos. Ampliar el CMS a sus contenidos requiere definir alcance.

Hecho documental: nuevas páginas, botones, bloques y gestor de redirecciones están excluidos. El portal administrativo está incluido expresamente. Servicios externos no incluidos en $4,500 MXN. El documento estima dos semanas condicionadas a accesos/materiales y revisión técnica; no se ha verificado anticipo, aceptación contractual ni fecha de arranque.

## Secuencia de implementación recomendada

| Tarea | Prioridad / dependencia | Archivos o superficie | Criterio de cierre |
|---|---|---|---|
| T01 Baseline ejecutable | P0, inicio | package-lock, scripts existentes, navegador | npm ci, lint y build registrados; capturas a 375, 768 y 1440px; separar problemas preexistentes. |
| T02 Congelar inventario editorial | P0, T01 | matriz-contenido.md; page.tsx; Navbar | Resolver variantes móvil/escritorio, alcance del menú y URL de artículo; mapear cada campo. |
| T03 Definir persistencia y auth | P0, T02 | Decisión técnica documentada | Confirmar hosting, almacenamiento, responsable administrador, costos, recuperación y política de publicación. Seleccionar proveedor después de comprobar restricciones. |
| T04 Extraer contenido y adaptar layout | P0, T02 | page.tsx; nuevos componentes de portada y modelo de contenido | Fuente de datos única; orden y cantidad de bloques fijos; diseño fluido; textos 50% más largos y distintas proporciones de imágenes no se solapan. Preservar identidad. |
| T05 Implementar acceso | P0, T03 | Panel/admin y capa de servidor por crear | Login/logout y recuperación definidos; escritura denegada en servidor para sesiones ausentes/no autorizadas. |
| T06 Implementar edición y medios | P0, T04/T05 | Editor por sección, persistencia y almacenamiento | Textos, imágenes y enlaces se guardan; validación de entradas; mensajes de error; datos sobreviven a otra sesión/dispositivo. |
| T07 Conectar publicación | P0, T06 | Lectura pública, publicación y refresco de caché | Editar y publicar se refleja en portada; guardar borrador conserva publicación anterior; prueba de recuperación de versión. |
| T08 Ajuste visual final | P1, T07 | Portada y navegación | Validar 320, 375, 390, 768, 1024 y 1440px, teclado y zoom 200%; contraste, foco, imágenes y contenido largo. Regresión en otras cuatro páginas. |
| T09 Rondas y aceptación | P1, T08 | Checklist y registro de comentarios | Dos rondas consolidadas; bugs corregidos; acceso/edición/publicación comprobados. |
| T10 Entrega | P1, T09 | Despliegue, respaldo, guía | Publicar versión revisada con autorización; verificar dominio público y versión, entregar guía y registrar inicio/fin de soporte. |

Recomendación arquitectónica provisional: una entidad `home` de estructura fija, recursos de imagen con metadatos y acceso administrativo restringido. Guardar y Publicar como acciones separadas; conservar la última versión publicada para recuperación. Estos detalles son decisiones técnicas propuestas, no prestaciones adicionales ya pactadas. Evitar HTML arbitrario y un constructor de bloques. El almacenamiento debe ser compartido y persistente, no memoria del proceso ni localStorage.

Recomendación de calendario: semana 1, T01–T06 con una sección completa funcionando; semana 2, completar T07–T10. Reestimar después de T01/T03 según acceso a proveedores y disponibilidad editorial. Riesgo principal: conectar CMS sobre coordenadas fijas causaría retrabajo y fallas con textos reales.

## Decisiones pendientes y evidencia que las resuelve

1. Alcance de edición en las cuatro páginas interiores: definición del responsable de proyecto frente al alcance de la propuesta.
2. Variantes resumidas para móvil: aprobación editorial de textos canónicos o variantes explícitas. Preservar originales al migrar.
3. Administradores: correo y responsable de acceso entregados por el propietario; no habilitar registro público por defecto.
4. Hosting, dominio y almacenamiento: revisar proyecto del proveedor y DNS; estimar servicios externos antes de contratarlos.
5. URL del artículo y materiales de reemplazo: enlaces y activos proporcionados por el equipo.

Estas decisiones no impiden el baseline y la extracción reversible de contenido; sí condicionan provisión de servicios, migración editorial definitiva y publicación.

## Avance posterior al diagnóstico

Primera etapa de adaptación implementada localmente: baseline de instalación/lint/build, fuente tipada de contenido, layout fluido en portada y navegación compartida. Ver `../validacion/primera-etapa.md` para checks y limitaciones. T02 mantiene decisiones editoriales pendientes; T03 tiene una opción preparada en `opcion-cms.md`; T05–T07 siguen pendientes de backend. Esta actualización no cambia las evidencias de la base original documentadas arriba.

## Estado actualizado después de las pruebas del CMS

T01 y T04 implementados y validados localmente. T05: login y autorización comprobados; recuperación por correo solicitada, cambio personal de contraseña pendiente. T06 y T07: guardado, medios, vista previa, publicación, conflictos y restauración comprobados. T08 conserva pendiente zoom 200% y revisión visual/editorial final. T09 requiere comentarios consolidados del propietario. T10 está preparado en `../entrega/despliegue-y-reversion.md`; proveedor y despliegue definitivo pendientes de confirmación y autorización. Ver `../validacion/cms.md` para evidencia actual.
