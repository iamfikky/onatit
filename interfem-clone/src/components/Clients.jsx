import React from "react";

export default function Clients() {
  return (
    <section id="clients" className="mb-12">
      <h2 className="text-2xl font-bold">Clients & Testimonials</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <strong>Dangote Industries Ltd.</strong>
          <p className="text-gray-500 mt-2">
            Renovation of Club House at Osogbo Steel Plant.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <strong>Federal Ministry of Works</strong>
          <p className="text-gray-500 mt-2">
            Erosion Control and Road Rehabilitation projects.
          </p>
        </div>
      </div>
    </section>
  );
}
