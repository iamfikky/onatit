import React from "react";

export default function About() {
  return (
    <section id="about" className="mb-10 grid md:grid-cols-2 gap-6 items-center">
      <div>
        <h2 className="text-2xl font-bold">Who We Are</h2>
        <p className="text-gray-600 mt-3">
          Interfem Reconstruction Company Limited is a thriving indigenous
          construction firm specialising in highways & bridges, structural
          works, geotechnics and water engineering. Our multidisciplinary team
          delivers turnkey projects from design to completion.
        </p>
      </div>
      <div className="bg-white p-5 rounded-lg shadow">
        <strong>Registered</strong>
        <p className="text-sm text-gray-500 mt-2">
          Registered under Companies and Allied Matters Act. RC: 953604
        </p>
      </div>
    </section>
  );
}
