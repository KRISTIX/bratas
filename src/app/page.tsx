import Image from "next/image";

import { AwardSeal } from "@/components/award-seal";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  catalogUrl,
  categories,
  mapsUrl,
  osmEmbed,
  osmUrl,
  phoneDisplay,
  phoneHref,
} from "@/lib/site";

const services = [
  {
    n: "01",
    title: "Atvežame iš JK",
    text: "Atsargines dalis perkame ir atsivežame iš Jungtinės Karalystės. Į Lietuvą keliauja detalės, ne automobiliai.",
    src: "/photos/hero-warehouse.jpg",
    alt: "Automobilių dalių sandėlio lentynos su žibintais ir bamperiais",
  },
  {
    n: "02",
    title: "Laikome sandėlyje",
    text: "Didžiausia pasiūla — BMW, Mercedes-Benz, Audi, Ford ir Volvo. Dažniausiai ieškomi priekiniai ir galiniai žibintai, elektra valdomi veidrodėliai, rankenėlių komplektai ir saugiklių blokai.",
    src: "/photos/headlights.jpg",
    alt: "Lentynos su naudotais priekiniais ir galiniais automobilio žibintais",
  },
  {
    n: "03",
    title: "Parduodame ir siunčiame",
    text: "Visą asortimentą rasite RRR.lt. Dalį išsirenkate kataloge, o mes ją supakuojame ir išsiunčiame.",
    src: "/photos/packing.jpg",
    alt: "Žibintas, pakavimo juosta ir dėžė ant darbastalio",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main id="pradzia" className="pb-20 md:pb-0">
        <section className="mx-auto max-w-6xl px-5 pt-10 pb-8 md:pt-16 md:pb-10">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand">
                <span className="h-0.5 w-8 bg-brand" aria-hidden />
                AUTOPARTS
              </p>
              <h1 className="mt-4 font-display text-[2.55rem] leading-[1.02] font-bold tracking-tight text-balance sm:text-5xl lg:text-[3.45rem]">
                Naudotos automobilių dalys iš Jungtinės Karalystės.
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
                UAB „Bratas“ parduoda atsargines dalis, atvežtas iš JK. Pasiūla —
                dalys, ne pilni automobiliai. RRR.lt kataloge — daugiau kaip
                16&nbsp;000 pozicijų, asortimentas nuolat pildomas.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                    Atidaryti katalogą
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href={phoneHref}>Skambinti {phoneDisplay}</a>
                </Button>
              </div>
            </div>
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden bg-paper">
                <Image
                  src="/photos/hero-warehouse.jpg"
                  alt="Automobilių dalių sandėlio praėjimas: žibintai ir bamperiai metalinėse lentynose"
                  fill
                  preload
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-sm text-muted">Dalių sandėlis</figcaption>
            </figure>
          </div>
          <dl className="mt-12 grid border-y border-line sm:grid-cols-3">
            <div className="py-6 sm:pr-6">
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted">KATALOGAS</dt>
              <dd className="mt-1 font-display text-3xl font-bold">16&nbsp;000+</dd>
              <p className="text-sm text-muted">dalių RRR.lt</p>
            </div>
            <div className="border-t border-line py-6 sm:border-t-0 sm:border-l sm:px-6">
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted">DARBO LAIKAS</dt>
              <dd className="mt-1 font-display text-3xl font-bold">I–V</dd>
              <p className="text-sm text-muted">07:00–16:00, savaitgalį nedirbame</p>
            </div>
            <div className="border-t border-line py-6 sm:border-t-0 sm:border-l sm:pl-6">
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted">RRR.LT</dt>
              <dd className="mt-1 font-display text-2xl font-bold tracking-tight">Top pardavėjas</dd>
              <p className="text-sm text-muted">platformoje</p>
            </div>
          </dl>
        </section>
        <section id="is-jk" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">IŠ JK</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Dalys iš Jungtinės Karalystės
              </h2>
              <p className="mt-4 text-lg text-pretty text-muted">
                Viena veikla: naudotų autodalių pardavimas. Dalys atkeliauja iš
                JK, laikomos sandėlyje ir parduodamos per RRR.lt.
              </p>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.n} className="border border-line bg-white">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                    <Image src={service.src} alt={service.alt} fill sizes="(min-width: 1024px) 360px, 100vw" className="object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold tracking-[0.18em] text-brand">{service.n}</p>
                    <h3 className="mt-2 font-display text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-pretty text-muted">{service.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="dalys" className="scroll-mt-24">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:py-24 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">DALYS</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">Daugiau kaip 16&nbsp;000 dalių</h2>
              <p className="mt-4 text-lg text-pretty text-muted">Visas sandėlis vienoje nuorodoje. Asortimentas pildomas, todėl prieš užsakant verta pažiūrėti aktualų sąrašą RRR.lt.</p>
              <ul className="mt-8 border-y border-line">
                {categories.map((category) => (
                  <li key={category.name} className="flex items-baseline justify-between gap-4 border-b border-line py-3 last:border-b-0">
                    <span className="font-semibold">{category.name}</span>
                    <span className="text-right text-sm text-muted">{category.note}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted">Daugiausia dalių: BMW, Mercedes-Benz, Audi, Ford, Volvo.</p>
              <Button asChild className="mt-6" size="lg">
                <a href={catalogUrl} target="_blank" rel="noopener noreferrer">RRR.lt parduotuvė</a>
              </Button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image src="/photos/body-panels.jpg" alt="Naudotos durelės, gaubtai ir bamperiai ant sandėlio stelažų" fill sizes="(min-width: 1024px) 320px, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-sm text-muted">Kėbulo dalys</figcaption>
              </figure>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                  <Image src="/photos/engines.jpg" alt="Naudoti varikliai ir pavarų dėžės ant medinių palečių" fill sizes="(min-width: 1024px) 320px, 100vw" className="object-cover" />
                </div>
                <figcaption className="mt-2 text-sm text-muted">Varikliai ir dėžės</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section id="ivertinimas" className="scroll-mt-24 bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-[auto_1fr] md:py-24 md:gap-16">
            <div className="flex justify-center md:justify-start"><AwardSeal /></div>
            <div>
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">ĮVERTINIMAS</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">TOP Įmonė 2026</h2>
              <blockquote className="mt-6 border-l-2 border-brand pl-5 text-lg leading-relaxed text-pretty">Remiantis Rekvizitai.lt duomenimis ir ekonominiais kriterijais, UAB „Bratas“ įtraukta į „TOP Įmonė 2026“ sąrašą. Tai viena iš vos 6&nbsp;% patikimiausių ir finansiškai stabiliausių įmonių Lietuvoje.</blockquote>
              <p className="mt-5 max-w-2xl text-pretty text-muted">2026-ieji šiam įvertinimui — dešimties metų jubiliejus. Per dešimtmetį „TOP Įmonė“ tapo vienu geriausiai atpažįstamų verslo pasitikėjimo ženklų Lietuvoje. Ženkle — „10 metų pasitikėjimo“.</p>
            </div>
          </div>
        </section>
        <section id="galerija" className="scroll-mt-24">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">GALERIJA</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">Sandėlis</h2>
              <p className="mt-4 text-lg text-pretty text-muted">Dalys, kurias paruošiame ir išsiunčiame. Paspauskite nuotrauką, kad padidintumėte.</p>
            </div>
            <Gallery />
          </div>
        </section>
        <section id="kontaktai" className="scroll-mt-24 border-t border-line">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:py-24 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">KONTAKTAI</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">Šlamų k. 1B-1</h2>
              <p className="mt-2 text-lg text-muted">Pasvalio r., Lietuva</p>
              <dl className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">ĮMONĖ</dt>
                  <dd className="mt-1 font-semibold">UAB „Bratas“</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">TELEFONAS</dt>
                  <dd className="mt-1"><a href={phoneHref} className="font-semibold underline-offset-4 hover:underline">{phoneDisplay}</a></dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">ĮMONĖS KODAS</dt>
                  <dd className="mt-1 font-semibold">306008010</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">PVM KODAS</dt>
                  <dd className="mt-1 font-semibold">LT100014759115</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold tracking-[0.16em] text-muted">DARBO LAIKAS</dt>
                  <dd className="mt-1">Pirmadieniais–penktadieniais 07:00–16:00. Šeštadienį ir sekmadienį nedirbame.</dd>
                </div>
              </dl>
            </div>
            <aside className="flex flex-col justify-between bg-ink p-8 text-white lg:col-span-5">
              <p className="text-xs font-semibold tracking-[0.2em] text-brand">SKAMBINTI</p>
              <a href={phoneHref} className="mt-8 font-display text-4xl font-bold tracking-tight">{phoneDisplay}</a>
              <p className="mt-3 text-white/70">I–V, 07:00–16:00</p>
              <Button asChild variant="inverse" className="mt-8 w-fit">
                <a href={catalogUrl} target="_blank" rel="noopener noreferrer">RRR.lt katalogas</a>
              </Button>
            </aside>
          </div>
          <div className="mx-auto max-w-6xl px-5 pb-16">
            <iframe title="Šlamų kaimo žemėlapis" src={osmEmbed} className="h-72 w-full border border-line" loading="lazy" />
            <p className="mt-3 text-sm text-muted">
              Žemėlapyje pažymėtas Šlamų kaimas. Registracijos adresas — Šlamų k. 1B-1, Pasvalio r.{" "}
              <a href={mapsUrl} className="font-semibold text-ink underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">Atidaryti žemėlapyje</a>
              {" · "}
              <a href={osmUrl} className="font-semibold text-ink underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">OpenStreetMap</a>
            </p>
          </div>
        </section>
      </main>
      <footer className="border-t border-line pb-16 md:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <Image src="/brand/logo.png" alt="" width={1104} height={304} className="h-8 w-auto" />
          <p className="max-w-xl text-sm text-muted">
            © 2026 UAB „Bratas“. Įmonės kodas 306008010 · PVM LT100014759115. Dalys parduodamos per{" "}
            <a href={catalogUrl} className="font-semibold text-ink underline-offset-4 hover:underline" target="_blank" rel="noopener noreferrer">RRR.lt</a>.
          </p>
        </div>
      </footer>
      <div className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 border-t border-line bg-white md:hidden">
        <a href={phoneHref} className="flex h-14 items-center justify-center text-sm font-semibold">Skambinti</a>
        <a href={catalogUrl} target="_blank" rel="noopener noreferrer" className="flex h-14 items-center justify-center bg-brand text-sm font-semibold text-white">Katalogas</a>
      </div>
    </>
  );
}
