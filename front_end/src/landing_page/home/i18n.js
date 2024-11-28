import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome_message: "Welcome to My Website",
      description: "This is a sample description text that will change based on the selected language."
    }
  },
  es: {
    translation: {
      welcome_message: "Bienvenido a mi sitio web",
      description: "Este es un texto descriptivo de muestra que cambiará según el idioma seleccionado."
    }
  },
  fr: {
    translation: {
      welcome_message: "Bienvenue sur mon site Web",
      description: "Ceci est un texte descriptif d'exemple qui changera en fonction de la langue sélectionnée."
    }
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    debug: true,
    interpolation: {
      escapeValue: false // React already escapes values
    }
  });

export default i18n;
