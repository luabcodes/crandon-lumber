import { useTranslation } from "react-i18next"

function Header() {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        zIndex: 1000
      }}
    >
      <nav
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "1rem 2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        {/* LOGO */}
        <strong>Crandon Lumber</strong>

        {/* MENU */}
        <ul
          style={{
            display: "flex",
            gap: "1.5rem",
            listStyle: "none",
            margin: 0,
            padding: 0
          }}
        >
          <li><a href="#products">{t("nav.products")}</a></li>
          <li><a href="#about">{t("nav.aboutUs")}</a></li>
          <li><a href="#contact">{t("nav.contact")}</a></li>
        </ul>

        {/* BOTÕES DE IDIOMA */}
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => changeLanguage("en")}
            style={{
              padding: "0.3rem 0.7rem",
              border: "1px solid #ccc",
              background:
                i18n.language === "en" ? "#1F3D2B" : "#ffffff",
              color:
                i18n.language === "en" ? "#ffffff" : "#000000",
              cursor: "pointer",
              borderRadius: "4px"
            }}
          >
            EN
          </button>

          <button
            onClick={() => changeLanguage("es")}
            style={{
              padding: "0.3rem 0.7rem",
              border: "1px solid #ccc",
              background:
                i18n.language === "es" ? "#1F3D2B" : "#ffffff",
              color:
                i18n.language === "es" ? "#ffffff" : "#000000",
              cursor: "pointer",
              borderRadius: "4px"
            }}
          >
            ES
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
