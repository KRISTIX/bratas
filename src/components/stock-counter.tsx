"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const MIN = 14_000;
const MAX = 16_000;

function randomInRange() {
  return Math.floor(MIN + Math.random() * (MAX - MIN + 1));
}

/** Random delay between 5 and 8 seconds (inclusive of 5s, exclusive of 9s). */
function nextDelay() {
  return 5000 + Math.floor(Math.random() * 3001);
}

function formatCount(value: number, locale: string) {
  return new Intl.NumberFormat(locale).format(value);
}

export function StockCounter({
  locale,
  label,
  note,
}: {
  locale: string;
  label: string;
  note: string;
}) {
  const [count, setCount] = useState(15_240);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timeoutId = 0;
    let flashId = 0;
    let seedId = 0;

    seedId = window.setTimeout(() => {
      setCount(randomInRange());
      if (reduce) return;

      const tick = () => {
        setCount((current) => {
          const direction = Math.random() > 0.5 ? 1 : -1;
          const next = current + direction;
          return Math.min(MAX, Math.max(MIN, next));
        });
        setFlash(true);
        flashId = window.setTimeout(() => setFlash(false), 320);
        timeoutId = window.setTimeout(tick, nextDelay());
      };

      timeoutId = window.setTimeout(tick, nextDelay());
    }, 0);

    return () => {
      window.clearTimeout(seedId);
      window.clearTimeout(timeoutId);
      window.clearTimeout(flashId);
    };
  }, []);

  return (
    <div
      className={cn(
        "flex w-full items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2.5 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-300 sm:gap-3.5 sm:px-5",
        flash &&
          "border-emerald-400/55 bg-emerald-400/[0.08] shadow-[0_0_0_1px_rgba(52,211,153,0.22),0_0_22px_rgba(52,211,153,0.16)]",
      )}
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="relative flex size-2.5 shrink-0">
        <span className="stock-ping absolute inset-0 rounded-full bg-emerald-400/70" />
        <span className="relative size-2.5 rounded-full bg-emerald-400" />
      </span>
      <p
        className={cn(
          "font-display text-[1.45rem] leading-none font-bold tracking-tight tabular-nums transition-colors duration-200 sm:text-[1.65rem]",
          flash ? "text-emerald-400" : "text-white",
        )}
      >
        {formatCount(count, locale)}
      </p>
      <span className="h-7 w-px shrink-0 bg-white/20" aria-hidden />
      <p className="min-w-0 text-[clamp(0.7rem,2.8vw,0.875rem)] leading-tight sm:text-sm sm:leading-snug">
        <span className="block font-semibold tracking-[0.14em] whitespace-nowrap text-emerald-400 sm:inline">
          {note}
        </span>
        <span className="block whitespace-nowrap text-white/75 sm:ml-1 sm:inline">
          {label}
        </span>
      </p>
    </div>
  );
}
