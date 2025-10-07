import { Project } from './ProjectTypes';
import { projectAdapter } from '../../adapters/projects/projectAdapter';

// Example: fetch projects from a static array (replace with API call if needed)
const rawProjects = [
  {
    id: 'kinetra-route',
    title: 'Kinetra-Route',
    description:
      'Plataforma modular de logística urbana con microservicios en .NET 8, mensajería con RabbitMQ/Redis y microfrontends en Angular, React, Vue y Svelte integrados con Module Federation. Incluye SignalR para monitoreo en vivo, CI/CD con GitHub Actions y despliegue en Railway/Render.',
    url: 'https://github.com/MrSancks/Kinetra-Route',
    image: 'https://bogota.gov.co/sites/default/files/styles/1050px/public/2021-03/domiciliarios_en_bogota.jpg',
  },
  {
    id: 'hayp',
    title: 'HAYP - Asesor Virtual para Ensamblaje de Computadoras',
    description:
      'Proyecto meritorio 2024 que combina scraping técnico, integración con IA y lógica de recomendación para guiar a usuarios en la construcción de PCs. Backend en Node.js/NestJS, frontend en React y despliegue en AWS con documentación en Swagger.',
    url: 'https://github.com/MrSancks/Back_HAYP',
    image: 'https://images.pexels.com/photos/1714203/pexels-photo-1714203.jpeg',
  },
  {
    id: 'agrolink',
    title: 'AgroLink Hackathon',
    description:
      'Prototipo frontend orientado a vincular agricultores y empresas reduciendo la distancia física mediante tableros de oferta, mapas interactivos y flujos de negociación asistidos por datos en tiempo real para impulsar cadenas de abastecimiento justas.',
    url: 'https://github.com/MrSancks/front-hackaton',
    image: 'https://st4.depositphotos.com/2422249/27666/i/950/depositphotos_276667318-stock-photo-businessman-farmer-holding-tablet-standing.jpg',
  },
];

export const getProjects = (): Project[] => {
  return rawProjects.map(projectAdapter);
};
