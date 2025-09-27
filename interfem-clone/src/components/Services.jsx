import React from "react";

export default function Services() {
  return (
    <section id="services" className="mb-12">
      <h2 className="text-2xl font-bold">Our Services</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Structural Engineering</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Industrial buildings, high-rise construction and residential
            developments backed by structural analysis and certified
            engineering.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Highway Infrastructure</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Road rehabilitation, airfield development and transport
            infrastructure with innovative construction techniques.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="font-semibold">Water Related Structures</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Erosion control, flood mitigation and hydraulic structures designed
            for durability and environmental safety.
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-3xl font-bold">200+</div>
          <div className="text-gray-500">Completed Projects</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-3xl font-bold">700+</div>
          <div className="text-gray-500">Workers Employed</div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <div className="text-3xl font-bold">10</div>
          <div className="text-gray-500">Awards Won</div>
        </div>
      </div>
    </section>
  );
}
