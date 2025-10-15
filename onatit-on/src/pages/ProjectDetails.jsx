import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <p className="text-gray-600 mb-4">Project not found.</p>
        <Link
          to="/projects"
          className="text-accent hover:text-teal-800 font-semibold"
        >
          ← Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-4xl mx-auto py-16 px-6">
      <Link
        to="/projects"
        className="inline-block mb-4 text-accent hover:text-teal-800 font-medium"
      >
        ← Back to Projects
      </Link>

      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg shadow-md mb-6 w-full object-cover"
      />

      <h1 className="text-3xl font-bold text-accent mb-3">{project.title}</h1>
      <p className="text-gray-500 mb-6">{project.category}</p>

      <p className="text-gray-700 leading-relaxed">
        {project.description ||
          "This project demonstrates our expertise and dedication to delivering top-quality engineering solutions with precision and integrity."}
      </p>
    </section>
  );
}
