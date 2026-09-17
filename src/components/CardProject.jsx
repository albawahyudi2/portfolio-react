import { FolderOpen } from "lucide-react";

export default function CardProject({
  Img,
  Title,
  Description,
  Tech = [],
  DriveLink,
}) {
  return (
    <a
      href={DriveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group
        bg-white/5
        border border-white/10
        rounded-2xl
        overflow-hidden
        backdrop-blur-xl
        transition-all duration-500
        hover:scale-[1.03]
        hover:shadow-xl hover:shadow-purple-500/20
        flex flex-col
        cursor-pointer
      "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={Img}
          alt={Title}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-1">
          {Title}
        </h3>

        <p className="text-sm text-slate-400 mb-4 line-clamp-3">
          {Description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mb-4">
          {Tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-md bg-white/10 text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-auto flex items-center gap-2 text-sm text-purple-400 font-medium">
          <FolderOpen size={16} />
          View Project on Google Drive
        </div>
      </div>
    </a>
  );
}
