import Image from "next/image";
import { notFound } from "next/navigation";

import { AwardSeal } from "@/components/award-seal";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import {
  catalogUrl,
  galleryPhotos,
  mapsUrl,
  osmEmbed,
  osmUrl,
  phoneDisplay,
  phoneHref,
  serviceImages,
} from "@/lib/site";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);
  const photos = galleryPhotos.map((photo) => ({
    ...photo,
    alt: dict.gallery.photos[photo.id].alt,
    caption: dict.gallery.photos[photo.id].caption,
  }));

  return (
    <>
      <Header
        lang={lang}
        nav={[
          { href: "#parts", label: dict.nav.parts },
          { href: "#recognition", label: dict.nav.recognition },
          { href: "#gallery", label: dict.nav.gallery },
          { href: "#contact", label: dict.nav.contact },
        ]}
        menu={dict.nav.menu}
        close={dict.nav.close}
        primaryNav={dict.nav.primary}
        mobileNav={dict.nav.mobile}
        catalog={dict.nav.catalog}
        language={dict.language}
      />
      <main id="content" className="pb-20 md:pb-0">
        <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:pt-16 md:pb-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand">
                <span className="h-0.5 w-8 bg-brand" aria-hidden />
                {dict.hero.eyebrow}
              </p>
              <h1 className="mt-4 font-display text-[2.55rem] leading-[1.02] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.45rem]">
                {dict.hero.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
                {dict.hero.lead}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                    {dict.hero.catalog}
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={phoneHref}>
                    {dict.hero.call} {phoneDisplay}
                  </a>
                </Button>
              </div>
            </div>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                <Image
                  src="/photos/bumper-aisle.jpg"
                  alt={dict.hero.imageAlt}
                  fill
                  preload
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-muted">
                {dict.hero.caption}
              </figcaption>
            </figure>
          </div>
          <dl className="mt-12 grid border-y border-line sm:grid-cols-3">
            <div className="py-6 sm:pr-6">
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                {dict.stats.catalogLabel}
              </dt>
              <dd className="mt-1 font-display text-2xl leading-tight font-bold text-balance">
                {dict.stats.catalogValue}
              </dd>
              <p className="text-sm text-muted">{dict.stats.catalogNote}</p>
            </div>
            <div className="border-t border-line py-6 sm:border-t-0 sm:border-l sm:px-6">
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                {dict.stats.hoursLabel}
              </dt>
              <dd className="mt-1 font-display text-3xl font-bold">
                {dict.stats.hoursValue}
              </dd>
              <p className="text-sm text-muted">{dict.stats.hoursNote}</p>
            </div>
            <div className="border-t border-line py-6 sm:border-t-0 sm:border-l sm:pl-6">
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                {dict.stats.sellerLabel}
              </dt>
              <dd className="mt-1 font-display text-2xl font-bold tracking-tight">
                {dict.stats.sellerValue}
              </dd>
              <p className="text-sm text-muted">{dict.stats.sellerNote}</p>
            </div>
          </dl>
        </section>
        <section id="from-the-uk" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">
                {dict.origin.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {dict.origin.title}
              </h2>
              <p className="mt-4 text-lg text-pretty text-muted">
                {dict.origin.lead}
              </p>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {dict.services.map((service, index) => {
                const src = serviceImages[index];
                if (!src) return null;
                return (
                  <article key={service.title} className="border border-line bg-white">
                    <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                      <Image
                        src={src}
                        alt={service.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs font-semibold tracking-[0.18em] text-brand">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-pretty text-muted">{service.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section id="parts" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:py-24 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">
                {dict.parts.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {dict.parts.title}
              </h2>
              <p className="mt-4 text-lg text-pretty text-muted">{dict.parts.lead}</p>
              <ul className="mt-8 border-y border-line">
                {dict.parts.categories.map((category) => (
                  <li
                    key={category.name}
                    className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-b-0"
                  >
                    <span className="font-semibold">{category.name}</span>
                    <span className="text-right text-sm text-muted">{category.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">{dict.parts.brands}</p>
              <Button asChild className="mt-6" size="lg">
                <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                  {dict.parts.catalog}
                </a>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image
                    src="/photos/bumper-racks.jpg"
                    alt={dict.parts.bodyAlt}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-muted">
                  {dict.parts.bodyCaption}
                </figcaption>
              </figure>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image
                    src="/photos/engine-room.jpg"
                    alt={dict.parts.engineAlt}
                    fill
                    sizes="(min-width: 1024px) 320px, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-sm text-muted">
                  {dict.parts.engineCaption}
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section id="recognition" className="scroll-mt-24 bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[auto_1fr] md:gap-16 md:py-24">
            <div className="flex justify-center md:justify-start">
              <AwardSeal label={dict.award.seal} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">
                {dict.award.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {dict.award.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-pretty">{dict.award.kicker}</p>
              <blockquote className="mt-6 border-l-2 border-brand pl-5 text-lg leading-relaxed text-pretty">
                {dict.award.quote}
              </blockquote>
              <p className="mt-5 max-w-2xl text-pretty text-muted">{dict.award.body}</p>
            </div>
          </div>
        </section>
        <section id="gallery" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">
                {dict.gallery.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {dict.gallery.title}
              </h2>
              <p className="mt-4 text-lg text-pretty text-muted">{dict.gallery.lead}</p>
            </div>
            <Gallery items={photos} />
          </div>
        </section>
        <section id="contact" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">
                {dict.contact.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {dict.contact.title}
              </h2>
              <p className="mt-2 text-lg text-muted">{dict.contact.place}</p>
              <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.companyLabel}
                  </dt>
                  <dd className="mt-1 font-semibold">{dict.contact.company}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.phoneLabel}
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={phoneHref}
                      className="font-semibold underline-offset-4 hover:underline"
                    >
                      {phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.codeLabel}
                  </dt>
                  <dd className="mt-1 font-semibold">306008010</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.vatLabel}
                  </dt>
                  <dd className="mt-1 font-semibold">LT100014759115</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.hoursLabel}
                  </dt>
                  <dd className="mt-1">{dict.contact.hours}</dd>
                </div>
              </dl>
            </div>
            <aside className="flex flex-col justify-between bg-ink p-8 text-white lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">
                {dict.contact.callEyebrow}
              </p>
              <a
                href={phoneHref}
                className="mt-8 font-display text-4xl font-bold tracking-tight"
              >
                {phoneDisplay}
              </a>
              <p className="mt-3 text-white/70">{dict.contact.hoursShort}</p>
              <Button asChild variant="inverse" className="mt-8 w-fit">
                <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                  {dict.contact.catalog}
                </a>
              </Button>
            </aside>
          </div>
          <div className="mx-auto max-w-6xl px-5 pb-16">
            <iframe
              title={dict.contact.mapTitle}
              src={osmEmbed}
              className="h-72 w-full border border-line"
              loading="lazy"
            />
            <p className="mt-3 text-sm text-muted">
              {dict.contact.mapText}{" "}
              <a
                href={mapsUrl}
                className="font-semibold text-ink underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.contact.openMap}
              </a>
              {" · "}
              <a
                href={osmUrl}
                className="font-semibold text-ink underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {dict.contact.osm}
              </a>
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-line pb-16 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <Image src="/brand/logo.png" alt="" width={1104} height={304} className="h-8 w-auto" />
          <p className="max-w-xl text-sm text-muted">
            {dict.footer.before}
            <a
              href={catalogUrl}
              className="font-semibold text-ink underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RRR.lt
            </a>
            {dict.footer.after}
          </p>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-line bg-white md:hidden">
        <a href={phoneHref} className="flex h-14 items-center justify-center text-sm font-semibold">
          {dict.mobile.call}
        </a>
        <a
          href={catalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 items-center justify-center bg-brand text-sm font-semibold text-white"
        >
          {dict.mobile.catalog}
        </a>
      </div>
    </>
  );
}
