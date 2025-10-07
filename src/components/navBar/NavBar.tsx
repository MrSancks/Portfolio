'use client';
import Link from 'next/link';
import LanguageSwitcher from './components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './components/ThemeToggle';

export default function NavBar() {
  const { t } = useTranslation('lang');

  const links = [
    { href: '#home', label: t('home') },
    { href: '#about', label: t('about') },
    { href: '#experience', label: t('experience') },
    { href: '#projects', label: t('projects') },
    { href: '#skills', label: t('skills') },
    { href: '#education', label: t('education') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-20 mx-auto w-full max-w-6xl px-4 pt-6 md:px-6">
      <nav className="flex items-center justify-between rounded-3xl border border-white/20 bg-white/60 px-6 py-4 shadow-lg shadow-slate-900/10 backdrop-blur-2xl transition-colors duration-500 dark:border-white/10 dark:bg-slate-950/60 dark:shadow-black/40">
        <div className="flex items-center gap-6 text-sm font-medium uppercase tracking-wide text-slate-700 transition-colors duration-300 dark:text-slate-100">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-sky-400 after:via-indigo-400 after:to-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
