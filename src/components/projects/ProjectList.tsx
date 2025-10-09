'use client';

import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard, { Project } from './ProjectCard';

interface Metric {
  value: string;
  label: string;
}

export default function ProjectList() {
  const { t, i18n } = useTranslation('lang');

  const projects = useMemo(
    () => t('projects.items', { returnObjects: true }) as Project[],
    [i18n.language, t],
  );
  const metrics = useMemo(
    () => t('projectsSection.metrics', { returnObjects: true }) as Metric[],
    [i18n.language, t],
  );

  return (
    <div className="mt-12 space-y-10">
      <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-8 text-left shadow-2xl shadow-black/40 backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-emerald-200">
            {t('projectsSection.tag')}
          </p>
          <h3 className="text-3xl font-semibold text-white lg:text-4xl">{t('projectsSection.heading')}</h3>
          <p className="max-w-xl text-sm leading-relaxed text-slate-200">{t('projectsSection.description')}</p>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.06] p-6 text-white shadow-xl shadow-black/40">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
              {t('projectsSection.recognitionTag')}
            </p>
            <p className="mt-2 text-2xl font-semibold">{t('projectsSection.recognitionValue')}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-slate-100">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-2xl border border-white/15 bg-black/40 p-4 text-center">
                <p className="text-3xl font-bold">{metric.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.3em]">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} featured={index === 0} />
        ))}
      </div>
    </div>
  );
}
