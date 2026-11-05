export const phoneDisplay = "+370 687 49115";
export const phoneHref = "tel:+37068749115";
export const catalogUrl = "https://rrr.lt/pardavejas/bratas";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=%C5%A0lam%C5%B3+k.+1B-1%2C+Pasvalio+r.";
export const osmEmbed =
  "https://www.openstreetmap.org/export/embed.html?bbox=24.3397%2C56.0136%2C24.4197%2C56.0536&layer=mapnik&marker=56.03357%2C24.37966";
export const osmUrl =
  "https://www.openstreetmap.org/?mlat=56.03357&mlon=24.37966#map=14/56.03357/24.37966";

export const serviceImages = [
  "/photos/forklift-arrival.jpg",
  "/photos/lights-aisle.jpg",
  "/photos/packing-bench.jpg",
] as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3847";
}

export const galleryPhotos = [
  { id: "lights", src: "/photos/rear-lights.jpg" },
  { id: "wheels", src: "/photos/wheels-tyres.jpg" },
  { id: "mechanical", src: "/photos/mechanical-parts.jpg" },
  { id: "crates", src: "/photos/parts-crates.jpg" },
  { id: "boxes", src: "/photos/bumper-boxes.jpg" },
  { id: "forklift", src: "/photos/forklift-engine.jpg" },
  { id: "engineContainer", src: "/photos/engine-container.jpg" },
  { id: "yard", src: "/photos/yard.jpg" },
  { id: "yardContainer", src: "/photos/yard-container.jpg" },
] as const;

export type GalleryId = (typeof galleryPhotos)[number]["id"];
