import type { PartCategoryId } from "@/lib/site";

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
    wholesale: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    lead: string;
    catalog: string;
    call: string;
    imageAlts: [string, string];
    imageCaptions: [string, string];
    nextImage: string;
    stockNote: string;
    stockLabel: string;
  };
  operation: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  services: [
    { title: string; text: string; alt: string; alts?: [string, string] },
    { title: string; text: string; alt: string; alts?: [string, string] },
    { title: string; text: string; alt: string },
  ];
  parts: {
    eyebrow: string;
    title: string;
    lead: string;
    catalog: string;
    categories: { id: PartCategoryId; name: string; note: string }[];
  };
  award: {
    eyebrow: string;
    title: string;
    mark: string;
    figure: string;
    figureLabel: string;
    quote: string;
    body: string;
    seal: string;
    reviewsTitle: string;
    reviewsLead: string;
    reviewsPrev: string;
    reviewsNext: string;
    reviews: { name: string; score: string; text: string }[];
  };
  band: {
    eyebrow: string;
    title: string;
    lead: string;
    openRrr: string;
    openOvoko: string;
  };
  wholesale: {
    eyebrow: string;
    title: string;
    lead: string;
    photoAlt: string;
    openLabel: string;
    openHint: string;
    closeLabel: string;
    nameLabel: string;
    companyLabel: string;
    emailLabel: string;
    phoneLabel: string;
    volumeLabel: string;
    volumeOptions: { value: string; label: string }[];
    partsLabel: string;
    messageLabel: string;
    submitLabel: string;
    successMessage: string;
    requiredHint: string;
    errorMessage: string;
    mailtoLabel: string;
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
    hoursShort: string;
    marketplaceNote: string;
    mapTitle: string;
    mapOpen: string;
  };
  footer: {
    rights: string;
    legal: string;
    privacy: string;
    solution: string;
  };
  privacy: {
    title: string;
    updated: string;
    intro: string;
    sections: { heading: string; body: string }[];
  };
};
