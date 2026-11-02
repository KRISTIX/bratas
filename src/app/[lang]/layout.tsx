import type { Metadata } from "next";
import { Outfit, Source_Sans_3 } from "next/font/google";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/json-ld";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales, ogLocales, type Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";
import "../globals.css";

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

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = getDictionary(lang);
  const alternateLocale = locales
    .filter((locale): locale is Locale => locale !== lang)
    .map((locale) => ogLocales[locale]);

  return {
    metadataBase: new URL(getSiteUrl()),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        en: "/en",
        fr: "/fr",
        lt: "/lt",
        "x-default": "/en",
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      locale: ogLocales[lang],
      alternateLocale,
      type: "website",
      siteName: "UAB Bratas",
      url: `/${lang}`,
      images: [{ url: "/opengraph-image.jpg", alt: dict.meta.imageAlt }],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${outfit.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white font-sans text-ink">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
        >
          {dict.skip}
        </a>
        {children}
        <JsonLd lang={lang} description={dict.meta.description} />
      </body>
    </html>
  );
}
