import type { Locale } from "@/lib/i18n";
import { catalogUrl, getSiteUrl, heroImage, ovokoUrl, phoneHref } from "@/lib/site";

export function JsonLd({
  lang,
  description,
}: {
  lang: Locale;
  description: string;
}) {
  const url = `${getSiteUrl()}/${lang}`;
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "UAB Bratas",
    url,
    description,
    inLanguage: lang,
    image: `${getSiteUrl()}${heroImage}`,
    telephone: phoneHref.replace("tel:", ""),
    currenciesAccepted: "EUR",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Šlamų k. 1B-1",
      addressLocality: "Šlamai",
      addressRegion: "Pasvalio r.",
      addressCountry: "LT",
    },
    vatID: "LT100014759115",
    taxID: "306008010",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "16:00",
      },
    ],
    areaServed: {
      "@type": "AdministrativeArea",
      name: "European Union",
    },
    sameAs: [catalogUrl, ovokoUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
