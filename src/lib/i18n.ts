export const locales = ["en", "fr", "lt", "de", "pl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
  lt: "Lietuvių",
  de: "Deutsch",
  pl: "Polski",
};

export const ogLocales: Record<Locale, string> = {
  en: "en_GB",
  fr: "fr_FR",
  lt: "lt_LT",
  de: "de_DE",
  pl: "pl_PL",
};

export function hasLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Pick the best supported locale from an Accept-Language header. */
export function negotiateLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const preferred = acceptLanguage
    .split(",")
    .map((part) => {
      const [rawTag, ...params] = part.trim().split(";");
      const tag = rawTag.trim().toLowerCase();
      const qParam = params.find((param) => param.trim().startsWith("q="));
      const quality = qParam ? Number(qParam.split("=")[1]) : 1;
      return {
        tag,
        quality: Number.isFinite(quality) ? quality : 0,
      };
    })
    .filter((entry) => entry.tag)
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of preferred) {
    if (hasLocale(tag)) return tag;
    const base = tag.split("-")[0];
    if (hasLocale(base)) return base;
  }

  return defaultLocale;
}
