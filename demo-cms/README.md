# Demo estática del CMS

Compilar desde la raíz de `site`: `node demo-cms/build.mjs`.

Reutiliza los componentes del CMS con adaptadores de navegación y acciones exclusivamente locales. Los ejemplos están etiquetados; no conecta con Supabase. Blog y pop-ups permiten editar, subir una imagen y simular publicación en localStorage. No incluye autenticación, historial real, programación ejecutada ni frontend público del blog. La portada dispone de vista previa completa en `front.html?preview=1#/`. El sitio de presentación incluye Inicio, Tools, Gatherings, Media Club y We Are.

Salida: `demo-cms/dist` (ignorada por Git). Solo esa carpeta se sube al repositorio público de demostración, sin variables de entorno ni código del backend.

Repositorio: https://github.com/Soytorresllamas/cambio-natural-cms-demo
Pages: https://soytorresllamas.github.io/cambio-natural-cms-demo/
Rama: `codex/demo-cms`.

Front: https://soytorresllamas.github.io/cambio-natural-cms-demo/front.html#/

Los enlaces entre módulos usan rutas hash compatibles con Pages. El formulario de newsletter se presenta como muestra, sin capturar suscripciones. Publicar una portada o un pop-up en el CMS de ejemplo actualiza únicamente la copia local del navegador; el sitio real y Supabase permanecen separados.

El aviso superior se retiró por solicitud del usuario. Los enlaces entre el sitio y el editor se mantienen al pie. La ausencia del aviso no cambia el comportamiento de demostración: persistencia solo en el navegador, sin conexión a Supabase.
