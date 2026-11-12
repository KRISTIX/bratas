import {
  Armchair,
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

const icons: Record<PartCategoryId, LucideIcon> = {
  lights: Spotlight,
  body: CarFront,
  engines: Cog,
  mirrors: Scan,
  electronics: CircuitBoard,
  suspension: Waypoints,
  interior: Armchair,
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
