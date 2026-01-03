import { useTranslation } from "react-i18next"
export default function Header() {
 const { t, i18n } = useTranslation()

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
          margin: "0 auto"
        }}
      >
        <strong>Crandon Lumber</strong>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <a href="#products">{t("nav.products")}</a>
          <a href="#about">{t("nav.about")}</a>
          <a href="#contact">{t("nav.contact")}</a>


          {/* Language switch */}
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
            <button onClick={() => i18n.changeLanguage("es")}>ES</button>
          </div>
        </div>
      </nav>
    </header>
  )
}