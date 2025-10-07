'use client';
import React from 'react';

interface AboutSectionProps {
  title: string;
  content: string;
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-40">
      <div className="section-surface mx-auto max-w-3xl animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">
          {title}
        </h2>
        <p className="mt-6 text-center text-base leading-relaxed text-slate-600 transition-colors duration-300 dark:text-slate-200/90">
          {content}
        </p>
      </div>
    </section>
  );
}
