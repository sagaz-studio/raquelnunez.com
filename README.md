# Raquel Núñez — oficina legal

React + Vite con HTML prerenderizado para cada ruta pública. La home conserva su cambio español/inglés; las nuevas páginas de servicios se publican en español.

## Desarrollo y validación

- `npm ci`
- `npm run dev`
- `npm run build`: TypeScript, bundle del navegador y generación estática de diez páginas más 404.
- `npm run check:seo`: verifica H1, títulos, descripciones, canonical, JSON-LD, enlaces y anclas, sitemap, robots y llms.
- `npm run preview`: sirve el resultado del build.

`src/seo.ts` es el catálogo de URLs y metadatos. `src/pages/ServicePage.tsx` contiene el contenido de servicios. `scripts/prerender.mjs` genera cada documento y el sitemap. Usar enlaces HTML normales entre páginas para cargar el documento con sus metadatos correctos.

## Publicación

Proyecto Vercel: `raquelnunez-com` (GitHub: `sagaz-studio/raquelnunez.com`). `vercel.json` define build, dist, barras finales, redirecciones de URLs legales anteriores y del dominio sin www al canónico `https://www.raquelnunez.com`.

No restaurar el rewrite global a index.html: causaría respuestas HTML para archivos SEO ausentes y falsos 200 en URLs inexistentes. Las vistas previas tienen protección/noindex de Vercel; el sitio de producción debe ser indexable.

Tras publicar: comprobar ambos dominios, HTTP a HTTPS, redirección sin www conservando ruta/parámetros, páginas 200, inexistentes 404 y ausencia de `X-Robots-Tag: noindex` en producción. Repetir la auditoría de Semrush cuando el dominio público contenga esta versión. Los resultados de posicionamiento y la resolución de avisos de Semrush requieren un nuevo rastreo.

Fuentes editoriales para las explicaciones generales: [U.S. Courts, Capítulo 7](https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-7-bankruptcy-basics) y [Capítulo 13](https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-13-bankruptcy-basics).
