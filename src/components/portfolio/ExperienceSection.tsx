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
    role: 'Desarrollador FullStack',
    location: 'Medellín, Colombia',
    period: '31/03/2025 - Actual',
    details: [
      'Desarrollé e integré módulos frontend en Vue.js (Quasar, Vuetify), Angular y React, optimizando rendimiento, mantenibilidad y experiencia de usuario.',
      'Implementé microservicios en .NET, NestJS y Java aplicando Clean Architecture y CQRS para garantizar escalabilidad y separación de responsabilidades.',
      'Diseñé consultas y procedimientos almacenados en PostgreSQL y SQL Server que mejoraron hasta en 30% los tiempos de respuesta de los reportes.',
      'Configuré y mantuve pipelines CI/CD en GitLab con despliegues en contenedores Docker sobre AWS (EC2, RDS, S3, SQS).',
      'Introduje pruebas unitarias e integraciones con Jest, Postman y JUnit, reduciendo errores en producción y reforzando la calidad técnica.',
      'Documenté servicios y módulos en Swagger y Confluence, estandarizando la comunicación entre equipos frontend y backend.',
      'Participé activamente en ceremonias Scrum proponiendo mejoras de arquitectura y UX para los módulos del ecosistema CT Finance.',
      'Proyecto destacado: módulo financiero central en .NET 8 y Vue 3 (Quasar) con CQRS y Vertical Slice que redujo 45% los tiempos de validación de fletes.',
      'Proyecto destacado: módulo de asignación de servicios en Angular y .NET con arquitectura orientada a eventos, optimizando la comunicación logística y reduciendo reprocesos.',
      'Proyecto destacado: plataforma de Business Intelligence en Python (Pandas, Plotly) para KPIs financieros y operativos integrada a los módulos de ControlT.',
      'Proyecto destacado: Visor en Java 15 para monitoreo GPS en tiempo real, disminuyendo 40% los tiempos de validación de dispositivos.',
      'Proyecto destacado: Verify en React, NestJS y Python para verificación de antecedentes y riesgos, integrando múltiples fuentes oficiales de forma segura.',
    ],
  },
  {
    id: 'creativo',
    company: 'El Creativo Web',
    role: 'Desarrollador Full Stack',
    location: 'Medellín, Colombia',
    period: '30/12/2022 - 29/05/2024',
    details: [
      'Lideré soluciones web full stack para retail, educación y servicios priorizando escalabilidad, automatización y experiencia de usuario.',
      'Construí componentes reutilizables en Angular, Vue y React que aceleraron la entrega de proyectos y redujeron costos de mantenimiento.',
      'Desarrollé APIs RESTful con NestJS, Laravel y Java alineadas con los frontends y respaldadas por bases de datos optimizadas en MySQL y SQL Server.',
      'Implementé asistentes virtuales basados en IA y flujos automatizados con n8n, integrando sistemas internos, Gmail, Sheets y CRMs.',
      'Diseñé despliegues contenedorizados con Docker y GitLab CI/CD para garantizar entregas continuas y seguras.',
      'Proyecto destacado: Mitiendaenlinea.com.co, plataforma Laravel + Angular para tarjetas de presentación digitales con métricas en tiempo real.',
      'Proyecto destacado: asistentes IA y automatizaciones con n8n que redujeron más del 50% de las tareas manuales administrativas.',
    ],
  },
  {
    id: 'disenos',
    company: 'Diseños y Modas Ca y Ka',
    role: 'Desarrollador FullStack',
    location: 'Villavicencio, Colombia',
    period: '30/03/2021 - 13/07/2021',
    details: [
      'Diseñé e implementé un sistema integral de gestión de inventarios con React y NestJS para controlar materiales, órdenes de compra y flujos de producción.',
      'Incorporé módulos contables, seguimiento de ventas, gestión de proveedores y reportes financieros automáticos para reforzar la trazabilidad.',
      'Levanté requerimientos con el área administrativa, garantizando que las funcionalidades respondieran a la operación diaria.',
      'Construí alertas y validaciones internas para reducir inconsistencias en los registros y mejorar la toma de decisiones.',
      'Implementé análisis de rotación de productos y costos operativos que ayudaron a reducir pérdidas y optimizar compras.',
      'Automatizé procesos contables recurrentes, disminuyendo más del 50% el tiempo de generación de reportes y aumentando la precisión de los balances.',
      'Elaboré manuales de usuario y documentación funcional para capacitar al personal y consolidar la digitalización de los procesos administrativos.',
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
