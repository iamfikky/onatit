import React, { useState } from "react";

const images = [
  { cat: "completed", src: "https://images.unsplash.com/photo-1581091870622-3d1a0e8d4b1a", alt: "Project 1" },
  { cat: "buildings", src: "https://images.unsplash.com/photo-1566150902862-6a0b7d73b3b6", alt: "Project 2" },
  { cat: "road", src: "https://images.unsplash.com/photo-1505842465776-3d6cfb6c9b7a", alt: "Project 3" },
  { cat: "completed", src: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3", alt: "Project 4" },
  { cat: "buildings", src: "https://images.unsplash.com/photo-1505691723518-36a6f1d8e6b9", alt: "Project 5" },
  { cat: "road", src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2", alt: "Project 6" },
  { cat: "completed", src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb", alt: "Project 7" },
  { cat: "buildings", src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d", alt: "Project 8" },
];

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredImages =
    filter === "all" ? images : images.filter((img) => img.cat === filter);

  return (
    <section id="projects" className="section">
      <h2>Gallery</h2>
      <div className="filter" role="toolbar" aria-label="Filter projects">
        <button onClick={() => setFilter("all")}>All Projects</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("buildings")}>Buildings</button>
        <button onClick={() => setFilter("road")}>Roads</button>
      </div>

      <div className="gallery">
        {filteredImages.map((img, idx) => (
          <img
            key={idx}
            src={`${img.src}?auto=format&fit=crop&w=800&q=60`}
            alt={img.alt}
          />
        ))}
      </div>
    </section>
  );
}
