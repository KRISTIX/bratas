import { catalogUrl, getSiteUrl, phoneHref } from "@/lib/site";

export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore",
    name: "UAB Bratas",
    url,
    image: `${url}/photos/hero-warehouse.jpg`,
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
    areaServed: "LT",
    sameAs: [catalogUrl],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
