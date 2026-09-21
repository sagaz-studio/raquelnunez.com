import { useState } from "react";

const LOGO_URL = "/raquel-logo.png";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const content = {
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última actualización: marzo 2026",
      intro: "Lcda. Raquel Núñez Alicea, Oficina Legal y Notarial (\"nosotros\", \"nuestro\" o \"la Firma\") respeta su privacidad y se compromete a proteger su información personal. Esta Política de Privacidad describe cómo recopilamos, utilizamos y protegemos su información cuando visita nuestro sitio web www.raquelnunez.com.",
      sections: [
        {
          heading: "1. Información que Recopilamos",
          text: "Podemos recopilar la siguiente información:\n\n• Información de contacto: nombre, número de teléfono, dirección de correo electrónico cuando nos contacta a través de WhatsApp, teléfono o formularios.\n• Información de navegación: dirección IP, tipo de navegador, páginas visitadas, tiempo en el sitio, mediante cookies y tecnologías similares.\n• Información proporcionada voluntariamente: cualquier información que usted nos comunique al solicitar nuestros servicios legales.",
        },
        {
          heading: "2. Uso de la Información",
          text: "Utilizamos su información para:\n\n• Responder a sus consultas y solicitudes de servicios legales\n• Mejorar nuestro sitio web y la experiencia del usuario\n• Cumplir con obligaciones legales y profesionales\n• Enviar comunicaciones relacionadas con nuestros servicios (solo con su consentimiento)",
        },
        {
          heading: "3. Cookies",
          text: "Nuestro sitio utiliza cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar cookies, aunque esto podría afectar la funcionalidad del sitio.",
        },
        {
          heading: "4. Compartir Información",
          text: "No vendemos, alquilamos ni compartimos su información personal con terceros, excepto:\n\n• Cuando sea necesario para prestar nuestros servicios legales\n• Cuando lo requiera la ley o una orden judicial\n• Con proveedores de servicios que nos asisten en la operación del sitio web (bajo acuerdos de confidencialidad)",
        },
        {
          heading: "5. Seguridad",
          text: "Implementamos medidas de seguridad razonables para proteger su información personal contra acceso no autorizado, alteración o destrucción. Sin embargo, ninguna transmisión por Internet es completamente segura.",
        },
        {
          heading: "6. Retención de Datos",
          text: "Retenemos su información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, o según lo requieran las obligaciones legales y profesionales aplicables.",
        },
        {
          heading: "7. Sus Derechos",
          text: "Usted tiene derecho a:\n\n• Acceder a su información personal\n• Solicitar la corrección de información inexacta\n• Solicitar la eliminación de su información\n• Retirar su consentimiento en cualquier momento\n\nPara ejercer estos derechos, contáctenos al 939-373-6637.",
        },
        {
          heading: "8. Cambios a esta Política",
          text: "Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Los cambios serán publicados en esta página con la fecha de última actualización.",
        },
        {
          heading: "9. Contacto",
          text: "Si tiene preguntas sobre esta Política de Privacidad, contáctenos:\n\nLcda. Raquel Núñez Alicea\nCalle Antonio R. Barceló\nCidra, PR 00739\nTeléfono: 939-373-6637",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: March 2026",
      intro: "Lcda. Raquel Núñez Alicea, Legal and Notarial Office (\"we\", \"our\" or \"the Firm\") respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and protect your information when you visit our website www.raquelnunez.com.",
      sections: [
        {
          heading: "1. Information We Collect",
          text: "We may collect the following information:\n\n• Contact information: name, phone number, email address when you contact us through WhatsApp, phone, or forms.\n• Browsing information: IP address, browser type, pages visited, time on site, through cookies and similar technologies.\n• Voluntarily provided information: any information you communicate to us when requesting our legal services.",
        },
        {
          heading: "2. Use of Information",
          text: "We use your information to:\n\n• Respond to your inquiries and service requests\n• Improve our website and user experience\n• Comply with legal and professional obligations\n• Send communications related to our services (only with your consent)",
        },
        {
          heading: "3. Cookies",
          text: "Our site uses cookies to improve your browsing experience. You can configure your browser to reject cookies, although this may affect site functionality.",
        },
        {
          heading: "4. Sharing Information",
          text: "We do not sell, rent, or share your personal information with third parties, except:\n\n• When necessary to provide our legal services\n• When required by law or court order\n• With service providers who assist us in operating the website (under confidentiality agreements)",
        },
        {
          heading: "5. Security",
          text: "We implement reasonable security measures to protect your personal information against unauthorized access, alteration, or destruction. However, no Internet transmission is completely secure.",
        },
        {
          heading: "6. Data Retention",
          text: "We retain your personal information only for as long as necessary to fulfill the purposes described in this policy, or as required by applicable legal and professional obligations.",
        },
        {
          heading: "7. Your Rights",
          text: "You have the right to:\n\n• Access your personal information\n• Request correction of inaccurate information\n• Request deletion of your information\n• Withdraw your consent at any time\n\nTo exercise these rights, contact us at 939-373-6637.",
        },
        {
          heading: "8. Changes to this Policy",
          text: "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with the last updated date.",
        },
        {
          heading: "9. Contact",
          text: "If you have questions about this Privacy Policy, contact us:\n\nLcda. Raquel Núñez Alicea\nCalle Antonio R. Barceló\nCidra, PR 00739\nPhone: 939-373-6637",
        },
      ],
    },
  };

  const tx = content[lang];

  return (
    <div style={{ background: "#F5F0E8", minHeight: "100vh" }}>
      {/* Header */}
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

      {/* Content */}
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

      {/* Footer */}
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
