import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Header() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#ffffff",
        padding: "1rem 2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        zIndex: 1000
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

        {/* Menu links desktop */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
          }}
          className="nav-links"
        >
          <a href="#products">{t("nav.products")}</a>
          <a href="#about">{t("nav.aboutUs")}</a>
          <a href="#contact">{t("nav.contact")}</a>
        </div>

        {/* Botão menu mobile */}
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
          <a href="#products" onClick={() => setMenuOpen(false)}>
            {t("nav.products")}
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            {t("nav.aboutUs")}
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            {t("nav.contact")}
          </a>
        </div>
      )}

      {/* CSS para responsividade */}
      <style>
        {`
          @media (max-width: 768px) {
            .nav-links {
              display: none;
            }
            .menu-btn {
              display: block;
            }
          }
        `}
      </style>
    </header>
  )
}
