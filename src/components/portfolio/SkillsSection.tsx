'use client';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

interface SkillsSectionProps {
  title: string;
}

interface SkillGroup {
  label: string;
  items: string[];
}

export default function SkillsSection({ title }: SkillsSectionProps) {
  const { t, i18n } = useTranslation('lang');
  const groups = useMemo(
    () => t('skills.groups', { returnObjects: true }) as SkillGroup[],
    [i18n.language, t],
  );
  const description = t('skills.intro');
  const counterSuffix = t('skills.counterSuffix');

  return (
    <section id="skills" className="scroll-mt-40">
      <div className="section-surface relative overflow-hidden animate-fade-up">
        <div className="absolute -right-32 top-[-30%] h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" aria-hidden />
        <div className="absolute -left-32 bottom-[-40%] h-[28rem] w-[28rem] rounded-full bg-cyan-400/10 blur-3xl" aria-hidden />
        <div className="relative flex flex-col gap-4 text-left lg:flex-row lg:items-center lg:justify-between">
          <h2 className="text-3xl font-semibold text-white lg:text-4xl">{title}</h2>
          <p className="max-w-xl text-sm leading-relaxed text-slate-200">{description}</p>
        </div>
        <div className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.label}
              className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-xl shadow-black/40 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/30"
            >
              <div className="absolute -right-8 -top-12 h-32 w-32 rounded-full bg-white/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
              <header className="relative z-10 mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{group.label}</h3>
                <span className="rounded-full border border-white/20 bg-white/[0.08] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-slate-200">
                  {String(group.items.length).padStart(2, '0')} {counterSuffix}
                </span>
              </header>
              <ul className="relative z-10 mt-2 flex flex-wrap gap-3 text-slate-200">
                {group.items.map((skill) => (
                  <li key={skill} className="chip bg-white/10 text-xs uppercase tracking-[0.2em]">
                    {skill}
                  </li>
                ))}
              </ul>
              <svg
                viewBox="0 0 200 80"
                className="pointer-events-none absolute bottom-0 left-0 h-20 w-full text-white/5"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path d="M0 60Q40 10 100 30T200 20V100H0Z" fill="currentColor" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
