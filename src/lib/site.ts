export const phoneDisplay = "+370 687 49115";
export const phoneHref = "tel:+37068749115";
export const catalogUrl = "https://rrr.lt/pardavejas/bratas";
export const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=%C5%A0lam%C5%B3+k.+1B-1%2C+Pasvalio+r.";
export const osmEmbed =
  "https://www.openstreetmap.org/export/embed.html?bbox=24.3397%2C56.0136%2C24.4197%2C56.0536&layer=mapnik&marker=56.03357%2C24.37966";
export const osmUrl =
  "https://www.openstreetmap.org/?mlat=56.03357&mlon=24.37966#map=14/56.03357/24.37966";

export const nav = [
  { href: "#is-jk", label: "Iš JK" },
  { href: "#dalys", label: "Dalys" },
  { href: "#ivertinimas", label: "Įvertinimas" },
  { href: "#galerija", label: "Galerija" },
  { href: "#kontaktai", label: "Kontaktai" },
] as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3847";
}

export type Photo = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export const gallery: Photo[] = [
  {
    src: "/photos/packing.jpg",
    alt: "Žibintas, pakavimo juosta ir kartoninė dėžė ant darbastalio sandėlyje",
    caption: "Pakavimas siuntimui",
    width: 1152,
    height: 864,
  },
  {
    src: "/photos/bumper-detail.jpg",
    alt: "Naudotas tamsus bamperis ant stovo dalių sandėlyje",
    caption: "Bamperis",
    width: 864,
    height: 1152,
  },
  {
    src: "/photos/wheels.jpg",
    alt: "Naudotų lietų ratlankių krūva ir stabdžių diskas ant betono",
    caption: "Ratai ir diskai",
    width: 1024,
    height: 1024,
  },
  {
    src: "/photos/interior-parts.jpg",
    alt: "Dvi naudotos automobilio sėdynės ir vairas ant darbastalio",
    caption: "Salonas",
    width: 1152,
    height: 864,
  },
  {
    src: "/photos/suspension.jpg",
    alt: "Naudotos svirtys, spyruoklė ir amortizatoriai ant metalinio stalo",
    caption: "Pakaba",
    width: 1152,
    height: 864,
  },
  {
    src: "/photos/mirrors.jpg",
    alt: "Naudoti šoniniai veidrodėliai eilėmis ant sandėlio lentynų",
    caption: "Veidrodėliai",
    width: 1152,
    height: 864,
  },
  {
    src: "/photos/electronics.jpg",
    alt: "Saugiklių blokai ir valdymo moduliai kartoninėse dėžutėse",
    caption: "Elektronika",
    width: 1152,
    height: 864,
  },
];

export const categories = [
  { name: "Žibintai", note: "priekiniai ir galiniai" },
  { name: "Kėbulas", note: "durys, bamperiai, gaubtai" },
  { name: "Varikliai ir dėžės", note: "agregatai ant palečių" },
  { name: "Veidrodėliai", note: "elektra valdomi" },
  { name: "Elektronika", note: "saugiklių blokai, moduliai" },
  { name: "Pakaba ir stabdžiai", note: "svirtys, amortizatoriai, diskai" },
  { name: "Salonas", note: "sėdynės, vairai, rankenėlės" },
];
