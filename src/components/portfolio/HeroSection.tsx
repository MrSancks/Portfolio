'use client';
import React, { useEffect, useState } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  const [displayTitle, setDisplayTitle] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayTitle('');
    setIsTyping(true);

    let index = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const interval = setInterval(() => {
      index += 1;
      setDisplayTitle(title.slice(0, index));

      if (index >= title.length) {
        clearInterval(interval);
        timeoutId = setTimeout(() => setIsTyping(false), 500);
      }
    }, 70);

    return () => {
      clearInterval(interval);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [title]);

  return (
    <section id="home" className="scroll-mt-40">
      <div className="section-surface mx-auto max-w-3xl text-center animate-fade-up">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
          Full Stack Engineer
        </p>
        <h1
          className={`mx-auto text-4xl font-black text-white md:text-5xl ${
            isTyping ? 'animate-typewriter pr-1' : ''
          }`}
          aria-label={title}
        >
          {displayTitle}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-slate-300">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
