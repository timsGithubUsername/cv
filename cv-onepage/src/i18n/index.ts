import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationDE from './de.json';
import translationEN from './en.json';

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'de',
        resources: {
            de: { translation: translationDE },
            en: { translation: translationEN }
        },
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;