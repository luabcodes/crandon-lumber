function Contact() {
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
        <h2 style={{ marginBottom: "1rem" }}>Contact Us</h2>

        <p style={{ marginBottom: "2rem", fontSize: "1.05rem" }}>
          For inquiries, quotations, or partnership opportunities, please contact
          us via email. Our team will respond promptly.
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
          Contact Us
        </a>
      </div>
    </section>
  )
}

export default Contact
