import { useTranslation } from "react-i18next"

function Contact() {
  const { t } = useTranslation()

  return (
    <section
      id="contact"
      style={{
        padding: "4rem",
        backgroundColor: "#F5F5F5"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>
          {t("contact.title")}
        </h2>

        <p style={{ marginBottom: "2rem", fontSize: "1.05rem" }}>
          {t("contact.description")}
        </p>

        <a
          href="mailto:crandonlumberco@outlook.com"
          style={{
            display: "inline-block",
            padding: "0.9rem 2rem",
            backgroundColor: "#1F3D2B",
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: "600",
            borderRadius: "6px"
          }}
        >
          {t("contact.email")}
        </a>
      </div>
    </section>
  )
}

export default Contact
