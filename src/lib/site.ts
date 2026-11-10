import type { Locale } from "@/lib/i18n";

export const phoneDisplay = "+370 687 49115";
export const phoneHref = "tel:+37068749115";
export const catalogUrl = "https://rrr.lt/pardavejas/bratas";
export const ovokoUrl = "https://www.ovoko.com/";
export const osmEmbed =
  "https://www.openstreetmap.org/export/embed.html?bbox=24.3397%2C56.0136%2C24.4197%2C56.0536&layer=mapnik&marker=56.03357%2C24.37966";

/** Main hero photograph (Bratas-4: bumper aisle). */
export const heroImage = "/photos/hero-warehouse.jpg";

/** Photographs for the three-part line-of-work section. */
export const serviceImages = [
  "/photos/import-lot.jpg",
  "/photos/body-panels.jpg",
  "/photos/engines.jpg",
] as const;

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

/** Lithuanian visitors go to RRR.lt; others to Ovoko’s EU marketplace. */
export function getPrimaryCatalogUrl(locale: Locale) {
  return locale === "lt" ? catalogUrl : ovokoUrl;
}

export function getSecondaryCatalogUrl(locale: Locale) {
  return locale === "lt" ? ovokoUrl : catalogUrl;
}

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3847";
}
