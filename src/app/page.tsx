'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import NavBar from '@/components/navBar/NavBar';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import ExperienceSection from '@/components/portfolio/ExperienceSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import EducationSection from '@/components/portfolio/EducationSection';
import ContactSection from '@/components/portfolio/ContactSection';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

export default function Home() {
  const { t } = useTranslation('lang');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />
      <NavBar />
      <main className="relative z-10 flex w-full flex-col pb-32 pt-28 transition-all duration-500 md:pl-32 lg:pl-40">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-20 px-8 sm:px-12 md:px-16 lg:gap-28 lg:px-20 xl:max-w-[1600px] xl:gap-32 xl:px-24">
          <HeroSection title={t('hero.title')} subtitle={t('hero.subtitle')} />
          <AboutSection title={t('sections.about')} content={t('about.content')} />
          <ExperienceSection title={t('sections.experience')} />
          <ProjectsSection title={t('sections.projects')} />
          <SkillsSection title={t('sections.skills')} />
          <EducationSection title={t('sections.education')} />
          <ContactSection title={t('sections.contact')} />
        </div>
      </main>
    </div>
  );
}
