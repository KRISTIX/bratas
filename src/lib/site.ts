import type { Locale } from "@/lib/i18n";

export const phoneDisplay = "+370 687 49115";
export const phoneHref = "tel:+37068749115";
export const catalogUrl = "https://rrr.lt/pardavejas/bratas";
export const ovokoUrl = "https://www.ovoko.com/";
export const wholesaleEmail = "test@boostery.io";

/** Hero photograph A (Bratas-4 bumper aisle). */
export const heroImage = "/photos/hero-warehouse.jpg";
/** Hero photograph B (Bratas-3 bumper aisle). */
export const heroBumperImage = "/photos/hero-bumpers.jpg";
/** Warehouse stock photograph (Bratas-16). */
export const warehouseStockImage = "/photos/warehouse-stock.jpg";

/** Hero gallery slides: both bumper-aisle photographs. */
export const heroImages = [heroImage, heroBumperImage] as const;

/** Photographs for the three-part line-of-work section. */
export const serviceImages = [
  "/photos/import-lot.jpg",
  warehouseStockImage,
  "/photos/packing.jpg",
] as const;

/** Facility photograph used in the wholesale block (former contact photo). */
export const facilityImage = "/photos/engines.jpg";

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
