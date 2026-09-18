# Validación de la primera etapa

Fecha: 17 de septiembre de 2026. Rama local: codex/mejoras-cambio-natural.

## Cambios entregados

- `src/content/home.ts`: modelo tipado y contenido completo de portada; variantes móviles explícitas preservadas. La revisión editorial de errores originales sigue pendiente.
- `src/components/home/HomeLanding.tsx` y `home.module.css`: un main, un h1, secciones en flujo normal, grid/flex, medidas adaptables y carga de imágenes con Next Image. HomeLanding recibe el contenido por props como frontera para integrar persistencia.
- `src/content/navigation.ts`, `Navbar.tsx` y `navbar.module.css`: enlaces centralizados, navegación fluida, menú móvil/tablet, Escape con retorno del foco y cierre al navegar. Se conservan rutas, reserva y colores por página.
- Escape de apóstrofes JSX en Tools/Media Club y eliminación de import no usado en DesktopScale; texto renderizado conservado.
- Lockfile corregido: entradas transitivas @emnapi y reconciliación de metadatos, sin cambios en package.json.

## Checks ejecutados

| Check | Resultado |
|---|---|
| npm ci original | Falló por lockfile desincronizado. |
| npm ci después de reparar lockfile | Pasó; 362 paquetes. Entorno Node 25.5.0 / npm 11.8.0. |
| Lint original | 9 errores, 75 warnings. |
| Lint final | 0 errores, 54 warnings existentes de imágenes en otras páginas/componentes. Log adjunto. |
| Build original con sandbox sin red | Falló al descargar las fuentes Google. |
| Build final con red | Pasó compilación, TypeScript y generación de rutas. Log adjunto. |
| Diff whitespace | git diff --check sin incidencias. |
| Detector Impeccable de UI cambiada | [] (sin hallazgos del detector mecánico). |
| Portada a 320, 375, 390, 768, 1024 y 1440px | Un main y un h1; sin desbordamiento horizontal de documento o textos. Cuerpo de iniciativas 16px en todas las anchuras. |
| Menú a 375px | Abre y muestra las 4 rutas + reserva; Escape cierra y devuelve foco a Open menu. Tools navega y cierra el menú. |
| Navegación compartida | /tools, /gatherings, /media-club, /we-are a 375/1024/1440px: sin desbordamiento en enlaces; colores y destinos conservados. |
| Stress local temporal | Textos/títulos ampliados 50%, variantes incluidas, y foto sustituida por tools-hero.png. A 320/768/1440px, documento sin overflow horizontal y las 5 secciones principales se mantienen consecutivas, sin invadir la siguiente. |
| Restauración | Fixture de stress retirado; contenido original restaurado; 10 imágenes de portada cargadas con naturalWidth > 0 en navegador. |

Nota sobre stress: scrollHeight puede superar unos píxeles clientHeight en Dela Gothic One por métricas de glifos; se inspeccionó overflow visible en títulos y separación de secciones. No se interpretó esa diferencia por sí sola como recorte.

## Limitaciones y pendientes

- Revisión de navegador en entorno local, con anchuras emuladas. No acredita dispositivos físicos, zoom real 200%, Safari/Firefox ni cumplimiento integral de accesibilidad.
- La navegación de páginas interiores se probó; sus layouts de canvas originales siguen presentes.
- Se conservaron todos los destinos. La URL del artículo sigue siendo genérica de Substack y debe sustituirse cuando se entregue la correcta.
- El iframe conserva src de Substack, pero su formulario apareció vacío en este entorno; no se validó suscripción ni se enviaron datos a terceros. Se requiere comprobarlo con acceso externo real antes de entrega final.
- Advertencia de build: Next detecta un lockfile superior en el equipo y deduce una raíz de workspace. No bloqueó compilación; revisar turbopack.root al preparar el entorno definitivo.
- Auth, base de datos, upload, borrador y publicación CMS aún no implementados. Ver ../diagnostico/opcion-cms.md para la opción preparada y dependencias.
- Cambios locales sin commit/push ni despliegue. El servidor de desarrollo se dejó disponible para revisión en http://127.0.0.1:3000.
