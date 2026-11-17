import type { Locale } from "@/lib/i18n";

export const phoneDisplay = "+370 687 49115";
export const phoneHref = "tel:+37068749115";
export const contactEmail = "info@bratas.eu";
export const contactEmailHref = "mailto:info@bratas.eu";
export const catalogUrl = "https://rrr.lt/pardavejas/bratas";
export const ovokoUrl = "https://www.ovoko.com/";
export const wholesaleEmail = "test@boostery.io";

/** Hero photograph (warehouse bumper aisle). */
export const heroImage = "/photos/hero-aisle.jpg";

/** Facility photograph used in wholesale section. */
export const facilityImage = "/photos/wholesale-forklift.jpg";

/** Photographs for the three-part line-of-work section. */
export const serviceImages = [
  ["/photos/import-forklift.jpg"],
  ["/photos/warehouse-aisle-2.jpg"],
  ["/photos/packing.jpg"],
] as const;

/** Contact map — Šlamų k. 1B-1, Pasvalys district. */
export const mapsQuery = "Šlamų k. 1B-1, Pasvalio r., Lithuania";
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=14&output=embed`;
export const mapsOpenUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;

/** Stable ids for the current-stock category grid. */
export const partCategoryIds = [
  "lights",
  "body",
  "engines",
  "mirrors",
  "electronics",
  "suspension",
  "interior",
  "wheels",
] as const;

export type PartCategoryId = (typeof partCategoryIds)[number];

/** Full Bratas stock (shop 5059) on each marketplace. */
export const rrrShopUrl = "https://rrr.lt/paieska?sh=5059";

/** French visitors get ovoko.fr; everyone else ovoko.de. */
export function getOvokoShopUrl(locale: Locale) {
  return locale === "fr"
    ? "https://ovoko.fr/chercher?sh=5059"
    : "https://ovoko.de/suche?sh=5059";
}

/** Lithuanian visitors go to RRR.lt; others to Ovoko in their market. */
export function getPrimaryCatalogUrl(locale: Locale) {
  return locale === "lt" ? rrrShopUrl : getOvokoShopUrl(locale);
}

export function getSecondaryCatalogUrl(locale: Locale) {
  return locale === "lt" ? getOvokoShopUrl(locale) : rrrShopUrl;
}

/** Bratas shop id on RRR.lt / Ovoko — `sh=5059` limits results to our stock. */
const shopQuery = "sh=5059";

// Category paths per marketplace. The code after "--" is shared across sites;
// mirrors are a deep sub-category, so they use the search page's `cpc` filter.
const categoryPaths: Record<
  PartCategoryId,
  { lt: string; fr: string; de: string }
> = {
  lights: {
    lt: "/autodaliu-katalogas/apsvietimo-sistema--4j3a",
    fr: "/liste-des-pieces/systeme-d-eclairage--4j3a",
    de: "/ersatzteilliste/beleuchtungssystem--4j3a",
  },
  body: {
    lt: "/autodaliu-katalogas/priekines-isores-detales--dtc8",
    fr: "/liste-des-pieces/parties-exterieures-de-la-carrosserie-avant--dtc8",
    de: "/ersatzteilliste/vordere-karosserieteile--dtc8",
  },
  engines: {
    lt: "/autodaliu-katalogas/variklis--cm1i",
    fr: "/liste-des-pieces/moteur--cm1i",
    de: "/ersatzteilliste/motor--cm1i",
  },
  mirrors: {
    lt: "/paieska?cpc=604",
    fr: "/chercher?cpc=604",
    de: "/suche?cpc=604",
  },
  electronics: {
    lt: "/autodaliu-katalogas/prietaisai-jungikliai-el-sistema--7l6h",
    fr: "/liste-des-pieces/dispositifs-interrupteurs-systeme-electronique--7l6h",
    de: "/ersatzteilliste/geraete-schalter-elektrik--7l6h",
  },
  suspension: {
    lt: "/autodaliu-katalogas/priekine-asis--4duq",
    fr: "/liste-des-pieces/essieu-avant--4duq",
    de: "/ersatzteilliste/vorderachse--4duq",
  },
  interior: {
    lt: "/autodaliu-katalogas/salonas-interjeras--5f4s",
    fr: "/liste-des-pieces/habitacle-interieur--5f4s",
    de: "/ersatzteilliste/innenraum-interieur--5f4s",
  },
  wheels: {
    lt: "/autodaliu-katalogas/ratai-padangos-gaubtai--cdqa",
    fr: "/liste-des-pieces/roues-pneus-capuchons--cdqa",
    de: "/ersatzteilliste/raeder-reifen-radkappen--cdqa",
  },
};

/** LT → rrr.lt, FR → ovoko.fr, everyone else → ovoko.de. */
export function getCategoryUrl(locale: Locale, id: PartCategoryId) {
  const [host, key] =
    locale === "lt"
      ? (["https://rrr.lt", "lt"] as const)
      : locale === "fr"
        ? (["https://ovoko.fr", "fr"] as const)
        : (["https://ovoko.de", "de"] as const);
  const path = categoryPaths[id][key];
  return `${host}${path}${path.includes("?") ? "&" : "?"}${shopQuery}`;
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3847";
}
