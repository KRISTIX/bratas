"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

const MIN = 14_000;
const MAX = 16_000;

function randomInRange() {
  return Math.floor(MIN + Math.random() * (MAX - MIN + 1));
}

function nextDelay() {
  return 5000 + Math.floor(Math.random() * 5000);
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
    setCount(randomInRange());

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let timeoutId = 0;
    let flashId = 0;

    const tick = () => {
      setCount((current) => {
        const step = Math.random() > 0.55 ? 1 : 2;
        const direction = Math.random() > 0.5 ? 1 : -1;
        const next = current + direction * step;
        return Math.min(MAX, Math.max(MIN, next));
      });
      setFlash(true);
      flashId = window.setTimeout(() => setFlash(false), 320);
      timeoutId = window.setTimeout(tick, nextDelay());
    };

    timeoutId = window.setTimeout(tick, nextDelay());

    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(flashId);
    };
  }, []);

  return (
    <div
      className={cn(
        "rise rise-5 flex w-full max-w-md items-center gap-3.5 rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-2.5 backdrop-blur-md transition-[box-shadow,border-color,background-color] duration-300",
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
          "font-display text-[1.65rem] leading-none font-bold tracking-tight tabular-nums transition-colors duration-200 sm:text-[1.85rem]",
          flash ? "text-emerald-400" : "text-white",
        )}
      >
        {formatCount(count, locale)}
      </p>
      <div className="ml-auto min-w-0 text-right">
        <p className="text-[0.62rem] font-semibold tracking-[0.2em] text-emerald-400">
          {note}
        </p>
        <p className="mt-0.5 text-sm leading-tight text-white/65">{label}</p>
      </div>
    </div>
  );
}
