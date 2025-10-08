'use client';
import React from 'react';
import ProjectList from '../projects/ProjectList';

interface ProjectsSectionProps {
  title: string;
}

export default function ProjectsSection({ title }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-40">
      <div className="section-surface relative overflow-hidden animate-fade-up">
        <div className="absolute -right-24 top-[-10%] h-72 w-72 rounded-full bg-amber-500/15 blur-3xl" aria-hidden />
        <div className="absolute -left-24 bottom-[-20%] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-200">
            Selección de proyectos empresariales, productos digitales y automatizaciones que entregan métricas visibles en negocio.
          </p>
        </div>
        <ProjectList />
      </div>
    </section>
  );
}
