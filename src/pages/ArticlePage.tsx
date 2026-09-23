const whatsapp = 'https://wa.me/19393736637?text=Hola%2C%20quisiera%20coordinar%20una%20consulta%20sobre%20quiebras.';
const dischargeGuide = 'https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/discharge-bankruptcy-bankruptcy-basics';
const chapter7Guide = 'https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-7-bankruptcy-basics';
const chapter13Guide = 'https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-13-bankruptcy-basics';

export default function ArticlePage() {
  return <div className="service-page">
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="service-header container"><a href="/" className="office-name">Lcda. Raquel Núñez Alicea<span>Oficina Legal y Notarial · Cidra</span></a><nav aria-label="Navegación principal"><a href="/quiebras/">Quiebras</a><a href="/#servicios">Otros servicios</a><a href="/#contacto">Contacto</a></nav></header>
    <main id="contenido" className="container service-content">
      <nav aria-label="Ruta de navegación" className="breadcrumbs"><a href="/">Inicio</a> / <a href="/recursos/">Recursos</a> / <span aria-current="page">Deudas y quiebra</span></nav>
      <span className="section-label">Guía de orientación · Puerto Rico</span>
      <h1>¿Qué deudas puede eliminar una quiebra en Puerto Rico?</h1>
      <p className="service-lead">Una quiebra puede descargar ciertas deudas y detener muchas gestiones de cobro, pero no borra automáticamente todas las obligaciones. El resultado depende del tipo de deuda, las garantías existentes, el capítulo utilizado y las circunstancias particulares del caso.</p>

      <section><h2>Deudas que frecuentemente pueden descargarse</h2><p>Muchas deudas de consumo sin garantía pueden ser descargables. Entre ellas pueden encontrarse balances de tarjetas de crédito, préstamos personales sin garantía, facturas médicas y ciertas sentencias de cobro. Que una deuda aparezca en esta categoría general no sustituye el análisis del expediente: el origen de la obligación y la conducta relacionada con ella pueden cambiar el resultado.</p><p>El descargue libera al deudor de la responsabilidad personal por las deudas cubiertas y prohíbe a los acreedores continuar cobrando esas obligaciones. No equivale a borrar el historial ni elimina por sí solo un gravamen válido sobre una propiedad.</p></section>

      <section><h2>Deudas que normalmente requieren mayor cuidado</h2><p>Algunas obligaciones generalmente no se descargan o solo pueden descargarse bajo condiciones limitadas. Entre ellas se encuentran muchas deudas por pensión alimentaria, ciertas contribuciones, multas y restituciones penales, y determinadas deudas surgidas de fraude o conducta intencional. Los préstamos estudiantiles también están sujetos a reglas particulares y usualmente requieren un procedimiento adicional y prueba específica.</p><p>No conviene asumir que una deuda contributiva, estudiantil o relacionada con una sentencia quedará eliminada. Es necesario revisar fechas, documentos, decisiones judiciales y cualquier garantía que afecte la obligación.</p></section>

      <section><h2>Hipoteca, automóvil y otras deudas garantizadas</h2><p>Una hipoteca o un préstamo de automóvil incluye derechos sobre el bien dado en garantía. Aunque una quiebra pueda afectar la responsabilidad personal, el acreedor puede conservar derechos sobre la propiedad. Mantener una casa o un vehículo depende, entre otros factores, del capítulo, las exenciones aplicables, el valor del bien, los atrasos y la capacidad para cumplir con los pagos requeridos.</p><p>El <a href="/quiebras/capitulo-7/">Capítulo 7</a> y el <a href="/quiebras/capitulo-13/">Capítulo 13</a> funcionan de manera diferente. El Capítulo 13 puede permitir que una persona con ingresos regulares proponga un plan para atender atrasos durante un periodo, sujeto a aprobación y cumplimiento. Ningún capítulo garantiza conservar un bien sin evaluar el caso completo.</p></section>

      <section><h2>Qué ocurre con los cobros al presentar el caso</h2><p>La presentación de una petición de quiebra generalmente activa una paralización automática de muchas gestiones de cobro. Existen excepciones, y una consulta o la preparación de documentos no activa esa protección. Si recibió una demanda, aviso de embargo, reposición o fecha de subasta, informe la fecha exacta al comunicarse con la oficina.</p></section>

      <section><h2>Información útil para evaluar sus deudas</h2><p>Para una conversación inicial, organice lo que tenga disponible:</p><ul><li>Lista de acreedores y balances aproximados.</li><li>Estados de cuenta, cartas de cobro y demandas.</li><li>Información sobre hipoteca, automóvil y otros bienes.</li><li>Ingresos, gastos mensuales y atrasos.</li><li>Fechas de embargo, reposición o subasta, si existen.</li></ul><p>No necesita conocer de antemano el capítulo adecuado. La evaluación permite identificar qué información falta y qué alternativas deben considerarse.</p></section>

      <section><h2>Orientación desde Cidra para la zona central</h2><p>La Lcda. Raquel Núñez Alicea ofrece orientación sobre quiebras desde Cidra para personas de Aibonito, Comerío, Barranquitas y Aguas Buenas. La consulta inicial de quiebras es gratuita; los honorarios de representación y los costos del proceso se explican por separado.</p><a href={whatsapp} className="btn-primary">Coordinar consulta de quiebras</a></section>

      <section><h2>Fuentes oficiales y aviso</h2><p>Puede consultar las guías de los Tribunales de Estados Unidos sobre el <a href={dischargeGuide}>descargue</a>, el <a href={chapter7Guide}>Capítulo 7</a> y el <a href={chapter13Guide}>Capítulo 13</a> (en inglés). Esta guía ofrece información general y no constituye asesoramiento legal. Cada caso depende de sus hechos, documentos y requisitos legales.</p></section>

      <nav className="related-services" aria-label="Contenido relacionado"><h2>Continúe su orientación</h2><div className="seo-links"><a href="/recursos/">Todos los recursos</a><a href="/quiebras/">Quiebras en la zona central</a><a href="/quiebras/capitulo-7/">Capítulo 7</a><a href="/quiebras/capitulo-13/">Capítulo 13</a><a href="/">Conocer la oficina</a></div></nav>
    </main>
    <footer className="container service-footer"><p>Lcda. Raquel Núñez Alicea · Núm. de Licencia TSPR: 17881 · Publicidad Legal</p><p>Somos una agencia de alivio de deudas. Ayudamos a personas a solicitar protección por quiebra bajo el Código de Quiebras de los Estados Unidos.</p><p><a href="/politica-de-privacidad/">Privacidad</a> · <a href="/terminos-de-uso/">Términos de uso</a> · <a href="/accesibilidad/">Accesibilidad</a></p></footer>
  </div>;
}
