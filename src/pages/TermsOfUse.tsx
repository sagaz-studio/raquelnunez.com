import { useState } from "react";

const LOGO_URL = "/raquel-logo.png";

export default function TermsOfUse() {
  const [lang, setLang] = useState<"es" | "en">("es");

  const content = {
    es: {
      title: "Términos de Uso",
      lastUpdated: "Última actualización: marzo 2026",
      intro: "Al acceder y utilizar el sitio web www.raquelnunez.com (el \"Sitio\"), usted acepta estos Términos de Uso. Si no está de acuerdo, por favor no utilice el Sitio.",
      sections: [
        {
          heading: "1. Propósito Informativo",
          text: "El contenido de este Sitio es para propósitos informativos únicamente y no constituye asesoramiento legal. La información proporcionada no debe ser interpretada como consejo legal ni como sustituto de una consulta profesional con un abogado licenciado.",
        },
        {
          heading: "2. No se Establece Relación Abogado-Cliente",
          text: "La comunicación a través de este Sitio, incluyendo mensajes por WhatsApp, teléfono o cualquier formulario de contacto, no establece una relación abogado-cliente. Dicha relación solo se formaliza mediante un acuerdo escrito de representación legal.",
        },
        {
          heading: "3. Resultados No Garantizados",
          text: "Los resultados anteriores no garantizan resultados similares en casos futuros. Cada situación legal es única y los resultados dependen de las circunstancias específicas de cada caso.",
        },
        {
          heading: "4. Propiedad Intelectual",
          text: "Todo el contenido del Sitio, incluyendo texto, gráficos, logotipos, imágenes y diseño, es propiedad de Lcda. Raquel Núñez Alicea y está protegido por las leyes de propiedad intelectual aplicables. No se permite la reproducción sin autorización escrita.",
        },
        {
          heading: "5. Servicios Notariales",
          text: "Los servicios notariales ofrecidos a través de este Sitio son prestados por Lcda. Raquel Núñez Alicea en su capacidad como Notaria Pública de Puerto Rico. Los servicios notariales no constituyen representación legal.",
        },
        {
          heading: "6. Agencia de Alivio de Deudas",
          text: "De conformidad con 11 U.S.C. § 528, notificamos que somos una agencia de alivio de deudas. Ayudamos a personas a solicitar protección por quiebra bajo el Código de Quiebras de los Estados Unidos.",
        },
        {
          heading: "7. Limitación de Responsabilidad",
          text: "Lcda. Raquel Núñez Alicea no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de este Sitio.",
        },
        {
          heading: "8. Ley Aplicable",
          text: "Estos Términos se rigen por las leyes del Estado Libre Asociado de Puerto Rico y las leyes federales de los Estados Unidos aplicables.",
        },
        {
          heading: "9. Cambios",
          text: "Nos reservamos el derecho de modificar estos Términos en cualquier momento. Los cambios entran en vigor al ser publicados en el Sitio.",
        },
        {
          heading: "10. Contacto",
          text: "Para preguntas sobre estos Términos:\n\nLcda. Raquel Núñez Alicea\nCalle Antonio R. Barceló\nCidra, PR 00739\nTeléfono: 939-373-6637",
        },
      ],
    },
    en: {
      title: "Terms of Use",
      lastUpdated: "Last updated: March 2026",
      intro: "By accessing and using the website www.raquelnunez.com (the \"Site\"), you agree to these Terms of Use. If you do not agree, please do not use the Site.",
      sections: [
        {
          heading: "1. Informational Purpose",
          text: "The content of this Site is for informational purposes only and does not constitute legal advice. The information provided should not be construed as legal advice or as a substitute for professional consultation with a licensed attorney.",
        },
        {
          heading: "2. No Attorney-Client Relationship",
          text: "Communication through this Site, including messages via WhatsApp, phone, or any contact form, does not establish an attorney-client relationship. Such relationship is only formalized through a written legal representation agreement.",
        },
        {
          heading: "3. Results Not Guaranteed",
          text: "Prior results do not guarantee similar outcomes in future cases. Each legal situation is unique and results depend on the specific circumstances of each case.",
        },
        {
          heading: "4. Intellectual Property",
          text: "All content on the Site, including text, graphics, logos, images, and design, is the property of Lcda. Raquel Núñez Alicea and is protected by applicable intellectual property laws. Reproduction without written authorization is not permitted.",
        },
        {
          heading: "5. Notarial Services",
          text: "Notarial services offered through this Site are provided by Lcda. Raquel Núñez Alicea in her capacity as Notary Public of Puerto Rico. Notarial services do not constitute legal representation.",
        },
        {
          heading: "6. Debt Relief Agency",
          text: "Pursuant to 11 U.S.C. § 528, we notify that we are a debt relief agency. We help people file for bankruptcy relief under the Bankruptcy Code of the United States.",
        },
        {
          heading: "7. Limitation of Liability",
          text: "Lcda. Raquel Núñez Alicea shall not be liable for direct, indirect, incidental, or consequential damages resulting from the use or inability to use this Site.",
        },
        {
          heading: "8. Governing Law",
          text: "These Terms are governed by the laws of the Commonwealth of Puerto Rico and applicable federal laws of the United States.",
        },
        {
          heading: "9. Changes",
          text: "We reserve the right to modify these Terms at any time. Changes take effect upon being published on the Site.",
        },
        {
          heading: "10. Contact",
          text: "For questions about these Terms:\n\nLcda. Raquel Núñez Alicea\nCalle Antonio R. Barceló\nCidra, PR 00739\nPhone: 939-373-6637",
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
