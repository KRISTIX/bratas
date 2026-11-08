export const phoneDisplay = "+370 687 49115";
export const phoneHref = "tel:+37068749115";
export const catalogUrl = "https://rrr.lt/pardavejas/bratas";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=%C5%A0lam%C5%B3+k.+1B-1%2C+Pasvalio+r.";
export const osmEmbed =
  "https://www.openstreetmap.org/export/embed.html?bbox=24.3397%2C56.0136%2C24.4197%2C56.0536&layer=mapnik&marker=56.03357%2C24.37966";
export const osmUrl =
  "https://www.openstreetmap.org/?mlat=56.03357&mlon=24.37966#map=14/56.03357/24.37966";

/** The only photographs rendered on the page. */
export const frames = [
  { id: "warehouse", src: "/photos/hero-warehouse.jpg" },
  { id: "lights", src: "/photos/headlights.jpg" },
  { id: "engines", src: "/photos/engines.jpg" },
  { id: "body", src: "/photos/body-panels.jpg" },
  { id: "packing", src: "/photos/packing.jpg" },
] as const;

export type FrameId = (typeof frames)[number]["id"];

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3847";
}
