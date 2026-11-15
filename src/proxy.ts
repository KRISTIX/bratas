import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales, negotiateLocale } from "@/lib/i18n";

const removedLocales = ["de", "pl"] as const;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  for (const removed of removedLocales) {
    if (pathname === `/${removed}` || pathname.startsWith(`/${removed}/`)) {
      const rest = pathname.slice(removed.length + 1);
      request.nextUrl.pathname = `/${defaultLocale}${rest}`;
      return NextResponse.redirect(request.nextUrl);
    }
  }

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );

  if (pathnameHasLocale) return;

  const locale = negotiateLocale(request.headers.get("accept-language"));
  const suffix = pathname === "/" ? "" : pathname;
  request.nextUrl.pathname = `/${locale}${suffix}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
