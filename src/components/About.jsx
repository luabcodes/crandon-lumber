import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      style={{
        padding: "6rem 2rem",
        backgroundColor: "#f0f4f8",
        maxWidth: "1000px",
        margin: "0 auto",
        lineHeight: "1.7",
        borderRadius: "12px",
      }}
    >
      <h2>{t("about.title")}</h2>

      <p style={{ marginBottom: "1.8rem", fontSize: "1rem", color: "#333333" }}>
        {t("about.p1")}
      </p>

      <p style={{ marginBottom: "1.8rem", fontSize: "1rem", color: "#333333" }}>
        {t("about.p2")}
      </p>

      <h3 style={{ marginBottom: "1rem", color: "#1F3D2B" }}>
        {t("about.marketTitle")}
      </h3>
      <p style={{ marginBottom: "1.8rem", fontSize: "1rem", color: "#333333" }}>
        {t("about.p3")}
      </p>

      <h3 style={{ marginBottom: "1rem", color: "#1F3D2B" }}>
        {t("about.complianceTitle")}
      </h3>
      <p style={{ marginBottom: "1.8rem", fontSize: "1rem", color: "#333333" }}>
        {t("about.p4")}
      </p>

      <h3 style={{ marginBottom: "1rem", color: "#1F3D2B" }}>
        {t("about.logisticsTitle")}
      </h3>
      <p style={{ marginBottom: "1.8rem", fontSize: "1rem", color: "#333333" }}>
        {t("about.p5")}
      </p>

      <h3 style={{ marginBottom: "1rem", color: "#1F3D2B" }}>
        {t("about.advantageTitle")}
      </h3>
      <p style={{ marginBottom: "1.8rem", fontSize: "1rem", color: "#333333" }}>
        {t("about.p6")}
      </p>

      <h3 style={{ marginBottom: "1rem", color: "#1F3D2B" }}>
        {t("about.commitmentTitle")}
      </h3>
      <p style={{ fontSize: "1rem", color: "#333333" }}>
        {t("about.p7")}
      </p>
    </section>
  );
}
