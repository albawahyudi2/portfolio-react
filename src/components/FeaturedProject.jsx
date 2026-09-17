import { FolderOpen, Star } from "lucide-react";

export default function FeaturedProject({
  title,
  description,
  image,
  tech,
  driveLink,
}) {
  return (
    <a
      href={driveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        bg-gradient-to-r from-[#6366f1]/10 to-[#a855f7]/10
        border border-white/10
        rounded-3xl
        p-6 md:p-10
        mb-12
        backdrop-blur-xl
        transition hover:scale-[1.02]
      "
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="rounded-2xl shadow-xl object-cover"
        />

        {/* CONTENT */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Star className="text-yellow-400" size={18} />
            <span className="text-sm text-yellow-400 font-semibold">
              Featured Project
            </span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            {title}
          </h3>

          <p className="text-slate-300 mb-5 leading-relaxed">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {tech.map((t, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full bg-white/10 text-slate-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white font-semibold">
            <FolderOpen size={18} />
            Open Project on Google Drive
          </div>
        </div>
      </div>
    </a>
  );
}
