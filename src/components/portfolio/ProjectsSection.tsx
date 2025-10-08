'use client';
import React from 'react';
import ProjectList from '../projects/ProjectList';

interface ProjectsSectionProps {
  title: string;
}

export default function ProjectsSection({ title }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-40">
      <div className="section-surface animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-white">
          {title}
        </h2>
        <ProjectList />
      </div>
    </section>
  );
}
