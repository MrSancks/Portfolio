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
        <h2 className="text-center text-3xl font-semibold text-white">
          {title}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/40 transition-transform duration-500 hover:-translate-y-1 hover:border-white/30"
            >
              <h3 className="text-center text-lg font-semibold text-white">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap justify-center gap-3 text-slate-300">
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
