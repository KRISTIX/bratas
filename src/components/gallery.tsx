"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { gallery, type Photo } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const active: Photo | null = index === null ? null : gallery[index];

  useEffect(() => {
    if (index === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        setIndex((current) =>
          current === null ? current : (current + 1) % gallery.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setIndex((current) =>
          current === null
            ? current
            : (current - 1 + gallery.length) % gallery.length,
        );
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  function step(direction: -1 | 1) {
    setIndex((current) => {
      if (current === null) return current;
      return (current + direction + gallery.length) % gallery.length;
    });
  }

  return (
    <>
      <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        {gallery.map((photo, photoIndex) => (
          <li key={photo.src} className={cn(photoIndex === 0 && "col-span-2")}>
            <button
              type="button"
              className="group block w-full border border-line bg-white text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              onClick={() => setIndex(photoIndex)}
            >
              <span
                className={cn(
                  "relative block overflow-hidden bg-paper",
                  photoIndex === 0 ? "aspect-[16/10]" : "aspect-[4/3]",
                )}
              >
                <Image
                  src={photo.src}
                  alt=""
                  fill
                  sizes={
                    photoIndex === 0
                      ? "(min-width: 768px) 50vw, 100vw"
                      : "(min-width: 768px) 25vw, 50vw"
                  }
                  className="object-cover transition duration-500 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </span>
              <span className="block px-3 py-2.5 text-sm font-semibold">
                {photo.caption}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog
        open={index !== null}
        onOpenChange={(open) => {
          if (!open) setIndex(null);
        }}
      >
        <DialogContent className="overflow-hidden">
          {active && index !== null ? (
            <div>
              <div className="relative bg-ink">
                <Image
                  src={active.src}
                  alt={active.alt}
                  width={active.width}
                  height={active.height}
                  className="max-h-[72vh] w-full object-contain"
                />
                <DialogClose className="absolute top-3 right-3 bg-white px-3 py-1.5 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand">
                  Uždaryti
                </DialogClose>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3">
                <div>
                  <DialogTitle>{active.caption}</DialogTitle>
                  <DialogDescription className="mt-0.5">
                    {index + 1} / {gallery.length}
                  </DialogDescription>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="h-10 border border-line px-3 text-sm font-semibold hover:bg-paper"
                    onClick={() => step(-1)}
                  >
                    Ankstesnė
                  </button>
                  <button
                    type="button"
                    className="h-10 border border-line px-3 text-sm font-semibold hover:bg-paper"
                    onClick={() => step(1)}
                  >
                    Kita
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
