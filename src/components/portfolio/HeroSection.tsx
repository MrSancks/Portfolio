'use client';
import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  return (
    <section id="home" className="scroll-mt-40">
      <div className="section-surface mx-auto max-w-3xl text-center animate-fade-up">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300">
          Full Stack Engineer
        </p>
        <h1 className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-fuchsia-500 bg-clip-text text-4xl font-black text-transparent md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-200/90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
