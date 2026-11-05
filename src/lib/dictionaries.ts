import type { GalleryId } from "@/lib/site";

import type { Locale } from "@/lib/i18n";

export type Dictionary = {
  meta: { title: string; description: string; imageAlt: string };
  skip: string;
  language: string;
  nav: {
    primary: string;
    mobile: string;
    menu: string;
    close: string;
    catalog: string;
    parts: string;
    recognition: string;
    gallery: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    catalog: string;
    call: string;
    imageAlt: string;
    caption: string;
  };
  stats: {
    catalogLabel: string;
    catalogValue: string;
    catalogNote: string;
    hoursLabel: string;
    hoursValue: string;
    hoursNote: string;
    sellerLabel: string;
    sellerValue: string;
    sellerNote: string;
  };
  origin: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  services: [
    { title: string; text: string; alt: string },
    { title: string; text: string; alt: string },
    { title: string; text: string; alt: string },
  ];
  parts: {
    eyebrow: string;
    title: string;
    lead: string;
    brands: string;
    catalog: string;
    bodyAlt: string;
    bodyCaption: string;
    engineAlt: string;
    engineCaption: string;
    categories: { name: string; note: string }[];
  };
  award: {
    eyebrow: string;
    title: string;
    kicker: string;
    quote: string;
    body: string;
    seal: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    lead: string;
    photos: Record<GalleryId, { alt: string; caption: string }>;
  };
  contact: {
    eyebrow: string;
    title: string;
    place: string;
    companyLabel: string;
    company: string;
    phoneLabel: string;
    codeLabel: string;
    vatLabel: string;
    hoursLabel: string;
    hours: string;
    callEyebrow: string;
    hoursShort: string;
    catalog: string;
    mapTitle: string;
    mapText: string;
    openMap: string;
    osm: string;
  };
  footer: { before: string; after: string };
  mobile: { call: string; catalog: string };
};

