import { osmEmbed } from "@/lib/site";

export function MapEmbed({ title }: { title: string }) {
  return (
    <iframe
      title={title}
      src={osmEmbed}
      className="h-full min-h-[16rem] w-full border-0 lg:min-h-[22rem]"
      loading="eager"
      referrerPolicy="strict-origin-when-cross-origin"
    />
  );
}
