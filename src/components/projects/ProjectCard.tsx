import { Project } from '../../features/projects/ProjectTypes';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article
      className="animate-fade-up group relative overflow-hidden rounded-3xl border border-white/30 bg-white/80 p-6 shadow-lg shadow-slate-900/10 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-300/70 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/70"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400/0 via-indigo-400/0 to-emerald-400/0 transition-opacity duration-500 group-hover:via-indigo-400/20 group-hover:to-emerald-400/20" />
      <img
        src={project.image}
        alt={project.title}
        className="relative z-10 h-44 w-full rounded-2xl object-cover shadow-inner shadow-slate-900/20"
      />
      <div className="relative z-10 mt-5 space-y-3">
        <h3 className="text-xl font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-200/80">
          {project.description}
        </p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-500 transition-colors duration-300 hover:text-sky-400"
        >
          Ver proyecto
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 group-hover:scale-125" />
        </a>
      </div>
      <div className="absolute inset-x-10 top-0 h-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-emerald-400 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
}
