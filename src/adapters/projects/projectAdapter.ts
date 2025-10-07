// Adapter for fetching and transforming project data
import { Project } from '../../features/projects/ProjectTypes';

export const projectAdapter = (data: any): Project => {
  return {
    id: data.id,
    title: data.title,
    description: data.description,
    url: data.url,
    image: data.image,
  };
};
