import Image from "next/image";
import { notFound } from "next/navigation";

import { AwardSeal } from "@/components/award-seal";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import {
  catalogUrl,
  frames,
  mapsUrl,
  osmEmbed,
  osmUrl,
  phoneDisplay,
  phoneHref,
} from "@/lib/site";
import { cn } from "@/lib/utils";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = getDictionary(lang);

  return (
    <>
      <Header
        lang={lang}
        nav={[
          { href: "#operation", label: dict.nav.operation },
          { href: "#parts", label: dict.nav.parts },
          { href: "#recognition", label: dict.nav.recognition },
          { href: "#contact", label: dict.nav.contact },
        ]}
        menu={dict.nav.menu}
        close={dict.nav.close}
        primaryNav={dict.nav.primary}
        mobileNav={dict.nav.mobile}
        catalog={dict.nav.catalog}
        language={dict.language}
      />
      <main id="content">
        <section aria-labelledby="hero-title" className="px-3 md:px-5">
          <div className="relative mx-auto max-w-6xl">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-ink px-6 pt-12 pb-36 text-white shadow-float sm:px-10 md:px-14 md:pt-16 md:pb-48">
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-full bg-brand/25 blur-3xl"
              />
              <div className="relative">
                <p className="rise flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand">
                  <span className="h-0.5 w-8 rounded-full bg-brand" aria-hidden />
                  {dict.hero.eyebrow}
                </p>
                <h1
                  id="hero-title"
                  className="rise rise-2 mt-5 max-w-4xl font-display text-[2.7rem] leading-[0.96] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl"
                >
                  {dict.hero.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="rise rise-3 mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/75">
                  {dict.hero.lead}
                </p>
                <div className="rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="focus-visible:ring-offset-ink">
                    <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                      {dict.hero.catalog}
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="focus-visible:ring-offset-ink"
                  >
                    <a href={phoneHref}>
                      {dict.hero.call} {phoneDisplay}
                    </a>
                  </Button>
                </div>
                <dl className="rise rise-5 mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3 sm:gap-0">
                  {dict.hero.proofs.map((proof, index) => (
                    <div
                      key={proof.note}
                      className={
                        index === 0
                          ? "sm:pr-8"
                          : "sm:border-l sm:border-white/15 sm:px-8"
                      }
                    >
                      <dd className="font-display text-4xl font-bold tracking-tight">
                        {proof.value}
                      </dd>
                      <dt className="mt-1 max-w-[16rem] text-sm leading-snug text-white/65">
                        {proof.note}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <ul className="rail rise rise-5 relative z-10 -mt-24 flex snap-x snap-mandatory items-end gap-3 overflow-x-auto px-1 pt-1 pb-4 md:-mt-28 lg:grid lg:grid-cols-6 lg:overflow-visible lg:px-0 lg:pb-2">
              {frames.map((frame, index) => {
                const copy = dict.frames[index];
                return (
                  <li
                    key={frame.id}
                    className={cn(
                      "shrink-0 snap-start",
                      index === 0
                        ? "w-[86%] lg:col-span-2 lg:w-auto"
                        : "w-[70%] lg:w-auto",
                    )}
                  >
                    <figure
                      className={cn(
                        "group relative overflow-hidden rounded-[1.35rem] bg-ink shadow-card ring-1 ring-black/5",
                        index === 0 ? "aspect-[16/10]" : "aspect-[4/5]",
                      )}
                    >
                      <Image
                        src={frame.src}
                        alt={copy.alt}
                        fill
                        preload={index === 0}
                        sizes={
                          index === 0
                            ? "(min-width: 1024px) 40vw, 86vw"
                            : "(min-width: 1024px) 18vw, 70vw"
                        }
                        className="object-cover transition duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                      <figcaption className="absolute inset-x-3 bottom-3">
                        <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-ink shadow-sm">
                          {copy.caption}
                        </span>
                      </figcaption>
                    </figure>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <section id="operation" className="scroll-mt-28">
          <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 md:pt-20 md:pb-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                {dict.operation.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                {dict.operation.title}
              </h2>
              <p className="mt-4 text-lg text-pretty text-muted">
                {dict.operation.lead}
              </p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {dict.steps.map((step, index) => {
                const featured = index === 2;
                return (
                  <article
                    key={step.title}
                    className={cn(
                      "lift rounded-[1.75rem] p-7 shadow-card md:p-8",
                      featured ? "bg-ink text-white" : "bg-ivory text-ink",
                    )}
                  >
                    {featured ? (
                      <span
                        aria-hidden
                        className="mb-5 block h-1 w-10 rounded-full bg-brand"
                      />
                    ) : null}
                    <p className="text-xs font-semibold tracking-[0.18em] text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 text-pretty leading-relaxed",
                        featured ? "text-white/75" : "text-muted",
                      )}
                    >
                      {step.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="parts" className="scroll-mt-28">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 py-12 md:py-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                {dict.parts.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                {dict.parts.title}
              </h2>
              <p className="mt-4 text-lg text-pretty text-muted">{dict.parts.lead}</p>
              <p className="mt-4 text-pretty font-semibold">{dict.parts.brands}</p>
              <Button asChild className="mt-8" size="lg">
                <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                  {dict.parts.catalog}
                </a>
              </Button>
            </div>
            <ul className="grid gap-2.5 lg:col-span-7">
              {dict.parts.categories.map((category) => (
                <li
                  key={category.name}
                  className="flex items-baseline justify-between gap-4 rounded-2xl bg-ivory px-5 py-4 shadow-card"
                >
                  <span className="font-semibold">{category.name}</span>
                  <span className="text-right text-sm text-muted">{category.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="recognition" className="scroll-mt-28 px-3 py-4 md:px-5">
          <div className="mx-auto grid max-w-6xl items-center gap-8 rounded-[1.75rem] bg-ivory px-6 py-10 shadow-card sm:px-10 md:grid-cols-[auto_1fr] md:gap-14 md:px-12 md:py-14">
            <div className="flex justify-center md:justify-start">
              <AwardSeal label={dict.award.seal} />
            </div>
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                {dict.award.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {dict.award.title}
              </h2>
              <p className="mt-5 font-display text-6xl font-bold tracking-tight sm:text-7xl">
                {dict.award.figure}
              </p>
              <p className="mt-1 text-muted">{dict.award.figureLabel}</p>
              <p className="mt-6 max-w-2xl text-lg text-pretty">{dict.award.kicker}</p>
              <blockquote className="mt-5 max-w-2xl border-l-2 border-brand pl-5 text-lg leading-relaxed text-pretty">
                {dict.award.quote}
              </blockquote>
              <p className="mt-5 max-w-2xl text-pretty text-muted">{dict.award.body}</p>
            </div>
          </div>
        </section>

        <section className="px-3 py-4 md:px-5">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-[1.75rem] bg-ink px-6 py-10 text-white shadow-float sm:px-10 md:flex-row md:items-center md:px-12 md:py-12">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                {dict.band.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {dict.band.title}
              </h2>
              <p className="mt-3 text-lg text-white/70">{dict.band.lead}</p>
            </div>
            <Button asChild size="lg" className="focus-visible:ring-offset-ink">
              <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                {dict.band.catalog}
              </a>
            </Button>
          </div>
        </section>

        <section id="contact" className="scroll-mt-28 px-3 pt-4 pb-8 md:px-5">
          <div className="mx-auto max-w-6xl rounded-[1.75rem] bg-ivory p-6 shadow-card sm:p-10 md:p-12">
            <div className="grid items-start gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                  {dict.contact.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                  {dict.contact.title}
                </h2>
                <p className="mt-3 text-lg text-muted">{dict.contact.place}</p>
                <p className="mt-8 text-xs font-semibold tracking-[0.16em] text-muted">
                  {dict.contact.phoneLabel}
                </p>
                <a
                  href={phoneHref}
                  className="mt-1 block font-display text-4xl font-bold tracking-tight transition-colors hover:text-brand sm:text-5xl"
                >
                  {phoneDisplay}
                </a>
                <p className="mt-3 max-w-sm text-pretty text-muted">{dict.contact.hours}</p>
                <Button asChild className="mt-8" size="lg">
                  <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                    {dict.contact.catalog}
                  </a>
                </Button>
              </div>
              <dl className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-canvas px-4 py-4">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.companyLabel}
                  </dt>
                  <dd className="mt-1 font-semibold">{dict.contact.company}</dd>
                </div>
                <div className="rounded-2xl bg-canvas px-4 py-4">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.codeLabel}
                  </dt>
                  <dd className="mt-1 font-semibold">306008010</dd>
                </div>
                <div className="rounded-2xl bg-canvas px-4 py-4">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.vatLabel}
                  </dt>
                  <dd className="mt-1 font-semibold">LT100014759115</dd>
                </div>
                <div className="rounded-2xl bg-canvas px-4 py-4">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">
                    {dict.contact.hoursLabel}
                  </dt>
                  <dd className="mt-1 font-semibold">{dict.contact.hoursShort}</dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mx-auto mt-4 max-w-6xl overflow-hidden rounded-[1.75rem] bg-ivory shadow-card ring-1 ring-black/5">
            <iframe
              title={dict.contact.mapTitle}
              src={osmEmbed}
              className="h-80 w-full border-0"
              loading="lazy"
            />
          </div>
          <p className="mx-auto mt-3 max-w-6xl px-2 text-sm text-muted">
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
        </section>
      </main>
      <footer className="px-3 pt-2 pb-28 md:px-5 md:pb-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 rounded-[1.75rem] bg-ink px-6 py-8 text-white shadow-float md:flex-row md:items-center md:justify-between md:px-10">
          <span className="inline-flex w-fit rounded-2xl bg-white px-3 py-2">
            <Image
              src="/brand/logo.png"
              alt=""
              width={1104}
              height={304}
              className="h-8 w-auto"
            />
          </span>
          <p className="max-w-xl text-sm leading-relaxed text-white/70">
            {dict.footer.before}
            <a
              href={catalogUrl}
              className="font-semibold text-white underline-offset-4 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              RRR.lt
            </a>
            {dict.footer.after}
          </p>
        </div>
      </footer>
      <div className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-2 overflow-hidden rounded-full shadow-float ring-1 ring-black/5 md:hidden">
        <a
          href={phoneHref}
          className="flex h-12 items-center justify-center bg-white text-sm font-semibold"
        >
          {dict.mobile.call}
        </a>
        <a
          href={catalogUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 items-center justify-center bg-brand text-sm font-semibold text-white"
        >
          {dict.mobile.catalog}
        </a>
      </div>
    </>
  );
}
