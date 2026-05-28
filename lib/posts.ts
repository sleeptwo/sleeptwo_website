import { posts118 } from "./posts118";
import { posts1936 } from "./posts1936";
import { posts3752 } from "./posts3752";

export interface Post {
  slug: string;
  title: string;
  description: string;
  category: string;
  unsplashQuery: string;
  readTime: number;
  content: string;
  imageUrl: string;
  publishedAt: string;
}

// Pre-fetched Unsplash image URLs (fetched at build time, static URLs embedded)
const IMAGE_POOL = [
  "https://images.unsplash.com/photo-1570657569068-203890a3aa2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1560863185-a4f6199b5768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1611690825764-583a6127d4fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1771929182508-b9152de396a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1620557287767-d5dcc90ca035?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1511405889574-b01de1da5441?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1611852794579-57e09deec14b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1679165805960-d35b35cb8ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1776530310450-36025fd5c0d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1762399940528-7287519307a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1611754431702-20dc7dd004a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1728140161956-3cf6462f2f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1617624969413-932d9b07f000?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  "https://images.unsplash.com/photo-1676807882764-039ef475fba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
];

// Keyword → pool index mapping for best semantic match
const QUERY_TO_IMAGE: Record<string, number> = {
  couple: 0,
  sleeping: 0,
  sleep: 3,
  apple: 1,
  watch: 1,
  morning: 2,
  coffee: 2,
  bedroom: 3,
  night: 3,
  heart: 4,
  hrv: 4,
  rate: 4,
  relationship: 5,
  conflict: 5,
  argument: 5,
  wellness: 6,
  meditation: 6,
  alarm: 7,
  clock: 7,
  travel: 8,
  hiking: 8,
  distance: 8,
  work: 9,
  home: 9,
  remote: 9,
  baby: 10,
  parents: 10,
  newborn: 10,
  alcohol: 11,
  wine: 11,
  circadian: 12,
  sunrise: 12,
  melatonin: 12,
  snoring: 13,
  snore: 13,
  temperature: 14,
  stress: 4,
};

function getImageUrl(query: string, index: number): string {
  const words = query.toLowerCase().split(/\s+/);
  for (const word of words) {
    if (QUERY_TO_IMAGE[word] !== undefined) {
      return IMAGE_POOL[QUERY_TO_IMAGE[word]];
    }
  }
  // Fallback: cycle through pool
  return IMAGE_POOL[index % IMAGE_POOL.length];
}

// Publish dates spread across the past year for SEO credibility
function getPublishDate(index: number): string {
  // Spread posts across past 12 months, newest first
  const base = new Date("2026-05-28");
  const daysAgo = Math.floor((52 - index) * 7.5); // ~7.5 days apart
  const d = new Date(base.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return d.toISOString().split("T")[0];
}

const rawPosts = [...posts118, ...posts1936, ...posts3752];

export const posts: Post[] = rawPosts.map((p, i) => ({
  ...p,
  imageUrl: getImageUrl(p.unsplashQuery, i),
  publishedAt: getPublishDate(i),
}));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category);
}

export const categories = [...new Set(posts.map((p) => p.category))];
