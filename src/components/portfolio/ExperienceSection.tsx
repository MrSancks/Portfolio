'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface ExperienceItem {
  id: string;
  title: string;
  role: string;
  period: string;
  summary: string;
  details: string[];
  links: { href: string; label: string }[];
}

export default function ExperienceSection({ title }: { title: string }) {
  const { t, i18n } = useTranslation('lang');
  const [selected, setSelected] = useState<ExperienceItem | null>(null);

  const experiences = useMemo(
    () => t('experience.items', { returnObjects: true }) as ExperienceItem[],
    [i18n.language, t],
  );
  const intro = t('experience.intro');
  const viewDetailsLabel = t('experience.viewDetails');
  const closeLabel = t('experience.modal.close');

  return (
    <section id="experience" className="scroll-mt-40">
      <div className="section-surface relative overflow-hidden animate-fade-up">
        <div className="absolute -right-24 top-[-15%] h-72 w-72 rounded-full bg-purple-500/15 blur-3xl" aria-hidden />
        <div className="absolute -left-28 bottom-[-25%] h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
          <p className="max-w-2xl text-sm leading-relaxed text-slate-200">{intro}</p>
        </div>
        <div className="relative mt-10 grid gap-6">
          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/50 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4 text-slate-200">
                <header className="space-y-1">
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-emerald-200">{exp.role}</p>
                  <p className="text-xs text-slate-400">{exp.period}</p>
                </header>
                <p className="text-sm leading-relaxed text-slate-200/80">{exp.summary}</p>
                <button
                  type="button"
                  onClick={() => setSelected(exp)}
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/[0.08] px-4 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-white shadow-sm shadow-black/40 transition-all duration-300 hover:bg-white/15 hover:shadow-md"
                >
                  {viewDetailsLabel}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-neutral-950/90 p-8 shadow-2xl shadow-black/70"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200 transition hover:bg-white/10"
              aria-label={closeLabel}
            >
              {closeLabel}
            </button>
            <div className="space-y-4 text-slate-100">
              <header className="space-y-1">
                <h3 className="text-2xl font-semibold text-white">{selected.title}</h3>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{selected.role}</p>
                <p className="text-xs text-slate-400">{selected.period}</p>
              </header>
              <ul className="space-y-2 text-sm leading-relaxed text-slate-200">
                {selected.details.map((detail) => (
                  <li key={detail}>- {detail}</li>
                ))}
              </ul>
              {selected.links.length ? (
                <div className="flex flex-wrap gap-3 pt-2">
                  {selected.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
