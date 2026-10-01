"use client";
import { createContext, useContext, useEffect, useState } from "react";
export type Language = "id" | "en";
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "id" ? "en" : "id"));
  };
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {" "}
      {children}{" "}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage harus digunakan di dalam LanguageProvider");
  }
  return context;
}