const en: Dictionary = {
  meta: {
    title: "UAB Bratas — used car parts from the UK",
    description:
      "UAB Bratas sells used car parts sourced in the United Kingdom. The offer is parts, not complete cars. Tens of thousands of parts in the catalogue, packed and shipped to order.",
    imageAlt:
      "UAB Bratas parts warehouse: an aisle of bumpers on wooden shelves",
  },
  skip: "Skip to content",
  language: "Language",
  nav: {
    primary: "Primary",
    mobile: "Mobile",
    menu: "Menu",
    close: "Close",
    catalog: "Catalogue",
    parts: "Parts",
    recognition: "Recognition",
    gallery: "Gallery",
    contact: "Contact",
  },
  hero: {
    eyebrow: "AUTOPARTS",
    title: "Used car parts from the United Kingdom.",
    lead: "UAB Bratas supplies used parts sourced in the UK — parts, not complete cars. Tens of thousands of them are in the RRR.lt catalogue, and the range keeps being filled. We are a top seller on that list: stock held and orders shipped like a serious parts house.",
    catalog: "Open the catalogue",
    call: "Call",
    imageAlt:
      "Aisle of tagged bumpers on wooden shelves in the Bratas warehouse",
    caption: "Bumpers in the warehouse",
  },
  stats: {
    catalogLabel: "CATALOGUE",
    catalogValue: "Tens of thousands",
    catalogNote: "of parts ready to ship",
    hoursLabel: "HOURS",
    hoursValue: "Mon–Fri",
    hoursNote: "07:00–16:00, closed at the weekend",
    sellerLabel: "RRR.LT",
    sellerValue: "Top seller",
    sellerNote: "where buyers order",
  },
  origin: {
    eyebrow: "FROM THE UK",
    title: "Parts from the United Kingdom",
    lead: "One line of work, carried at that scale: parts in from the UK, held in our warehouse, and shipped to order through RRR.lt.",
  },
  services: [
    {
      title: "We bring them in from the UK",
      text: "We buy spare parts in the United Kingdom and bring them into our warehouse. What we stock and ship is parts, not cars.",
      alt: "A forklift carrying an engine into the warehouse",
    },
    {
      title: "We keep them in the warehouse",
      text: "The largest share of the stock is BMW, Mercedes-Benz, Audi, Ford and Volvo. Most often sought: front and rear lights, power mirrors, handle sets and fuse boxes.",
      alt: "Aisle of headlights, mirrors and rear lights on wooden shelves",
    },
    {
      title: "We sell and ship",
      text: "The full range is on RRR.lt. You choose the part in the catalogue, and we pack it and ship it.",
      alt: "Packing bench with a computer, a scale and shipping boxes",
    },
  ],
  parts: {
    eyebrow: "PARTS",
    title: "Tens of thousands of parts",
    lead: "The whole warehouse behind one link. The range keeps being filled, so the current list on RRR.lt is the one to check before you order.",
    brands: "Most parts: BMW, Mercedes-Benz, Audi, Ford, Volvo.",
    catalog: "RRR.lt shop",
    bodyAlt: "Rows of black and silver bumpers on wooden warehouse racks",
    bodyCaption: "Body parts",
    engineAlt: "Used engines on pallets and orange warehouse racks",
    engineCaption: "Engines",
    categories: [
      { name: "Lights", note: "front and rear" },
      { name: "Body", note: "doors, bumpers, bonnets" },
      { name: "Engines and gearboxes", note: "units on pallets" },
      { name: "Mirrors", note: "power-operated" },
      { name: "Electronics", note: "fuse boxes, modules" },
      { name: "Suspension and brakes", note: "arms, dampers, discs" },
      { name: "Interior", note: "seats, steering wheels, handles" },
    ],
  },
  award: {
    eyebrow: "RECOGNITION",
    title: "TOP Įmonė 2026",
    kicker: "That is the outside measure of how this house is run.",
    quote:
      "On Rekvizitai.lt data and economic criteria, UAB Bratas is included in the TOP Įmonė 2026 list. It is one of only 6% of the most reliable and financially stable companies in Lithuania, where the business is based.",
    body: "2026 is the tenth anniversary of this distinction. Over that decade it has become a recognised mark of how a company is run. The seal reads “10 years of trust.”",
    seal: "TOP Įmonė 2026",
  },
  gallery: {
    eyebrow: "GALLERY",
    title: "The warehouse",
    lead: "The warehouse and the yard, as they are.",
    photos: {
      lights: {
        alt: "Wooden shelves filled with red rear lights",
        caption: "Rear lights",
      },
      wheels: {
        alt: "Alloy wheels, tyres and rear lights stored under a canopy",
        caption: "Wheels and tyres",
      },
      mechanical: {
        alt: "Shelves of engines, turbos and other mechanical parts",
        caption: "Mechanical parts",
      },
      crates: {
        alt: "Black crates of small parts on wooden racks",
        caption: "Parts in crates",
      },
      boxes: {
        alt: "Two stacked cardboard bumper boxes in the Bratas warehouse",
        caption: "Bumper boxes",
      },
      forklift: {
        alt: "Forklift carrying an engine across the yard",
        caption: "Moving an engine",
      },
      engineContainer: {
        alt: "Engines stacked inside an open shipping container",
        caption: "Engines in the container",
      },
      yard: {
        alt: "Forklift in the yard between the warehouse buildings",
        caption: "The yard",
      },
      yardContainer: {
        alt: "Open container of engines beside the warehouse",
        caption: "The yard and the container",
      },
    },
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Šlamų k. 1B-1",
    place: "Pasvalys district, Lithuania",
    companyLabel: "COMPANY",
    company: "UAB Bratas",
    phoneLabel: "PHONE",
    codeLabel: "COMPANY CODE",
    vatLabel: "VAT NUMBER",
    hoursLabel: "HOURS",
    hours:
      "Monday to Friday, 07:00–16:00. Closed Saturday and Sunday.",
    callEyebrow: "CALL",
    hoursShort: "Mon–Fri, 07:00–16:00",
    catalog: "RRR.lt catalogue",
    mapTitle: "Map of Šlamai village",
    mapText:
      "The map marks Šlamai village. The registered address is Šlamų k. 1B-1, Pasvalys district.",
    openMap: "Open in the map",
    osm: "OpenStreetMap",
  },
  footer: {
    before:
      "© 2026 UAB Bratas. Company code 306008010 · VAT LT100014759115. Parts are sold through ",
    after: ".",
  },
  mobile: { call: "Call", catalog: "Catalogue" },
};

