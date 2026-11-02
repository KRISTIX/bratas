"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import { catalogUrl, phoneDisplay, phoneHref } from "@/lib/site";

function localeHref(locale: Locale) {
  const hash = window.location.hash;
  return `/${locale}${hash}`;
}

function LanguageSwitcher({
  current,
  label,
  onNavigate,
}: {
  current: Locale;
  label: string;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: Event) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function follow(event: MouseEvent<HTMLAnchorElement>, locale: Locale) {
    const href = localeHref(locale);
    event.currentTarget.href = href;
    setOpen(false);
    onNavigate?.();
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }
    event.preventDefault();
    window.location.assign(href);
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="inline-flex h-10 items-center gap-1.5 rounded-sm border border-line bg-white px-2.5 text-sm font-semibold"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls="language-menu"
        aria-label={label}
        onClick={() => setOpen((value) => !value)}
      >
        {current.toUpperCase()}
        <svg
          viewBox="0 0 12 12"
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        >
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      </button>
      {open ? (
        <ul
          id="language-menu"
          role="listbox"
          aria-label={label}
          className="absolute right-0 z-50 mt-2 min-w-40 border border-line bg-white py-1 shadow-[0_8px_24px_rgba(20,20,20,0.08)]"
        >
          {locales.map((locale) => {
            const active = locale === current;
            return (
              <li key={locale} role="option" aria-selected={active}>
                <a
                  href={`/${locale}`}
                  hrefLang={locale}
                  lang={locale}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "block bg-paper px-3 py-2 text-sm font-semibold"
                      : "block px-3 py-2 text-sm font-semibold text-ink/80 hover:bg-paper hover:text-ink"
                  }
                  onClick={(event) => follow(event, locale)}
                >
                  {localeNames[locale]}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

export function Header({
  lang,
  nav,
  menu,
  close,
  primaryNav,
  mobileNav,
  catalog,
  language,
}: {
  lang: Locale;
  nav: { href: string; label: string }[];
  menu: string;
  close: string;
  primaryNav: string;
  mobileNav: string;
  catalog: string;
  language: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="relative z-20 mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#content" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.png"
            alt="Bratas Autoparts"
            width={1104}
            height={304}
            preload
            className="h-9 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={primaryNav}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/80 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher
            current={lang}
            label={language}
            onNavigate={() => setOpen(false)}
          />
          <div className="hidden items-center gap-4 md:flex">
            <a href={phoneHref} className="text-sm font-semibold">
              {phoneDisplay}
            </a>
            <Button asChild size="sm">
              <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
                {catalog}
              </a>
            </Button>
          </div>
          <button
            type="button"
            className="inline-flex h-10 items-center rounded-sm border border-line px-3 text-sm font-semibold lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? close : menu}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-white px-5 py-4 lg:hidden"
          aria-label={mobileNav}
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block border-b border-line py-3 text-base font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={phoneHref} className="mt-4 block text-base font-semibold">
            {phoneDisplay}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
