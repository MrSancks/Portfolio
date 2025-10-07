'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const languages = [
  { code: 'en', flag: '/flags/en.svg', alt: 'English' },
  { code: 'es', flag: '/flags/es.svg', alt: 'Español' },
];

export default function LanguageSwitcher() {
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
    <div className="relative">
      <Image
        src={current.flag}
        alt={current.alt}
        width={24}
        height={16}
        onClick={() => setOpen(!open)}
        className="cursor-pointer transition-transform duration-300 hover:scale-110"
      />
      {open && (
        <div className="absolute right-0 mt-2 flex flex-col bg-white border rounded shadow-md p-1">
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
                className="cursor-pointer hover:scale-110 transition-transform duration-300 mb-1 last:mb-0"
              />
            ))}
        </div>
      )}
    </div>
  );
}