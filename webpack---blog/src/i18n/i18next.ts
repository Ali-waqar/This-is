import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { defaultLanguage } from './config';

function setupI18next() {
  i18next.use(initReactI18next).init({
    fallbackLng: defaultLanguage,
    // have a common namespace used around the full app
    defaultNS: 'ih',
    load: 'languageOnly',
    debug: process.env.NODE_ENV === 'development',
    initImmediate: false,
    interpolation: { escapeValue: false },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      useSuspense: false
    }
  });

  return i18next;
}

export default setupI18next;
