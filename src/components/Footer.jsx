function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Company */}
        <div style={styles.column}>
          <h3 style={styles.title}>Crandon Lumber Co.</h3>
          <p style={styles.text}>
            Premium lumber supplier serving construction, decking, and custom
            wood projects across the United States.
          </p>
        </div>

        {/* Contact */}
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Contact</h4>
          <p style={styles.text}>📞 (305) 853-6836</p>
          <p style={styles.text}>✉️ crandonlumberco@outlook.com</p>
          <p style={styles.text}>📍 United States</p>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.subtitle}>Quick Links</h4>
          <a href="#products" style={styles.link}>Products</a>
          <a href="#about" style={styles.link}>About Us</a>
          <a href="#contact" style={styles.link}>Contact</a>
        </div>
      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} Crandon Lumber Co. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#08100b",
    color: "#ffffff",
    paddingTop: "60px",
    marginTop: "100px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  title: {
    fontSize: "1.4rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.1rem",
    marginBottom: "10px",
  },
  text: {
    fontSize: "0.95rem",
    lineHeight: "1.6",
    opacity: 0.9,
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "0.95rem",
    opacity: 0.85,
  },
  bottom: {
    marginTop: "50px",
    padding: "20px",
    textAlign: "center",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    fontSize: "0.85rem",
    opacity: 0.7,
  },
};

export default Footer;
