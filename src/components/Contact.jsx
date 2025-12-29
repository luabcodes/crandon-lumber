import "./Contact.css";
import { useState } from "react";
import bannercllc from "../assets/images/bannercllc.png";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Inquiry from ${form.name}`;
    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `;

    window.location.href = `mailto:crandonlumberco@outlook.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      style={{
        padding: "120px 64px",
        background: "#0b140e",
        color: "#ffffff",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        Contact Us
      </h2>

      {/* Formulário */}
     <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="message"
          placeholder="Tell us about your project or request"
          rows="5"
          required
          value={form.message}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button type="submit" style={styles.button}>
          Send Message
        </button>
      </form>

      {/* Banner */}
     <div className="contact-banner">

        <img
          src={bannercllc}
          alt="Crandon Lumber Banner"
          style={{
            width: "100%",
            maxWidth: "1000px",
            borderRadius: "18px",
          }}
        />
      </div>
    </section>
  );
}

const styles = {
  input: {
    padding: "14px 16px",
    borderRadius: "10px",
    border: "none",
    fontSize: "1rem",
  },
  textarea: {
    padding: "14px 16px",
    borderRadius: "10px",
    border: "none",
    fontSize: "1rem",
    resize: "none",
  },
  button: {
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#1f8f4a",
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
  },
};

export default Contact;
