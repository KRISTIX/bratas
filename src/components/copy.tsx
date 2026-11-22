import { Fragment } from "react";

const BRAND = "Mercedes-Benz";

/** Keeps the brand name on one line so the hyphen is not a break point. */
export function BrandText({ text }: { text: string }) {
  const parts = text.split(BRAND);
  if (parts.length === 1) return text;

  return parts.map((part, index) => (
    <Fragment key={index}>
      {index > 0 ? (
        <span className="whitespace-nowrap">{BRAND}</span>
      ) : null}
      {part}
    </Fragment>
  ));
}

/**
 * Newline-separated copy. Each line stays intact on small screens so every
 * language occupies the same number of lines; from `lg` it reads as one sentence.
 */
export function LockedLines({ text }: { text: string }) {
  const lines = text.split("\n");

  return lines.map((line, index) => (
    <span key={index}>
      {index > 0 ? <br className="lg:hidden" /> : null}
      {index > 0 ? " " : null}
      <span className="whitespace-nowrap lg:whitespace-normal">
        <BrandText text={line} />
      </span>
    </span>
  ));
}

/** Always two lines. The newline is the shared break, in every language. */
export function TwoLines({ text }: { text: string }) {
  const [first, second] = text.split("\n");

  return (
    <>
      <span className="block whitespace-nowrap">{first}</span>
      {second ? <span className="block whitespace-nowrap">{second}</span> : null}
    </>
  );
}
