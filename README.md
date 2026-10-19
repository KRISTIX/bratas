# UAB Bratas

Light, one-page site for **UAB „Bratas“** — used auto parts, vehicle dismantling, and vehicle import in Šlamų k., Pasvalio r.

The catalogue lives on [RRR.lt](https://rrr.lt/pardavejas/bratas) (16,000+ parts). Company facts on the page: code `306008010`, VAT `LT100014759115`, phone `+370 687 49115`, weekday hours 07:00–16:00.

## Run locally

```bash
npm install
npm run dev -- --port 3847
```

Photographs are also stored as text in `media/` so a fresh checkout can rebuild `public/photos` before the dev server or production build starts.

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

```bash
npm run build
npm run lint
```

## Stack

Next.js, TypeScript, Tailwind CSS. Photographs in `public/photos`. Logo in `public/brand/logo.png`.
