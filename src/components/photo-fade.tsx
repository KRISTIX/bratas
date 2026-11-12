"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const INTERVAL_MS = 3000;

export function PhotoFade({
  images,
  alts,
  className,
  sizes,
  quality = 90,
  clickable = false,
  nextLabel,
}: {
  images: readonly string[];
  alts: readonly string[];
  className?: string;
  sizes: string;
  quality?: number;
  clickable?: boolean;
  nextLabel?: string;
}) {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [images.length, tick]);

  const goNext = () => {
    if (images.length < 2) return;
    setIndex((current) => (current + 1) % images.length);
    setTick((value) => value + 1);
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {clickable && images.length > 1 ? (
        <button
          type="button"
          onClick={goNext}
          aria-label={nextLabel ?? "Next photo"}
          className="absolute inset-0 z-10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
        />
      ) : null}
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === index ? (alts[i] ?? alts[0] ?? "") : ""}
          fill
          quality={quality}
          sizes={sizes}
          aria-hidden={i !== index}
          className={cn(
            "object-cover transition-opacity duration-700 ease-out motion-reduce:transition-none",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      {images.length > 1 ? (
        <span
          className="pointer-events-none absolute inset-x-0 bottom-3 z-20 flex justify-center gap-1.5"
          aria-hidden
        >
          {images.map((src, i) => (
            <span
              key={src}
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-colors duration-300",
                i === index ? "bg-white" : "bg-white/45",
              )}
            />
          ))}
        </span>
      ) : null}
    </div>
  );
}
