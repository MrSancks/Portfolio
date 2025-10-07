import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

const defaultLang = typeof window !== 'undefined' && localStorage.getItem('language')
  ? localStorage.getItem('language')!
  : (process.env.NEXT_PUBLIC_LANG_DEFAULT || 'es');
const supportedLangs = (process.env.NEXT_PUBLIC_LANG || 'es,en').split(',');

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: defaultLang,
    supportedLngs: supportedLangs,
    ns: ['lang'],
    defaultNS: 'lang',
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    backend: {
      // Cambia la ruta para que sea accesible desde el navegador
      loadPath: '/lang/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'language',
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;
