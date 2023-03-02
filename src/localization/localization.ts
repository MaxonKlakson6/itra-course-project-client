import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import { enTranslation } from 'src/localization/enTranslation';
import { ruTranslation } from 'src/localization/ruTranslation';

const selectedLng = localStorage.getItem('i18nextLng');

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: selectedLng || 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: enTranslation,
      ru: ruTranslation,
    },
  });

export default i18n;
