'use client';
import React from 'react';

export default function EducationSection({ title }: { title: string }) {
  return (
    <section id="education" className="scroll-mt-40">
      <div className="section-surface animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">
          {title}
        </h2>
        <div className="mt-8 rounded-2xl border border-white/30 bg-white/70 p-6 shadow-lg shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900/60">
          <h3 className="text-lg font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">
            Tecnólogo en desarrollo de software
          </h3>
          <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-slate-300">
            Corporación Universitaria Minuto de Dios - Villavicencio, Colombia | 06/2021 – 05/2024
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-200/90">
            Enfoque en desarrollo web y móvil, servicios backend, metodologías ágiles, pruebas y despliegue en la nube. Calificación final: 4.4/5.
          </p>
        </div>
      </div>
    </section>
  );
}
