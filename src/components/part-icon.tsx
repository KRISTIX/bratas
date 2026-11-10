import type { ReactNode } from "react";

import type { PartCategoryId } from "@/lib/site";

const paths: Record<PartCategoryId, ReactNode> = {
  lights: (
    <>
      <path d="M9 10.5h6" />
      <path d="M10 7.5h4l1.5 3v2.5a2.5 2.5 0 0 1-5 0V10.5L10 7.5Z" />
      <path d="M8.5 16.5h7" />
      <path d="M12 13v3.5" />
    </>
  ),
  body: (
    <>
      <path d="M5.5 14.5h13" />
      <path d="M7 14.5V10l2.2-3.5h5.6L17 10v4.5" />
      <path d="M8.2 14.5a1.3 1.3 0 1 0 0.01 0Z" />
      <path d="M15.8 14.5a1.3 1.3 0 1 0 0.01 0Z" />
      <path d="M9.5 10.5h5" />
    </>
  ),
  engines: (
    <>
      <rect x="7" y="8" width="10" height="8" rx="1.5" />
      <path d="M9 8V6.5h6V8" />
      <path d="M7 11H5.5" />
      <path d="M18.5 11H17" />
      <path d="M10 12h4" />
      <path d="M12 16v1.5" />
    </>
  ),
  mirrors: (
    <>
      <rect x="8" y="6.5" width="8" height="11" rx="3.5" />
      <path d="M10 9.5h4" />
      <path d="M12 17.5v-1" />
    </>
  ),
  electronics: (
    <>
      <rect x="7" y="7.5" width="10" height="9" rx="1.5" />
      <path d="M9.5 10.5h5" />
      <path d="M9.5 13.5h5" />
      <path d="M10 7.5V6" />
      <path d="M14 7.5V6" />
      <path d="M10 16.5v1.5" />
      <path d="M14 16.5v1.5" />
    </>
  ),
  suspension: (
    <>
      <path d="M7 8h10" />
      <path d="M8.5 8v3.5l1.5 1.5v4" />
      <path d="M15.5 8v3.5L14 13v4" />
      <path d="M10 11.5h4" />
      <circle cx="10" cy="17.5" r="1.2" />
      <circle cx="14" cy="17.5" r="1.2" />
    </>
  ),
  interior: (
    <>
      <path d="M7.5 16.5V11l2-3h5l2 3v5.5" />
      <path d="M7.5 13h9" />
      <path d="M9.5 16.5v-2h5v2" />
      <path d="M12 8V7" />
    </>
  ),
  wheels: (
    <>
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 5.5v2.2" />
      <path d="M12 16.3v2.2" />
      <path d="M5.5 12h2.2" />
      <path d="M16.3 12h2.2" />
    </>
  ),
};

export function PartIcon({
  id,
  className,
}: {
  id: PartCategoryId;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[id]}
    </svg>
  );
}
