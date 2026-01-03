import heroVideo from "../assets/wood.mp4"
import { useTranslation } from "react-i18next"

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section style={{ width: "100%" }}>
      {/* VÍDEO */}
      <video
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "80vh",
          objectFit: "cover"
        }}
      />

      {/* TEXTO ABAIXO DO VÍDEO */}
      <div
        style={{
          padding: "3rem",
          textAlign: "center",
          backgroundColor: "#ffffff"
        }}
      >
        <h1>{t("hero.title")}</h1>
        <p>{t("hero.subtitle")}</p>
      </div>
    </section>
  )
}
