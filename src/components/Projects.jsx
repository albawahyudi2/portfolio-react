import { useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter(p => p.type === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Projects
        </h2>

        {/* FILTER */}
        <div className="flex justify-center gap-4 mb-12">
          {["all", "laravel", "figma", "pdf"].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full capitalize transition
                ${
                  filter === type
                    ? "bg-indigo-600 text-white"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function ProjectCard({ project }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-5 hover:-translate-y-1 transition shadow-lg">

      {/* LARAVEL */}
      {project.type === "laravel" && (
        <>
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg mb-4"
          />

          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-zinc-400 text-sm mt-1">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-zinc-800 px-2 py-1 rounded"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-4">
            <a
              href={project.live}
              target="_blank"
              className="px-4 py-2 bg-indigo-600 rounded text-sm"
            >
              Tampilan Website
            </a>
            <a
              href={project.repo}
              target="_blank"
              className="px-4 py-2 border border-zinc-700 rounded text-sm"
            >
              Source
            </a>
          </div>
        </>
      )}

      {/* FIGMA */}
      {project.type === "figma" && (
        <>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-zinc-400 text-sm mt-1">{project.desc}</p>

          <iframe
            src={`https://www.figma.com/design/cZIrSQu6DHTZ6KNfebOzhE/Untitled?t=YqWABtdQlK2Xj4yb-1 ${project.figma}`}
            className="w-full h-[300px] rounded-lg mt-4"
            allowFullScreen
          />
        </>
      )}

      {/* PDF */}
      {project.type === "pdf" && (
        <>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="text-zinc-400 text-sm mt-1">{project.desc}</p>

          <iframe
            src={project.file}
            className="w-full h-[300px] rounded-lg mt-4"
          />

          <a
            href={project.file}
            download
            className="inline-block mt-4 px-4 py-2 bg-indigo-600 rounded text-sm"
          >
            Download PDF
          </a>
        </>
      )}
    </div>
  );
}
