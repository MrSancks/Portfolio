export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image: string;
  highlight?: string;
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index = 0, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`animate-fade-up group relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.05] shadow-xl shadow-black/50 transition-all duration-500 hover:-translate-y-2 hover:border-white/30 hover:shadow-black/60 ${
        featured ? 'md:col-span-2 xl:row-span-2 xl:p-10' : ''
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-white/0 transition-opacity duration-500 group-hover:via-white/10 group-hover:to-white/15" />
      <div className={`relative z-10 overflow-hidden ${featured ? 'rounded-[2rem]' : 'rounded-2xl'}`}>
        <img
          src={project.image}
          alt={project.title}
          className={`h-48 w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100 ${
            featured ? 'h-64 md:h-72' : ''
          }`}
        />
        {project.highlight ? (
          <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg shadow-black/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {project.highlight}
          </div>
        ) : null}
      </div>
      <div className="relative z-10 mt-6 space-y-4 text-slate-300">
        <h3 className={`font-semibold text-white ${featured ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>{project.title}</h3>
        <p className="text-sm leading-relaxed text-slate-300/90">{project.description}</p>
        {project.tags ? (
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="chip bg-white/10 text-xs uppercase tracking-[0.25em]">
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
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
