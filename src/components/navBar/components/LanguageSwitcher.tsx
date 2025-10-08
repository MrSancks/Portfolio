'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

interface LanguageSwitcherProps {
  className?: string;
}

const languages = [
  { code: 'en', flag: '/flags/en.svg', alt: 'English' },
  { code: 'es', flag: '/flags/es.svg', alt: 'Español' },
];

export default function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { i18n } = useTranslation('lang');
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
    setOpen(false);
  };

  if (!mounted) return null;

  const current = languages.find(l => l.code === i18n.language) || languages[0];

  return (
    <div className={`relative ${className}`}>
      <Image
        src={current.flag}
        alt={current.alt}
        width={24}
        height={16}
        onClick={() => setOpen(!open)}
        className="cursor-pointer rounded-sm border border-white/20 bg-white/10 p-[2px] transition-transform duration-300 hover:scale-110"
      />
      {open && (
        <div className="absolute right-0 mt-2 flex flex-col gap-1 rounded-xl border border-white/10 bg-neutral-950/90 p-2 shadow-lg shadow-black/60 backdrop-blur">
          {languages
            .filter(l => l.code !== current.code)
            .map(l => (
              <Image
                key={l.code}
                src={l.flag}
                alt={l.alt}
                width={24}
                height={16}
                onClick={() => changeLanguage(l.code)}
                className="cursor-pointer rounded-sm border border-transparent bg-white/10 p-[2px] transition-transform duration-300 hover:scale-110 hover:border-white/30"
              />
            ))}
        </div>
      )}
    </div>
  );
}