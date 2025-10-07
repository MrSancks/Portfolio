'use client';
import React from 'react';

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    id: 'controlt',
    company: 'ControlT',
    role: 'Desarrollador Backend',
    location: 'Medellín, Colombia',
    period: '06/2024 – 09/2025',
    details: [
      'Desarrollé e integré módulos frontend en Vue.js (Quasar, Vuetify) y React para experiencias más fluidas y consistentes.',
      'Implementé microservicios en Node.js/NestJS y .NET enfocados en logística, trazabilidad y monitoreo en tiempo real.',
      'Migré funcionalidades heredadas a Vue + Quasar, reduciendo errores en un 25 % y unificando la experiencia visual.',
      'Optimizé consultas en SQL Server y PostgreSQL mejorando la respuesta de los servicios en más del 30 %.',
      'Diseñé pipelines CI/CD en GitLab con Docker y AWS (EC2, RDS, S3, SQS) para entregas automatizadas y confiables.',
      'Introduje pruebas unitarias y E2E con Jest, Postman y JUnit, elevando la calidad del producto entregado.',
      'Documenté servicios con Swagger y Confluence, facilitando la colaboración entre equipos frontend y backend.',
    ],
  },
  {
    id: 'creativo',
    company: 'El Creativo Web',
    role: 'Full Stack Developer',
    location: 'Medellín, Colombia',
    period: '12/2022 – 05/2024',
    details: [
      'Lideré proyectos web full stack para retail, educación y servicios combinando React, Vue y NestJS.',
      'Construí componentes reutilizables y bibliotecas internas que aceleraron la entrega de productos digitales.',
      'Diseñé APIs RESTful en NestJS y Java consumidas por los frontends, integradas con bases de datos SQL optimizadas.',
      'Implementé asistentes virtuales personalizados con IA y n8n para automatizar procesos de negocio y atención.',
      'Orquesté despliegues con GitLab CI/CD y Docker, manteniendo ambientes consistentes y seguros.',
      'Documenté soluciones en Swagger, Confluence y Postman Collections, reduciendo un 30 % el onboarding técnico.',
      'Aseguré la calidad del software mediante pruebas automatizadas con Jest y JUnit.',
    ],
  },
  {
    id: 'disenos',
    company: 'Diseños y Modas Ca y Ka',
    role: 'Desarrollador Backend',
    location: 'Villavicencio, Colombia',
    period: '03/2021 – 07/2021',
    details: [
      'Construí un sistema de gestión de inventarios con React y NestJS para controlar materiales, órdenes y reportes.',
      'Modelé la base de datos en SQL Server para reportes financieros confiables y rápidos.',
      'Automatizé procesos contables y reportes reduciendo 50 % el tiempo de generación de información clave.',
      'Implementé pipelines ligeros con Git y Docker y entregué documentación funcional para el equipo interno.',
    ],
  },
];

export default function ExperienceSection({ title }: { title: string }) {
  return (
    <section id="experience" className="scroll-mt-40">
      <div className="section-surface animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">
          {title}
        </h2>
        <div className="mt-8 space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="animate-fade-up rounded-2xl border border-white/30 bg-white/70 p-6 shadow-lg shadow-slate-900/10 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-300/70 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/60 dark:hover:border-emerald-400/70"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">
                {exp.role} - {exp.company}
              </h3>
              <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-300">
                {exp.location} | {exp.period}
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-200/90">
                {exp.details.map((item, detailIdx) => (
                  <li key={detailIdx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
