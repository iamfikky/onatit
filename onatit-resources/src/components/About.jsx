import React from "react";

export default function About() {
  return (
    <section id="about" className="section">
      <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "260px" }}>
          <h2>Who We Are</h2>
          <p className="muted">
            Interfem Reconstruction Company Limited is a thriving indigenous construction
            firm specialising in highways &amp; bridges, structural works, geotechnics and
            water engineering. Our multidisciplinary team delivers turnkey projects from
            design to completion.
          </p>
        </div>
        <div style={{ width: "320px" }} className="card">
          <strong>Registered</strong>
          <p className="muted" style={{ marginTop: "8px" }}>
            Registered under Companies and Allied Matters Act. RC: 953604
          </p>
        </div>
      </div>
    </section>
  );
}
