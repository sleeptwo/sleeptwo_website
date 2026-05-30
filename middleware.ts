import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isValidLocale } from "@/lib/i18n";

// Paths that should NOT be locale-prefixed
const PUBLIC_PATHS = ["/api", "/_next", "/favicon", "/icon", "/robots", "/sitemap", "/opengraph", "/social"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static assets and API routes
  if (PUBLIC_PATHS.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  // Already has a valid locale prefix → pass through
  const seg = pathname.split("/")[1];
  if (isValidLocale(seg)) return NextResponse.next();

  // Detect preferred locale from Accept-Language header
  const acceptLang = request.headers.get("accept-language") ?? "";
  const preferred = acceptLang
    .split(",")
    .map((s) => s.split(";")[0].trim().toLowerCase())
    .find((lang) =>
      locales.some((l) => lang === l.toLowerCase() || lang.startsWith(l.split("-")[0]))
    );

  let locale = defaultLocale;
  if (preferred) {
    if (preferred.includes("zh-hant") || preferred.includes("zh-tw") || preferred.includes("zh-hk")) {
      locale = "zh-Hant";
    } else if (preferred.includes("zh") || preferred.includes("zh-hans") || preferred.includes("zh-cn")) {
      locale = "zh-Hans";
    }
  }

  // Redirect to locale-prefixed URL
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|robots.txt|sitemap.xml).*)"],
};
