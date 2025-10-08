'use client';

import ProjectCard, { Project } from './ProjectCard';

const projects: Project[] = [
  {
    id: 'ct-bi',
    title: 'ControlT Finance & BI Suite',
    description:
      'Plataforma financiera y de analítica en tiempo real para flotas logísticas. Microservicios .NET 8, CQRS y dashboards interactivos conectados a datos en streaming.',
    url: 'https://controlt.io',
    image: 'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80',
    highlight: 'SaaS Logística',
    tags: ['.NET 8', 'Vue 3', 'CQRS', 'AWS'],
  },
  {
    id: 'verify',
    title: 'ControlT Verify',
    description:
      'Sistema de verificación de riesgos con React, NestJS y Python. Integra fuentes oficiales para validar antecedentes y generar reportes ejecutivos automatizados.',
    url: 'https://controlt.io',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
    tags: ['React', 'NestJS', 'Python', 'PostgreSQL'],
  },
  {
    id: 'gps-monitor',
    title: 'Monitor GPS en tiempo real',
    description:
      'Visor en Java 15 con WebSockets y mapas para seguimiento de flotas. Alertas proactivas y reducción de tiempos de validación en un 40%.',
    url: 'https://controlt.io',
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1400&q=80',
    tags: ['Java 15', 'WebSockets', 'Kafka', 'Docker'],
  },
  {
    id: 'mitienda',
    title: 'Mitiendaenlinea.com.co',
    description:
      'Ecommerce B2B con Laravel y Angular para tarjetas digitales. Panel de métricas, pasarela de pagos y módulos auto-gestionables para clientes.',
    url: 'https://mitiendaenlinea.com.co',
    image: 'https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=1400&q=80',
    tags: ['Laravel', 'Angular', 'MySQL', 'Stripe'],
  },
  {
    id: 'n8n',
    title: 'Automatizaciones IA & n8n',
    description:
      'Flujos inteligentes que integran CRM, Gmail y sistemas internos para reducir 50% de tareas operativas. Bots asistentes y triggers basados en IA.',
    url: 'https://n8n.io',
    image: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1400&q=80',
    tags: ['n8n', 'TypeScript', 'OpenAI', 'Integraciones'],
  },
  {
    id: 'agrotech',
    title: 'Metaga AgroTech',
    description:
      'Plataforma de trazabilidad agrícola con dashboards y apps móviles. Analytics en tiempo real, workflows para equipos de campo y reportes automatizados.',
    url: 'https://metaga.com',
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
    tags: ['React Native', 'Node', 'PostgreSQL', 'BI'],
  },
];

export default function ProjectList() {
  return (
    <div className="mt-12 space-y-10">
      <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-8 text-left shadow-2xl shadow-black/40 backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">Portafolio destacado</p>
          <h3 className="text-3xl font-semibold text-white lg:text-4xl">Experiencias digitales con impacto real</h3>
          <p className="max-w-xl text-sm leading-relaxed text-slate-200">
            Desde logtech hasta agrotech, construyo productos listos para producción apoyados en arquitecturas limpias, analítica en tiempo real y experiencias de usuario pulidas.
          </p>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white shadow-xl shadow-black/40">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">Entregas 2022-2024</p>
            <p className="mt-2 text-2xl font-semibold">+12 lanzamientos productivos</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-100">
            <div className="rounded-2xl border border-white/15 bg-black/40 p-4 text-center">
              <p className="text-3xl font-bold">97%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em]">Uptime</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-black/40 p-4 text-center">
              <p className="text-3xl font-bold">45%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.3em]">Más eficiencia</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} featured={index === 0} />
        ))}
      </div>
    </div>
  );
}
