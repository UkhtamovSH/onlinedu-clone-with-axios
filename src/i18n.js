import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import XHR from 'i18next-xhr-backend';
import languageRU from './language/ru/translate.json';
import languageUZ from './language/uz/translate.json';

i18n.use(XHR)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: languageRU,
      uz: languageUZ,
    },
    /* default language when load the website in browser */
    // lng: "ru",
    lng: window.localStorage.getItem('language') || 'uz',
    /* When react i18next not finding any language to as default in borwser */
    // fallbackLng: 'uz',
    fallbackLng: 'ru',
    /* debugger For Development environment */
    debug: true,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: '.',
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
      // useSuspense: false,
    },
  });

export default i18n;