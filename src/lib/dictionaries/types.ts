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
    contact: string;
  };
  hero: {
    eyebrow: string;
    titleLines: [string, string];
    lead: string;
    catalog: string;
    call: string;
    imageAlt: string;
    imageCaption: string;
    stockNote: string;
    stockLabel: string;
  };
  operation: {
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
  };
  band: {
    eyebrow: string;
    title: string;
    lead: string;
    openRrr: string;
    openOvoko: string;
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
    photoAlt: string;
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
