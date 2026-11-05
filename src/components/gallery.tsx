import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
};

export function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
      {items.map((photo) => (
        <li key={photo.src} className="border border-line bg-white">
          <div className="relative aspect-[3/2] overflow-hidden bg-paper">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover"
            />
          </div>
          <p className="px-3 py-2.5 text-sm font-semibold">{photo.caption}</p>
        </li>
      ))}
    </ul>
  );
}
