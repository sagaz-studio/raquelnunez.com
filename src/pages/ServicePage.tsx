import { pages } from '../seo';

const whatsapp = 'https://wa.me/19393736637?text=Hola%2C%20quisiera%20coordinar%20una%20consulta.';
const court7 = 'https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-7-bankruptcy-basics';
const court13 = 'https://www.uscourts.gov/court-programs/bankruptcy/bankruptcy-basics/chapter-13-bankruptcy-basics';
const services = ['/quiebras/', '/quiebras/capitulo-7/', '/quiebras/capitulo-13/', '/herencias/', '/notaria-escrituras/', '/contratos/'];
const details: Record<string, { heading: string; intro: string; sections: { title: string; text: string }[] }> = {
  '/quiebras/': {
    heading: 'Quiebras en la zona central de Puerto Rico',
    intro: 'Las deudas no tienen que enfrentarse sin orientación. Desde nuestra oficina en Cidra, la Lcda. Raquel Núñez Alicea le ayuda a evaluar sus opciones y a entender qué supondría un proceso de quiebra para su situación. Atendemos a personas de Cidra, Aibonito, Comerío, Barranquitas y Aguas Buenas.',
    sections: [
      { title: 'Una evaluación antes de tomar decisiones', text: 'La primera conversación comienza con sus preocupaciones: pagos que no puede sostener, cartas de cobro o incertidumbre sobre sus bienes. Revisamos qué debe, cuáles son sus ingresos y gastos y qué documentos hacen falta. Con esa información podemos explicarle las alternativas y los próximos pasos, sin prometer un resultado antes de conocer el caso.' },
      { title: 'Capítulo 7 y Capítulo 13: alternativas distintas', text: 'El Capítulo 7 puede permitir el descargue de ciertas deudas y contempla la liquidación de bienes no exentos. El Capítulo 13 permite a personas con ingresos regulares proponer un plan de pagos, generalmente de tres a cinco años. La selección requiere una evaluación individual.' },
      { title: 'Cobros, demandas y fechas importantes', text: 'La presentación de una petición generalmente activa una paralización automática de muchas gestiones de cobro, con excepciones y límites. Una consulta por sí sola no activa esa protección. Si tiene una demanda o una fecha de subasta, indique la fecha al comunicarse con la oficina y lleve las notificaciones recibidas.' },
      { title: 'Representación desde Cidra', text: 'Nuestra oficina ofrece un punto de contacto en la zona central para coordinar la evaluación de su caso. Durante la consulta puede preguntar cómo será la comunicación, qué gestiones se realizarían y qué costos corresponderían. La consulta inicial de quiebras es gratuita; los honorarios de representación y otros costos se explican por separado.' },
    ],
  },
  '/quiebras/capitulo-7/': {
    heading: 'Quiebra Capítulo 7 en Puerto Rico',
    intro: 'Si busca orientación sobre el Capítulo 7, la primera pregunta es si esta alternativa se ajusta a su situación. La Lcda. Raquel Núñez Alicea evalúa casos desde Cidra para clientes de Aibonito, Comerío, Barranquitas y Aguas Buenas, con atención a sus preocupaciones y a la información particular del caso.',
    sections: [
      { title: 'Qué puede hacer el Capítulo 7', text: 'El descargue puede liberar a una persona de responsabilidad por ciertas deudas. No elimina todas las obligaciones ni borra automáticamente los gravámenes. La elegibilidad puede requerir una evaluación de ingresos y otros requisitos.' },
      { title: 'Qué ocurre con sus bienes', text: 'Un síndico puede vender bienes no exentos. Las exenciones y los derechos de acreedores garantizados requieren análisis individual. No se puede prometer que conservará una casa o un vehículo sin revisar el caso.' },
      { title: 'Una consulta centrada en su situación', text: 'Comience por contarnos qué le preocupa y qué espera resolver. Traiga las comunicaciones que ha recibido y la información financiera disponible. Si todavía no tiene todos los documentos, la oficina puede indicarle qué falta para continuar la evaluación. Conviene identificar desde el principio cualquier asunto con fecha límite.' },
      { title: 'Preguntas que puede traer a la cita', text: 'Puede preguntar qué alternativas se evaluarían, qué información necesita completar y cómo se coordinaría la representación. También es el momento de discutir honorarios y otros costos. Queremos que comprenda los próximos pasos antes de decidir si desea continuar.' },
      { title: 'Cuándo comparar con el Capítulo 13', text: 'Una evaluación no debe limitarse al nombre del capítulo que encontró en internet. Si su prioridad es atender atrasos y organizar pagos, también puede conversar sobre el Capítulo 13. Utilice el enlace al final de esta guía para conocer esa alternativa y anote sus preguntas para la consulta.' },
    ],
  },
  '/quiebras/capitulo-13/': {
    heading: 'Quiebra Capítulo 13 en Puerto Rico',
    intro: 'Cuando sus pagos se han vuelto difíciles de manejar, es importante evaluar sus ingresos y obligaciones antes de asumir un nuevo compromiso. Desde Cidra, la Lcda. Raquel Núñez Alicea ofrece orientación sobre el Capítulo 13 a personas de la zona central de Puerto Rico.',
    sections: [
      { title: 'Un plan sujeto a evaluación y aprobación', text: 'El Capítulo 13 permite a personas con ingresos regulares proponer el pago de todas o parte de sus deudas mediante un plan, generalmente de tres a cinco años. El tribunal debe confirmarlo. El pago no se fija únicamente por lo que la persona desea pagar.' },
      { title: 'Atrasos de hipoteca y conservación de bienes', text: 'En circunstancias apropiadas, puede permitir atender atrasos hipotecarios a través del plan, mientras se mantienen al día los pagos corrientes. No garantiza conservar la vivienda: importan el momento de presentación, los requisitos legales y el cumplimiento de los pagos.' },
      { title: 'Revisar el presupuesto con claridad', text: 'Para la consulta, organice la información de ingresos del hogar, gastos mensuales y deudas. Explique qué pagos se han atrasado y cuáles continúan al día. Esta conversación ayuda a identificar la información pendiente y a plantear las preguntas que deben resolverse antes de recomendar una alternativa.' },
      { title: 'Acompañamiento y comunicación', text: 'Pregunte cómo se coordinarán los documentos y las comunicaciones con la oficina. Si cambian sus circunstancias mientras recibe representación, comuníquelo para que podamos evaluar el asunto. La consulta inicial gratuita permite comenzar la conversación; el alcance del servicio y sus costos se discuten por separado.' },
      { title: 'Compare sus opciones antes de decidir', text: 'También puede consultar nuestra guía de Capítulo 7 y traer sus dudas a la cita. El objetivo de la evaluación es comprender su situación completa y explicar los próximos pasos, sin asumir que un mismo proceso funciona para todas las personas.' },
    ],
  },
  '/herencias/': {
    heading: 'Herencias en Cidra y la zona central',
    intro: 'Un asunto de herencia reúne documentos, bienes y preguntas familiares. La oficina de la Lcda. Raquel Núñez Alicea ofrece orientación para organizar la información y evaluar los trámites que requiere su situación.',
    sections: [
      { title: 'Servicios de derecho sucesoral', text: 'Puede consultar sobre declaratorias de herederos, testamentos, administración de caudales y distribución de bienes. El alcance del trabajo se define después de revisar los documentos y conocer las circunstancias de la familia.' },
      { title: 'Prepare la primera conversación', text: 'Indique qué asunto desea atender y qué documentos tiene disponibles, como un testamento o información de propiedades. La oficina le orientará sobre lo necesario para evaluar el servicio solicitado. Evite enviar documentos con información sensible por mensajería sin coordinar primero.' },
      { title: 'Coordine una cita', text: 'Atendemos desde Cidra a clientes de Aibonito, Comerío, Barranquitas y Aguas Buenas. Para asuntos de herencias aplican honorarios profesionales que se discuten con la oficina; la oferta de consulta inicial gratuita corresponde a quiebras.' },
    ],
  },
  '/notaria-escrituras/': {
    heading: 'Notaría y escrituras en Cidra',
    intro: 'La Lcda. Raquel Núñez Alicea ofrece servicios notariales para la zona central de Puerto Rico. Coordine la revisión de su asunto antes de acudir para conocer qué información y documentos necesita.',
    sections: [
      { title: 'Escrituras y poderes', text: 'La oficina atiende consultas relacionadas con compraventas, hipotecas, poderes, segregaciones y consolidaciones. Cada instrumento requiere una evaluación propia; al coordinar su cita, explique el propósito del trámite y qué documentos tiene.' },
      { title: 'Una cita preparada', text: 'Confirme con la oficina quiénes deben comparecer y cuáles son los documentos necesarios para el asunto particular. También puede consultar sobre honorarios y coordinación antes de fijar la fecha. No todos los instrumentos pueden prepararse en una sola visita.' },
      { title: 'Servicio para la zona central', text: 'Nuestra sede está en Cidra y atiende a Aibonito, Comerío, Barranquitas y Aguas Buenas. Para redacción y revisión de acuerdos, visite la página de Contratos o comuníquese con la oficina.' },
    ],
  },
  '/contratos/': {
    heading: 'Redacción y revisión de contratos en Cidra',
    intro: 'Antes de firmar un acuerdo, conviene entender qué se está pactando. La Lcda. Raquel Núñez Alicea ofrece redacción y revisión de contratos desde Cidra para personas y negocios de la zona central de Puerto Rico. Coordine una consulta sobre su proyecto, alquiler o transacción de propiedad.',
    sections: [
      { title: 'Contratos de construcción y remodelación', text: 'Si va a contratar una obra o remodelación, puede coordinar la revisión del acuerdo antes de firmar o entregar un depósito. Revisamos el alcance de los trabajos, materiales, precio, calendario de pagos, plazos y cómo se documentarán los cambios. También redactamos acuerdos para contratistas que desean dejar claras las condiciones de sus proyectos con sus clientes.' },
      { title: 'Contratos de arrendamiento', text: 'Si va a alquilar una propiedad, le ayudamos a preparar o revisar el contrato según el acuerdo que desea establecer. En la consulta podemos examinar la renta, el depósito, el término, el uso de la propiedad y las responsabilidades de mantenimiento. Traiga el borrador disponible y explique los puntos que le preocupan.' },
      { title: 'Compraventas y opciones de compra', text: 'Si está considerando comprar o vender una propiedad, puede consultar sobre la redacción o revisión del acuerdo y de una opción de compra. Evaluamos las condiciones propuestas, depósitos, fechas y documentos disponibles. El alcance de la revisión contractual y cualquier servicio notarial se coordinan con la oficina según la transacción.' },
      { title: 'Explique el acuerdo que necesita', text: 'Indique el propósito del contrato, quiénes participan y cuáles son los puntos que desea atender. Si ya existe un borrador, coordine con la oficina cómo compartirlo para su revisión. El alcance del servicio y los honorarios se acuerdan según el asunto.' },
      { title: 'Revisión de contratos y orientación', text: 'Si necesita revisar un contrato antes de firmarlo o aclarar las obligaciones de un acuerdo, coordine una consulta. Podemos evaluar el documento y los asuntos legales relacionados. Para escrituras y poderes, consulte también nuestra página de servicios notariales.' },
      { title: 'Atención desde Cidra', text: 'Servimos a Cidra, Aibonito, Comerío, Barranquitas y Aguas Buenas. Llame para coordinar el servicio y confirmar disponibilidad. La consulta inicial gratuita anunciada en este sitio corresponde a casos de quiebra.' },
    ],
  },
};
export default function ServicePage({ path }: { path: string }) {
  const page = details[path];
  const bankruptcy = path.startsWith('/quiebras/');
  return <div className="service-page">
    <a className="skip-link" href="#contenido">Saltar al contenido</a>
    <header className="service-header container"><a href="/" className="office-name">Lcda. Raquel Núñez Alicea<span>Oficina Legal y Notarial · Cidra</span></a><nav aria-label="Navegación principal"><a href="/quiebras/">Quiebras</a><a href="/#servicios">Otros servicios</a><a href="/#contacto">Contacto</a></nav></header>
    <main id="contenido" className="container service-content">
      <nav aria-label="Ruta de navegación" className="breadcrumbs"><a href="/">Inicio</a> / {path !== '/quiebras/' && bankruptcy && <><a href="/quiebras/">Quiebras</a> / </>}<span aria-current="page">{pages[path].label}</span></nav>
      <span className="section-label">Zona central de Puerto Rico</span><h1>{page.heading}</h1><p className="service-lead">{page.intro}</p>
      <a href={whatsapp} className="btn-primary">{bankruptcy ? 'Consulta inicial gratuita' : 'Coordinar una cita'}</a>
      {page.sections.map(section => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p></section>)}
      {bankruptcy && <>
        <section><h2>¿Qué ocurre con las diferentes deudas?</h2><p>Las tarjetas de crédito, préstamos personales, hipotecas, automóviles, contribuciones y préstamos estudiantiles no reciben necesariamente el mismo tratamiento. Lea nuestra guía sobre <a href="/recursos/quiebras/que-deudas-elimina-quiebra-puerto-rico/">qué deudas puede eliminar una quiebra en Puerto Rico</a> y traiga sus preguntas a la consulta.</p></section>
        <section><h2>Qué preparar para su consulta</h2><p>Para aprovechar la conversación, tenga a mano la información que ya tenga disponible:</p><ul><li>Lista de acreedores y balances aproximados.</li><li>Información de ingresos y gastos mensuales.</li><li>Información sobre propiedades, vehículos y préstamos.</li><li>Cartas de cobro, demandas o avisos con fechas importantes.</li></ul><p>Llame para coordinar la entrega de documentos. Evite enviar números de Seguro Social o cuentas completas por WhatsApp.</p></section>
        <section><h2>Preguntas frecuentes</h2><h3>¿La consulta inicial tiene costo?</h3><p>La consulta inicial de quiebras es gratuita. Los honorarios de representación y costos del proceso se discuten por separado.</p><h3>¿Dónde está la oficina?</h3><p>En la Calle Antonio R. Barceló, Cidra, PR 00739. Atendemos a Cidra, Aibonito, Comerío, Barranquitas y Aguas Buenas. Llame al <a href="tel:+19393736637">939-373-6637</a> para coordinar.</p></section>
        <section><h2>Información oficial</h2><p>Puede ampliar esta orientación en las guías de los tribunales federales: <a href={court7}>Capítulo 7</a> y <a href={court13}>Capítulo 13</a> (en inglés). El contenido de esta página es general y no sustituye la evaluación de su caso.</p></section>
      </>}
      <section className="service-callout"><h2>Conversemos sobre su situación</h2><p>Atención en oficina: lunes, martes y miércoles de 9:30 a. m. a 3:00 p. m.</p><p>Jueves: oficina cerrada por vistas o asuntos administrativos. Viernes: atención únicamente por cita previa, por asuntos administrativos.</p><p>Atendemos llamadas de 8:00 a. m. a 5:00 p. m. para coordinar citas.</p><p><a href="tel:+19393736637">939-373-6637</a> · <a href={whatsapp}>Coordinar por WhatsApp</a></p></section>
      <nav className="related-services" aria-label="Servicios relacionados"><h2>Explore nuestros servicios</h2><div className="seo-links">{services.filter(route => route !== path).map(route => <a key={route} href={route}>{pages[route].label}</a>)}</div></nav>
    </main>
    <footer className="container service-footer"><p>Lcda. Raquel Núñez Alicea · Núm. de Licencia TSPR: 17881 · Publicidad Legal</p><p>Este sitio ofrece información general y no constituye asesoramiento legal. La comunicación no establece una relación abogado-cliente. Los resultados dependen de las circunstancias de cada caso.</p><p>Somos una agencia de alivio de deudas. Ayudamos a personas a solicitar protección por quiebra bajo el Código de Quiebras de los Estados Unidos.</p><p><a href="/politica-de-privacidad/">Privacidad</a> · <a href="/terminos-de-uso/">Términos de uso</a> · <a href="/accesibilidad/">Accesibilidad</a></p></footer>
  </div>;
}
