import southernYellowPine from "../assets/southern-yellow-pine.jpg"
import poplar from "../assets/poplar.jpg"
import douglasFir from "../assets/douglas-fir.jpg"
import whiteOak from "../assets/white-oak.jpg"
import redOak from "../assets/red-oak.jpg"
import caribbeanPine from "../assets/caribbean-pine.jpg"
import guanacaste from "../assets/guanacaste.jpg"
import primavera from "../assets/primavera.jpg"

const products = [
  {
    name: "Southern Yellow Pine",
    image: southernYellowPine,
    description:
      "A strong and versatile softwood widely used in construction, structural applications, decking, and industrial projects. Known for its durability, availability, and excellent performance in treated applications."
  },
  {
    name: "Poplar",
    image: poplar,
    description:
      "A lightweight hardwood with a smooth texture, commonly used for furniture components, interior finishes, moldings, and packaging. Easy to work with and cost-effective."
  },
  {
    name: "Douglas Fir",
    image: douglasFir,
    description:
      "A premium softwood valued for its high strength-to-weight ratio. Ideal for beams, framing, flooring, and engineered wood products in residential and commercial construction."
  },
  {
    name: "White Oak",
    image: whiteOak,
    description:
      "A durable hardwood with excellent resistance to moisture. Widely used for flooring, cabinetry, barrels, and high-end furniture, offering both strength and refined appearance."
  },
  {
    name: "Red Oak",
    image: redOak,
    description:
      "A popular hardwood known for its attractive grain and strength. Commonly used in furniture, flooring, interior finishes, and architectural millwork."
  },
  {
    name: "Caribbean Pine (Ocote)",
    image: caribbeanPine,
    description:
      "A resilient softwood native to Central America, suitable for construction, pallets, crates, and industrial uses. Appreciated for its stability and workability."
  },
  {
    name: "Guanacaste",
    image: guanacaste,
    description:
      "A tropical hardwood recognized for its unique grain patterns and warm tones. Ideal for furniture, tabletops, doors, and decorative applications."
  },
  {
    name: "Primavera (Palo Blanco)",
    image: primavera,
    description:
      "A lightweight tropical hardwood with a fine texture. Commonly used for furniture, veneers, plywood, and interior applications requiring a smooth finish."
  }
]

export default function Products() {
  return (
    <section
      id="products"
      style={{ padding: "4rem", backgroundColor: "#f0f4f8" }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "3rem" }}>
        Our Wood Species
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "2.5rem"
        }}
      >
        {products.map((item) => (
          <div
            key={item.name}
            style={{
              background: "#fff",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover"
              }}
            />

            <div style={{ padding: "1.2rem" }}>
              <h3 style={{ marginBottom: "0.5rem" }}>{item.name}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: "1.5" }}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
