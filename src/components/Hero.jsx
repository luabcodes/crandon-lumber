import { useTranslation } from "react-i18next"
import heroVideo from "../assets/wood.mp4"

function Hero() {
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
        <h1>Crandon Lumber</h1>
        <p>
          {t("hero.subtitle")}
        </p>
      </div>
    </section>
  )
}

export default Hero
