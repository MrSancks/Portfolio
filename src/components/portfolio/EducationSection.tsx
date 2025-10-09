'use client';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface FocusItem {
  category: string;
  topic: string;
}

interface DegreeInfo {
  label: string;
  name: string;
  institution: string;
  period: string;
  highlights: string[];
}

export default function EducationSection({ title }: { title: string }) {
  const { t, i18n } = useTranslation('lang');
  const focus = useMemo(
    () => t('education.focus', { returnObjects: true }) as FocusItem[],
    [i18n.language, t],
  );
  const degree = useMemo(
    () => t('education.degree', { returnObjects: true }) as DegreeInfo,
    [i18n.language, t],
  );
  const intro = t('education.intro');

  return (
    <section id="education" className="scroll-mt-40">
      <div className="section-surface relative overflow-hidden animate-fade-up">
        <div className="absolute -right-20 top-[-10%] h-72 w-72 rounded-full bg-sky-400/15 blur-3xl" aria-hidden />
        <div className="absolute -left-28 bottom-[-20%] h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" aria-hidden />
        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
            <p className="text-sm leading-relaxed text-slate-200">{intro}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {focus.map((item) => (
                <div key={item.topic} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5 text-white shadow-lg shadow-black/40">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/20 bg-black/40">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        className="h-5 w-5"
                      >
                        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-200">{item.category}</p>
                      <p className="text-sm text-slate-100">{item.topic}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/50">
            <div className="absolute inset-0 opacity-80">
              <svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-white/10">
                <defs>
                  <linearGradient id="education-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgba(56,189,248,0.35)" />
                    <stop offset="60%" stopColor="rgba(192,132,252,0.25)" />
                    <stop offset="100%" stopColor="rgba(248,113,113,0.2)" />
                  </linearGradient>
                </defs>
                <path
                  d="M80 70c40-40 200-60 250 0s30 170-70 190-220-40-220-110 0-40 40-80z"
                  fill="url(#education-gradient)"
                />
              </svg>
            </div>
            <div className="relative z-10 space-y-4 text-slate-100">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">{degree.label}</p>
              <h3 className="text-2xl font-semibold text-white">{degree.name}</h3>
              <p className="text-sm text-slate-300">{degree.institution}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">{degree.period}</p>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-slate-200">
                {degree.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
