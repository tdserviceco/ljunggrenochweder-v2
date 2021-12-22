import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translation from "./assets/i18n/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // we init with resources
    supportedLngs: ['sv', 'en'],
    cleanCode: true,
    fallbackLng: 'sv',
    resources: {
      sv: {
        common: translation.sv
      },
      en: {
        common: translation.en
      },
    },
    debug: true,

    // have a common namespace used around the full app
    defaultNS: "translations",

    keySeparator: false, // we use content as keys
    react: {
      bindI18n: "languageChanged"
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;