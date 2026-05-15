"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Locale = "en" | "ar";

interface i18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
}

const i18nContext = createContext<i18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const isRTL = locale === "ar";

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = locale;
  }, [locale, isRTL]);

  return (
    <i18nContext.Provider value={{ locale, setLocale, isRTL }}>
      <div className={isRTL ? "font-arabic" : "font-sans"}>{children}</div>
    </i18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(i18nContext);
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
