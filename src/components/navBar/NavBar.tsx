'use client';

import Link from 'next/link';
import { ReactNode, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './components/LanguageSwitcher';
import { ThemeToggle } from './components/ThemeToggle';

interface NavItem {
  href: string;
  label: string;
  icon: ReactNode;
}


const iconBase = 'h-5 w-5';

export default function NavBar() {
  const { t } = useTranslation('lang');

  const items: NavItem[] = useMemo(
    () => [
      {
        href: '#home',
        label: t('home'),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={iconBase}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9.75 12 3l8.25 6.75V20a1.25 1.25 0 0 1-1.25 1.25h-4.75V14h-4.5v7.25H5A1.25 1.25 0 0 1 3.75 20z"
            />
          </svg>
        ),
      },
      {
        href: '#about',
        label: t('about'),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={iconBase}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12.75a3.75 3.75 0 1 0-3.75-3.75A3.75 3.75 0 0 0 12 12.75zm0 2.5c-3.525 0-6.75 1.838-6.75 4.125V21h13.5v-1.625c0-2.287-3.225-4.125-6.75-4.125z"
            />
          </svg>
        ),
      },
      {
        href: '#experience',
        label: t('experience'),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={iconBase}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 7.5V6A1.5 1.5 0 0 1 9 4.5h6A1.5 1.5 0 0 1 16.5 6v1.5m-9 0h-3A1.5 1.5 0 0 0 3 9v8.25A1.75 1.75 0 0 0 4.75 19h14.5A1.75 1.75 0 0 0 21 17.25V9a1.5 1.5 0 0 0-1.5-1.5h-3m-9 0h9"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
          </svg>
        ),
      },
      {
        href: '#projects',
        label: t('projects'),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={iconBase}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4 7.75 8-4.5 8 4.5m-14 4.5 6 3.375m10-3.375-6 3.375"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4 16.25 8 4.5 8-4.5m-8-4.5v9"
            />
          </svg>
        ),
      },
      {
        href: '#skills',
        label: t('skills'),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={iconBase}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3.75h10.5m-10.5 0A1.5 1.5 0 0 0 5.25 5.25v13.5A1.5 1.5 0 0 0 6.75 20.25h10.5a1.5 1.5 0 0 0 1.5-1.5V5.25a1.5 1.5 0 0 0-1.5-1.5m-10.5 0v16.5m0-10.5h10.5"
            />
          </svg>
        ),
      },
      {
        href: '#education',
        label: t('education'),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={iconBase}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m3 7 9-4 9 4-9 4z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.5V15a7.5 7.5 0 0 0 15 0V9.5" />
          </svg>
        ),
      },
      {
        href: '#contact',
        label: t('contact'),
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            className={iconBase}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h9"
            />
          </svg>
        ),
      },
    ],
    [t]
  );

  return (
    <>
      <aside className="fixed left-6 top-0 z-30 hidden h-screen w-24 flex-col justify-between border-r border-white/10 bg-black/40 px-0 py-10 backdrop-blur-2xl md:flex">
        <div className="flex flex-col items-center gap-10">
          <Link
            href="#home"
            className="group relative flex h-14 w-14 items-center justify-center rounded-3xl border border-white/20 bg-white/[0.05] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
          >
            <span className="text-xl font-semibold tracking-[0.3em]">S</span>
            <span className="pointer-events-none absolute left-16 rounded-2xl bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-black opacity-0 shadow-lg shadow-black/50 transition-all duration-200 group-hover:left-20 group-hover:opacity-100">
              Sanckas
            </span>
          </Link>
          <nav className="flex flex-col items-center gap-6">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:text-white"
                aria-label={item.label}
              >
                {item.icon}
                <span className="pointer-events-none absolute left-14 rounded-2xl bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-black opacity-0 shadow-lg shadow-black/50 transition-all duration-200 group-hover:left-20 group-hover:opacity-100">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="group relative">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
              <LanguageSwitcher />
            </div>
            <span className="pointer-events-none absolute left-14 rounded-2xl bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-black opacity-0 shadow-lg shadow-black/50 transition-all duration-200 group-hover:left-20 group-hover:opacity-100">
              Idioma
            </span>
          </div>
          <div className="group relative">
            <ThemeToggle />
            <span className="pointer-events-none absolute left-14 rounded-2xl bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-black opacity-0 shadow-lg shadow-black/50 transition-all duration-200 group-hover:left-20 group-hover:opacity-100">
              Tema
            </span>
          </div>
        </div>
      </aside>

      <div className="fixed bottom-6 left-1/2 z-30 flex w-[min(92%,420px)] -translate-x-1/2 items-center justify-around rounded-full border border-white/10 bg-black/60 px-4 py-3 text-slate-200 backdrop-blur-xl md:hidden">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 text-xs uppercase tracking-[0.2em]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-200">
              {item.icon}
            </span>
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
