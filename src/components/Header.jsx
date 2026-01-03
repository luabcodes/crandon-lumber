import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const langButtonStyle = {
    background: "#1f3d2b",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    padding: "0.3rem 0.7rem",
    cursor: "pointer",
    fontWeight: "600",
    transition: "background 0.3s",
  };

  const langButtonHover = {
    background: "#16603f",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#ffffff",
        padding: "1rem 2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 1000,
      }}
    >
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <strong>Crandon Lumber</strong>

        {/* Menu desktop */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }} className="nav-links">
          <a href="#products">{t("nav.products")}</a>
          <a href="#about">{t("nav.aboutUs")}</a>
          <a href="#contact">{t("nav.contact")}</a>

          {/* Botões de idioma desktop */}
          <button onClick={() => changeLanguage("en")} style={langButtonStyle}>EN</button>
          <button onClick={() => changeLanguage("es")} style={langButtonStyle}>ES</button>
        </div>

        {/* Botão mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
          className="menu-btn"
        >
          ☰
        </button>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
            textAlign: "center",
          }}
          className="mobile-menu"
        >
          <a href="#products" onClick={() => setMenuOpen(false)}>{t("nav.products")}</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>{t("nav.aboutUs")}</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>{t("nav.contact")}</a>

          {/* Botões de idioma mobile */}
          <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "0.5rem" }}>
            <button onClick={() => changeLanguage("en")} style={langButtonStyle}>EN</button>
            <button onClick={() => changeLanguage("es")} style={langButtonStyle}>ES</button>
          </div>
        </div>
      )}

      <style>
        {`
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .menu-btn { display: block; }
          }
          button:hover {
            background: #16603f;
          }
        `}
      </style>
    </header>
  );
}
