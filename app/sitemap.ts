import type { MetadataRoute } from "next";
import { posts } from "@/lib/posts";

const BASE = "https://sleeptwo.app";
const LOCALES = ["en", "zh-Hant", "zh-Hans"] as const;

type SitemapEntry = MetadataRoute.Sitemap[number];

/** Build a set of locale-alternates entries for a given path (without locale prefix). */
function localeEntries(
  path: string,
  opts: { changeFrequency?: SitemapEntry["changeFrequency"]; priority?: number; lastModified?: Date }
): SitemapEntry[] {
  const { changeFrequency = "monthly", priority = 0.8, lastModified = new Date() } = opts;

  return LOCALES.map((locale) => ({
    url: `${BASE}/${locale}${path}`,
    lastModified,
    changeFrequency,
    priority,
    // hreflang alternates — tells Google about all language variants of this page
    alternates: {
      languages: Object.fromEntries(
        LOCALES.map((l) => [l === "zh-Hant" ? "zh-TW" : l === "zh-Hans" ? "zh-CN" : l, `${BASE}/${l}${path}`])
      ),
    },
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const postEntries = posts.flatMap((post) =>
    localeEntries(`/blog/${post.slug}`, {
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: new Date(post.publishedAt),
    })
  );

  return [
    // Home
    ...localeEntries("", { changeFrequency: "monthly", priority: 1 }),

    // Blog index
    ...localeEntries("/blog", { changeFrequency: "weekly", priority: 0.9 }),

    // About
    ...localeEntries("/about", { changeFrequency: "monthly", priority: 0.8 }),

    // Legal (lower priority)
    ...localeEntries("/privacy", { changeFrequency: "yearly", priority: 0.4 }),
    ...localeEntries("/terms", { changeFrequency: "yearly", priority: 0.4 }),

    // Blog posts (all three locale variants each)
    ...postEntries,
  ];
}
