import { useState } from "react";

const LOGO_URL = "/raquel-logo.png";

export default function Accessibility() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const content = {
    es: {
      title: "Declaración de Accesibilidad (ADA)",
      lastUpdated: "Última actualización: marzo 2026",
      intro: "Lcda. Raquel Núñez Alicea se compromete a garantizar la accesibilidad digital para personas con discapacidades. Continuamente mejoramos la experiencia del usuario para todos y aplicamos los estándares de accesibilidad pertinentes.",
      sections: [
        {
          heading: "Estándares de Conformidad",
          text: "Nuestro sitio web se esfuerza por cumplir con las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.1, Nivel AA, y el Título III de la Ley de Estadounidenses con Discapacidades (ADA).",
        },
        {
          heading: "Medidas de Accesibilidad",
          text: "Hemos tomado las siguientes medidas para asegurar la accesibilidad de nuestro sitio:\n\n• Enlace de \"Saltar al contenido principal\" para navegación por teclado\n• Texto alternativo descriptivo para todas las imágenes\n• Estructura semántica con encabezados jerárquicos apropiados\n• Contraste de color suficiente entre texto y fondo\n• Navegación completa por teclado\n• Etiquetas ARIA para elementos interactivos\n• Diseño responsivo para todos los tamaños de pantalla\n• Texto redimensionable sin pérdida de funcionalidad",
        },
        {
          heading: "Compatibilidad con Tecnologías Asistivas",
          text: "Nuestro sitio es compatible con:\n\n• Lectores de pantalla (NVDA, JAWS, VoiceOver)\n• Software de ampliación de pantalla\n• Software de reconocimiento de voz\n• Navegación por teclado",
        },
        {
          heading: "Retroalimentación",
          text: "Agradecemos sus comentarios sobre la accesibilidad de nuestro sitio. Si encuentra barreras de accesibilidad, por favor contáctenos:\n\nTeléfono: 939-373-6637\nDirección: Calle Antonio R. Barceló, Cidra, PR 00739\n\nHaremos nuestro mejor esfuerzo para responder dentro de 2 días laborables.",
        },
      ],
    },
    en: {
      title: "Accessibility Statement (ADA)",
      lastUpdated: "Last updated: March 2026",
      intro: "Lcda. Raquel Núñez Alicea is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply the relevant accessibility standards.",
      sections: [
        {
          heading: "Conformance Standards",
          text: "Our website strives to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, and Title III of the Americans with Disabilities Act (ADA).",
        },
        {
          heading: "Accessibility Measures",
          text: "We have taken the following measures to ensure the accessibility of our site:\n\n• \"Skip to main content\" link for keyboard navigation\n• Descriptive alternative text for all images\n• Semantic structure with appropriate hierarchical headings\n• Sufficient color contrast between text and background\n• Full keyboard navigation\n• ARIA labels for interactive elements\n• Responsive design for all screen sizes\n• Resizable text without loss of functionality",
        },
        {
          heading: "Assistive Technology Compatibility",
          text: "Our site is compatible with:\n\n• Screen readers (NVDA, JAWS, VoiceOver)\n• Screen magnification software\n• Voice recognition software\n• Keyboard navigation",
        },
        {
          heading: "Feedback",
          text: "We welcome your feedback on the accessibility of our site. If you encounter accessibility barriers, please contact us:\n\nPhone: 939-373-6637\nAddress: Calle Antonio R. Barceló, Cidra, PR 00739\n\nWe will make our best effort to respond within 2 business days.",
        },
      ],
    },
  };

  const tx = content[lang];

  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh" }}>
      <nav style={{ background: "rgba(27,58,75,0.97)", borderBottom: "1px solid rgba(184,150,46,0.2)", padding: "1rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
            <img src={LOGO_URL} alt="Logo" width={36} height={36} style={{ objectFit: "contain" }} />
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: "1rem", color: "#F5F0E8" }}>
              Lcda. Raquel Núñez Alicea
            </span>
          </a>
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.8rem", letterSpacing: "0.15em", color: "#B8962E", background: "rgba(184,150,46,0.1)", border: "1px solid rgba(184,150,46,0.4)", padding: "0.35rem 0.9rem", cursor: "pointer" }}
          >
            {lang === "es" ? "EN" : "ES"}
          </button>
        </div>
      </nav>
      <div className="container" style={{ maxWidth: "800px", padding: "4rem 1.5rem" }}>
        <a href="/" style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8962E", textDecoration: "none", marginBottom: "2rem", display: "inline-block" }}>
          ← {lang === "es" ? "Volver al Inicio" : "Back to Home"}
        </a>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#1B3A4B", marginBottom: "0.5rem" }}>
          {tx.title}
        </h1>
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.85rem", color: "#1B3A4B", opacity: 0.5, marginBottom: "2rem" }}>
          {tx.lastUpdated}
        </p>
        <div style={{ width: "3rem", height: "2px", background: "#B8962E", marginBottom: "2rem" }} />
        <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem", color: "#1B3A4B", opacity: 0.85, lineHeight: 1.8, marginBottom: "2.5rem" }}>
          {tx.intro}
        </p>
        {tx.sections.map((sec, i) => (
          <div key={i} style={{ marginBottom: "2rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 600, color: "#1B3A4B", marginBottom: "0.75rem" }}>
              {sec.heading}
            </h2>
            <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "1rem", color: "#1B3A4B", opacity: 0.8, lineHeight: 1.8, whiteSpace: "pre-line" }}>
              {sec.text}
            </p>
          </div>
        ))}
      </div>
      <footer style={{ background: "#0d1f2a", padding: "2rem 0", borderTop: "1px solid rgba(184,150,46,0.15)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "'EB Garamond', serif", fontSize: "0.72rem", color: "#F5F0E8", opacity: 0.3 }}>
            © {new Date().getFullYear()} Lcda. Raquel Núñez Alicea. {lang === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  );
}
