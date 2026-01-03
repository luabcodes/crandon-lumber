function Footer() {
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
            Distribution and export of high-quality lumber and building materials
            for international markets, serving Central America with reliability
            and compliance.
          </p>
        </div>

        {/* PRODUCTS */}
        <div>
          <h4>Products</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "1.8" }}>
            <li>Southern Yellow Pine</li>
            <li>Poplar</li>
            <li>Douglas Fir</li>
            <li>White Oak</li>
            <li>Red Oak</li>
            <li>Caribbean Pine (Ocote)</li>
            <li>Guanacaste</li>
            <li>Primavera (Palo Blanco)</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4>Contact</h4>
          <p style={{ lineHeight: "1.6" }}>
           Miami ,FL
            <br />
            Email: crandonlumberco@outlook.com
            <br />
            Phone: 305 853 6836
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
        © {new Date().getFullYear()} Crandon Lumber. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
