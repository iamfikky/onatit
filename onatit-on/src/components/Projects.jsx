import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

// Mock async fetch
const fetchProjects = () =>
  new Promise((resolve) => setTimeout(() => resolve(projectsData), 700));

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { data = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const filtered =
    filter === "All" ? data : data.filter((p) => p.category === filter);

  return (
    <motion.section
      id="projects"
      className="max-w-7xl mx-auto py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-accent">Our Projects</h2>

      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {[
          "All",
          "Structural",
          "Highway",
          "Geotechnical",
          "Environmental and Water Resources",
          "Procurement",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg border transition-all duration-200 ${
              filter === cat
                ? "bg-accent text-white shadow-md"
                : "border-accent text-accent hover:bg-accent/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading */}
      {isLoading ? (
        <p className="text-gray-600">Loading projects...</p>
      ) : filtered.length === 0 ? (
        <p className="text-gray-500">No projects found for this category.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <motion.div
              key={p.id}
              className="bg-white shadow-md rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ease-in-out"
              whileHover={{ y: -5 }}
            >
              <Link to={`/projects/${p.id}`}>
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-sm text-gray-500">{p.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </motion.section>
  );
}
