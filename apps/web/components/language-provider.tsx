"use client"

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react"
import type { Locale } from "@/lib/copy"

const STORAGE_KEY = "algelyx-locale"
const DEFAULT_LOCALE: Locale = "it"

interface LanguageContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    // We only want this effect to read from storage on mount
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      document.documentElement.lang = DEFAULT_LOCALE
      return
    }

    if (stored === "en" || stored === "it") {
      // Defer state update to avoid synchronous setState warning
      if (stored !== DEFAULT_LOCALE) {
        const timer = setTimeout(() => setLocaleState(stored), 0);
        return () => clearTimeout(timer);
      }
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  return (
    <LanguageContext value={{ locale, setLocale }}>{children}</LanguageContext>
  )
}

export function useLocale(): LanguageContextValue {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLocale must be used within a LanguageProvider")
  }
  return context
}
