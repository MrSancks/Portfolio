import { getProjects } from '../../features/projects/ProjectService';
import ProjectCard from './ProjectCard';

export default function ProjectList() {
  const projects = getProjects();
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  );
}
