"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { heroImages } from "@/lib/site";
import { cn } from "@/lib/utils";

const INTERVAL_MS = 3000;

export function HeroGallery({
  alts,
  captions,
  nextLabel,
}: {
  alts: [string, string];
  captions: [string, string];
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % heroImages.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [tick]);

  const goNext = () => {
    setIndex((current) => (current + 1) % heroImages.length);
    setTick((value) => value + 1);
  };

  return (
    <figure className="rise rise-3 relative min-h-[16rem] overflow-hidden sm:min-h-[18rem] lg:min-h-full">
      <button
        type="button"
        onClick={goNext}
        aria-label={nextLabel}
        className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
      />
      {heroImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === index ? (alts[i] ?? alts[0]) : ""}
          fill
          preload={i === 0}
          quality={100}
          sizes="(min-width: 1024px) 50vw, 100vw"
          aria-hidden={i !== index}
          className={cn(
            "object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-ink/70 to-transparent px-5 pt-16 pb-5">
        <div className="flex items-end justify-between gap-3">
          <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-ink shadow-sm">
            {captions[index] ?? captions[0]}
          </span>
          <span className="flex gap-1.5" aria-hidden>
            {heroImages.map((src, i) => (
              <span
                key={src}
                className={cn(
                  "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                  i === index ? "bg-white" : "bg-white/40",
                )}
              />
            ))}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