const fr: Dictionary = {
  meta: {
    title: "UAB Bratas — pièces auto d'occasion du Royaume-Uni",
    description:
      "UAB Bratas vend des pièces auto d'occasion sourcées au Royaume-Uni. L'offre porte sur des pièces, pas sur des véhicules complets. Des dizaines de milliers de pièces au catalogue, emballées et expédiées à la commande.",
    imageAlt:
      "Entrepôt de pièces UAB Bratas : une allée de pare-chocs sur des étagères en bois",
  },
  skip: "Aller au contenu",
  language: "Langue",
  nav: {
    primary: "Principal",
    mobile: "Mobile",
    menu: "Menu",
    close: "Fermer",
    catalog: "Catalogue",
    parts: "Pièces",
    recognition: "Distinction",
    gallery: "Galerie",
    contact: "Contact",
  },
  hero: {
    eyebrow: "AUTOPARTS",
    title: "Pièces auto d'occasion du Royaume-Uni.",
    lead: "UAB Bratas fournit des pièces d'occasion sourcées au Royaume-Uni — des pièces, pas des véhicules complets. Des dizaines de milliers d'entre elles figurent au catalogue RRR.lt, et l'assortiment continue de se remplir. Nous y sommes un top vendeur : le stock est tenu, et les commandes expédiées, comme dans une maison de pièces sérieuse.",
    catalog: "Ouvrir le catalogue",
    call: "Appeler",
    imageAlt:
      "Allée de pare-chocs étiquetés sur des étagères en bois dans l'entrepôt Bratas",
    caption: "Pare-chocs dans l'entrepôt",
  },
  stats: {
    catalogLabel: "CATALOGUE",
    catalogValue: "Des dizaines de milliers",
    catalogNote: "de pièces prêtes à expédier",
    hoursLabel: "HORAIRES",
    hoursValue: "Lun–Ven",
    hoursNote: "07:00–16:00, fermé le week-end",
    sellerLabel: "RRR.LT",
    sellerValue: "Top vendeur",
    sellerNote: "là où les acheteurs commandent",
  },
  origin: {
    eyebrow: "DU ROYAUME-UNI",
    title: "Pièces du Royaume-Uni",
    lead: "Une seule activité, menée à cette échelle : des pièces venues du Royaume-Uni, tenues dans notre entrepôt et expédiées à la commande via RRR.lt.",
  },
  services: [
    {
      title: "Nous les amenons du Royaume-Uni",
      text: "Nous achetons les pièces de rechange au Royaume-Uni et les amenons dans notre entrepôt. Ce que nous stockons et expédions, ce sont des pièces, pas des voitures.",
      alt: "Un chariot élévateur amenant un moteur dans l'entrepôt",
    },
    {
      title: "Nous les tenons en entrepôt",
      text: "La plus grande part du stock : BMW, Mercedes-Benz, Audi, Ford et Volvo. Les demandes les plus fréquentes : phares avant et arrière, rétroviseurs électriques, jeux de poignées et boîtiers de fusibles.",
      alt: "Allée de phares, rétroviseurs et feux arrière sur des étagères en bois",
    },
    {
      title: "Nous vendons et expédions",
      text: "Tout l'assortiment est sur RRR.lt. Vous choisissez la pièce dans le catalogue, nous l'emballons et l'expédions.",
      alt: "Établi d'emballage avec un ordinateur, une balance et des cartons d'expédition",
    },
  ],
  parts: {
    eyebrow: "PIÈCES",
    title: "Des dizaines de milliers de pièces",
    lead: "Tout l'entrepôt derrière un seul lien. L'assortiment se remplit, donc la liste à jour sur RRR.lt est celle à consulter avant de commander.",
    brands: "Le plus de pièces : BMW, Mercedes-Benz, Audi, Ford, Volvo.",
    catalog: "Boutique RRR.lt",
    bodyAlt: "Rangées de pare-chocs noirs et argentés sur des racks en bois",
    bodyCaption: "Pièces de carrosserie",
    engineAlt: "Moteurs d'occasion sur palettes et racks orange de l'entrepôt",
    engineCaption: "Moteurs",
    categories: [
      { name: "Phares", note: "avant et arrière" },
      { name: "Carrosserie", note: "portes, pare-chocs, capots" },
      { name: "Moteurs et boîtes", note: "organes sur palettes" },
      { name: "Rétroviseurs", note: "à commande électrique" },
      { name: "Électronique", note: "boîtiers de fusibles, modules" },
      { name: "Suspension et freins", note: "bras, amortisseurs, disques" },
      { name: "Habitacle", note: "sièges, volants, poignées" },
    ],
  },
  award: {
    eyebrow: "DISTINCTION",
    title: "TOP Įmonė 2026",
    kicker: "C'est la mesure extérieure de la façon dont cette maison est tenue.",
    quote:
      "D'après les données de Rekvizitai.lt et des critères économiques, UAB Bratas figure sur la liste TOP Įmonė 2026. C'est l'une des 6 % d'entreprises les plus fiables et les plus stables financièrement en Lituanie, où la société est établie.",
    body: "2026 est le dixième anniversaire de cette distinction. En dix ans, elle est devenue un signe reconnu de la façon dont une société est tenue. Le sceau porte « 10 metų pasitikėjimo » : dix ans de confiance.",
    seal: "TOP Įmonė 2026",
  },
  gallery: {
    eyebrow: "GALERIE",
    title: "L'entrepôt",
    lead: "L'entrepôt et la cour, tels qu'ils sont.",
    photos: {
      lights: {
        alt: "Rayonnages en bois remplis de feux arrière rouges",
        caption: "Feux arrière",
      },
      wheels: {
        alt: "Jantes, pneus et feux arrière entreposés sous un auvent",
        caption: "Roues et pneus",
      },
      mechanical: {
        alt: "Rayonnages de moteurs, turbos et autres pièces mécaniques",
        caption: "Pièces mécaniques",
      },
      crates: {
        alt: "Caisses noires de petites pièces sur des racks en bois",
        caption: "Pièces en caisses",
      },
      boxes: {
        alt: "Deux cartons de pare-chocs empilés dans l'entrepôt Bratas",
        caption: "Cartons de pare-chocs",
      },
      forklift: {
        alt: "Chariot élévateur transportant un moteur à travers la cour",
        caption: "Un moteur en mouvement",
      },
      engineContainer: {
        alt: "Moteurs empilés dans un conteneur maritime ouvert",
        caption: "Moteurs dans le conteneur",
      },
      yard: {
        alt: "Chariot élévateur dans la cour, entre les bâtiments de l'entrepôt",
        caption: "La cour",
      },
      yardContainer: {
        alt: "Conteneur ouvert de moteurs à côté de l'entrepôt",
        caption: "La cour et le conteneur",
      },
    },
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Šlamų k. 1B-1",
    place: "District de Pasvalys, Lituanie",
    companyLabel: "SOCIÉTÉ",
    company: "UAB Bratas",
    phoneLabel: "TÉLÉPHONE",
    codeLabel: "CODE D'ENTREPRISE",
    vatLabel: "N° DE TVA",
    hoursLabel: "HORAIRES",
    hours:
      "Du lundi au vendredi, 07:00–16:00. Fermé le samedi et le dimanche.",
    callEyebrow: "APPELER",
    hoursShort: "Lun–Ven, 07:00–16:00",
    catalog: "Catalogue RRR.lt",
    mapTitle: "Carte du village de Šlamai",
    mapText:
      "La carte indique le village de Šlamai. L'adresse enregistrée est Šlamų k. 1B-1, district de Pasvalys.",
    openMap: "Ouvrir dans la carte",
    osm: "OpenStreetMap",
  },
  footer: {
    before:
      "© 2026 UAB Bratas. Code d'entreprise 306008010 · TVA LT100014759115. Pièces vendues via ",
    after: ".",
  },
  mobile: { call: "Appeler", catalog: "Catalogue" },
};

