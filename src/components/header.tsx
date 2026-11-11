"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
  type PointerEvent,
  type FocusEvent,
} from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import { phoneDisplay, phoneHref } from "@/lib/site";
import { cn } from "@/lib/utils";

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
  const listId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: globalThis.PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function syncHref(
    event: PointerEvent<HTMLAnchorElement> | FocusEvent<HTMLAnchorElement>,
  ) {
    event.currentTarget.href = localeHref(event.currentTarget.lang as Locale);
  }

  function follow(event: MouseEvent<HTMLAnchorElement>) {
    const href = localeHref(event.currentTarget.lang as Locale);
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
        className={cn(
          "inline-flex h-9 items-center gap-1.5 rounded-full border border-line bg-white px-3 text-sm font-medium tracking-wide text-ink transition-[border-color,background-color,box-shadow] duration-200",
          "hover:border-ink/20 hover:bg-canvas",
          open && "border-ink/25 bg-canvas shadow-sm",
        )}
        aria-label={label}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="font-display text-[0.8125rem] font-semibold tracking-[0.08em]">
          {current.toUpperCase()}
        </span>
        <svg
          aria-hidden
          viewBox="0 0 12 12"
          className={cn(
            "size-3 text-ink/45 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open && "rotate-180",
          )}
        >
          <path
            d="M2.5 4.25 6 7.75l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div
        className={cn(
          "absolute top-[calc(100%+0.5rem)] right-0 z-50 min-w-[9.5rem] origin-top-right",
          "transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
          open
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-1 scale-[0.98] opacity-0",
        )}
      >
        <ul
          id={listId}
          role="listbox"
          aria-label={label}
          className="overflow-hidden rounded-2xl bg-white p-1.5 shadow-float ring-1 ring-black/5"
        >
          {locales.map((locale) => {
            const active = locale === current;
            return (
              <li key={locale} role="option" aria-selected={active}>
                <a
                  href={`/${locale}`}
                  hrefLang={locale}
                  lang={locale}
                  aria-label={localeNames[locale]}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm transition-colors duration-150",
                    active
                      ? "bg-ink text-white"
                      : "text-ink/70 hover:bg-canvas hover:text-ink",
                  )}
                  onPointerDown={syncHref}
                  onFocus={syncHref}
                  onClick={follow}
                >
                  <span className="font-display font-semibold tracking-[0.06em]">
                    {locale.toUpperCase()}
                  </span>
                  <span className={cn("text-xs", active ? "text-white/70" : "text-muted")}>
                    {localeNames[locale]}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
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
  catalogHref,
  language,
}: {
  lang: Locale;
  nav: { href: string; label: string }[];
  menu: string;
  close: string;
  primaryNav: string;
  mobileNav: string;
  catalog: string;
  catalogHref: string;
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
      <div className="relative mx-auto max-w-6xl">
        <div className="relative z-20 flex h-16 items-center justify-between gap-4 rounded-full bg-white/95 px-3 shadow-float ring-1 ring-black/5 backdrop-blur-md md:px-4">
          <a
            href="#content"
            className="relative z-10 shrink-0 py-1 pl-2.5 pr-1 md:pl-1"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/logo.png"
              alt="Bratas Autoparts"
              width={1104}
              height={304}
              preload
              className="h-9 w-auto"
            />
          </a>

          <nav
            className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex"
            aria-label={primaryNav}
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 font-display text-[0.8125rem] font-semibold tracking-[0.04em] text-ink/60 transition-colors duration-200 hover:bg-canvas hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="relative z-10 hidden items-center gap-3 md:flex">
            <LanguageSwitcher current={lang} label={language} />
            <a
              href={phoneHref}
              className="hidden text-sm font-semibold tracking-tight xl:inline"
            >
              {phoneDisplay}
            </a>
            <Button asChild size="sm">
              <a href={catalogHref} target="_blank" rel="noopener noreferrer">
                {catalog}
              </a>
            </Button>
          </div>

          <div className="relative z-10 flex items-center gap-2 lg:hidden">
            <div className="md:hidden">
              <LanguageSwitcher current={lang} label={language} />
            </div>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:bg-canvas"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? close : menu}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block size-4" aria-hidden>
                <span
                  className={cn(
                    "absolute left-0 block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0.5",
                  )}
                />
                <span
                  className={cn(
                    "absolute top-1/2 left-0 block h-0.5 w-4 -translate-y-1/2 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open && "scale-x-0 opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 block h-0.5 w-4 rounded-full bg-current transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0.5",
                  )}
                />
              </span>
            </button>
          </div>
        </div>

        <nav
          id="mobile-nav"
          className={cn(
            "absolute inset-x-0 top-[calc(100%+0.5rem)] z-30 origin-top rounded-[1.5rem] bg-white/98 px-5 py-4 shadow-float ring-1 ring-black/5 backdrop-blur-md lg:hidden",
            "transition-[opacity,transform,visibility] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible -translate-y-1 scale-[0.98] opacity-0 pointer-events-none",
          )}
          aria-label={mobileNav}
          aria-hidden={!open}
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block rounded-2xl px-2 py-3 font-display text-base font-semibold tracking-[0.02em] transition-colors hover:bg-canvas"
                  onClick={() => setOpen(false)}
                  tabIndex={open ? undefined : -1}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={phoneHref}
            className="mt-1 block rounded-2xl px-2 py-3 text-base font-semibold"
            tabIndex={open ? undefined : -1}
          >
            {phoneDisplay}
          </a>
        </nav>
      </div>
    </header>
  );
}
