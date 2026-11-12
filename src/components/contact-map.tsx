import { mapsEmbedUrl, mapsOpenUrl } from "@/lib/site";

export function ContactMap({
  title,
  openLabel,
}: {
  title: string;
  openLabel: string;
}) {
  return (
    <div className="relative min-h-[18rem] w-full bg-paper sm:min-h-[22rem] lg:min-h-full">
      <iframe
        title={title}
        src={mapsEmbedUrl}
        className="absolute inset-0 h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
      <a
        href={mapsOpenUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 bottom-3 z-10 inline-flex rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm ring-1 ring-black/5 transition hover:bg-white"
      >
        {openLabel}
      </a>
    </div>
  );
}
