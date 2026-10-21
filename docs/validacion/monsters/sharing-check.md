# Share my monster — 21 October 2026

Native sharing receives the current PNG card, reflection text, #WeAreAllMonsters and https://www.cambionatur.al/we-are-all-monsters. The PNG is prepared before the click to preserve transient user activation, and stale asynchronous results are discarded after edits. Unsupported file sharing opens copy-caption and save-image options. Cancellation does not trigger a fallback download. Denied clipboard access selects a readable caption for manual copying.

Validation before publication: isolated production build and TypeScript passed; targeted ESLint and catalog tests passed; existing creator and download browser regression passed. Sharing tests cover current payload, edits, transient activation, cancellation, native API errors, unsupported/absent API, clipboard success/denial and actual fallback PNG download.

The operating-system share API and clipboard are simulated in these automated tests; no message or social post is sent. Actual share destinations and handling of combined image/text vary by receiving app. PNG downloads are exercised in the browser.

References: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share and https://developer.mozilla.org/en-US/docs/Web/API/Navigator/canShare
