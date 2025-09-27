import React, { useState } from "react";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    { id: 1, cat: "completed", img: "https://images.unsplash.com/photo-1581091870622-3d1a0e8d4b1a?auto=format&fit=crop&w=1200&q=60", title: "Bridge Rehab" },
    { id: 2, cat: "buildings", img: "https://images.unsplash.com/photo-1566150902862-6a0b7d73b3b6?auto=format&fit=crop&w=1200&q=60", title: "Office Tower" },
    { id: 3, cat: "road", img: "https://images.unsplash.com/photo-1505842465776-3d6cfb6c9b7a?auto=format&fit=crop&w=1200&q=60", title: "Highway Upgrade" },
    { id: 4, cat: "completed", img: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=60", title: "Plant Renovation" },
  ];

  const filtered = filter === "all" ? projects : projects.filter((p) => p.cat === filter);

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-bold">Gallery</h2>
      <div className="mt-3 flex gap-3 flex-wrap">
        {["all", "completed", "buildings", "road"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded-md border ${
              filter === f ? "bg-emerald-700 text-white" : "bg-white"
            }`}
          >
            {f === "all" ? "All Projects" : f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {filtered.map((p) => (
          <figure key={p.id} className="overflow-hidden rounded-md shadow bg-white">
            <img src={p.img} alt={p.title} className="w-full h-36 object-cover" />
            <figcaption className="p-3 text-sm">{p.title}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
