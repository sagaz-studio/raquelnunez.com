/*
 * HOME PAGE — Lcda. Raquel Núñez Alicea
 * Design: Classic Legal Authority — Azul Petróleo #1B3A4B | Dorado #B8962E | Crema #F5F0E8
 * Fonts: Cormorant Garamond (display) + EB Garamond (body)
 * Bilingual: ES / EN toggle
 */
import { useState, useEffect } from "react";
import CookieConsent from "@/components/CookieConsent";
// ─── Image URLs ────────────────────────────────────────────────────────────────
const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/hhpR9nS0qZF6g8qUjNZ46u/sandbox/WAMTwDtQtQo7WIUAh2Nttb-img-1_1771968132000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvaGhwUjluUzBxWkY2ZzhxVWpOWjQ2dS9zYW5kYm94L1dBTVR3RHRRdFFvN1dJVUFoMk50dGItaW1nLTFfMTc3MTk2ODEzMjAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kYrYY41bEwqI~xTbm2QArjPRvNoOrTm311f3poRPbs7EBv1vmb0AcDMlfUdfMCVybqgRIwlF~GWGZq6XQp2mL95JivLy1yd3zt8sdiKQpbYed3fe65RnBisgQnLu24OhvpCIs5LFMTmlzBnXaEYXOt4mWlJK19M8xsk1dOQ0TNvyMDg~92IAm0xnbVmoHywc5maJu52gEspvFXAENl6ZDPS3tMjs8CdCD8vSsGfDQtR-FGYTAAgeGPiwANzJ6f-EwOjKdi-xq0k1mYNL-yIq~4yEJ9mHIbc95AHxXneE6R7uQogglIbAsMGOKIlnKPnmQLZRsC-DVWyFwwdfpCUklg__";
const RAQUEL_PHOTO = "/raquel-profesional.jpg";
const WHATSAPP_URL = "https://wa.me/19393736637?text=Hola%2C%20me%20interesa%20una%20consulta%20legal.";
const PHONE = "939-373-6637";
// ─── Translations ──────────────────────────────────────────────────────────────
const t = {
  es: {
    lang: "EN",
    nav: ["Quiebras", "Servicios", "Zona", "FAQ", "Contacto"],
    navIds: ["/quiebras/", "#servicios", "#zona", "#faq", "#contacto"],
    badge: "Práctica Federal y Estatal · Puerto Rico",
    heroTitle: "Abogada de quiebras en Cidra",
    heroSub: "Quiebras · Herencias · Escrituras · Contratos",
    heroCta: "Agendar Consulta",
    heroNote: "Consulta inicial gratuita en casos de quiebra",
    heroWalkin: "",
    servicesLabel: "Áreas de Práctica",
    servicesTitle: "Derecho, Directo.™",
    servicesList: [
      {
        num: "01",
        title: "Quiebras",
        subtitle: "Federal Bankruptcy Court",
        desc: "Representación ante el Tribunal Federal de Quiebras de Puerto Rico. Evaluamos su situación financiera con precisión y trazamos el camino más estratégico hacia una nueva oportunidad económica.",
        points: ["Capítulo 7 y Capítulo 13", "Paralización automática de cobros", "Protección de activos esenciales", "Consulta inicial sin costo"],
        free: true,
      },
      {
        num: "02",
        title: "Herencias",
        subtitle: "Derecho Sucesoral",
        desc: "Administración integral de caudales hereditarios con la rigurosidad que su familia merece. Desde la declaratoria de herederos hasta la distribución final de bienes.",
        points: ["Declaratoria de herederos", "Administración del caudal", "Testamentos y codicilos", "Resolución de disputas sucesorales"],
        free: false,
      },
      {
        num: "03",
        title: "Escrituras",
        subtitle: "Derecho Notarial",
        desc: "Otorgamiento de instrumentos públicos con la precisión y solemnidad que exige el derecho notarial puertorriqueño. Cada documento, un compromiso de exactitud.",
        points: ["Compraventa de bienes inmuebles", "Hipotecas y refinanciamientos", "Poderes notariales", "Segregaciones y consolidaciones"],
        free: false,
      },
      {
        num: "04",
        title: "Contratos",
        subtitle: "Notaría · Contratos",
        desc: "Redacción y revisión de contratos civiles y comerciales. Evaluamos su acuerdo y le orientamos sobre los asuntos legales relacionados, previa coordinación con nuestra oficina.",
        points: ["Construcción y remodelación", "Arrendamientos", "Compraventas y opciones de compra", "Redacción y revisión por cita"],
        free: false,
      },
    ],
    aboutLabel: "La Abogada",
    aboutTitle1: "Lcda. Raquel",
    aboutTitle2: "Núñez Alicea",
    aboutP1: "Abogada y notaria con práctica activa ante los tribunales federales y estatales de Puerto Rico. Luego de años ejerciendo en el área metropolitana, regresamos a nuestras raíces — a Aibonito y la zona central — para representar a los clientes de la región con la misma excelencia que los grandes despachos de San Juan, sin que usted tenga que desplazarse.",
    aboutP2: "Somos una firma equipada para trabajar las quiebras federales y el derecho civil. Un equipo comprometido, donde cada caso recibe atención directa, estratégica y sin ambigüedades de principio a fin.",
    aboutCta: "Hablar con la Lcda.",
    aboutBadge1: "Práctica",
    aboutBadge2: "Federal y Estatal",
    zoneLabel: "Zona de Servicio",
    zoneTitle: "La Zona Central,\nCubierta.",
    zoneSub: "No tiene que viajar a San Juan para obtener representación de primer nivel. Nuestra oficina en Cidra está estratégicamente posicionada para servir a toda la región central con la misma excelencia que los grandes despachos metropolitanos.",
    zoneCta: "Agendar Consulta",
    municipalities: ["Cidra", "Aibonito", "Comerío", "Barranquitas", "Aguas Buenas"],
    municipalityNotes: ["Sede de la Oficina", "", "", "", ""],
    blogLabel: "Recursos Legales",
    blogTitle: "De Interés\nLegal",
    blogPosts: [
      {
        tag: "Quiebras",
        title: "¿Qué ocurre con sus deudas al declararse en quiebra?",
        excerpt: "La quiebra puede suspender gestiones de cobro y permitir el descargue de ciertas deudas. Conozca las alternativas y sus límites antes de decidir.",
        date: "Febrero 2026",
      },
      {
        tag: "Herencias",
        title: "Orientación sobre herencias en la zona central",
        excerpt: "Conozca nuestros servicios de herencias y qué información preparar para conversar con la oficina sobre su asunto.",
        date: "Enero 2026",
      },
      {
        tag: "Escrituras",
        title: "Notaría y escrituras: prepare su consulta",
        excerpt: "Consulte sobre escrituras, poderes y compraventas. Coordine la revisión de los documentos y los requisitos de su trámite.",
        date: "Diciembre 2025",
      },
    ],
    faqLabel: "Preguntas Frecuentes",
    faqTitle: "Respuestas\nDirectas",
    faqs: [
      {
        q: "¿La consulta inicial tiene costo?",
        a: "La consulta inicial en casos de quiebra es completamente gratuita. Para herencias, escrituras, contratos y otros asuntos civiles, aplican honorarios profesionales que se discuten en la primera reunión.",
      },
      {
        q: "¿Necesito cita para visitar la oficina?",
        a: "Coordine su cita antes de visitar la oficina. Atendemos llamadas de 8:00 a. m. a 5:00 p. m. para coordinar citas. Los viernes atendemos únicamente por cita previa.",
      },
      {
        q: "¿Cuál es el horario de la oficina?",
        a: "Atención en oficina: lunes, martes y miércoles de 9:30 a. m. a 3:00 p. m. Jueves: oficina cerrada por vistas o asuntos administrativos. Viernes: atención únicamente por cita previa, por asuntos administrativos. Atendemos llamadas de 8:00 a. m. a 5:00 p. m. para coordinar citas.",
      },
      {
        q: "¿Atienden clientes de Barranquitas, Comerío y otros municipios?",
        a: "Sí. Nuestra oficina en Cidra sirve a toda la zona central: Aguas Buenas, Barranquitas, Comerío y Aibonito. No es necesario desplazarse a San Juan o Caguas.",
      },
      {
        q: "¿Qué diferencia hay entre Capítulo 7 y Capítulo 13?",
        a: "El Capítulo 7 puede permitir el descargue de ciertas deudas, sujeto a elegibilidad y exenciones; los bienes no exentos pueden liquidarse. El Capítulo 13 permite proponer un plan de pagos generalmente de tres a cinco años. Evaluamos ingresos, bienes y obligaciones antes de recomendar una alternativa.",
      },
      {
        q: "¿Practican ante el Tribunal Federal?",
        a: "Sí. La Lcda. Núñez Alicea tiene práctica activa ante el Tribunal Federal de Distrito de Puerto Rico y el Tribunal Federal de Quiebras, además de los tribunales estatales.",
      },
    ],
    contactLabel: "Contáctenos",
    contactTitle: "Inicie su Proceso\nHoy",
    contactSub: "Cada situación legal merece atención inmediata. Comuníquese con nuestro equipo y reciba orientación directa.",
    contactItems: [
      { label: "WhatsApp", value: "939-373-6637" },
      { label: "Teléfono", value: "939-373-6637" },
      { label: "Dirección", value: "Calle Antonio R. Barceló\nCidra, PR 00739" },
      { label: "Horario", value: "Lun–Mié 9:30 a. m.–3:00 p. m.\nJue: oficina cerrada\nVie: solo por cita" },
    ],
    whatsappCta: "Escribir por WhatsApp",
    footerRights: "Todos los derechos reservados.",
    footerDisclaimer: "Este sitio web es para propósitos informativos únicamente y no constituye asesoramiento legal. La comunicación a través de este sitio no establece una relación abogado-cliente. Los resultados anteriores no garantizan resultados similares en casos futuros.",
    footerDebtRelief: "Somos una agencia de alivio de deudas. Ayudamos a personas a solicitar protección por quiebra bajo el Código de Quiebras de los Estados Unidos. 11 U.S.C. § 528.",
    footerLicense: "Lcda. Raquel Núñez Alicea · Núm. de Licencia TSPR: 17881 · Publicidad Legal",
    footerNotary: "Notaria Pública de Puerto Rico. Los servicios notariales no constituyen representación legal.",
    footerFederal: "Admitida ante el Tribunal Federal para el Distrito de Puerto Rico y el Tribunal de Quiebras del Distrito de Puerto Rico.",
  },
  en: {
    lang: "ES",
    nav: ["Bankruptcy", "Services", "Coverage", "FAQ", "Contact"],
    navIds: ["/quiebras/", "#servicios", "#zona", "#faq", "#contacto"],
    badge: "Federal & State Practice · Puerto Rico",
    heroTitle: "Bankruptcy attorney in Cidra",
    heroSub: "Bankruptcy · Estates · Deeds · Contracts",
    heroCta: "Schedule Consultation",
    heroNote: "Free initial consultation for bankruptcy cases",
    heroWalkin: "",
    servicesLabel: "Practice Areas",
    servicesTitle: "Law, Direct.™",
    servicesList: [
      {
        num: "01",
        title: "Bankruptcy",
        subtitle: "Federal Bankruptcy Court",
        desc: "Representation before the U.S. Bankruptcy Court for the District of Puerto Rico. We assess your financial situation with precision and chart the most strategic path toward a fresh economic start.",
        points: ["Chapter 7 & Chapter 13", "Automatic stay of collections", "Protection of essential assets", "Free initial consultation"],
        free: true,
      },
      {
        num: "02",
        title: "Estates",
        subtitle: "Succession Law",
        desc: "Comprehensive administration of estates with the rigor your family deserves. From declaration of heirs to final distribution of assets.",
        points: ["Declaration of heirs", "Estate administration", "Wills and codicils", "Resolution of succession disputes"],
        free: false,
      },
      {
        num: "03",
        title: "Deeds",
        subtitle: "Notarial Law",
        desc: "Execution of public instruments with the precision and solemnity required by Puerto Rico notarial law. Every document, a commitment to accuracy.",
        points: ["Real estate purchase and sale", "Mortgages and refinancing", "Notarial powers of attorney", "Lot segregations and consolidations"],
        free: false,
      },
      {
        num: "04",
        title: "Contracts",
        subtitle: "Notarial · Contracts",
        desc: "Drafting and review of civil and commercial contracts. We evaluate your agreement and provide guidance on related legal matters, by prior arrangement with our office.",
        points: ["Construction and remodeling", "Lease agreements", "Purchase agreements and options", "Drafting and review by appointment"],
        free: false,
      },
    ],
    aboutLabel: "The Attorney",
    aboutTitle1: "Lcda. Raquel",
    aboutTitle2: "Núñez Alicea",
    aboutP1: "Attorney and notary with active practice before the federal and state courts of Puerto Rico. After years of practice in the metropolitan area, we returned to our roots — to Aibonito and the central zone — to represent clients throughout the region with the same excellence as San Juan's major firms, without requiring you to travel.",
    aboutP2: "We are a firm fully equipped to handle federal bankruptcy and civil law. A committed team where every case receives direct, strategic, and unambiguous attention from start to finish.",
    aboutCta: "Speak with the Attorney",
    aboutBadge1: "Federal &",
    aboutBadge2: "State Practice",
    zoneLabel: "Coverage Area",
    zoneTitle: "Central Puerto Rico,\nCovered.",
    zoneSub: "You don't need to travel to San Juan for top-tier legal representation. Our office in Cidra is strategically positioned to serve the entire central region with the same excellence as major metropolitan firms.",
    zoneCta: "Schedule Consultation",
    municipalities: ["Cidra", "Aibonito", "Comerío", "Barranquitas", "Aguas Buenas"],
    municipalityNotes: ["Main Office", "", "", "", ""],
    blogLabel: "Legal Resources",
    blogTitle: "Legal\nInsights",
    blogPosts: [
      {
        tag: "Bankruptcy",
        title: "What happens to your debts when you file for bankruptcy?",
        excerpt: "Bankruptcy may suspend collection activity and discharge certain debts. Learn about the options and their limits before deciding.",
        date: "February 2026",
      },
      {
        tag: "Estates",
        title: "Estate services in central Puerto Rico",
        excerpt: "Explore our estate services and the information to prepare before discussing your matter with the office.",
        date: "January 2026",
      },
      {
        tag: "Deeds",
        title: "Notary services and deeds: prepare your consultation",
        excerpt: "From title verification to deed execution, learn every stage of the real estate purchase process in Puerto Rico.",
        date: "December 2025",
      },
    ],
    faqLabel: "Frequently Asked Questions",
    faqTitle: "Direct\nAnswers",
    faqs: [
      {
        q: "Is the initial consultation free?",
        a: "The initial consultation for bankruptcy cases is completely free. For estates, deeds, contracts, and other civil matters, professional fees apply and are discussed at the first meeting.",
      },
      {
        q: "Do I need an appointment to visit the office?",
        a: "Please coordinate your appointment before visiting the office. We answer calls from 8:00 a.m. to 5:00 p.m. to schedule appointments. Fridays are by appointment only.",
      },
      {
        q: "What are the office hours?",
        a: "Office hours: Monday, Tuesday and Wednesday, 9:30 a.m. to 3:00 p.m. Thursday: office closed for hearings or administrative matters. Friday: by appointment only due to administrative work. We answer calls from 8:00 a.m. to 5:00 p.m. to schedule appointments.",
      },
      {
        q: "Do you serve clients from Barranquitas, Comerío, and other municipalities?",
        a: "Yes. Our office in Cidra serves the entire central zone: Aguas Buenas, Barranquitas, Comerío, and Aibonito. There is no need to travel to San Juan or Caguas.",
      },
      {
        q: "What is the difference between Chapter 7 and Chapter 13?",
        a: "Chapter 7 may discharge certain debts, subject to eligibility and exemptions; nonexempt property may be sold. Chapter 13 involves a repayment plan generally lasting three to five years. We review your income, property and obligations before recommending an option.",
      },
      {
        q: "Do you practice before the Federal Court?",
        a: "Yes. Lcda. Núñez Alicea has active practice before the U.S. District Court for the District of Puerto Rico and the U.S. Bankruptcy Court, in addition to state courts.",
      },
    ],
    contactLabel: "Contact Us",
    contactTitle: "Begin Your Process\nToday",
    contactSub: "Every legal situation deserves immediate attention. Reach out to our team and receive direct guidance.",
    contactItems: [
      { label: "WhatsApp", value: "939-373-6637" },
      { label: "Phone", value: "939-373-6637" },
      { label: "Address", value: "Calle Antonio R. Barceló\nCidra, PR 00739" },
      { label: "Hours", value: "Mon–Wed 9:30 a.m.–3:00 p.m.\nThu: office closed\nFri: by appointment only" },
    ],
    whatsappCta: "Message on WhatsApp",
    footerRights: "All rights reserved.",
    footerDisclaimer: "This website is for informational purposes only and does not constitute legal advice. Communication through this site does not establish an attorney-client relationship. Prior results do not guarantee similar outcomes.",
    footerDebtRelief: "We are a debt relief agency. We help people file for bankruptcy relief under the Bankruptcy Code of the United States. 11 U.S.C. § 528.",
    footerLicense: "Lcda. Raquel Núñez Alicea · Bar License No. TSPR: 17881 · Legal Advertisement",
    footerNotary: "Notary Public of Puerto Rico. Notarial services do not constitute legal representation.",
    footerFederal: "Admitted before the U.S. District Court for the District of Puerto Rico and the U.S. Bankruptcy Court for the District of Puerto Rico.",
  },
};
const LOGO_URL = "/raquel-logo.png";
// ─── Logo ──────────────────────────────────────────────────────────────────────
function LogoMark({ size = 48 }: { size?: number; color?: string }) {
  return (
    <img
      src={LOGO_URL}
      alt="Logo Lcda. Raquel Núñez Alicea"
      width={size}
      height={size}
      style={{ objectFit: "contain", display: "block", background: "transparent", maxWidth: "100%", flexShrink: 0 }}
    />
  );
}
// ─── Central PR SVG Map ────────────────────────────────────────────────────────
function CentralPRMap({ lang }: { lang: "es" | "en" }) {
  return <div style={{ border: "1px solid rgba(184,150,46,.4)", padding: "2rem" }}>
    <h3 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{lang === "es" ? "Nuestra oficina está en Cidra" : "Our office is in Cidra"}</h3>
    <p>{lang === "es" ? "Atendemos a la zona central de Puerto Rico:" : "Serving central Puerto Rico:"}</p>
    <ul style={{ marginTop: "1rem", lineHeight: 2.2 }}>{["Cidra", "Aibonito", "Comerío", "Barranquitas", "Aguas Buenas"].map(name => <li key={name}>{name}</li>)}</ul>
  </div>;
}
// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar({ scrolled, lang, setLang }: { scrolled: boolean; lang: "es" | "en"; setLang: (l: "es" | "en") => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  const tx = t[lang];
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 40,
        background: scrolled ? "rgba(27,58,75,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(184,150,46,0.2)" : "none",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div className="container">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4.5rem" }}>
          {/* Logo */}
          <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: "0.65rem", textDecoration: "none", flexShrink: 0 }}>
            <LogoMark size={isMobile ? 36 : 44} />
            {isMobile ? (
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.95rem", color: "#F5F0E8", lineHeight: 1.15, letterSpacing: "0.01em", whiteSpace: "nowrap" }}>
                Lcda. Raquel Núñez
              </div>
            ) : (
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1.05rem", color: "#F5F0E8", lineHeight: 1.1, letterSpacing: "0.01em" }}>
                  Lcda. Raquel Núñez Alicea
                </div>
                <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.65rem", color: "#B8962E", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                  Oficina Legal y Notarial
                </div>
              </div>
            )}
          </a>
          {/* Desktop nav */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              {tx.nav.map((item, i) => (
                <a key={item} href={tx.navIds[i]}
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5F0E8", opacity: 0.8, transition: "all 0.2s", whiteSpace: "nowrap", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = "#B8962E"; (e.target as HTMLElement).style.opacity = "1"; }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = "#F5F0E8"; (e.target as HTMLElement).style.opacity = "0.8"; }}
                >{item}</a>
              ))}
              <button onClick={() => setLang(lang === "es" ? "en" : "es")}
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "#B8962E", background: "rgba(184,150,46,0.1)", border: "1px solid rgba(184,150,46,0.4)", padding: "0.35rem 0.9rem", cursor: "pointer" }}>
                {tx.lang}
              </button>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ padding: "0.55rem 1.3rem", fontSize: "0.78rem" }}>
                {tx.heroCta}
              </a>
            </div>
          )}
          {/* Mobile: lang toggle + hamburger */}
          {isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button onClick={() => setLang(lang === "es" ? "en" : "es")}
                style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.75rem", letterSpacing: "0.12em", color: "#B8962E", background: "rgba(184,150,46,0.1)", border: "1px solid rgba(184,150,46,0.4)", padding: "0.3rem 0.7rem", cursor: "pointer" }}>
                {tx.lang}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen}
                style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "5px", width: "40px", height: "40px", background: "transparent", border: "none", cursor: "pointer", padding: "8px" }}>
                {[0, 1, 2].map((i) => (
                  <span key={i} style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#F5F0E8", transition: "all 0.3s", transform: menuOpen && i === 0 ? "rotate(45deg) translate(5px, 5px)" : menuOpen && i === 1 ? "scaleX(0)" : menuOpen && i === 2 ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
                ))}
              </button>
            </div>
          )}
        </div>
        {/* Mobile menu drawer */}
        {isMobile && menuOpen && (
          <div style={{ background: "rgba(27,58,75,0.98)", borderTop: "1px solid rgba(184,150,46,0.2)", padding: "1.5rem 0" }}>
            {tx.nav.map((item, i) => (
              <a key={item} href={tx.navIds[i]} onClick={() => setMenuOpen(false)}
                style={{ display: "block", fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5F0E8", padding: "0.75rem 0", borderBottom: "1px solid rgba(184,150,46,0.1)", textDecoration: "none" }}>
                {item}
              </a>
            ))}
            <div style={{ marginTop: "1.5rem" }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                {tx.heroCta}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
// ─── Hero ──────────────────────────────────────────────────────────────────────
function Hero({ lang }: { lang: "es" | "en" }) {
  const tx = t[lang];
  return (
    <section id="inicio" aria-label={lang === "es" ? "Inicio" : "Home"} style={{ minHeight: "100vh", position: "relative", display: "flex", alignItems: "center", overflow: "hidden", WebkitOverflowScrolling: "touch" }}>

      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", filter: "brightness(0.4)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(27,58,75,0.95) 0%, rgba(27,58,75,0.65) 55%, rgba(27,58,75,0.25) 100%)" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "200px", background: "linear-gradient(to top, #1B3A4B, transparent)" }} />
      <div className="container" style={{ position: "relative", zIndex: 2, paddingTop: "8rem", paddingBottom: "5rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", background: "rgba(184,150,46,0.12)", border: "1px solid rgba(184,150,46,0.35)", padding: "0.4rem 1rem", marginBottom: "2rem", maxWidth: "100%", flexWrap: "wrap" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#B8962E", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.7rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#B8962E", wordBreak: "break-word", overflowWrap: "break-word" }}>{tx.badge}</span>
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem, 7vw, 5.5rem)", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.05, marginBottom: "1.5rem", maxWidth: "min(700px, 100%)" }}>
          {tx.heroTitle}
        </h1>
        <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "2.5rem", maxWidth: "100%" }}>
          <span style={{ display: "block", width: "40px", minWidth: "40px", height: "1px", background: "#B8962E", marginTop: "0.75rem", flexShrink: 0 }} />
          <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem", color: "#F5F0E8", opacity: 0.75, letterSpacing: "0.04em", lineHeight: 1.7 }}>
            <span>{lang === "es" ? "Capítulo 7 y Capítulo 13 · Zona central de Puerto Rico" : "Chapter 7 and Chapter 13 · Central Puerto Rico"}</span>
            <br />
            <span>Cidra · Aibonito · Comerío · Barranquitas · Aguas Buenas</span>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2rem" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {tx.heroCta}
          </a>
          <a href={`tel:9393736637`} style={{ display: "inline-flex", alignItems: "center", gap: "0.65rem", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.06em", color: "#F5F0E8", padding: "0.875rem 1.8rem", border: "2px solid rgba(245,240,232,0.75)", background: "rgba(245,240,232,0.08)", transition: "all 0.25s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#B8962E"; (e.currentTarget as HTMLElement).style.color = "#B8962E"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,240,232,0.75)"; (e.currentTarget as HTMLElement).style.color = "#F5F0E8"; }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" /></svg>
            {PHONE}
          </a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.85rem", color: "#B8962E", opacity: 0.9, letterSpacing: "0.04em" }}>✓ {tx.heroNote}</p>
        </div>
      </div>
    </section>
  );
}
// ─── Services ─────────────────────────────────────────────────────────────────
function Services({ lang }: { lang: "es" | "en" }) {
  const tx = t[lang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section id="servicios" className="section-pad" style={{ background: "#122838", overflowX: "hidden" }}>
      <div className="container">
        <div style={{ marginBottom: "4rem" }}>
          <span className="section-label">{tx.servicesLabel}</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.1 }}>
            {tx.servicesTitle.replace("™", "")}<sup style={{ fontSize: "0.45em", verticalAlign: "super", color: "rgba(184,150,46,0.7)", fontWeight: 400 }}>™</sup>
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "3px", width: "100%", maxWidth: "100%" }}>
          {tx.servicesList.map((svc, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={svc.num} style={{ border: `1px solid ${isOpen ? "rgba(184,150,46,0.45)" : "rgba(184,150,46,0.12)"}`, transition: "border-color 0.3s" }}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`service-panel-${idx}`}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1rem",
                    background: isOpen ? "rgba(27,58,75,0.95)" : "rgba(27,58,75,0.5)",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.3s",
                    gap: "0.75rem",
                    boxSizing: "border-box",
                    minWidth: 0,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", flex: 1, minWidth: 0, overflow: "hidden" }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 700, color: "rgba(184,150,46,0.35)", lineHeight: 1, flexShrink: 0, minWidth: "1.8rem" }}>{svc.num}</span>
                    <div style={{ minWidth: 0, overflow: "hidden" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.1rem, 4vw, 1.6rem)", fontWeight: 600, color: "#F5F0E8", margin: 0, lineHeight: 1.2, wordBreak: "break-word" }}>{svc.title}</h3>
                        {svc.free && (
                          <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.58rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#B8962E", background: "rgba(184,150,46,0.1)", border: "1px solid rgba(184,150,46,0.35)", padding: "0.1rem 0.45rem", flexShrink: 0, whiteSpace: "nowrap" }}>
                            {lang === "es" ? "Consulta Gratis" : "Free Consult"}
                          </span>
                        )}
                      </div>
                      <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.65rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "#B8962E", opacity: 0.75, marginTop: "0.2rem", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{svc.subtitle}</div>
                    </div>
                  </div>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B8962E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    style={{ flexShrink: 0, transition: "transform 0.35s ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    aria-hidden="true">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                <div
                  id={`service-panel-${idx}`}
                  style={{
                    overflow: "hidden",
                    maxHeight: isOpen ? "600px" : "0px",
                    transition: "max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: "rgba(18,40,56,0.65)",
                  }}
                >
                  <div style={{ padding: "1.5rem 1rem 2rem", borderTop: "1px solid rgba(184,150,46,0.15)" }}>
                    <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#F5F0E8", opacity: 0.8, lineHeight: 1.8, marginBottom: "1.5rem" }}>{svc.desc}</p>
                    <a className="service-detail-link" href={["/quiebras/", "/herencias/", "/notaria-escrituras/", "/contratos/"][idx]}>{lang === "es" ? "Conocer el servicio" : "View service"} →</a>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                      {svc.points.map((pt) => (
                        <li key={pt} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", fontFamily: "'EB Garamond', serif", fontSize: "0.95rem", color: "#F5F0E8", opacity: 0.7, lineHeight: 1.6 }}>
                          <span style={{ color: "#B8962E", flexShrink: 0, marginTop: "0.1rem" }}>—</span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: "1.75rem" }}>
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'EB Garamond', serif", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8962E", border: "1px solid rgba(184,150,46,0.35)", padding: "0.45rem 1.1rem", textDecoration: "none", transition: "all 0.2s" }}>
                        {lang === "es" ? "Consultar sobre este servicio" : "Inquire about this service"} →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            {tx.heroCta}
          </a>
        </div>
      </div>
    </section>
  );
}
// ─── About ─────────────────────────────────────────────────────────────────────
function About({ lang }: { lang: "es" | "en" }) {
  const tx = t[lang];
  return (
    <section id="nosotros" className="section-pad" style={{ background: "#F5F0E8" }}>
      <div className="container">
        <div className="about-grid">
          <div style={{ position: "relative", paddingTop: "1.5rem", paddingLeft: "1.5rem" }} className="about-photo-wrapper">
            <div className="about-photo-offset" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "2px solid #B8962E", zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1, aspectRatio: "3/4", overflow: "hidden" }}>
              <img src={RAQUEL_PHOTO} alt="Lcda. Raquel Núñez Alicea" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            </div>
            <div className="about-badge-overlay" style={{ position: "absolute", bottom: "-2rem", right: "-2rem", background: "#1B3A4B", padding: "1.25rem 1.5rem", zIndex: 2, border: "1px solid rgba(184,150,46,0.3)" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 700, color: "#B8962E", lineHeight: 1.2 }}>{tx.aboutBadge1}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 700, color: "#B8962E", lineHeight: 1.2 }}>{tx.aboutBadge2}</div>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5F0E8", opacity: 0.7, marginTop: "0.4rem" }}>
                {lang === "es" ? "Tribunales PR" : "PR Courts"}
              </div>
            </div>
          </div>
          <div>
            <span className="section-label" style={{ color: "#B8962E" }}>{tx.aboutLabel}</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#1B3A4B", lineHeight: 1.15, marginBottom: "0.5rem" }}>{tx.aboutTitle1}</h2>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 300, fontStyle: "italic", color: "#B8962E", lineHeight: 1.15, marginBottom: "1.5rem" }}>{tx.aboutTitle2}</h2>
            <span className="gold-divider" style={{ marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", color: "#1B3A4B", opacity: 0.85, lineHeight: 1.8, marginBottom: "1.25rem" }}>{tx.aboutP1}</p>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", color: "#1B3A4B", opacity: 0.85, lineHeight: 1.8, marginBottom: "2rem" }}>{tx.aboutP2}</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "#1B3A4B", color: "#F5F0E8", fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.875rem 2rem", border: "2px solid #1B3A4B", transition: "all 0.25s" }}>
              {tx.aboutCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── Coverage Zone ─────────────────────────────────────────────────────────────
function CoverageZone({ lang }: { lang: "es" | "en" }) {
  const tx = t[lang];
  return (
    <section id="zona" className="section-pad" style={{ background: "#122838", borderTop: "1px solid rgba(184,150,46,0.15)", borderBottom: "1px solid rgba(184,150,46,0.15)" }}>
      <div className="container">
        <div className="zone-grid">
          <div>
            <span className="section-label">{tx.zoneLabel}</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.15, marginBottom: "1rem", whiteSpace: "pre-line" }}>{tx.zoneTitle}</h2>
            <span className="gold-divider" style={{ marginBottom: "1.5rem" }} />
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", color: "#F5F0E8", opacity: 0.75, lineHeight: 1.8, marginBottom: "2rem" }}>{tx.zoneSub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2.5rem" }}>
              {tx.municipalities.map((m, i) => (
                <div key={m} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: i === 0 ? "#B8962E" : "rgba(184,150,46,0.4)", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: i === 0 ? 600 : 400, color: i === 0 ? "#B8962E" : "#F5F0E8", opacity: i === 0 ? 1 : 0.8 }}>{m}</span>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5F0E8", opacity: 0.4 }}>{tx.municipalityNotes[i]}</span>
                </div>
              ))}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">{tx.zoneCta}</a>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <CentralPRMap lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── Blog ──────────────────────────────────────────────────────────────────────
function Blog({ lang }: { lang: "es" | "en" }) {
  const tx = t[lang];
  return (
    <section id="blog" className="section-pad" style={{ background: "#F5F0E8" }}>
      <div className="container">
        <div style={{ marginBottom: "4rem" }}>
          <span className="section-label" style={{ color: "#B8962E" }}>{tx.blogLabel}</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#1B3A4B", lineHeight: 1.1, whiteSpace: "pre-line" }}>{tx.blogTitle}</h2>
        </div>
        <div className="blog-grid">
          {tx.blogPosts.map((post, i) => (
            <article key={i} style={{ background: "#fff", border: "1px solid rgba(27,58,75,0.1)", overflow: "hidden", transition: "all 0.3s", cursor: "pointer" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(27,58,75,0.12)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
              <div style={{ height: "4px", background: "linear-gradient(to right, #1B3A4B, #B8962E)" }} />
              <div style={{ padding: "2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8962E", background: "rgba(184,150,46,0.1)", padding: "0.2rem 0.7rem" }}>{post.tag}</span>
                  <span style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.8rem", color: "#1B3A4B", opacity: 0.45 }}>{lang === "es" ? "Guía de orientación" : "Service guide"}</span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 600, color: "#1B3A4B", lineHeight: 1.3, marginBottom: "0.75rem" }}>{post.title}</h3>
                <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.95rem", color: "#1B3A4B", opacity: 0.7, lineHeight: 1.7, marginBottom: "1.5rem" }}>{post.excerpt}</p>
                <a href={["/quiebras/", "/herencias/", "/notaria-escrituras/"][i]}
                  style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#1B3A4B", borderBottom: "1px solid #B8962E", paddingBottom: "2px" }}>
                  {lang === "es" ? "Leer más →" : "Read more →"}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
// ─── FAQ ───────────────────────────────────────────────────────────────────────
function FAQ({ lang }: { lang: "es" | "en" }) {
  const tx = t[lang];
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="section-pad" style={{ background: "#1B3A4B" }}>
      <div className="container">
        <div className="faq-grid">
          <div className="faq-sticky" style={{ position: "sticky", top: "7rem" }}>
            <span className="section-label">{tx.faqLabel}</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.1, whiteSpace: "pre-line" }}>{tx.faqTitle}</h2>
            <span className="gold-divider" style={{ margin: "1.5rem 0" }} />
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem", color: "#F5F0E8", opacity: 0.6, lineHeight: 1.7, marginBottom: "2rem" }}>
              {lang === "es" ? "¿Tiene otras preguntas? Escríbanos directamente." : "Have other questions? Write to us directly."}
            </p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              {lang === "es" ? "Preguntar Ahora" : "Ask Now"}
            </a>
          </div>
          <div>
            {tx.faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: "1px solid rgba(184,150,46,0.15)", overflow: "hidden" }}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.75rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.3 }}>{faq.q}</span>
                  <span style={{ color: "#B8962E", fontSize: "1.5rem", flexShrink: 0, transition: "transform 0.3s", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
                </button>
                {open === i && (
                  <div style={{ paddingBottom: "1.75rem" }}>
                    <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#F5F0E8", opacity: 0.75, lineHeight: 1.8 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
// ─── Contact ───────────────────────────────────────────────────────────────────
function Contact({ lang }: { lang: "es" | "en" }) {
  const tx = t[lang];
  const icons = [
    <svg key="wa" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
    <svg key="ph" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" /></svg>,
    <svg key="loc" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>,
    <svg key="clk" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  ];
  const hrefs = [WHATSAPP_URL, `tel:9393736637`, "https://maps.google.com/?q=Calle+Antonio+R.+Barcelo+Cidra+PR+00739", null];
  const colors = ["#25D366", "#B8962E", "#B8962E", "#B8962E"];
  return (
    <section id="contacto" className="section-pad" style={{ background: "#122838" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">{tx.contactLabel}</span>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.1, whiteSpace: "pre-line" }}>{tx.contactTitle}</h2>
          <span className="gold-divider" style={{ margin: "1.5rem auto" }} />
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.1rem", color: "#F5F0E8", opacity: 0.7, maxWidth: "480px", margin: "0 auto" }}>{tx.contactSub}</p>
        </div>
        <p style={{ textAlign: "center", margin: "0 auto 2rem", maxWidth: "700px" }}>{lang === "es" ? "Atendemos llamadas de 8:00 a. m. a 5:00 p. m. para coordinar citas. Jueves: oficina cerrada por vistas o asuntos administrativos. Viernes: solo por cita previa, por asuntos administrativos." : "We answer calls from 8:00 a.m. to 5:00 p.m. to schedule appointments. Thursday: office closed for hearings or administrative matters. Friday: by appointment only due to administrative work."}</p>
        <div className="contact-grid" style={{ maxWidth: "900px", margin: "0 auto 3rem" }}>
          {tx.contactItems.map((item, i) => (
            <div key={item.label} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(184,150,46,0.15)", padding: "2rem 1.5rem", textAlign: "center" }}>
              <div style={{ color: colors[i], marginBottom: "1rem", display: "flex", justifyContent: "center" }}>{icons[i]}</div>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#B8962E", marginBottom: "0.5rem" }}>{item.label}</div>
              {hrefs[i] ? (
                <a href={hrefs[i]!} target={hrefs[i]!.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 600, color: "#F5F0E8", textDecoration: "none", lineHeight: 1.5, whiteSpace: "pre-line" }}>
                  {item.value}
                </a>
              ) : (
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 600, color: "#F5F0E8", lineHeight: 1.5, whiteSpace: "pre-line" }}>{item.value}</span>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "#25D366", color: "#fff", fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: "1.15rem", letterSpacing: "0.05em", padding: "1.1rem 2.5rem", transition: "all 0.25s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1ea855"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#25D366"; }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            {tx.whatsappCta}
          </a>
        </div>
      </div>
    </section>
  );
}
// ─── Footer ────────────────────────────────────────────────────────────────────
function Footer({ lang }: { lang: "es" | "en" }) {
  const tx = t[lang];
  return (
    <footer role="contentinfo" style={{ background: "#0d1f2a", borderTop: "1px solid rgba(184,150,46,0.15)", padding: "3rem 0" }}>
      <div className="container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "2rem", marginBottom: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <LogoMark size={36} />
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1rem", color: "#F5F0E8" }}>Lcda. Raquel Núñez Alicea</div>
              <div style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.65rem", color: "#B8962E", letterSpacing: "0.15em", textTransform: "uppercase" }}>Oficina Legal y Notarial · Cidra, PR</div>
            </div>
          </div>
          <nav aria-label={lang === "es" ? "Contacto rápido" : "Quick contact"} style={{ display: "flex", gap: "2rem" }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5F0E8", opacity: 0.5, textDecoration: "none" }}>WhatsApp</a>
            <a href={`tel:9393736637`} aria-label={`${lang === "es" ? "Llamar al" : "Call"} ${PHONE}`} style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#F5F0E8", opacity: 0.5, textDecoration: "none" }}>{PHONE}</a>
          </nav>
        </div>
        <nav aria-label={lang === "es" ? "Enlaces legales" : "Legal links"} style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
          <a href="/politica-de-privacidad/" style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "#B8962E", opacity: 0.75, textDecoration: "none", borderBottom: "1px solid rgba(184,150,46,0.3)" }}>
            {lang === "es" ? "Política de Privacidad" : "Privacy Policy"}
          </a>
          <a href="/terminos-de-uso/" style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "#B8962E", opacity: 0.75, textDecoration: "none", borderBottom: "1px solid rgba(184,150,46,0.3)" }}>
            {lang === "es" ? "Términos de Uso" : "Terms of Use"}
          </a>
          <a href="/accesibilidad/" style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.78rem", letterSpacing: "0.1em", color: "#B8962E", opacity: 0.75, textDecoration: "none", borderBottom: "1px solid rgba(184,150,46,0.3)" }}>
            {lang === "es" ? "Accesibilidad (ADA)" : "Accessibility (ADA)"}
          </a>
        </nav>
        <div role="note" aria-label={lang === "es" ? "Aviso de Agencia de Alivio de Deudas" : "Debt Relief Agency Notice"} style={{ background: "rgba(184,150,46,0.06)", border: "1px solid rgba(184,150,46,0.15)", padding: "1rem 1.5rem", marginBottom: "1.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.82rem", color: "#B8962E", opacity: 0.85, lineHeight: 1.6, margin: 0 }}>
            {tx.footerDebtRelief}
          </p>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.72rem", color: "#B8962E", opacity: 0.7, lineHeight: 1.5, textAlign: "center", letterSpacing: "0.05em" }}>
            {tx.footerLicense}
          </p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.72rem", color: "#F5F0E8", opacity: 0.3, lineHeight: 1.6, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            {tx.footerFederal}
          </p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.72rem", color: "#F5F0E8", opacity: 0.3, lineHeight: 1.6, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            {tx.footerNotary}
          </p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.72rem", color: "#F5F0E8", opacity: 0.25, lineHeight: 1.6, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            {tx.footerDisclaimer}
          </p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.7rem", color: "#F5F0E8", opacity: 0.2, lineHeight: 1.5, textAlign: "center" }}>
            {lang === "es"
              ? "Este sitio cumple con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1 Nivel AA y el Título III de la ADA. Para asistencia de accesibilidad: 939-373-6637."
              : "This site complies with Web Content Accessibility Guidelines (WCAG) 2.1 Level AA and ADA Title III. For accessibility assistance: 939-373-6637."}
          </p>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.72rem", color: "#F5F0E8", opacity: 0.2, lineHeight: 1.5, textAlign: "center", marginTop: "0.5rem" }}>
            © {new Date().getFullYear()} Lcda. Raquel Núñez Alicea. {tx.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
function BankruptcyIntro({ lang }: { lang: "es" | "en" }) {
  return <section className="section-pad bankruptcy-intro"><div className="container">
    <span className="section-label">{lang === "es" ? "Derecho a la Solución.™" : "Your Right to a Solution.™"}</span>
    <h2>{lang === "es" ? "Orientación sobre quiebras cerca de usted" : "Bankruptcy guidance close to home"}</h2>
    <p>{lang === "es" ? "Si las deudas y los cobros le preocupan, el primer paso es entender sus opciones. La Lcda. Raquel Núñez Alicea ofrece orientación y representación en quiebras desde Cidra para personas de Aibonito, Comerío, Barranquitas y Aguas Buenas. En la consulta inicial revisamos su situación y explicamos qué información hace falta para evaluar su caso." : "If debts and collection notices are causing concern, start by understanding your options. Attorney Raquel Núñez Alicea provides bankruptcy guidance and representation from Cidra for clients in Aibonito, Comerío, Barranquitas and Aguas Buenas. We review your circumstances and explain what information is needed to evaluate your case."}</p>
    <p>{lang === "es" ? "No todas las deudas ni todas las situaciones reciben el mismo tratamiento. Antes de presentar una petición, evaluamos sus ingresos, gastos, bienes y obligaciones. La consulta inicial de quiebras es gratuita; la representación y los costos del proceso se discuten por separado." : "Not every debt or situation receives the same treatment. Before filing, we evaluate your income, expenses, property and obligations. The initial bankruptcy consultation is free; representation and case costs are discussed separately."}</p>
    <div className="seo-links"><a href="/quiebras/">{lang === "es" ? "Quiebras en la zona central" : "Bankruptcy in central Puerto Rico"}</a><a href="/quiebras/capitulo-7/">{lang === "es" ? "Capítulo 7" : "Chapter 7"}</a><a href="/quiebras/capitulo-13/">{lang === "es" ? "Capítulo 13" : "Chapter 13"}</a></div>
  </div></section>;
}
// ─── Main Export ───────────────────────────────────────────────────────────────
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"es" | "en">("es");
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return (
    <div style={{ background: "#1B3A4B" }}>
      <a
        href="#main-content"
        style={{
          position: "absolute",
          top: "-40px",
          left: "1rem",
          background: "#B8962E",
          color: "#1B3A4B",
          padding: "0.5rem 1rem",
          zIndex: 9999,
          fontFamily: "'EB Garamond', serif",
          fontWeight: 700,
          fontSize: "0.9rem",
          transition: "top 0.2s",
          textDecoration: "none",
        }}
        onFocus={(e) => { (e.target as HTMLElement).style.top = "1rem"; }}
        onBlur={(e) => { (e.target as HTMLElement).style.top = "-40px"; }}
      >
        {lang === "es" ? "Saltar al contenido principal" : "Skip to main content"}
      </a>
      <Navbar scrolled={scrolled} lang={lang} setLang={setLang} />
      <main id="main-content" tabIndex={-1}>
      <Hero lang={lang} />
      <BankruptcyIntro lang={lang} />
      <Services lang={lang} />
      <About lang={lang} />
      <CoverageZone lang={lang} />
      <Blog lang={lang} />
      <FAQ lang={lang} />
      <Contact lang={lang} />
      </main>
      <Footer lang={lang} />
      <CookieConsent lang={lang} />
    </div>
  );
}
