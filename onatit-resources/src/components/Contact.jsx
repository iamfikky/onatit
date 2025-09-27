import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Demo: form submitted\n${JSON.stringify(form, null, 2)}`);
  };

  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 320px",
          gap: "18px",
          marginTop: "12px",
          alignItems: "start",
        }}
      >
        <form className="card" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="6"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <button
            style={{
              background: "var(--accent)",
              color: "#fff",
              padding: "10px 14px",
              borderRadius: "8px",
              border: 0,
              fontWeight: 600,
            }}
          >
            Send Message
          </button>
        </form>

        <aside className="card">
          <h3>Office</h3>
          <p className="muted">No 9, <br />Osogbo, Osun State</p>
          <p style={{ marginTop: "12px" }}>
            <strong>Phone:</strong> +234<br />
            <strong>Email:</strong> .com
          </p>
        </aside>
      </div>
    </section>
  );
}
