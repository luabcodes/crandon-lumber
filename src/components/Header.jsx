export default function Header() {
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

        <div style={{ display: "flex", gap: "1.5rem" }}>
          <a href="#products">Products</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
    </header>
  )
}
