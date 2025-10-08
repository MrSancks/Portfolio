// src/components/navBar/components/ThemeToggle.tsx
'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface ThemeToggleProps {
  className?: string;
}

const iconBase = 'h-5 w-5';

export function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === 'dark' || (theme === 'system' && resolvedTheme === 'dark');

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Cambiar tema"
      className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-200 transition-all duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white ${className}`}
    >
      {isDark ? (
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
            d="M21 12.79A9 9 0 0 1 11.21 3 7.25 7.25 0 1 0 21 12.79z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className={iconBase}
        >
          <circle cx="12" cy="12" r="4.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25v1.5m0 16.5v1.5m9-9h-1.5m-16.5 0H1.5m18.136 6.636-1.06-1.06M6.424 6.424 5.364 5.364m13.212 0-1.06 1.06M6.424 17.576l-1.06 1.06" />
        </svg>
      )}
    </button>
  );
}
