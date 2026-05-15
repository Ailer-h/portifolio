import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Language } from '../translations'

export type Theme = 'light' | 'dark'

interface UserPreferences {
  theme: Theme
  language: Language
  toggleTheme: () => void
  toggleLanguage: () => void
  t: (key: string) => string
}

const UserPreferencesContext = createContext<UserPreferences | null>(null)

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme | null
    const initial = saved ?? 'dark'
    document.documentElement.setAttribute('data-theme', initial)
    return initial
  })

  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('language') as Language | null) ?? 'en'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  const toggleLanguage = () => setLanguage(prev => prev === 'en' ? 'pt' : 'en')

  const t = (key: string): string => {
    const keys = key.split('.')
    let obj: unknown = translations[language]
    for (const k of keys) {
      if (typeof obj !== 'object' || obj === null) return key
      obj = (obj as Record<string, unknown>)[k]
    }
    return typeof obj === 'string' ? obj : key
  }

  return (
    <UserPreferencesContext.Provider value={{ theme, language, toggleTheme, toggleLanguage, t }}>
      {children}
    </UserPreferencesContext.Provider>
  )
}

export const useUserPreferences = () => {
  const ctx = useContext(UserPreferencesContext)
  if (!ctx) throw new Error('useUserPreferences must be used within UserPreferencesProvider')
  return ctx
}
