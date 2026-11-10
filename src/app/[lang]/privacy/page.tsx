import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/dictionaries";
import { hasLocale, locales } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const dict = getDictionary(lang);
  return {
    title: `${dict.privacy.title} — UAB Bratas`,
    description: dict.privacy.intro,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        ...Object.fromEntries(
          locales.map((locale) => [locale, `/${locale}/privacy`]),
        ),
        "x-default": "/en/privacy",
      },
    },
    metadataBase: new URL(getSiteUrl()),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <main id="content" className="px-3 py-8 md:px-5 md:py-12">
      <article className="mx-auto max-w-3xl rounded-[1.75rem] bg-ivory px-6 py-8 shadow-card sm:px-10 sm:py-10">
        <p className="text-sm">
          <Link
            href={`/${lang}`}
            className="font-semibold text-brand underline-offset-4 hover:underline"
          >
            ← Bratas
          </Link>
        </p>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {dict.privacy.title}
        </h1>
        <p className="mt-2 text-sm text-muted">{dict.privacy.updated}</p>
        <p className="mt-6 text-base leading-relaxed text-pretty">
          {dict.privacy.intro}
        </p>
        <div className="mt-8 space-y-8">
          {dict.privacy.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-xl font-semibold tracking-tight">
                {section.heading}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-pretty text-ink/80">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
