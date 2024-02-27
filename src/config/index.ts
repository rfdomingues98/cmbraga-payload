export const i18n = {
  defaultLocale: "pt",
  locales: ["pt", "en", "es"] as const,
  localePrefix: "always",
} as const

export const mappedLocales = {
  pt: { locale: "pt", name: "Português" },
  en: { locale: "en", name: "English" },
  es: { locale: "es", name: "Español" },
}

export type Locale = (typeof i18n)["locales"][number]
