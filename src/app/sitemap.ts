import type { MetadataRoute } from "next";

import { locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteUrl();
  const languages = Object.fromEntries([
    ...locales.map((locale) => [locale, `${site}/${locale}`] as const),
    ["x-default", `${site}/en`] as const,
  ]);

  const pages = ["", "/privacy"] as const;

  return pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${site}/${locale}${page}`,
      lastModified: new Date("2026-11-10"),
      changeFrequency: "monthly" as const,
      priority: page === "" ? (locale === "en" ? 1 : 0.8) : 0.3,
      alternates: {
        languages: Object.fromEntries(
          Object.entries(languages).map(([key, value]) => [
            key,
            `${value}${page}`,
          ]),
        ),
      },
    })),
  );
}
