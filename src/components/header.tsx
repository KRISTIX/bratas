"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { catalogUrl, nav, phoneDisplay, phoneHref } from "@/lib/site";

export function Header() {
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
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#pradzia" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/brand/logo.png"
            alt="Bratas Autoparts"
            width={1104}
            height={304}
            preload
            className="h-9 w-auto md:h-11"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Pagrindinis">
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

        <div className="hidden items-center gap-4 md:flex">
          <a href={phoneHref} className="text-sm font-semibold">
            {phoneDisplay}
          </a>
          <Button asChild size="sm">
            <a href={catalogUrl} target="_blank" rel="noopener noreferrer">
              Katalogas
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
          {open ? "Uždaryti" : "Meniu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line bg-white px-5 py-4 lg:hidden"
          aria-label="Mobilus"
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
