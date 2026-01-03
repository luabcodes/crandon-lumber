import { useTranslation } from "react-i18next"

import southernYellowPine from "../assets/southern-yellow-pine.jpg"
import poplar from "../assets/poplar.jpg"
import douglasFir from "../assets/douglas-fir.jpg"
import whiteOak from "../assets/white-oak.jpg"
import redOak from "../assets/red-oak.jpg"
import caribbeanPine from "../assets/caribbean-pine.jpg"
import guanacaste from "../assets/guanacaste.jpg"
import primavera from "../assets/primavera.jpg"

export default function Products() {
  const { t } = useTranslation()

  const products = [
    {
      key: "syp",
      image: southernYellowPine
    },
    {
      key: "poplar",
      image: poplar
    },
    {
      key: "douglasFir",
      image: douglasFir
    },
    {
      key: "whiteOak",
      image: whiteOak
    },
    {
      key: "redOak",
      image: redOak
    },
    {
      key: "caribbeanPine",
      image: caribbeanPine
    },
    {
      key: "guanacaste",
      image: guanacaste
    },
    {
      key: "primavera",
      image: primavera
    }
  ]

  return (
    <section
      id="products"
      style={{ padding: "4rem 2rem", backgroundColor: "#f0f4f8" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
        {t("products.title")}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2.5rem",
          maxWidth: "1200px",
          margin: "0 auto"
        }}
      >
        {products.map((item) => (
          <div
            key={item.key}
            style={{
              background: "#ffffff",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 6px 14px rgba(0,0,0,0.08)"
            }}
          >
            <img
              src={item.image}
              alt={t(`products.${item.key}.name`)}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "1.4rem" }}>
              <h3 style={{ marginBottom: "0.6rem" }}>
                {t(`products.${item.key}.name`)}
              </h3>

              <p style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                {t(`products.${item.key}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
