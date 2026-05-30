import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Allow all crawlers including AI/LLM bots
      { userAgent: "*", allow: "/" },
      // Explicitly allow major AI training and retrieval crawlers (GEO)
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Applebot-Extended", allow: "/" },
      { userAgent: "Googlebot-Extended", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
      { userAgent: "FacebookBot", allow: "/" },
      { userAgent: "YouBot", allow: "/" },
    ],
    sitemap: "https://sleeptwo.app/sitemap.xml",
  };
}
