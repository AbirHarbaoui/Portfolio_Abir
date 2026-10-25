
import { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);

const translations = {
  fr: {
    home: "Accueil",
    about: "À propos",
    journey: "Parcours",
    skills: "Compétences",
    projects: "Projets",
    experience: "Expériences",
    certifications: "Certifications",
    contact: "Contact",
    search: "Recherche",
    searchPlaceholder: "Rechercher un mot, une technologie...",
    noResults: "Aucun résultat trouvé.",
    searchHint: "Tape quelques lettres pour commencer",
    language: "Langue",
  },
  en: {
    home: "Home",
    about: "About",
    journey: "Journey",
    skills: "Skills",
    projects: "Projects",
    experience: "Experience",
    certifications: "Certifications",
    contact: "Contact",
    search: "Search",
    searchPlaceholder: "Search a word or technology...",
    noResults: "No results found.",
    searchHint: "Type a few letters to get started",
    language: "Language",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("portfolio-language") || "fr"
  );

  const changeLanguage = (nextLanguage) => {
    setLanguage(nextLanguage);
    localStorage.setItem("portfolio-language", nextLanguage);
  };

  const t = (key) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage doit être utilisé dans LanguageProvider");
  }

  return context;
}
