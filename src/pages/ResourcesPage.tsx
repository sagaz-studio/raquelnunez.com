const articleUrl = '/recursos/quiebras/que-deudas-elimina-quiebra-puerto-rico/';

export default function ResourcesPage() {
  return <div className="service-page">
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="service-header container"><a href="/" className="office-name">Lcda. Raquel Núñez Alicea<span>Oficina Legal y Notarial · Cidra</span></a><nav aria-label="Navegación principal"><a href="/quiebras/">Quiebras</a><a href="/recursos/" aria-current="page">Recursos</a><a href="/#contacto">Contacto</a></nav></header>
    <main id="contenido" className="container service-content">
      <nav aria-label="Ruta de navegación" className="breadcrumbs"><a href="/">Inicio</a> / <span aria-current="page">Recursos</span></nav>
      <span className="section-label">Blog legal</span>
      <h1>Recursos sobre quiebras en Puerto Rico</h1>
      <p className="service-lead">Explicaciones sencillas para entender sus deudas, sus bienes y el proceso de quiebra. Publicamos información general para personas de Cidra y la zona central de Puerto Rico.</p>

      <section className="resource-card">
        <span className="section-label">Quiebras</span>
        <h2><a href={articleUrl}>¿Qué deudas puede eliminar una quiebra en Puerto Rico?</a></h2>
        <p>Conozca cuáles deudas pueden eliminarse, cuáles necesitan una revisión especial y qué ocurre con las deudas que tienen un gravamen.</p>
        <a href={articleUrl} className="btn-primary">Leer la guía</a>
      </section>

      <section><h2>Próximas guías</h2><p>Continuaremos publicando información sobre embargos, sentencias, protección de bienes, Capítulo 7 y Capítulo 13. Cada guía utilizará palabras sencillas y ejemplos fáciles de entender.</p></section>

      <nav className="related-services" aria-label="Servicios relacionados"><h2>Conozca sus opciones</h2><div className="seo-links"><a href="/quiebras/">Quiebras</a><a href="/quiebras/capitulo-7/">Capítulo 7</a><a href="/quiebras/capitulo-13/">Capítulo 13</a><a href="/">Conocer la oficina</a></div></nav>
    </main>
    <footer className="container service-footer"><p>Lcda. Raquel Núñez Alicea · Núm. de Licencia TSPR: 17881 · Publicidad Legal</p><p>Este contenido ofrece información general y no constituye asesoramiento legal.</p><p><a href="/politica-de-privacidad/">Privacidad</a> · <a href="/terminos-de-uso/">Términos de uso</a> · <a href="/accesibilidad/">Accesibilidad</a></p></footer>
  </div>;
}
