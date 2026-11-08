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
    operation: string;
    parts: string;
    recognition: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    lead: string;
    catalog: string;
    call: string;
    proofs: [
      { value: string; note: string },
      { value: string; note: string },
      { value: string; note: string },
    ];
  };
  frames: [
    { alt: string; caption: string },
    { alt: string; caption: string },
    { alt: string; caption: string },
    { alt: string; caption: string },
    { alt: string; caption: string },
  ];
  operation: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  steps: [
    { title: string; text: string },
    { title: string; text: string },
    { title: string; text: string },
    { title: string; text: string },
  ];
  parts: {
    eyebrow: string;
    title: string;
    lead: string;
    brands: string;
    catalog: string;
    categories: { name: string; note: string }[];
  };
  award: {
    eyebrow: string;
    title: string;
    figure: string;
    figureLabel: string;
    kicker: string;
    quote: string;
    body: string;
    seal: string;
  };
  band: {
    eyebrow: string;
    title: string;
    lead: string;
    catalog: string;
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
    title: "UAB Bratas — top seller of used parts from the UK",
    description:
      "UAB Bratas holds tens of thousands of used car parts from the United Kingdom. Top seller on RRR.lt. TOP Įmonė 2026, among the 6% most reliable companies in Lithuania. Šlamai, Pasvalys district.",
    imageAlt:
      "UAB Bratas parts warehouse: headlights and bumpers on the shelves",
  },
  skip: "Skip to content",
  language: "Language",
  nav: {
    primary: "Primary",
    mobile: "Mobile",
    menu: "Menu",
    close: "Close",
    catalog: "Catalogue",
    operation: "Operation",
    parts: "Parts",
    recognition: "Recognition",
    contact: "Contact",
  },
  hero: {
    eyebrow: "LITHUANIA · USED PARTS",
    titleLines: ["Top seller.", "The serious warehouse."],
    lead: "UAB Bratas holds tens of thousands of used parts brought in from the United Kingdom — parts, not complete cars. On RRR.lt we are a top seller. TOP Įmonė 2026 places this house among the 6% most reliable and financially stable companies in Lithuania.",
    catalog: "Open the catalogue",
    call: "Call",
    proofs: [
      { value: "Top", note: "seller on RRR.lt" },
      { value: "6%", note: "of the most reliable in Lithuania" },
      { value: "Mon–Fri", note: "07:00–16:00" },
    ],
  },
  frames: [
    {
      alt: "Warehouse aisle of car parts: headlights on the left, bumpers on the right",
      caption: "Warehouse",
    },
    {
      alt: "Used front and rear lights stored in boxes on warehouse shelves",
      caption: "Lights",
    },
    {
      alt: "Used engines and gearboxes on wooden pallets",
      caption: "Engines",
    },
    {
      alt: "Used doors, bonnets and bumpers on warehouse racks",
      caption: "Body",
    },
    {
      alt: "A headlight, packing tape and a box on the workbench",
      caption: "Packing",
    },
  ],
  operation: {
    eyebrow: "FROM THE UK",
    title: "From the United Kingdom into a warehouse built for scale.",
    lead: "One line of work, carried seriously: parts bought in the UK, held here, sold through RRR.lt.",
  },
  steps: [
    {
      title: "Brought in from the UK",
      text: "We buy spare parts in the United Kingdom and bring them over. What arrives in Lithuania is parts, not cars.",
    },
    {
      title: "Held in the warehouse",
      text: "The largest share of the stock is BMW, Mercedes-Benz, Audi, Ford and Volvo. Lights, mirrors, body, units and electronics, in one house.",
    },
    {
      title: "Sold on RRR.lt",
      text: "On that marketplace we are a top seller. The whole warehouse sits behind one catalogue, and the range keeps being filled.",
    },
    {
      title: "Packed and shipped",
      text: "You choose the part in the catalogue. We prepare it, pack it and ship it.",
    },
  ],
  parts: {
    eyebrow: "PARTS",
    title: "Tens of thousands. One link.",
    lead: "The whole warehouse behind a single catalogue. The range keeps being filled, so the current list on RRR.lt is the one that counts.",
    brands: "The marques we hold most: BMW, Mercedes-Benz, Audi, Ford, Volvo.",
    catalog: "RRR.lt shop",
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
    figure: "6%",
    figureLabel: "of the most reliable companies in Lithuania",
    kicker: "Not a promise. A place among the most reliable.",
    quote:
      "On Rekvizitai.lt data and economic criteria, UAB Bratas is included in the TOP Įmonė 2026 list. It is one of only 6% of the most reliable and financially stable companies in Lithuania.",
    body: "2026 is the tenth anniversary of this distinction. Over that decade, TOP Įmonė has become one of the best-known marks of business trust in Lithuania. The seal reads “10 years of trust.”",
    seal: "TOP Įmonė 2026",
  },
  band: {
    eyebrow: "CATALOGUE",
    title: "The whole warehouse, one link.",
    lead: "Tens of thousands of parts. Top seller on RRR.lt.",
    catalog: "Open RRR.lt",
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Call the warehouse.",
    place: "Šlamų k. 1B-1, Pasvalys district",
    companyLabel: "COMPANY",
    company: "UAB Bratas",
    phoneLabel: "PHONE",
    codeLabel: "COMPANY CODE",
    vatLabel: "VAT NUMBER",
    hoursLabel: "HOURS",
    hours: "Monday to Friday, 07:00–16:00. Closed Saturday and Sunday.",
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
    title: "UAB Bratas — premier vendeur de pièces d'occasion du Royaume-Uni",
    description:
      "UAB Bratas tient des dizaines de milliers de pièces auto d'occasion venues du Royaume-Uni. Top vendeur sur RRR.lt. TOP Įmonė 2026, parmi les 6 % d'entreprises les plus fiables de Lituanie. Šlamai, district de Pasvalys.",
    imageAlt:
      "Entrepôt de pièces UAB Bratas : phares et pare-chocs sur les rayonnages",
  },
  skip: "Aller au contenu",
  language: "Langue",
  nav: {
    primary: "Principal",
    mobile: "Mobile",
    menu: "Menu",
    close: "Fermer",
    catalog: "Catalogue",
    operation: "Activité",
    parts: "Pièces",
    recognition: "Distinction",
    contact: "Contact",
  },
  hero: {
    eyebrow: "LITUANIE · PIÈCES D'OCCASION",
    titleLines: ["Premier vendeur.", "L'entrepôt sérieux."],
    lead: "UAB Bratas tient des dizaines de milliers de pièces d'occasion amenées du Royaume-Uni — des pièces, pas des véhicules complets. Sur RRR.lt, nous sommes un top vendeur. TOP Įmonė 2026 place cette maison parmi les 6 % d'entreprises les plus fiables et les plus stables financièrement de Lituanie.",
    catalog: "Ouvrir le catalogue",
    call: "Appeler",
    proofs: [
      { value: "Top", note: "vendeur sur RRR.lt" },
      { value: "6 %", note: "des plus fiables en Lituanie" },
      { value: "Lun–Ven", note: "07:00–16:00" },
    ],
  },
  frames: [
    {
      alt: "Allée d'un entrepôt de pièces auto : phares à gauche, pare-chocs à droite",
      caption: "Entrepôt",
    },
    {
      alt: "Phares avant et arrière d'occasion, rangés dans des cartons sur les rayonnages",
      caption: "Phares",
    },
    {
      alt: "Moteurs et boîtes de vitesses d'occasion sur palettes en bois",
      caption: "Moteurs",
    },
    {
      alt: "Portes, capots et pare-chocs d'occasion sur les racks de l'entrepôt",
      caption: "Carrosserie",
    },
    {
      alt: "Phare, ruban d'emballage et carton sur l'établi",
      caption: "Emballage",
    },
  ],
  operation: {
    eyebrow: "DU ROYAUME-UNI",
    title: "Du Royaume-Uni à un entrepôt tenu à cette échelle.",
    lead: "Une seule activité, menée sérieusement : des pièces achetées au Royaume-Uni, tenues ici, vendues via RRR.lt.",
  },
  steps: [
    {
      title: "Amenées du Royaume-Uni",
      text: "Nous achetons les pièces de rechange au Royaume-Uni et les acheminons. Ce qui arrive en Lituanie, ce sont des pièces, pas des voitures.",
    },
    {
      title: "Tenues en entrepôt",
      text: "La plus grande part du stock : BMW, Mercedes-Benz, Audi, Ford et Volvo. Phares, rétroviseurs, carrosserie, organes et électronique, dans une seule maison.",
    },
    {
      title: "Vendues sur RRR.lt",
      text: "Sur cette place de marché, nous sommes un top vendeur. Tout l'entrepôt tient derrière un seul catalogue, et l'assortiment se remplit.",
    },
    {
      title: "Emballées et expédiées",
      text: "Vous choisissez la pièce dans le catalogue. Nous la préparons, l'emballons et l'expédions.",
    },
  ],
  parts: {
    eyebrow: "PIÈCES",
    title: "Des dizaines de milliers. Un seul lien.",
    lead: "Tout l'entrepôt derrière un seul catalogue. L'assortiment se remplit : la liste à jour sur RRR.lt est celle qui compte.",
    brands: "Les marques les plus présentes : BMW, Mercedes-Benz, Audi, Ford, Volvo.",
    catalog: "Boutique RRR.lt",
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
    figure: "6 %",
    figureLabel: "des entreprises les plus fiables de Lituanie",
    kicker: "Pas une promesse. Une place parmi les plus fiables.",
    quote:
      "D'après les données de Rekvizitai.lt et des critères économiques, UAB Bratas figure sur la liste TOP Įmonė 2026. C'est l'une des 6 % d'entreprises les plus fiables et les plus stables financièrement en Lituanie.",
    body: "2026 est le dixième anniversaire de cette distinction. En dix ans, TOP Įmonė est devenu l'un des signes de confiance les mieux reconnus des affaires en Lituanie. Le sceau porte « 10 metų pasitikėjimo » : dix ans de confiance.",
    seal: "TOP Įmonė 2026",
  },
  band: {
    eyebrow: "CATALOGUE",
    title: "Tout l'entrepôt, un seul lien.",
    lead: "Des dizaines de milliers de pièces. Top vendeur sur RRR.lt.",
    catalog: "Ouvrir RRR.lt",
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Appelez l'entrepôt.",
    place: "Šlamų k. 1B-1, district de Pasvalys",
    companyLabel: "SOCIÉTÉ",
    company: "UAB Bratas",
    phoneLabel: "TÉLÉPHONE",
    codeLabel: "CODE D'ENTREPRISE",
    vatLabel: "N° DE TVA",
    hoursLabel: "HORAIRES",
    hours: "Du lundi au vendredi, 07:00–16:00. Fermé le samedi et le dimanche.",
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
    title: "UAB Bratas — top pardavėjas, naudotos dalys iš JK",
    description:
      "UAB „Bratas“ — rimtas naudotų dalių sandėlis. Dešimtys tūkstančių dalių iš Jungtinės Karalystės, top pardavėjas RRR.lt, TOP Įmonė 2026. Šlamų k., Pasvalio r.",
    imageAlt:
      "UAB Bratas automobilių dalių sandėlis: žibintai ir bamperiai lentynose",
  },
  skip: "Pereiti prie turinio",
  language: "Kalba",
  nav: {
    primary: "Pagrindinis",
    mobile: "Mobilus",
    menu: "Meniu",
    close: "Uždaryti",
    catalog: "Katalogas",
    operation: "Veikla",
    parts: "Dalys",
    recognition: "Įvertinimas",
    contact: "Kontaktai",
  },
  hero: {
    eyebrow: "LIETUVA · NAUDOTOS DALYS",
    titleLines: ["Top pardavėjas.", "Rimčiausias sandėlis."],
    lead: "UAB „Bratas“ laiko dešimtis tūkstančių naudotų dalių iš Jungtinės Karalystės — dalis, ne automobilius. RRR.lt esame top pardavėjas. „TOP Įmonė 2026“ šią įmonę stato tarp 6 % patikimiausių ir finansiškai stabiliausių Lietuvoje.",
    catalog: "Atidaryti katalogą",
    call: "Skambinti",
    proofs: [
      { value: "Top", note: "pardavėjas RRR.lt" },
      { value: "6%", note: "patikimiausių Lietuvoje" },
      { value: "I–V", note: "07:00–16:00" },
    ],
  },
  frames: [
    {
      alt: "Dalių sandėlio praėjimas: kairėje žibintai, dešinėje bamperiai",
      caption: "Sandėlis",
    },
    {
      alt: "Naudoti priekiniai ir galiniai žibintai dėžėse ant sandėlio lentynų",
      caption: "Žibintai",
    },
    {
      alt: "Naudoti varikliai ir pavarų dėžės ant medinių palečių",
      caption: "Varikliai",
    },
    {
      alt: "Naudotos durelės, gaubtai ir bamperiai ant sandėlio stelažų",
      caption: "Kėbulas",
    },
    {
      alt: "Žibintas, pakavimo juosta ir dėžė ant darbastalio",
      caption: "Pakavimas",
    },
  ],
  operation: {
    eyebrow: "IŠ JUNGTINĖS KARALYSTĖS",
    title: "Iš Karalystės — į sandėlį, kuris laiko mastą.",
    lead: "Viena veikla, vykdoma rimtai: dalys perkamos Jungtinėje Karalystėje, laikomos čia ir parduodamos per RRR.lt.",
  },
  steps: [
    {
      title: "Atsivežame iš Karalystės",
      text: "Atsargines dalis perkame Jungtinėje Karalystėje ir atsivežame patys. Į Lietuvą keliauja detalės, ne automobiliai.",
    },
    {
      title: "Laikome sandėlyje",
      text: "Didžiausia dalis sandėlio — BMW, Mercedes-Benz, Audi, Ford ir Volvo. Žibintai, veidrodėliai, kėbulas, agregatai ir elektronika — vienoje įmonėje.",
    },
    {
      title: "Parduodame per RRR.lt",
      text: "Šioje platformoje esame top pardavėjas. Visas sandėlis — viename kataloge, kuris nuolat pildomas.",
    },
    {
      title: "Supakuojame ir išsiunčiame",
      text: "Dalį išsirenkate kataloge. Mes ją paruošiame, supakuojame ir išsiunčiame.",
    },
  ],
  parts: {
    eyebrow: "DALYS",
    title: "Dešimtys tūkstančių. Viena nuoroda.",
    lead: "Visas sandėlis už vieno katalogo. Asortimentas pildomas, todėl galiojantis sąrašas yra RRR.lt.",
    brands: "Daugiausia laikome: BMW, Mercedes-Benz, Audi, Ford, Volvo.",
    catalog: "RRR.lt parduotuvė",
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
    figure: "6%",
    figureLabel: "patikimiausių įmonių Lietuvoje",
    kicker: "Ne pažadas. Vieta tarp patikimiausių.",
    quote:
      "Remiantis Rekvizitai.lt duomenimis ir ekonominiais kriterijais, UAB „Bratas“ įtraukta į „TOP Įmonė 2026“ sąrašą. Tai viena iš vos 6 % patikimiausių ir finansiškai stabiliausių įmonių Lietuvoje.",
    body: "2026-ieji šiam įvertinimui — dešimties metų jubiliejus. Per dešimtmetį „TOP Įmonė“ tapo vienu geriausiai atpažįstamų verslo pasitikėjimo ženklų Lietuvoje. Ženkle — „10 metų pasitikėjimo“.",
    seal: "TOP Įmonė 2026",
  },
  band: {
    eyebrow: "KATALOGAS",
    title: "Visas sandėlis — viena nuoroda.",
    lead: "Dešimtys tūkstančių dalių. Top pardavėjas RRR.lt.",
    catalog: "Atidaryti RRR.lt",
  },
  contact: {
    eyebrow: "KONTAKTAI",
    title: "Skambinkite į sandėlį.",
    place: "Šlamų k. 1B-1, Pasvalio r.",
    companyLabel: "ĮMONĖ",
    company: "UAB „Bratas“",
    phoneLabel: "TELEFONAS",
    codeLabel: "ĮMONĖS KODAS",
    vatLabel: "PVM KODAS",
    hoursLabel: "DARBO LAIKAS",
    hours:
      "Pirmadieniais–penktadieniais 07:00–16:00. Šeštadienį ir sekmadienį nedirbame.",
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
