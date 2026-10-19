import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin", "latin-ext"],
  variable: "--font-outfit",
  weight: ["500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin", "latin-ext"],
  variable: "--font-source",
  weight: ["400", "500", "600", "700"],
});

const description =
  "UAB „Bratas“ prekiauja naudotomis automobilių dalimis, ardo transporto priemones ir jas importuoja. Daugiau kaip 16 000 dalių RRR.lt kataloge. Šlamų k., Pasvalio r.";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: "UAB Bratas — automobilių dalys, ardymas ir importas",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "UAB Bratas — automobilių dalys, ardymas ir importas",
    description,
    locale: "lt_LT",
    type: "website",
    siteName: "UAB Bratas",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="lt"
      className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-ink">
        <a
          href="#pradzia"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
        >
          Pereiti prie turinio
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
