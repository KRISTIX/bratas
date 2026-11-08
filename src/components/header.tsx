"use client";

import { useEffect, useState, type MouseEvent, type PointerEvent, type FocusEvent } from "react";
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
  function syncHref(
    event: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
  ) {
    event.currentTarget.href = localeHref(event.currentTarget.lang as Locale);
  }

  function follow(event: MouseEvent<HTMLAnchorElement>) {
    const href = localeHref(event.currentTarget.lang as Locale);
    event.currentTarget.href = href;
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
    <nav aria-label={label}>
      <ul className="flex items-center gap-2 text-sm font-semibold">
        {locales.map((locale, index) => {
          const active = locale === current;
          return (
            <li key={locale} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-ink/25">
                  /
                </span>
              ) : null}
              <a
                href={`/${locale}`}
                hrefLang={locale}
                lang={locale}
                aria-label={localeNames[locale]}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-ink"
                    : "text-ink/45 transition-colors hover:text-ink"
                }
                onPointerDown={syncHref}
                onFocus={syncHref}
                onClick={follow}
              >
                {locale.toUpperCase()}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
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
    <header className="sticky top-0 z-40 px-3 pt-3 md:px-5">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 rounded-full bg-white/95 px-3 shadow-float ring-1 ring-black/5 backdrop-blur-md md:px-4">
        <a href="#content" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.png"
            alt="Bratas Autoparts"
            width={1104}
            height={304}
            preload
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label={primaryNav}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink/75 transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSwitcher current={lang} label={language} />
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
          className="inline-flex h-10 items-center rounded-full border border-line bg-white px-3.5 text-sm font-semibold lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? close : menu}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="mx-auto mt-2 max-w-6xl rounded-[1.5rem] bg-white px-5 py-4 shadow-float ring-1 ring-black/5 lg:hidden"
          aria-label={mobileNav}
        >
          <div className="md:hidden">
            <LanguageSwitcher
              current={lang}
              label={language}
              onNavigate={() => setOpen(false)}
            />
          </div>
          <ul className="mt-2 flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-2xl px-2 py-3 text-base font-semibold transition-colors hover:bg-canvas"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={phoneHref} className="mt-2 block rounded-2xl px-2 py-3 text-base font-semibold">
            {phoneDisplay}
          </a>
        </nav>
      ) : null}
    </header>
  );
}
