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
      <div className="section-surface relative overflow-hidden animate-fade-up">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-left text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
            <div className="mt-6 space-y-6 text-base leading-relaxed text-slate-200">
              {blocks.map((segment, index) => {
                if (segment.startsWith('- ')) {
                  const items = segment
                    .split('\n')
                    .map((item) => item.trim().replace(/^- /, ''))
                    .filter(Boolean);
                  return (
                    <ul key={index} className="grid gap-3 rounded-3xl border border-white/10 bg-black/40 p-6 shadow-xl shadow-black/40 backdrop-blur">
                      {items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm leading-relaxed text-slate-100">
                          <span className="mt-1 inline-flex h-2.5 w-2.5 flex-shrink-0 rounded-full bg-emerald-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }

                return (
                  <p key={index} className="text-left text-slate-200">
                    {segment}
                  </p>
                );
              })}
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/0 to-white/10 p-8 shadow-2xl shadow-black/40 backdrop-blur">
            <div className="absolute inset-0 opacity-70">
              <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full text-white/10"
              >
                <defs>
                  <linearGradient id="about-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(16,185,129,0.35)" />
                    <stop offset="45%" stopColor="rgba(34,211,238,0.25)" />
                    <stop offset="100%" stopColor="rgba(165,180,252,0.25)" />
                  </linearGradient>
                </defs>
                <path
                  d="M110 60c40-30 160-30 200 20s20 150-40 210-160 60-200 10S70 90 110 60z"
                  fill="url(#about-gradient)"
                  opacity="0.8"
                />
                <path
                  d="M90 110c35-40 140-50 190-10s50 130 10 180-140 70-190 20-45-150-10-190z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeDasharray="14 12"
                  opacity="0.8"
                />
              </svg>
            </div>
            <div className="relative z-10 flex h-full flex-col gap-6">
              <header>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100">
                  Impacto en equipos
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Experiencias digitales que aceleran negocios
                </h3>
              </header>
              <p className="text-sm leading-relaxed text-slate-100/90">
                Lidero soluciones donde convergen UX, arquitectura limpia y automatización. Trabajo con squads ágiles para crear productos que resuelven retos reales en logística, retail y finanzas.
              </p>
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/[0.08] p-4 text-slate-100 shadow-lg shadow-black/40">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">
                    Diferencial
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    Traducción clara de necesidades de negocio a roadmaps técnicos priorizados, asegurando entregas constantes y medibles.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Arquitectura limpia', 'Bancos de pruebas', 'Observabilidad', 'Automatización'].map((tag) => (
                    <span key={tag} className="chip bg-white/10 text-xs uppercase tracking-[0.25em]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
