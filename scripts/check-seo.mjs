import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { pages, origin } from '../.prerender/entry-server.js';
const documents = new Map();
const titles = new Set();
const descriptions = new Set();
for (const path of Object.keys(pages)) {
  const html = await readFile(`dist${path}index.html`, 'utf8');
  documents.set(path, html);
  for (const tag of ['h1', 'title']) assert.equal((html.match(new RegExp(`<${tag}(?:\\s|>)`, 'g')) || []).length, 1, `${path}: one ${tag}`);
  assert.equal((html.match(/rel="canonical"/g) || []).length, 1, `${path}: one canonical`);
  assert.ok(html.includes(`rel="canonical" href="${origin}${path}"`));
  const title = html.match(/<title>(.*?)<\/title>/)[1];
  const description = html.match(/name="description" content="([^"]*)"/)[1];
  assert.ok(!titles.has(title), `${path}: unique title`); titles.add(title);
  assert.ok(!descriptions.has(description), `${path}: unique description`); descriptions.add(description);
  assert.ok(title.length <= 60, `${path}: concise title`);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
  const office = schema['@graph'].find(node => node['@type'] === 'LegalService');
  assert.equal(office.areaServed.length, 5);
  assert.ok(office.areaServed.some(area => area.name.startsWith('Barranquitas')));
  assert.ok(!('serviceType' in office), 'serviceType belongs on Service, not LegalService');
  assert.ok(!html.includes('Cayey'), `${path}: agreed service area`);
  assert.ok(html.includes('id="root"><'), `${path}: prerendered content`);
}
const inbound = new Map(Object.keys(pages).map(path => [path, new Set()]));
for (const [path, html] of documents) {
  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    if (href.startsWith('//')) continue;
    const url = new URL(href.replaceAll('&amp;', '&'), origin + path);
    let route = url.pathname;
    if (route !== '/') route = route.replace(/\/+$/, '') + '/';
    if (/\.[a-z0-9]+\/$/.test(route)) continue;
    assert.ok(documents.has(route), `${path}: internal target ${href}`);
    if (url.hash) assert.ok(documents.get(route).includes(`id="${url.hash.slice(1)}"`), `${path}: anchor ${href}`);
    if (route !== path) inbound.get(route).add(path);
  }
}
for (const [path, sources] of inbound) assert.ok(sources.size >= 2, `${path}: linked from multiple pages`);
const robots = await readFile('dist/robots.txt', 'utf8');
assert.match(robots, /^User-agent: \*\nAllow: \/\n\nSitemap: https:\/\/www\.raquelnunez\.com\/sitemap\.xml\n$/);
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => match[1]);
assert.deepEqual(urls, Object.keys(pages).map(path => origin + path));
const llms = await readFile('dist/llms.txt', 'utf8');
assert.ok(llms.startsWith('# ') && llms.includes('\n> ') && llms.includes('\n## '));
for (const [, href] of llms.matchAll(/\]\((https[^)]+)\)/g)) assert.ok(urls.includes(href), `llms link: ${href}`);
const missing = await readFile('dist/404.html', 'utf8');
assert.ok(missing.includes('noindex,follow') && missing.includes('Página no encontrada'));
const config = JSON.parse(await readFile('vercel.json', 'utf8'));
assert.ok(!config.rewrites, 'Do not rewrite missing pages or crawler files to the homepage');
console.log(`PASS: ${documents.size} static pages; unique H1/title/description/canonical; JSON-LD; internal links and anchors; sitemap; robots; llms; 404; hosting configuration.`);
