import React from "react";
import logo from "../assets/onatit.png";

export default function Hero() {
  return (
      <section className="hero" aria-label="Hero">
      <div className="wrap">
        <div>
          <h2>Construction Services — Build with Integrity</h2>
          <p>
            We deliver quality civil engineering, structural works, highways and
            water-related structures with safety and excellence.
          </p>
          <a className="cta" href="#contact">Get a Quote</a>
        </div>
        <aside className="card bg-hero">
          <h3>Quick Links</h3>
          <p className="muted">Highlighted services &amp; contact</p>
          <ul style={{ paddingLeft: "18px", marginTop: "12px" }}>
            <li>Structural Engineering</li>
            <li>Project Management</li>
            <li>Highway Infrastructure</li>
            <li>Water Related Structures</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
