export const locales = ["en", "zh-Hant", "zh-Hans"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Extract the locale segment from a pathname like /zh-Hant/blog */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/")[1];
  return isValidLocale(seg) ? seg : defaultLocale;
}

/** Strip the locale prefix from a path, e.g. /zh-Hant/blog → /blog */
export function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1];
  if (isValidLocale(seg)) return pathname.slice(seg.length + 1) || "/";
  return pathname;
}

/** Build a locale-prefixed path, e.g. (zh-Hans, /blog) → /zh-Hans/blog */
export function localePath(locale: Locale, path = "/"): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean === "/" ? "" : clean}`;
}

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  "zh-Hant": "繁",
  "zh-Hans": "简",
};
