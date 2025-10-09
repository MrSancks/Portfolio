'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
}

const languages = [
  { code: 'en', flag: 'https://flagcdn.com/w40/gb.png', alt: 'English' },
  { code: 'es', flag: 'https://flagcdn.com/w40/es.png', alt: 'Español' },
];

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation('lang');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const stored = localStorage.getItem('language');
    if (stored && stored !== i18n.language) {
      void i18n.changeLanguage(stored);
    }
  }, [mounted, i18n]);

  if (!mounted) return null;

  const current = languages.find((item) => item.code === i18n.language) || languages[0];
  const nextLanguage = languages.find((item) => item.code !== current.code)!;

  const toggleLanguage = () => {
    void i18n.changeLanguage(nextLanguage.code);
    localStorage.setItem('language', nextLanguage.code);
  };

  return (
    <div className={`inline-block ${className}`}>
      <Image
        src={current.flag}
        alt={current.alt}
        width={28}
        height={18}
        onClick={toggleLanguage}
        className="cursor-pointer rounded-sm border border-white/20 bg-white/10 p-[2px] transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
}
