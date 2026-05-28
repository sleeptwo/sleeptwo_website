import { posts118 } from "./posts118";
import { posts1936 } from "./posts1936";
import { posts3752 } from "./posts3752";
import { POST_IMAGES } from "./post-images";

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

// Fallback image if a slug somehow isn't in the map
const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1771929182508-b9152de396a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

// Publish dates spread across past 12 months for SEO credibility
function getPublishDate(index: number): string {
  const base = new Date("2026-05-28");
  const daysAgo = Math.floor((52 - index) * 7.5);
  const d = new Date(base.getTime() - daysAgo * 24 * 60 * 60 * 1000);
  return d.toISOString().split("T")[0];
}

const rawPosts = [...posts118, ...posts1936, ...posts3752];

export const posts: Post[] = rawPosts.map((p, i) => ({
  ...p,
  imageUrl: POST_IMAGES[p.slug] ?? FALLBACK_IMAGE,
  publishedAt: getPublishDate(i),
}));

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter((p) => p.category === category);
}

export const categories = [...new Set(posts.map((p) => p.category))];
