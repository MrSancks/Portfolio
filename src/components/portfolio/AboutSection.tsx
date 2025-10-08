'use client';
import React from 'react';

interface AboutSectionProps {
  title: string;
  content: string;
}

export default function AboutSection({ title, content }: AboutSectionProps) {
  const blocks = content
    .split('\n\n')
    .map((segment) => segment.trim())
    .filter(Boolean);

  return (
    <section id="about" className="scroll-mt-40">
      <div className="section-surface mx-auto max-w-3xl animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-white">
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-300">
          {blocks.map((segment, index) => {
            if (segment.startsWith('- ')) {
              const items = segment
                .split('\n')
                .map((item) => item.trim().replace(/^- /, ''))
                .filter(Boolean);
              return (
                <ul key={index} className="list-disc space-y-2 text-left text-slate-300 md:pl-6">
                  {items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              );
            }

            return (
              <p key={index} className="text-left">
                {segment}
              </p>
            );
          })}
        </div>
      </div>
    </section>
  );
}
