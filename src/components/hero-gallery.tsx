import Image from "next/image";

import { heroImage } from "@/lib/site";

export function HeroGallery({
  alt,
  caption,
}: {
  alt: string;
  caption: string;
}) {
  return (
    <figure className="rise rise-3 relative aspect-[16/10] overflow-hidden rounded-[1.25rem] sm:aspect-[16/9] lg:aspect-auto lg:min-h-full lg:rounded-none">
      <Image
        src={heroImage}
        alt={alt}
        fill
        preload
        quality={100}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 z-20 hidden bg-gradient-to-t from-ink/70 to-transparent px-5 pt-16 pb-5 lg:block">
        <span className="inline-flex rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-ink shadow-sm">
          {caption}
        </span>
      </figcaption>
    </figure>
  );
}
