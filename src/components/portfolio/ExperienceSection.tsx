'use client';

import Image from 'next/image';
import React, { useState } from 'react';

interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
  image: string;
  accent: string;
}

const experiences: Experience[] = [
  {
    id: 'controlt',
    company: 'ControlT',
    role: 'Desarrollador FullStack',
    location: 'Medellín, Colombia',
    period: '31/03/2025 - Actual',
    image: 'https://controlt.io/wp-content/uploads/2024/09/Logo-CT-Blanco-sin-fondo.png',
    accent: 'from-slate-100/20 via-slate-100/5 to-transparent',
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
    image: 'https://parquesoftmeta.com/wp-content/uploads/2023/10/LOGO-ELCREATIVOWEB-2.webp',
    accent: 'from-white/15 via-white/0 to-transparent',
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
    image: 'https://i.ibb.co/vxVgCTWh/cayk.jpg',
    accent: 'from-white/10 via-transparent to-transparent',
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
  const [selected, setSelected] = useState<Experience | null>(null);

  return (
    <section id="experience" className="scroll-mt-40">
      <div className="section-surface animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-white">{title}</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {experiences.map((exp, idx) => (
            <article
              key={exp.id}
              className="animate-fade-up group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:border-white/30"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative h-52 w-full bg-gradient-to-br from-neutral-900 via-neutral-950 to-black">
                <Image
                  src={exp.image}
                  alt={`Logo ${exp.company}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain p-8"
                  priority={idx === 0}
                />
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${exp.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
              </div>
              <div className="relative z-10 flex flex-col gap-3 p-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-400">{exp.role}</p>
                  <p className="text-xs text-slate-500">{exp.location}</p>
                  <p className="text-xs text-slate-500">{exp.period}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(exp)}
                  className="mt-2 inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white opacity-100 shadow-sm shadow-black/40 transition-all duration-300 hover:bg-white/10 hover:shadow-md md:opacity-0 md:group-hover:opacity-100"
                >
                  Ver más
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/90 p-8 shadow-2xl shadow-black/70"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200 transition hover:bg-white/10"
              aria-label="Cerrar"
            >
              Cerrar
            </button>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="relative mx-auto h-28 w-44 overflow-hidden rounded-2xl border border-white/5 bg-black/60 md:mx-0">
                <Image
                  src={selected.image}
                  alt={`Logo ${selected.company}`}
                  fill
                  sizes="(max-width: 768px) 60vw, 20vw"
                  className="object-contain p-4"
                />
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{selected.company}</h3>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{selected.role}</p>
                </div>
                <p className="text-sm text-slate-400">
                  {selected.location} · {selected.period}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-4 text-sm leading-relaxed text-slate-200">
                  {selected.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
