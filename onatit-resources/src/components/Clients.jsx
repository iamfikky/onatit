import React from "react";

export default function Clients() {
  return (
    <section id="clients" className="section">
      <h2>Clients & Testimonials</h2>
      <div style={{ display: "flex", gap: "18px", flexWrap: "wrap", marginTop: "12px" }}>
        <div className="card" style={{ flex: 1, minWidth: "250px" }}>
          <strong>Dangote Industries Ltd.</strong>
          <p className="muted">Renovation of Club House at Osogbo Steel Plant.</p>
        </div>
        <div className="card" style={{ flex: 1, minWidth: "250px" }}>
          <strong>Federal Ministry of Works</strong>
          <p className="muted">Erosion Control and Road Rehabilitation projects.</p>
        </div>
      </div>
    </section>
  );
}
