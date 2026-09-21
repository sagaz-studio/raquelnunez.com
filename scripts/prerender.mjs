import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { render, pages, origin, seoHead } from '../.prerender/entry-server.js';
const template = await readFile('dist/index.html', 'utf8');
for (const path of [...Object.keys(pages), '/404/']) {
  const directory = path === '/404/' ? 'dist' : `dist${path}`;
  await mkdir(directory, { recursive: true });
  const html = template.replace('<!--seo-head-->', seoHead(path)).replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`);
  await writeFile(`${directory}/${path === '/404/' ? '404.html' : 'index.html'}`, html);
}
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages).map(path => `  <url><loc>${origin}${path}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`Prerendered ${Object.keys(pages).length} pages and a 404 document.`);
