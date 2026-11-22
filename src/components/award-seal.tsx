import Image from "next/image";

export function AwardSeal({ label }: { label: string }) {
  return (
    <Image
      src="/awards/strongest-medal.jpg"
      alt={label}
      width={552}
      height={360}
      className="h-36 w-auto sm:h-44"
    />
  );
}
