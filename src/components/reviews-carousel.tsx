"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Review = { name: string; score: string; text: string };

const INTERVAL_MS = 4500;

export function ReviewsCarousel({
  title,
  lead,
  reviews,
  prevLabel,
  nextLabel,
}: {
  title: string;
  lead: string;
  reviews: Review[];
  prevLabel: string;
  nextLabel: string;
}) {
  const [index, setIndex] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    if (reviews.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % reviews.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [reviews.length, tick]);

  const go = (direction: -1 | 1) => {
    setIndex((current) => (current + direction + reviews.length) % reviews.length);
    setTick((value) => value + 1);
  };

  if (reviews.length === 0) return null;

  return (
    <div className="pt-2">
      <p className="text-xs font-semibold tracking-[0.22em] text-brand">{title}</p>
      <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl">
        {lead}
      </h3>

      <div className="mt-6 flex items-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label={prevLabel}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-ivory text-ink shadow-card transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:size-11"
        >
          <ChevronLeft className="size-5" />
        </button>

        <div className="grid min-w-0 flex-1" aria-live="polite" aria-atomic="true">
          {reviews.map((review, i) => (
            <div
              key={`${review.name}-${review.text}`}
              className={cn(
                "col-start-1 row-start-1 flex items-start gap-4 rounded-[1.35rem] bg-ivory px-5 py-5 shadow-card sm:gap-5 sm:px-6 sm:py-6",
                i === index
                  ? "review-slide visible z-10"
                  : "invisible z-0 pointer-events-none",
              )}
            >
              <span
                aria-hidden
                className="inline-flex size-[4.25rem] shrink-0 flex-col items-center justify-center rounded-[1.15rem] bg-canvas font-display leading-none"
              >
                <span className="text-2xl font-bold tabular-nums text-brand sm:text-3xl">
                  {review.score}
                </span>
                <span className="mt-0.5 text-[0.7rem] font-semibold tracking-[0.12em] text-muted">
                  /10
                </span>
              </span>
              <span className="min-w-0 flex-1 pt-0.5">
                <span className="block font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {review.name}
                </span>
                <span className="mt-2 block text-base leading-relaxed text-pretty text-muted sm:text-lg">
                  {review.text}
                </span>
              </span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label={nextLabel}
          className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-ivory text-ink shadow-card transition hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand sm:size-11"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>

      <div className="mt-4 flex justify-center gap-1.5" aria-hidden>
        {reviews.map((item, i) => (
          <span
            key={`${item.name}-${item.text}-dot`}
            className={cn(
              "h-1.5 w-1.5 rounded-full transition-colors duration-300",
              i === index ? "bg-brand" : "bg-ink/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="M15 6 9 12l6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path
        d="m9 6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
