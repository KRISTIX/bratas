import type { Dictionary } from "@/lib/dictionaries/types";

export const fr: Dictionary = {
  meta: {
    title: "UAB Bratas — pièces auto d'occasion du Royaume-Uni",
    description:
      "UAB Bratas importe, stocke et vend des pièces auto d'occasion du Royaume-Uni. Catalogue sur RRR.lt, Ovoko et eBay. Strongest in Lithuania 2025–2026. Lituanie.",
    imageAlt: "Entrepôt UAB Bratas : pare-chocs sur des étagères en bois",
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
    wholesale: "Gros",
    contact: "Contact",
  },
  hero: {
    eyebrow: "BRATAS · EUROPE",
    title: "Pièces\nMercedes-Benz\nd'occasion de qualité,\ndu Royaume-Uni.",
    lead: "Nous sommes spécialisés dans les pièces Mercedes-Benz d'occasion de qualité provenant du Royaume-Uni, avec un large choix pour d'autres marques. Stockées en Lituanie et vendues dans toute l'Europe via RRR.lt, Ovoko et eBay.",
    trust: ["Qualité\ncontrôlée", "Expédition\nrapide", "Livraison\nen Europe"],
    catalog: "Ouvrir le catalogue",
    call: "Appeler",
    email: "E-mail",
    imageAlt: "Allée d'entrepôt bordée de pare-chocs sur des étagères en bois",
    imageCaption: "Entrepôt",
    stockNote: "EN DIRECT",
    stockLabel: "pièces en entrepôt",
  },
  operation: {
    eyebrow: "ACTIVITÉ",
    title: "Importation, entrepôt, expédition.",
    lead: "Les pièces sont achetées au Royaume-Uni, tenues en entrepôt en Lituanie et vendues via RRR.lt, Ovoko et eBay.",
  },
  services: [
    {
      title: "Import du Royaume-Uni",
      text: "Les pièces de rechange sont achetées au Royaume-Uni et livrées à l'entrepôt en Lituanie.",
      alt: "Chariot élévateur soulevant un moteur automobile devant l'entrepôt",
    },
    {
      title: "Stock en entrepôt",
      text: "Les pièces sont triées, stockées et tenues prêtes à l'expédition.",
      alt: "Allée d'entrepôt avec caisses étiquetées et pièces en rayons",
    },
    {
      title: "Vente et expédition",
      text: "Le stock est publié sur RRR.lt, Ovoko et eBay, puis emballé et expédié depuis l'entrepôt.",
      alt: "Poste d'emballage dans l'entrepôt avec balance et cartons",
    },
  ],
  parts: {
    eyebrow: "PIÈCES",
    title: "Catégories d'entrepôt",
    lead: "Le catalogue complet est sur RRR.lt, Ovoko et eBay.",
    catalog: "Ouvrir le catalogue",
    categories: [
      { id: "lights", name: "Phares", note: "Avant et arrière" },
      { id: "body", name: "Carrosserie", note: "Portes, pare-chocs, capots" },
      {
        id: "engines",
        name: "Moteurs et boîtes",
        note: "Organes sur palettes",
      },
      { id: "mirrors", name: "Rétroviseurs", note: "Commande électrique" },
      {
        id: "electronics",
        name: "Électronique",
        note: "Boîtiers et modules",
      },
      {
        id: "suspension",
        name: "Suspension et freins",
        note: "Bras, amortisseurs, disques",
      },
      { id: "interior", name: "Habitacle", note: "Sièges, volants, poignées" },
      { id: "wheels", name: "Jantes et pneus", note: "Alliages et disques" },
    ],
  },
  award: {
    imageAlt:
      "Certificat Strongest in Lithuania 2025–2026 décerné à UAB Bratas par Creditinfo",
    eyebrow: "DISTINCTION",
    title: "La plus solide de Lituanie",
    figure: "2025–2026",
    figureLabel: "certificat Creditinfo",
    quote:
      "Creditinfo reconnaît qu'UAB Bratas a une cote de crédit élevée et contribue à l'économie lituanienne.",
    body: "Certificat délivré le 18 novembre 2026, signé par Satrajit Saha, directeur général de Creditinfo Group.",
    seal: "Strongest in Lithuania 2025–2026",
    reviewsTitle: "Avis clients",
    reviewsLead: "Notes de clients ayant commandé des pièces.",
    reviewsPrev: "Avis précédent",
    reviewsNext: "Avis suivant",
    reviews: [
      {
        name: "Janis",
        score: "10",
        text: "Je recommande pour les pièces Mercedes.",
      },
      {
        name: "UAB",
        score: "9",
        text: "Ils respectent les délais annoncés — super !",
      },
      {
        name: "Arnoldas",
        score: "10",
        text: "Ont expédié la commande rapidement.",
      },
      {
        name: "Kristijonas",
        score: "10",
        text: "Je recommande — j'ai acheté des pièces.",
      },
    ],
  },
  band: {
    eyebrow: "CATALOGUE",
    title: "Ouvrir le catalogue.",
    lead: "Les commandes passent par RRR.lt, Ovoko ou eBay.",
    openRrr: "Ouvrir RRR.lt",
    openOvoko: "Ouvrir Ovoko",
  },
  wholesale: {
    eyebrow: "GROS",
    title: "Demande de gros",
    lead: "Indiquez votre volume mensuel et les types de pièces — nous reviendrons vers vous sur les conditions.",
    photoAlt:
      "Chariot élévateur soulevant un moteur automobile devant l'entrepôt",
    openLabel: "Ouvrir la demande de gros",
    openHint:
      "Indiquez volume et types de pièces — nous reviendrons vers vous.",
    closeLabel: "Fermer",
    nameLabel: "NOM",
    companyLabel: "SOCIÉTÉ",
    emailLabel: "E-MAIL",
    phoneLabel: "TÉLÉPHONE",
    volumeLabel: "PIÈCES PAR MOIS",
    volumeOptions: [
      { value: "1-50", label: "1–50" },
      { value: "51-150", label: "51–150" },
      { value: "151-500", label: "151–500" },
      { value: "500+", label: "500+" },
    ],
    partsLabel: "QUELLES PIÈCES (sélection multiple)",
    messageLabel: "MESSAGE (facultatif)",
    submitLabel: "Envoyer la demande",
    successMessage: "Demande reçue. Merci — nous vous recontactons.",
    requiredHint: "Sélectionnez au moins un type de pièce.",
    errorMessage:
      "L'envoi automatique a échoué. Vous pouvez encore envoyer la demande par e-mail.",
    mailtoLabel: "Ouvrir l'application mail",
  },
  contact: {
    eyebrow: "CONTACT",
    title: "Contact",
    place: "Šlamų k. 1B-1, district de Pasvalys",
    companyLabel: "SOCIÉTÉ",
    company: "UAB Bratas",
    phoneLabel: "TÉLÉPHONE",
    emailLabel: "E-MAIL",
    codeLabel: "CODE",
    vatLabel: "TVA",
    hoursLabel: "HORAIRES",
    hoursShort: "Lun–Ven, 07:00–16:00 (EET/EEST)",
    mapTitle: "UAB Bratas sur la carte",
    mapOpen: "Ouvrir dans Google Maps",
  },
  footer: {
    rights: "© 2026 UAB Bratas",
    legal: "Code d'entreprise 306008010 · TVA LT100014759115",
    privacy: "Confidentialité",
    solution: "Solution",
  },
  privacy: {
    title: "Avis de confidentialité",
    updated: "Dernière mise à jour : 12 novembre 2026",
    intro:
      "Comment UAB Bratas traite les données personnelles lorsque vous visitez ce site. Pour les visiteurs de l'Espace économique européen.",
    sections: [
      {
        heading: "Responsable du traitement",
        body: "UAB Bratas, code d'entreprise 306008010, TVA LT100014759115, Šlamų k. 1B-1, district de Pasvalys, Lituanie. Téléphone +370 687 49115. E-mail info@bratas.eu.",
      },
      {
        heading: "Rôle de ce site",
        body: "Ce site présente l'entreprise, l'entrepôt, un formulaire de gros et des liens vers les catalogues RRR.lt, Ovoko et eBay. Il n'héberge ni paiement, ni comptes, ni traceurs publicitaires.",
      },
      {
        heading: "Données traitées",
        body: "L'hébergeur (Vercel) traite des journaux techniques (adresse IP, navigateur, URL) nécessaires à la fourniture et à la sécurité du site. Les demandes de gros passent par FormSubmit.co, puis sont livrées par e-mail pour permettre une réponse. Aucun cookie analytique ni pixel publicitaire n'est utilisé.",
      },
      {
        heading: "Carte (Google Maps)",
        body: "La section contact intègre Google Maps. Votre navigateur interroge Google, qui peut traiter votre adresse IP et des données associées selon sa propre politique de confidentialité.",
      },
      {
        heading: "Places de marché externes",
        body: "RRR.lt, Ovoko et eBay traitent les données selon leurs avis de confidentialité. Les achats suivent les conditions de la place de marché.",
      },
      {
        heading: "Base légale et conservation",
        body: "Les journaux d'hébergement sont traités pour l'intérêt légitime d'exploiter et de sécuriser le site. Les demandes de gros sont traitées en vue d'un contrat ou pour l'intérêt légitime de répondre, et conservées le temps nécessaire à la réponse et aux obligations légales.",
      },
      {
        heading: "Vos droits",
        body: "Vous pouvez demander l'accès, la rectification, l'effacement, la limitation ou l'opposition, et déposer une plainte auprès de l'autorité lituanienne (VDAI) ou de votre autorité locale. Contactez-nous par téléphone pour les droits liés à ce site.",
      },
      {
        heading: "Cookies",
        body: "Ce site ne dépose pas de cookies non essentiels. Le chargement de l'embed Google Maps peut permettre à ce tiers de déposer ses propres cookies.",
      },
    ],
  },
};
