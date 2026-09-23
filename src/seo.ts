export const origin = 'https://www.raquelnunez.com';
export const municipalities = ['Cidra', 'Aibonito', 'Comerío', 'Barranquitas', 'Aguas Buenas'];
export const pages: Record<string, { title: string; description: string; label: string }> = {
  '/': { title: 'Abogada de Quiebras en Cidra | Lcda. Raquel Núñez', description: 'Quiebras Capítulo 7 y 13 desde Cidra para Aibonito, Comerío, Barranquitas y Aguas Buenas. Zona central de Puerto Rico. Consulta inicial gratuita.', label: 'Inicio' },
  '/quiebras/': { title: 'Quiebras en la Zona Central de PR | Lcda. Raquel Núñez', description: 'Evalúe sus opciones de quiebra desde Cidra. Orientación sobre Capítulo 7 y 13 para la zona central de Puerto Rico. Consulta inicial gratuita.', label: 'Quiebras' },
  '/quiebras/capitulo-7/': { title: 'Quiebra Capítulo 7 en Puerto Rico | Lcda. Raquel Núñez', description: 'Conozca la quiebra Capítulo 7, sus límites y qué preparar para una evaluación. Abogada en Cidra para la zona central. Consulta inicial gratuita.', label: 'Capítulo 7' },
  '/quiebras/capitulo-13/': { title: 'Quiebra Capítulo 13 en Puerto Rico | Lcda. Raquel Núñez', description: 'Orientación sobre planes de pago bajo el Capítulo 13. Evaluación de ingresos, deudas y atrasos desde Cidra para la zona central de Puerto Rico.', label: 'Capítulo 13' },
  '/recursos/quiebras/que-deudas-elimina-quiebra-puerto-rico/': { title: '¿Qué deudas elimina una quiebra en Puerto Rico?', description: 'Conozca qué deudas pueden descargarse en una quiebra, cuáles requieren mayor cuidado y cómo se tratan hipotecas y préstamos de automóvil.', label: 'Qué deudas puede eliminar una quiebra' },
  '/herencias/': { title: 'Herencias en Cidra y Zona Central | Lcda. Raquel Núñez', description: 'Orientación sobre herencias, declaratorias de herederos y testamentos desde Cidra para Aibonito, Comerío, Barranquitas y Aguas Buenas.', label: 'Herencias' },
  '/notaria-escrituras/': { title: 'Notaría y Escrituras en Cidra | Lcda. Raquel Núñez', description: 'Servicios notariales en Cidra: escrituras, poderes y compraventas. Atención para la zona central de Puerto Rico. Coordine su cita.', label: 'Notaría y Escrituras' },
  '/contratos/': { title: 'Contratos en Cidra | Lcda. Raquel Núñez', description: 'Contratos de construcción, remodelación, arrendamiento y compraventa en Cidra. Redacción y revisión para la zona central. Coordine su consulta.', label: 'Contratos' },
  '/politica-de-privacidad/': { title: 'Política de privacidad | Lcda. Raquel Núñez', description: 'Política de privacidad de la Oficina Legal y Notarial de la Lcda. Raquel Núñez Alicea en Cidra, Puerto Rico.', label: 'Política de privacidad' },
  '/terminos-de-uso/': { title: 'Términos de uso | Lcda. Raquel Núñez', description: 'Términos de uso e información sobre el sitio de la Oficina Legal y Notarial de la Lcda. Raquel Núñez Alicea.', label: 'Términos de uso' },
  '/accesibilidad/': { title: 'Accesibilidad | Lcda. Raquel Núñez', description: 'Información de accesibilidad y asistencia para utilizar el sitio de la Oficina Legal y Notarial de la Lcda. Raquel Núñez Alicea.', label: 'Accesibilidad' },
};
export const normalizePath = (path: string) => path === '/' ? '/' : `${path.replace(/\/+$/, '')}/`;
const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export function seoHead(path: string) {
  const page = pages[path];
  if (!page) return '<title>Página no encontrada | Lcda. Raquel Núñez</title><meta name="robots" content="noindex,follow" />';
  const url = origin + path;
  const graph: Record<string, unknown>[] = [
    { '@type': 'LegalService', '@id': `${origin}/#office`, name: 'Lcda. Raquel Núñez Alicea — Oficina Legal y Notarial', url: origin + '/', image: origin + '/raquel-profesional.jpg', telephone: '+1-939-373-6637', email: 'legal@raquelnunez.com', address: { '@type': 'PostalAddress', streetAddress: 'Calle Antonio R. Barceló', addressLocality: 'Cidra', addressRegion: 'PR', postalCode: '00739', addressCountry: 'US' }, areaServed: municipalities.map(name => ({ '@type': 'City', name: `${name}, Puerto Rico` })), openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'], opens: '09:30', closes: '15:00' }], description: 'Oficina: lunes a miércoles de 9:30 a. m. a 3:00 p. m.; jueves cerrada por vistas o asuntos administrativos; viernes solo por cita previa, por asuntos administrativos.', contactPoint: { '@type': 'ContactPoint', telephone: '+1-939-373-6637', contactType: 'Coordinación de citas', description: 'Atendemos llamadas de 8:00 a. m. a 5:00 p. m. para coordinar citas.' }, hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Servicios legales', itemListElement: ['/quiebras/', '/herencias/', '/notaria-escrituras/', '/contratos/'].map(route => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: pages[route].label, url: origin + route } })) } },
    { '@type': 'WebSite', '@id': `${origin}/#website`, url: origin + '/', name: 'Lcda. Raquel Núñez Alicea', inLanguage: 'es-PR', publisher: { '@id': `${origin}/#office` } },
    { '@type': 'WebPage', '@id': url + '#webpage', url, name: page.title, description: page.description, inLanguage: 'es-PR', isPartOf: { '@id': `${origin}/#website` }, about: { '@id': `${origin}/#office` } },
  ];
  if (path !== '/') {
    const crumbs = [{ name: 'Inicio', item: origin + '/' }];
    if (path.startsWith('/quiebras/') || path.startsWith('/recursos/quiebras/')) crumbs.push({ name: 'Quiebras', item: origin + '/quiebras/' });
    if (path !== '/quiebras/') crumbs.push({ name: page.label, item: url });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, ...crumb })) });
  }
  if (path.startsWith('/recursos/')) {
    graph.push({ '@type': 'Article', headline: page.title, description: page.description, inLanguage: 'es-PR', mainEntityOfPage: { '@id': url + '#webpage' }, author: { '@id': `${origin}/#office` }, publisher: { '@id': `${origin}/#office` }, about: ['Quiebra', 'Descargue de deudas', 'Puerto Rico'] });
  }
  return `<title>${escape(page.title)}</title>
<meta name="description" content="${escape(page.description)}" />
<meta name="robots" content="index,follow" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="${url}" />
<meta property="og:title" content="${escape(page.title)}" />
<meta property="og:description" content="${escape(page.description)}" />
<meta property="og:locale" content="es_PR" />
<meta property="og:image" content="${origin}/raquel-profesional.jpg" />
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`;
}
