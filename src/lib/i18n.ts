export const locales = ["en", "fr", "lt"] as const;

export type Locale = (typeof locales)[number];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  lt: "Lietuvių",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  fr: "fr_FR",
  lt: "lt_LT",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
