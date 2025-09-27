import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=60')] bg-cover bg-center text-white"
    >
      <div className="bg-black/40">
        <div className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Construction Services — Build with Integrity
            </h2>
            <p className="mt-4 text-gray-100/90">
              We deliver quality civil engineering, structural works, highways
              and water-related structures with safety and excellence.
            </p>
            <a
              href="#contact"
              className="inline-block mt-6 bg-emerald-700 text-white px-5 py-3 rounded-md font-semibold"
            >
              Get a Quote
            </a>
          </div>

          <aside className="bg-white text-gray-900 rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <p className="text-sm text-gray-500 mt-1">
              Highlighted services & contact
            </p>
            <ul className="mt-3 space-y-2 text-sm list-disc pl-5">
              <li>Structural Engineering</li>
              <li>Project Management</li>
              <li>Highway Infrastructure</li>
              <li>Water Related Structures</li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
