import {
  CarFront,
  CircleDot,
  CircuitBoard,
  Cog,
  type LucideIcon,
  Scan,
  Spotlight,
  Waypoints,
} from "lucide-react";

import type { PartCategoryId } from "@/lib/site";

/** Car cabin seat — automotive interior, not furniture. */
function CarSeatIcon({
  className,
  strokeWidth = 1.75,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 18v-5.5a2.5 2.5 0 0 1 2.5-2.5h5A2.5 2.5 0 0 1 17 12.5V18" />
      <path d="M6 18h12" />
      <path d="M8 10.5V7.2A2.2 2.2 0 0 1 10.2 5h3.6A2.2 2.2 0 0 1 16 7.2v3.3" />
      <path d="M9 18v2" />
      <path d="M15 18v2" />
    </svg>
  );
}

const icons: Record<PartCategoryId, LucideIcon | typeof CarSeatIcon> = {
  lights: Spotlight,
  body: CarFront,
  engines: Cog,
  mirrors: Scan,
  electronics: CircuitBoard,
  suspension: Waypoints,
  interior: CarSeatIcon,
  wheels: CircleDot,
};

export function PartIcon({
  id,
  className,
}: {
  id: PartCategoryId;
  className?: string;
}) {
  const Icon = icons[id];
  return <Icon className={className} strokeWidth={1.75} aria-hidden />;
}
