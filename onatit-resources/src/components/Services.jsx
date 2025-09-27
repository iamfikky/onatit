import React from "react";

export default function Services() {
  return (
    <section id="services" className="section">
      <h2>Our Services</h2>
      <div className="grid-3" style={{ marginTop: "12px" }}>
        <article className="card" aria-labelledby="s1">
          <h3 id="s1">Structural Engineering</h3>
          <p className="muted">
            Industrial buildings, high-rise construction and residential developments
            backed by structural analysis and certified engineering.
          </p>
        </article>
        <article className="card" aria-labelledby="s2">
          <h3 id="s2">Highway Infrastructure</h3>
          <p className="muted">
            Road rehabilitation, airfield development and transport infrastructure with
            innovative construction techniques.
          </p>
        </article>
        <article className="card" aria-labelledby="s3">
          <h3 id="s3">Water Related Structures</h3>
          <p className="muted">
            Erosion control, flood mitigation and hydraulic structures designed for
            durability and environmental safety.
          </p>
        </article>
      </div>

      <div style={{ marginTop: "22px" }} className="stats">
        <div className="stat">
          <strong>200+</strong>
          <span className="muted">Completed Projects</span>
        </div>
        <div className="stat">
          <strong>700+</strong>
          <span className="muted">Workers Employed</span>
        </div>
        <div className="stat">
          <strong>10</strong>
          <span className="muted">Awards Won</span>
        </div>
      </div>
    </section>
  );
}
