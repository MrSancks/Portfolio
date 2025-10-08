import { Project } from '../../features/projects/ProjectTypes';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article
      className="animate-fade-up group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/50 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-black/60"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 transition-opacity duration-500 group-hover:via-white/10 group-hover:to-white/15" />
      <img
        src={project.image}
        alt={project.title}
        className="relative z-10 h-44 w-full rounded-2xl object-cover opacity-90 transition duration-500 group-hover:opacity-100"
      />
      <div className="relative z-10 mt-5 space-y-3 text-slate-300">
        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-300/90">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
        >
          Ver proyecto
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className="h-4 w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
          </svg>
        </a>
      </div>
      <div className="absolute inset-x-10 top-0 h-1 bg-gradient-to-r from-white/0 via-white/40 to-white/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}
