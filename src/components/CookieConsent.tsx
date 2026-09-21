import { useState, useEffect } from "react";

export default function CookieConsent({ lang }: { lang: "es" | "en" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={lang === "es" ? "Aviso de cookies" : "Cookie notice"}
      style={{
        position: "fixed",
        bottom: "1.5rem",
        left: "1.5rem",
        right: "1.5rem",
        maxWidth: "480px",
        zIndex: 100,
        background: "rgba(18,40,56,0.97)",
        border: "1px solid rgba(184,150,46,0.3)",
        padding: "1.5rem",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      <p
        style={{
          fontFamily: "'EB Garamond', serif",
          fontSize: "0.9rem",
          color: "#F5F0E8",
          opacity: 0.8,
          lineHeight: 1.6,
          marginBottom: "1rem",
        }}
      >
        {lang === "es"
          ? "Este sitio utiliza cookies para mejorar su experiencia de navegación. Al continuar, acepta nuestra política de cookies."
          : "This site uses cookies to enhance your browsing experience. By continuing, you accept our cookie policy."}
      </p>
      <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
        <button
          onClick={accept}
          style={{
            background: "#B8962E",
            color: "#1B3A4B",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 600,
            fontSize: "0.82rem",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.5rem 1.5rem",
            border: "none",
            cursor: "pointer",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = "#D4AF6A";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = "#B8962E";
          }}
        >
          {lang === "es" ? "Aceptar" : "Accept"}
        </button>
        <a
          href="/politica-de-privacidad/"
          style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            color: "#B8962E",
            opacity: 0.75,
            alignSelf: "center",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
          }}
        >
          {lang === "es" ? "Más información" : "Learn more"}
        </a>
      </div>
    </div>
  );
}
