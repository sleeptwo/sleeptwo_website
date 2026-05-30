/**
 * Merged post translation lookup.
 * Falls back to English if a slug isn't in the translation table.
 */
import { zhHant118 } from "./zh-hant-1-18";
import { zhHant1936 } from "./zh-hant-19-36";
import { zhHant3752 } from "./zh-hant-37-52";
import { zhHans118 } from "./zh-hans-1-18";
import { zhHans1936 } from "./zh-hans-19-36";
import { zhHans3752 } from "./zh-hans-37-52";

export type PostTranslation = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

const zhHantAll: PostTranslation[] = [
  ...(zhHant118 as unknown as PostTranslation[]),
  ...(zhHant1936 as unknown as PostTranslation[]),
  ...(zhHant3752 as unknown as PostTranslation[]),
];

const zhHansAll: PostTranslation[] = [
  ...(zhHans118 as unknown as PostTranslation[]),
  ...(zhHans1936 as unknown as PostTranslation[]),
  ...(zhHans3752 as unknown as PostTranslation[]),
];

export function getPostTranslation(
  slug: string,
  locale: string
): PostTranslation | undefined {
  if (locale === "zh-Hant") return zhHantAll.find((p) => p.slug === slug);
  if (locale === "zh-Hans") return zhHansAll.find((p) => p.slug === slug);
  return undefined;
}
