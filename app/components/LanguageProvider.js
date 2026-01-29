"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import { createTranslator, DEFAULT_LOCALE, normalizeLocale } from "../lib/i18n";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ initialLocale, children }) => {
  const [locale, setLocale] = useState(normalizeLocale(initialLocale));
  const t = useMemo(() => createTranslator(locale), [locale]);

  const changeLocale = (nextLocale) => {
    const resolved = normalizeLocale(nextLocale);
    setLocale(resolved);
    document.cookie = `locale=${resolved}; path=/; max-age=31536000`;
    window.location.reload();
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      locale: DEFAULT_LOCALE,
      setLocale: () => {},
      t: createTranslator(DEFAULT_LOCALE),
    };
  }
  return context;
};
