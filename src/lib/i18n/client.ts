'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from '@/locales/es/lang';
import en from '@/locales/en/lang';

const resources = {
  es: {
    lang: es,
  },
  en: {
    lang: en,
  },
} as const;

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: 'es',
    fallbackLng: 'es',
    ns: ['lang'],
    defaultNS: 'lang',
    interpolation: { escapeValue: false },
  });
}

export default i18n;
