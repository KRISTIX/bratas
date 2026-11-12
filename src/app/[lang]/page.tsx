import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Appear } from "@/components/appear";
import { AwardSeal } from "@/components/award-seal";
import { ContactMap } from "@/components/contact-map";
import { Header } from "@/components/header";
import { HeroGallery } from "@/components/hero-gallery";
import { ExternalLinkIcon, PhoneIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PartIcon } from "@/components/part-icon";
import { StockCounter } from "@/components/stock-counter";
import { WholesaleForm } from "@/components/wholesale-form";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/dictionaries";
import { hasLocale } from "@/lib/i18n";
import {
  catalogUrl,
  facilityImage,
  getPrimaryCatalogUrl,
  getSecondaryCatalogUrl,
  ovokoUrl,
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
  const primaryCatalogUrl = getPrimaryCatalogUrl(lang);
  const secondaryCatalogUrl = getSecondaryCatalogUrl(lang);
  const primaryCatalogLabel =
    lang === "lt" ? dict.band.openRrr : dict.band.openOvoko;
  const secondaryCatalogLabel =
    lang === "lt" ? dict.band.openOvoko : dict.band.openRrr;

  return (
    <>
      <JsonLd lang={lang} description={dict.meta.description} />
      <Header
        lang={lang}
        nav={[
          { href: "#operation", label: dict.nav.operation },
          { href: "#parts", label: dict.nav.parts },
          { href: "#recognition", label: dict.nav.recognition },
          { href: "#wholesale", label: dict.nav.wholesale },
          { href: "#contact", label: dict.nav.contact },
        ]}
        menu={dict.nav.menu}
        close={dict.nav.close}
        primaryNav={dict.nav.primary}
        mobileNav={dict.nav.mobile}
        catalog={dict.nav.catalog}
        catalogHref={primaryCatalogUrl}
        language={dict.language}
      />
      <main id="content">
        <section aria-labelledby="hero-title" className="px-3 pt-3 md:px-5 md:pt-4">
          <div className="rise mx-auto grid max-w-6xl overflow-hidden rounded-[1.75rem] bg-ink text-white shadow-float lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 md:px-12 md:py-11">
              <div
                aria-hidden
                className="pointer-events-none absolute -top-20 -left-16 size-56 rounded-full bg-brand/20 blur-3xl"
              />
              <div className="relative">
                <p className="rise rise-2 flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand">
                  <span className="h-0.5 w-8 rounded-full bg-brand" aria-hidden />
                  {dict.hero.eyebrow}
                </p>
                <h1
                  id="hero-title"
                  className="rise rise-3 mt-4 max-w-xl font-display text-[2.15rem] leading-[1.02] font-bold tracking-tight text-balance sm:text-5xl"
                >
                  {dict.hero.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="rise rise-4 mt-4 max-w-lg text-base leading-relaxed text-pretty text-white/70 sm:text-[1.05rem]">
                  {dict.hero.lead}
                </p>
                <div className="rise rise-5 mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button asChild size="lg" className="focus-visible:ring-offset-ink">
                    <a
                      href={primaryCatalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {dict.hero.catalog}
                      <ExternalLinkIcon />
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="focus-visible:ring-offset-ink"
                  >
                    <a href={phoneHref}>
                      <PhoneIcon />
                      {dict.hero.call} {phoneDisplay}
                    </a>
                  </Button>
                </div>
                <div className="mt-6">
                  <StockCounter
                    locale={lang}
                    note={dict.hero.stockNote}
                    label={dict.hero.stockLabel}
                  />
                </div>
              </div>
            </div>
            <HeroGallery
              alts={dict.hero.imageAlts}
              captions={dict.hero.imageCaptions}
              nextLabel={dict.hero.nextImage}
            />
          </div>
        </section>

        <section id="operation" className="scroll-mt-28">
          <div className="mx-auto max-w-6xl px-5 pt-12 pb-8 md:pt-20 md:pb-12">
            <Appear className="max-w-3xl">
              <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                {dict.operation.eyebrow}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                {dict.operation.title}
              </h2>
              <p className="mt-4 text-lg text-pretty text-muted">
                {dict.operation.lead}
              </p>
            </Appear>

            <div className="flow-shell mt-10">
              <Appear className="relative z-10 mb-1 hidden lg:block">
                <div className="flow-track" aria-hidden>
                  <span className="flow-runner" />
                  <span className="flow-runner flow-runner-delayed" />
                </div>
                <ol className="relative grid grid-cols-3">
                  {dict.services.map((service, index) => (
                    <li key={service.title} className="flex justify-center">
                      <span className="flow-node font-display text-[0.7rem] font-bold tracking-[0.16em]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </li>
                  ))}
                </ol>
              </Appear>

              <div className="flow-cards grid items-stretch gap-4 lg:grid-cols-3">
                {dict.services.map((service, index) => {
                  const src = serviceImages[index];
                  return (
                    <Appear key={service.title} delay={index * 80} className="h-full">
                      <article className="group lift flex h-full flex-col overflow-hidden rounded-[1.75rem] bg-ivory shadow-card ring-1 ring-black/[0.03]">
                        <div className="h-1 w-full bg-gradient-to-r from-brand/80 via-brand to-brand/40" />
                        <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                          <Image
                            src={src}
                            alt={service.alt}
                            fill
                            sizes="(min-width: 1024px) 360px, 100vw"
                            className="object-cover transition duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                          />
                        </div>
                        <div className="flex flex-1 flex-col p-6 md:p-7">
                          <p className="mb-3 inline-flex w-fit items-center rounded-full bg-brand/10 px-3.5 py-1.5 font-display text-2xl font-bold tracking-tight text-brand lg:hidden">
                            {String(index + 1).padStart(2, "0")}
                          </p>
                          <h3 className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
                            {service.title}
                          </h3>
                          <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted">
                            {service.text}
                          </p>
                        </div>
                      </article>
                    </Appear>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="parts" className="scroll-mt-28">
          <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
            <Appear className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                  {dict.parts.eyebrow}
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-5xl">
                  {dict.parts.title}
                </h2>
                <p className="mt-4 text-lg text-pretty text-muted">{dict.parts.lead}</p>
              </div>
              <Button asChild size="lg" className="shrink-0 self-start lg:self-auto">
                <a
                  href={primaryCatalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {dict.parts.catalog}
                </a>
              </Button>
            </Appear>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {dict.parts.categories.map((category, index) => (
                <Appear
                  key={category.id}
                  as="li"
                  delay={index * 50}
                  className="flex items-center gap-4 rounded-[1.35rem] bg-ivory px-4 py-4 shadow-card"
                >
                  <span className="inline-flex size-[4.25rem] shrink-0 items-center justify-center rounded-[1.15rem] bg-canvas text-brand">
                    <PartIcon id={category.id} className="size-9" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-display text-[0.95rem] font-semibold tracking-tight">
                      {category.name}
                    </span>
                    <span className="mt-1 block text-sm leading-snug text-muted">
                      {category.note}
                    </span>
                  </span>
                </Appear>
              ))}
            </ul>
          </div>
        </section>

        <section id="recognition" className="scroll-mt-28 px-3 md:px-5">
          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            <Appear>
              <div className="flex flex-col gap-6 rounded-[1.75rem] bg-ivory px-5 py-6 shadow-card sm:px-8 sm:py-7 md:flex-row md:items-center md:gap-10 md:px-10 md:py-8">
                <div className="shrink-0 self-center md:self-auto">
                  <AwardSeal label={dict.award.seal} mark={dict.award.mark} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                    {dict.award.eyebrow}
                  </p>
                  <div className="mt-2 flex flex-wrap items-end gap-x-5 gap-y-1">
                    <h2 className="font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                      {dict.award.title}
                    </h2>
                    <p className="font-display text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                      {dict.award.figure}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted sm:text-base">
                    {dict.award.figureLabel}
                  </p>
                  <blockquote className="mt-4 max-w-3xl border-l-2 border-brand pl-4 text-base leading-relaxed text-pretty">
                    {dict.award.quote}
                  </blockquote>
                  <p className="mt-3 max-w-3xl text-sm text-pretty text-muted sm:text-base">
                    {dict.award.body}
                  </p>
                </div>
              </div>
            </Appear>

            <Appear>
              <div className="pt-2">
                <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                  {dict.award.reviewsTitle}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                  {dict.award.reviewsLead}
                </h3>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {dict.award.reviews.map((review) => (
                    <li
                      key={`${review.name}-${review.text}`}
                      className="flex items-start gap-4 rounded-[1.35rem] bg-ivory px-5 py-5 shadow-card sm:gap-5 sm:px-6 sm:py-6"
                    >
                      <span
                        aria-hidden
                        className="inline-flex size-[4.25rem] shrink-0 flex-col items-center justify-center rounded-[1.15rem] bg-canvas font-display leading-none"
                      >
                        <span className="text-2xl font-bold tabular-nums text-brand sm:text-3xl">
                          {review.score}
                        </span>
                        <span className="mt-0.5 text-[0.7rem] font-semibold tracking-[0.12em] text-muted">
                          /10
                        </span>
                      </span>
                      <span className="min-w-0 pt-0.5">
                        <span className="block font-display text-xl font-semibold tracking-tight sm:text-2xl">
                          {review.name}
                        </span>
                        <span className="mt-2 block text-base leading-relaxed text-pretty text-muted sm:text-lg">
                          {review.text}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Appear>
          </div>
        </section>

        <section className="px-3 pt-4 md:px-5">
          <Appear>
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
              <div className="flex w-full flex-row gap-2 sm:w-auto sm:gap-3">
                <Button
                  asChild
                  size="lg"
                  className="min-w-0 flex-1 px-3 text-sm focus-visible:ring-offset-ink sm:flex-none sm:px-6 sm:text-base"
                >
                  <a
                    href={primaryCatalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {primaryCatalogLabel}
                    <ExternalLinkIcon />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="min-w-0 flex-1 px-3 text-sm focus-visible:ring-offset-ink sm:flex-none sm:px-6 sm:text-base"
                >
                  <a
                    href={secondaryCatalogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {secondaryCatalogLabel}
                    <ExternalLinkIcon />
                  </a>
                </Button>
              </div>
            </div>
          </Appear>
        </section>

        <section id="wholesale" className="scroll-mt-28 px-3 pt-4 md:px-5">
          <Appear className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-ivory shadow-card">
            <figure className="relative aspect-[2/1] w-full sm:aspect-[21/9]">
              <Image
                src={facilityImage}
                alt={dict.wholesale.photoAlt}
                fill
                quality={100}
                sizes="(min-width: 1152px) 1152px, 100vw"
                className="object-cover"
              />
            </figure>
            <div className="flex flex-col gap-6 p-6 sm:p-8 md:p-10">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                  {dict.wholesale.eyebrow}
                </p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  {dict.wholesale.title}
                </h2>
                <p className="mt-3 text-lg text-muted">{dict.wholesale.lead}</p>
              </div>
              <WholesaleForm
                volumeLabel={dict.wholesale.volumeLabel}
                volumeOptions={dict.wholesale.volumeOptions}
                partsLabel={dict.wholesale.partsLabel}
                partOptions={dict.parts.categories.map((c) => ({
                  id: c.id,
                  name: c.name,
                }))}
                nameLabel={dict.wholesale.nameLabel}
                companyLabel={dict.wholesale.companyLabel}
                emailLabel={dict.wholesale.emailLabel}
                phoneLabel={dict.wholesale.phoneLabel}
                messageLabel={dict.wholesale.messageLabel}
                submitLabel={dict.wholesale.submitLabel}
                successMessage={dict.wholesale.successMessage}
                requiredHint={dict.wholesale.requiredHint}
                errorMessage={dict.wholesale.errorMessage}
                mailtoLabel={dict.wholesale.mailtoLabel}
              />
            </div>
          </Appear>
        </section>

        <section id="contact" className="scroll-mt-28 px-3 pt-4 pb-8 md:px-5">
          <Appear className="mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-ivory shadow-card">
            <div className="grid lg:grid-cols-2">
              <div className="flex flex-col justify-between gap-8 p-6 sm:p-8 md:p-10">
                <div>
                  <p className="text-xs font-semibold tracking-[0.22em] text-brand">
                    {dict.contact.eyebrow}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    {dict.contact.title}
                  </h2>
                  <p className="mt-2 text-muted">{dict.contact.place}</p>
                  <a
                    href={phoneHref}
                    className="mt-6 inline-flex items-center gap-3 font-display text-3xl font-bold tracking-tight transition-colors hover:text-brand sm:text-4xl"
                  >
                    <PhoneIcon className="size-7 text-brand sm:size-8" />
                    {phoneDisplay}
                  </a>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                    {dict.contact.marketplaceNote}
                  </p>
                </div>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-line pt-5">
                  <div>
                    <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                      {dict.contact.companyLabel}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">{dict.contact.company}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                      {dict.contact.hoursLabel}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">{dict.contact.hoursShort}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                      {dict.contact.codeLabel}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">306008010</dd>
                  </div>
                  <div>
                    <dt className="text-[0.65rem] font-semibold tracking-[0.16em] text-muted">
                      {dict.contact.vatLabel}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold">LT100014759115</dd>
                  </div>
                </dl>
              </div>
              <ContactMap
                title={dict.contact.mapTitle}
                openLabel={dict.contact.mapOpen}
              />
            </div>
          </Appear>
        </section>
      </main>
      <footer className="px-3 pt-2 pb-8 md:px-5">
        <div className="mx-auto max-w-6xl rounded-[1.75rem] bg-ink px-5 py-5 text-white shadow-float sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex w-fit rounded-xl bg-white px-2.5 py-1.5">
              <Image
                src="/brand/logo.png"
                alt=""
                width={1104}
                height={304}
                className="h-6 w-auto"
              />
            </span>
            <nav
              aria-label={dict.nav.primary}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold"
            >
              <a
                href={catalogUrl}
                className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                RRR.lt
              </a>
              <a
                href={ovokoUrl}
                className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ovoko
              </a>
              <a
                href={phoneHref}
                className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {phoneDisplay}
              </a>
              <Link
                href={`/${lang}/privacy`}
                className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                {dict.footer.privacy}
              </Link>
            </nav>
          </div>
          <div className="mt-4 flex flex-col gap-1.5 border-t border-white/10 pt-3 text-xs leading-relaxed text-white/55 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
            <p>
              {dict.footer.rights}
              <span className="mx-1.5 text-white/25" aria-hidden>
                ·
              </span>
              {dict.footer.legal}
            </p>
            <p>
              {dict.footer.solution}
              {": "}
              <a
                href="https://boostery.io"
                className="font-semibold text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boostery
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