const lt: Dictionary = {
  meta: {
    title: "UAB Bratas — naudotos automobilių dalys iš JK",
    description:
      "UAB „Bratas“ parduoda naudotas automobilių dalis iš Jungtinės Karalystės. Pasiūla — dalys, ne pilni automobiliai. Dešimtys tūkstančių dalių kataloge, supakuojamų ir išsiunčiamų pagal užsakymą.",
    imageAlt:
      "UAB Bratas dalių sandėlis: bamperių praėjimas ant medinių lentynų",
  },
  skip: "Pereiti prie turinio",
  language: "Kalba",
  nav: {
    primary: "Pagrindinis",
    mobile: "Mobilus",
    menu: "Meniu",
    close: "Uždaryti",
    catalog: "Katalogas",
    parts: "Dalys",
    recognition: "Įvertinimas",
    gallery: "Galerija",
    contact: "Kontaktai",
  },
  hero: {
    eyebrow: "AUTOPARTS",
    title: "Naudotos automobilių dalys iš Jungtinės Karalystės.",
    lead: "UAB „Bratas“ tiekia atsargines dalis iš Jungtinės Karalystės. Pasiūla — dalys, ne pilni automobiliai. RRR.lt kataloge — dešimtys tūkstančių pozicijų, asortimentas nuolat pildomas. Ten esame top pardavėjas: sandėlis ir siuntos tvarkomi kaip rimtoje dalių įmonėje.",
    catalog: "Atidaryti katalogą",
    call: "Skambinti",
    imageAlt:
      "Pažymėtų bamperių praėjimas ant medinių lentynų Brato sandėlyje",
    caption: "Bamperiai sandėlyje",
  },
  stats: {
    catalogLabel: "KATALOGAS",
    catalogValue: "Dešimtys tūkstančių",
    catalogNote: "dalių, paruoštų siųsti",
    hoursLabel: "DARBO LAIKAS",
    hoursValue: "I–V",
    hoursNote: "07:00–16:00, savaitgalį nedirbame",
    sellerLabel: "RRR.LT",
    sellerValue: "Top pardavėjas",
    sellerNote: "ten, kur perkama",
  },
  origin: {
    eyebrow: "IŠ JK",
    title: "Dalys iš Jungtinės Karalystės",
    lead: "Viena veikla, vykdoma tokiu mastu: dalys atkeliauja iš JK, laikomos mūsų sandėlyje ir išsiunčiamos pagal užsakymą per RRR.lt.",
  },
  services: [
    {
      title: "Atvežame iš JK",
      text: "Atsargines dalis perkame Jungtinėje Karalystėje ir atvežame į savo sandėlį. Laikome ir siunčiame detales, ne automobilius.",
      alt: "Krautuvas veža variklį į sandėlį",
    },
    {
      title: "Laikome sandėlyje",
      text: "Didžiausia pasiūla — BMW, Mercedes-Benz, Audi, Ford ir Volvo. Dažniausiai ieškomi priekiniai ir galiniai žibintai, elektra valdomi veidrodėliai, rankenėlių komplektai ir saugiklių blokai.",
      alt: "Priekinių žibintų, veidrodėlių ir galinių žibintų praėjimas ant medinių lentynų",
    },
    {
      title: "Parduodame ir siunčiame",
      text: "Visą asortimentą rasite RRR.lt. Dalį išsirenkate kataloge, o mes ją supakuojame ir išsiunčiame.",
      alt: "Pakavimo stalas su kompiuteriu, svarstyklėmis ir siuntų dėžėmis",
    },
  ],
  parts: {
    eyebrow: "DALYS",
    title: "Dešimtys tūkstančių dalių",
    lead: "Visas sandėlis vienoje nuorodoje. Asortimentas pildomas, todėl prieš užsakant verta pažiūrėti aktualų sąrašą RRR.lt.",
    brands: "Daugiausia dalių: BMW, Mercedes-Benz, Audi, Ford, Volvo.",
    catalog: "RRR.lt parduotuvė",
    bodyAlt: "Juodų ir sidabrinių bamperių eilės ant medinių sandėlio stelažų",
    bodyCaption: "Kėbulo dalys",
    engineAlt: "Naudoti varikliai ant palečių ir oranžinių sandėlio stelažų",
    engineCaption: "Varikliai",
    categories: [
      { name: "Žibintai", note: "priekiniai ir galiniai" },
      { name: "Kėbulas", note: "durys, bamperiai, gaubtai" },
      { name: "Varikliai ir dėžės", note: "agregatai ant palečių" },
      { name: "Veidrodėliai", note: "elektra valdomi" },
      { name: "Elektronika", note: "saugiklių blokai, moduliai" },
      { name: "Pakaba ir stabdžiai", note: "svirtys, amortizatoriai, diskai" },
      { name: "Salonas", note: "sėdynės, vairai, rankenėlės" },
    ],
  },
  award: {
    eyebrow: "ĮVERTINIMAS",
    title: "TOP Įmonė 2026",
    kicker: "Tai išorinis matas, kaip ši įmonė tvarkoma.",
    quote:
      "Remiantis Rekvizitai.lt duomenimis ir ekonominiais kriterijais, UAB „Bratas“ įtraukta į „TOP Įmonė 2026“ sąrašą. Tai viena iš vos 6 % patikimiausių ir finansiškai stabiliausių įmonių Lietuvoje, kur bendrovė įsikūrusi.",
    body: "2026-ieji šiam įvertinimui — dešimties metų jubiliejus. Per dešimtmetį tai tapo atpažįstamu ženklu, kaip vedama įmonė. Ženkle — „10 metų pasitikėjimo“.",
    seal: "TOP Įmonė 2026",
  },
  gallery: {
    eyebrow: "GALERIJA",
    title: "Sandėlis",
    lead: "Sandėlis ir kiemas, tokie, kokie yra.",
    photos: {
      lights: {
        alt: "Medinės lentynos, pilnos raudonų galinių žibintų",
        caption: "Galiniai žibintai",
      },
      wheels: {
        alt: "Ratlankiai, padangos ir galiniai žibintai po stogine",
        caption: "Ratai ir padangos",
      },
      mechanical: {
        alt: "Lentynos su varikliais, turbinomis ir kitomis mechaninėmis dalimis",
        caption: "Mechaninės dalys",
      },
      crates: {
        alt: "Juodos dėžės su smulkiomis dalimis ant medinių stelažų",
        caption: "Dalys dėžėse",
      },
      boxes: {
        alt: "Dvi sukrautos bamperių dėžės Brato sandėlyje",
        caption: "Bamperių dėžės",
      },
      forklift: {
        alt: "Krautuvas veža variklį per kiemą",
        caption: "Vežamas variklis",
      },
      engineContainer: {
        alt: "Varikliai sukrauti atvirame jūriniame konteineryje",
        caption: "Varikliai konteineryje",
      },
      yard: {
        alt: "Krautuvas kieme tarp sandėlio pastatų",
        caption: "Kiemas",
      },
      yardContainer: {
        alt: "Atviras konteineris su varikliais šalia sandėlio",
        caption: "Kiemas ir konteineris",
      },
    },
  },
  contact: {
    eyebrow: "KONTAKTAI",
    title: "Šlamų k. 1B-1",
    place: "Pasvalio r., Lietuva",
    companyLabel: "ĮMONĖ",
    company: "UAB „Bratas“",
    phoneLabel: "TELEFONAS",
    codeLabel: "ĮMONĖS KODAS",
    vatLabel: "PVM KODAS",
    hoursLabel: "DARBO LAIKAS",
    hours:
      "Pirmadieniais–penktadieniais 07:00–16:00. Šeštadienį ir sekmadienį nedirbame.",
    callEyebrow: "SKAMBINTI",
    hoursShort: "I–V, 07:00–16:00",
    catalog: "RRR.lt katalogas",
    mapTitle: "Šlamų kaimo žemėlapis",
    mapText:
      "Žemėlapyje pažymėtas Šlamų kaimas. Registracijos adresas — Šlamų k. 1B-1, Pasvalio r.",
    openMap: "Atidaryti žemėlapyje",
    osm: "OpenStreetMap",
  },
  footer: {
    before:
      "© 2026 UAB „Bratas“. Įmonės kodas 306008010 · PVM LT100014759115. Dalys parduodamos per ",
    after: ".",
  },
  mobile: { call: "Skambinti", catalog: "Katalogas" },
};

const dictionaries: Record<Locale, Dictionary> = { en, fr, lt };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
