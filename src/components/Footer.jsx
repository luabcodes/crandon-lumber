import { useTranslation } from "react-i18next"

function Footer() {
  const { t } = useTranslation()

  return (
    <footer
      style={{
        backgroundColor: "#1f2933",
        color: "#ffffff",
        padding: "3rem 2rem",
        marginTop: "4rem"
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem"
        }}
      >
        {/* COMPANY */}
        <div>
          <h3>Crandon Lumber</h3>
          <p style={{ lineHeight: "1.6", fontSize: "0.95rem" }}>
            {t("footer.companyDescription")}
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4>{t("footer.productsTitle")}</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>{t("products.syp.name")}</li>
            <li>{t("products.poplar.name")}</li>
            <li>{t("products.douglasFir.name")}</li>
            <li>{t("products.whiteOak.name")}</li>
            <li>{t("products.redOak.name")}</li>
            <li>{t("products.caribbeanPine.name")}</li>
            <li>{t("products.guanacaste.name")}</li>
            <li>{t("products.primavera.name")}</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4>{t("footer.contactTitle")}</h4>
          <p style={{ lineHeight: "1.6" }}>
            Miami, FL
            <br />
            Email: crandonlumberco@outlook.com
            <br />
            {t("footer.phone")}: 305 853 6836
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div
        style={{
          borderTop: "1px solid #374151",
          marginTop: "2rem",
          paddingTop: "1.5rem",
          textAlign: "center",
          fontSize: "0.85rem",
          color: "#d1d5db"
        }}
      >
        © {new Date().getFullYear()} Crandon Lumber. {t("footer.rights")}
      </div>
    </footer>
  )
}

export default Footer
