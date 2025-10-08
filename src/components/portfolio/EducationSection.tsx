'use client';
import React from 'react';

export default function EducationSection({ title }: { title: string }) {
  return (
    <section id="education" className="scroll-mt-40">
      <div className="section-surface animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-white">
          {title}
        </h2>
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/40">
          <h3 className="text-lg font-semibold text-white">
            Tecnólogo en desarrollo de software
          </h3>
          <p className="text-sm text-slate-400">
            Corporación Universitaria Minuto de Dios - Villavicencio, Colombia | 06/2021 – 05/2024
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            Enfoque en desarrollo web y móvil, servicios backend, metodologías ágiles, pruebas y despliegue en la nube. Calificación final: 4.4/5.
          </p>
        </div>
      </div>
    </section>
  );
}
