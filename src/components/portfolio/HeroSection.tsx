'use client';
import React, { useEffect, useMemo, useState } from 'react';
interface HeroSectionProps {
  title: string;
  subtitle: string;
}
interface HeroStat {
  value: string;
  label: string;
}
export default function HeroSection({ title, subtitle }: HeroSectionProps) {
  const [displayTitle, setDisplayTitle] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const stats: HeroStat[] = useMemo(
    () => [
      { value: '+25', label: 'Proyectos y productos entregados end-to-end' },
      { value: '+15', label: 'Tecnologías dominadas entre frontend, backend y DevOps' },
      { value: '4.4/5', label: 'Promedio académico y foco en calidad técnica' },
    ],
    [],
  );
useEffect(() => {
  setDisplayTitle('');
  setIsTyping(true);
  let i = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;
  // Romper a los 30 caracteres (ajústalo si quieres)
  const BREAK_AT = 21;
  const interval = setInterval(() => {
    i += 1;
    let text: string;
    if (i <= BREAK_AT) {
      text = title.slice(0, i);
    } else {
      // Mantener SIEMPRE el salto de línea desde aquí en adelante
      const left = title.slice(0, BREAK_AT);
      const right = title.slice(BREAK_AT, i);
      text = left + '\n' + right;
    }
    setDisplayTitle(text);
    if (i >= title.length) {
      clearInterval(interval);
      timeoutId = setTimeout(() => setIsTyping(false), 500);
    }
  }, 70);
  return () => {
    clearInterval(interval);
    if (timeoutId) clearTimeout(timeoutId);
  };
}, [title]);
  return (
    <section id="home" className="scroll-mt-40">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 shadow-[0_40px_120px_-30px_rgba(15,15,15,0.9)] animate-fade-up">
        <div className="absolute -left-10 top-10 hidden h-44 w-44 rounded-full bg-sky-400/20 blur-3xl md:block" aria-hidden />
        <div className="absolute -right-16 -bottom-10 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" aria-hidden />
        <div className="relative grid gap-12 overflow-hidden p-10 sm:p-12 lg:grid-cols-[1.15fr_0.85fr] lg:p-16">
          <div className="relative z-10 flex flex-col gap-8 text-left">
            <span className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 bg-white/[0.08] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-black/40">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Full Stack Engineer
            </span>
            <div>
              <h1
                className={`text-4xl font-black leading-tight text-white sm:text-4xl lg:text-5xl whitespace-pre-line${
                  isTyping ? 'animate-typewriter pr-1' : ''
                }`}
                aria-label={title}
              >
                {displayTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-black/50"
              >
                Ver proyectos
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 6 6 6-6 6" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.08] px-6 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
              >
                Agendar reunión
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8m-8 4h5m-7 7h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z" />
                </svg>
              </a>
            </div>
            <dl className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/10 bg-black/40 p-5 text-center shadow-xl shadow-black/40 backdrop-blur"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{stat.label}</dt>
                  <dd className="mt-3 text-2xl font-bold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[420px] rounded-[2.75rem] border border-white/10 bg-gradient-to-br from-slate-900/60 via-slate-950/70 to-black shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)]">
              <div className="absolute inset-8 rounded-[2rem] border border-white/10 bg-white/[0.02] backdrop-blur">
                <svg
                  viewBox="0 0 320 320"
                  className="absolute inset-6 h-[calc(100%-48px)] w-[calc(100%-48px)] text-white/15"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(56,189,248,0.55)" />
                      <stop offset="50%" stopColor="rgba(167,139,250,0.4)" />
                      <stop offset="100%" stopColor="rgba(248,113,113,0.35)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M40 120c40-80 200-80 240 0s-20 180-120 180S0 200 40 120z"
                    fill="url(#hero-gradient)"
                    opacity="0.65"
                  />
                  <path
                    d="M70 130c30-60 150-70 190 10s-10 150-110 150S40 190 70 130z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeDasharray="12 10"
                  />
                  <circle cx="130" cy="150" r="8" fill="#22d3ee" opacity="0.8" />
                  <circle cx="220" cy="210" r="5" fill="#f97316" opacity="0.8" />
                  <circle cx="180" cy="90" r="6" fill="#a855f7" opacity="0.7" />
                </svg>
              </div>
              <div className="absolute -left-8 top-16 hidden w-44 -rotate-6 rounded-3xl border border-white/20 bg-white/[0.08] p-4 text-left text-white shadow-2xl shadow-black/50 backdrop-blur md:block">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200/80">Resultados</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-100/90">
                  Arquitecturas escalables, pipelines CI/CD y experiencias inmersivas que optimizan operaciones y convierten usuarios en clientes fieles.
                </p>
              </div>
              <div className="absolute -right-6 bottom-14 hidden w-40 rotate-6 rounded-3xl border border-white/20 bg-white/[0.08] p-4 text-center text-white shadow-2xl shadow-black/50 backdrop-blur md:block">
                <p className="text-3xl font-bold">98%</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em] text-slate-200">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}