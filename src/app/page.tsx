'use client';
import './globals.css';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
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
      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-16 px-5 pb-32 pt-28 transition-all duration-500 sm:px-8 md:ml-28 md:px-12 md:pt-32 lg:ml-40 lg:max-w-7xl lg:gap-24 lg:px-16 xl:gap-28">
        <HeroSection title={t('welcome')} subtitle={t('hero_subtitle')} />
        <AboutSection title={t('about')} content={t('about_text')} />
        <ExperienceSection title={t('experience')} />
        <ProjectsSection title={t('projects')} />
        <SkillsSection title={t('skills')} />
        <EducationSection title={t('education')} />
        <ContactSection title={t('contact')} />
      </main>
    </div>
  );
}
