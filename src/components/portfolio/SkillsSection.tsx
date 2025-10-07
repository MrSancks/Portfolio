'use client';
import React from 'react';

interface SkillsSectionProps {
  title: string;
}

interface SkillGroup {
  label: string;
  items: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Stack principal',
    items: [
      'Node',
      '.NET',
      'Express',
      'Java',
      'REST APIs',
      'SQL Server',
      'MongoDB',
      'PHP',
      'Angular',
      'Python',
      'React',
      'Vue',
      'Redux',
      'Firebase',
      'React Native',
      'Laravel',
    ],
  },
  {
    label: 'Testing',
    items: ['Pruebas funcionales', 'Postman', 'Jest', 'JUnit', 'xUnit'],
  },
  {
    label: 'Colaboración',
    items: ['GitLab', 'Scrum', 'Jira', 'Confluence'],
  },
  {
    label: 'DevOps / CI-CD',
    items: ['Docker', 'Git', 'Despliegue automatizado', 'Kubernetes', 'AWS (EC2, RDS, S3)'],
  },
];

export default function SkillsSection({ title }: SkillsSectionProps) {
  return (
    <section id="skills" className="scroll-mt-40">
      <div className="section-surface animate-fade-up">
        <h2 className="text-center text-3xl font-semibold text-slate-800 transition-colors duration-300 dark:text-slate-100">
          {title}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-white/30 bg-white/70 p-6 shadow-lg shadow-slate-900/10 transition-transform duration-500 hover:-translate-y-1 dark:border-white/10 dark:bg-slate-900/60"
            >
              <h3 className="text-center text-lg font-semibold text-slate-700 transition-colors duration-300 dark:text-slate-100">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap justify-center gap-3">
                {group.items.map((skill) => (
                  <li key={skill} className="chip">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
