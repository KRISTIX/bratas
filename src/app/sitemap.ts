import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const languages = {
    en: `${site}/en`,
    fr: `${site}/fr`,
    lt: `${site}/lt`,
    "x-default": `${site}/en`,
  };

  return locales.map((locale) => ({
    url: `${site}/${locale}`,
    lastModified: new Date("2026-11-02"),
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: { languages },
  }));
}
