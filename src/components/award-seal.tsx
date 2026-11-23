"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

export type AwardProof = {
  badge: "medal" | "top";
  title: string;
  figure: string;
  figureLabel: string;
  quote: string;
  body: string;
  seal: string;
  mark: string;
};

const INTERVAL_MS = 4000;

export function AwardShowcase({
  eyebrow,
  proofs,
}: {
  eyebrow: string;
  proofs: AwardProof[];
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (proofs.length < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % proofs.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [proofs.length]);

  return (
    <div className="rounded-[1.75rem] bg-ivory px-5 py-6 shadow-card sm:px-8 sm:py-7 md:px-10 md:py-8">
      <p className="text-xs font-semibold tracking-[0.22em] text-brand">
        {eyebrow}
      </p>
      <div className="mt-4 grid" aria-live="polite">
        {proofs.map((proof, proofIndex) => {
          const active = proofIndex === index;
          return (
            <article
              key={proof.seal}
              aria-hidden={!active}
              className={cn(
                "col-start-1 row-start-1 flex flex-col items-center gap-6 transition-opacity duration-700 ease-out md:flex-row md:items-center md:gap-10",
                active ? "opacity-100" : "pointer-events-none opacity-0",
              )}
            >
              <div className="shrink-0">
                <RoundBadge proof={proof} />
              </div>
              <div className="min-w-0 flex-1 text-center md:text-left">
                <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-end sm:justify-center sm:gap-x-5 md:justify-start">
                  <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                    {proof.title}
                  </h2>
                  <p className="font-display text-4xl font-bold tracking-tight text-brand sm:text-5xl">
                    {proof.figure}
                  </p>
                </div>
                <p className="mt-1 text-sm text-muted sm:text-base">
                  {proof.figureLabel}
                </p>
                <blockquote className="mt-4 border-l-2 border-brand pl-4 text-left text-base leading-relaxed text-pretty max-lg:min-h-[4lh]">
                  {proof.quote}
                </blockquote>
                <p className="mt-3 text-left text-sm text-pretty text-muted max-lg:min-h-[2lh] sm:text-base">
                  {proof.body}
                </p>
              </div>
            </article>
          );
        })}
      </div>
      {proofs.length > 1 ? (
        <div className="mt-5 flex justify-center gap-2 md:justify-start">
          {proofs.map((proof, proofIndex) => (
            <button
              key={proof.seal}
              type="button"
              aria-label={proof.seal}
              aria-current={proofIndex === index ? "true" : undefined}
              onClick={() => setIndex(proofIndex)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                proofIndex === index ? "w-6 bg-brand" : "w-1.5 bg-ink/20",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

function RoundBadge({ proof }: { proof: AwardProof }) {
  return (
    <div className="flex size-36 items-center justify-center overflow-hidden rounded-full bg-white shadow-float sm:size-44">
      {proof.badge === "medal" ? (
        <Image
          src="/awards/strongest-medal.jpg"
          alt={proof.seal}
          width={552}
          height={360}
          className="h-full w-auto max-w-none"
        />
      ) : (
        <TopCompanyBadge label={proof.seal} mark={proof.mark} figure={proof.figure} />
      )}
    </div>
  );
}

function TopCompanyBadge({
  label,
  mark,
  figure,
}: {
  label: string;
  mark: string;
  figure: string;
}) {
  const compact = mark.length > 12;

  return (
    <svg viewBox="0 0 220 220" className="size-full" role="img" aria-label={label}>
      <defs>
        <radialGradient id="top-coin" cx="38%" cy="32%" r="70%">
          <stop offset="0" stopColor="#fff4cf" />
          <stop offset="0.45" stopColor="#e7c56a" />
          <stop offset="1" stopColor="#a97822" />
        </radialGradient>
        <linearGradient id="top-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff8df" />
          <stop offset="0.5" stopColor="#c9963a" />
          <stop offset="1" stopColor="#f3e2ad" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="110" r="108" fill="url(#top-rim)" />
      <circle cx="110" cy="110" r="96" fill="url(#top-coin)" />
      <circle
        cx="110"
        cy="110"
        r="84"
        fill="none"
        stroke="#8d6318"
        strokeOpacity="0.45"
        strokeWidth="1.5"
      />
      <path
        d="M72 82h76v8H72zM74 82l12-24 10 14 14-26 14 26 10-14 12 24z"
        fill="#5c3f10"
      />
      <circle cx="86" cy="58" r="3.2" fill="#5c3f10" />
      <circle cx="110" cy="46" r="3.2" fill="#5c3f10" />
      <circle cx="134" cy="58" r="3.2" fill="#5c3f10" />
      <text
        x="110"
        y="128"
        textAnchor="middle"
        fill="#1a1408"
        fontSize="46"
        fontWeight="700"
        fontFamily="var(--font-outfit), Outfit, sans-serif"
      >
        {figure}
      </text>
      <text
        x="110"
        y="154"
        textAnchor="middle"
        fill="#1a1408"
        fontSize={compact ? 11 : 13}
        letterSpacing={compact ? 0.6 : 1.4}
        fontFamily="var(--font-outfit), Outfit, sans-serif"
      >
        {mark}
      </text>
      <text
        x="110"
        y="176"
        textAnchor="middle"
        fill="#6b4a12"
        fontSize="11"
        letterSpacing="1.8"
        fontFamily="var(--font-outfit), Outfit, sans-serif"
      >
        2026
      </text>
    </svg>
  );
}
