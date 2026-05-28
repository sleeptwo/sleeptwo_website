import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoonButton from "@/components/ComingSoonButton";
import { posts, getPost } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  // Generate keywords from category + title words for AEO
  const categoryKeywords: Record<string, string[]> = {
    "Sleep Science": ["sleep science", "sleep research", "sleep stages", "couples sleep"],
    "Relationship Science": ["relationship health", "couples sleep", "sleep and relationships", "partner sleep"],
    "Apple Watch & Tech": ["Apple Watch sleep", "sleep tracking", "watchOS", "HealthKit"],
    "HRV & Health": ["HRV", "heart rate variability", "nervous system", "sleep health"],
    "Sleep Tips": ["sleep tips", "better sleep", "sleep hygiene", "sleep improvement"],
    "SleepTwo Guide": ["SleepTwo", "sleep compatibility score", "couples sleep app"],
    "Relationship Tips": ["relationship tips", "couples", "partner sleep", "sleep habits"],
    "Life Stages": ["sleep changes", "life stages", "sleep phases"],
    "App Reviews": ["sleep app", "Apple Watch app", "sleep tracker review"],
    "Sleep Issues": ["sleep problems", "insomnia", "sleep disorders", "restless sleep"],
    "Technology": ["sleep technology", "wearables", "sleep tracking technology"],
  };

  return {
    title: post.title,
    description: post.description,
    keywords: [
      ...(categoryKeywords[post.category] ?? []),
      "SleepTwo",
      "couples sleep tracking",
    ],
    alternates: { canonical: `https://sleeptwo.app/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://sleeptwo.app/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      siteName: "SleepTwo",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const htmlContent = markdownToHtml(post.content);

  // Category-specific research sources for E-E-A-T signals
  const researchSources: Record<string, { title: string; url: string; source: string }[]> = {
    "Sleep Science": [
      { title: "Sleep Deprivation and Deficiency", url: "https://www.nhlbi.nih.gov/health/sleep-deprivation", source: "NIH / NHLBI" },
      { title: "Stages of Sleep", url: "https://www.sleepfoundation.org/stages-of-sleep", source: "Sleep Foundation" },
      { title: "How Much Sleep Do We Really Need?", url: "https://www.sleepfoundation.org/how-sleep-works/how-much-sleep-do-we-really-need", source: "Sleep Foundation" },
    ],
    "Relationship Science": [
      { title: "Sleep and Relationship Functioning", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4826698/", source: "PubMed Central" },
      { title: "How Sleep Affects Your Relationships", url: "https://www.sleepfoundation.org/sleep-news/how-sleep-affects-relationships", source: "Sleep Foundation" },
      { title: "Sleep and Emotions", url: "https://www.apa.org/topics/sleep/why", source: "American Psychological Association" },
    ],
    "HRV & Health": [
      { title: "Heart Rate Variability Overview", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5624990/", source: "PubMed Central" },
      { title: "Healthy Sleep", url: "https://www.nhlbi.nih.gov/health/sleep", source: "NIH / NHLBI" },
      { title: "Sleep and Heart Health", url: "https://www.sleepfoundation.org/physical-health/sleep-and-heart-health", source: "Sleep Foundation" },
    ],
    "Apple Watch & Tech": [
      { title: "Consumer Sleep Technology", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6934098/", source: "PubMed Central" },
      { title: "Wearable Sleep Trackers", url: "https://www.sleepfoundation.org/sleep-topics/sleep-trackers", source: "Sleep Foundation" },
      { title: "Sleep Tracking Accuracy", url: "https://www.sleepfoundation.org/sleep-topics/sleep-trackers", source: "Sleep Foundation" },
    ],
    "Sleep Tips": [
      { title: "Sleep Hygiene", url: "https://www.sleepfoundation.org/sleep-hygiene", source: "Sleep Foundation" },
      { title: "Healthy Sleep Tips", url: "https://www.nhlbi.nih.gov/health/sleep/good-sleep-habits", source: "NIH / NHLBI" },
      { title: "Sleep Health", url: "https://www.cdc.gov/sleep/index.html", source: "CDC" },
    ],
    "SleepTwo Guide": [
      { title: "Sleeping with a Partner", url: "https://www.sleepfoundation.org/sleep-topics/sleeping-with-partner", source: "Sleep Foundation" },
      { title: "Sleep and Relationship Quality", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4826698/", source: "PubMed Central" },
      { title: "Healthy Sleep", url: "https://www.nhlbi.nih.gov/health/sleep", source: "NIH / NHLBI" },
    ],
    "Relationship Tips": [
      { title: "Sleep and Relationship Functioning", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4826698/", source: "PubMed Central" },
      { title: "Sleep and Emotions", url: "https://www.apa.org/topics/sleep/why", source: "American Psychological Association" },
      { title: "How Sleep Affects Your Relationships", url: "https://www.sleepfoundation.org/sleep-news/how-sleep-affects-relationships", source: "Sleep Foundation" },
    ],
    "Life Stages": [
      { title: "Sleep Across the Lifespan", url: "https://www.sleepfoundation.org/how-sleep-works/sleep-facts-statistics", source: "Sleep Foundation" },
      { title: "Sleep and Older Adults", url: "https://www.nia.nih.gov/health/sleep/good-nights-sleep", source: "NIH / National Institute on Aging" },
      { title: "Healthy Sleep", url: "https://www.nhlbi.nih.gov/health/sleep", source: "NIH / NHLBI" },
    ],
    "Sleep Issues": [
      { title: "Insomnia", url: "https://www.sleepfoundation.org/insomnia", source: "Sleep Foundation" },
      { title: "Sleep Disorders", url: "https://www.nhlbi.nih.gov/health/sleep-disorders", source: "NIH / NHLBI" },
      { title: "Snoring and Sleep", url: "https://www.sleepfoundation.org/snoring", source: "Sleep Foundation" },
    ],
    "App Reviews": [
      { title: "Consumer Sleep Technology", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6934098/", source: "PubMed Central" },
      { title: "Wearable Sleep Trackers", url: "https://www.sleepfoundation.org/sleep-topics/sleep-trackers", source: "Sleep Foundation" },
      { title: "Healthy Sleep", url: "https://www.nhlbi.nih.gov/health/sleep", source: "NIH / NHLBI" },
    ],
    Technology: [
      { title: "Consumer Sleep Technology", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6934098/", source: "PubMed Central" },
      { title: "Wearable Sleep Trackers", url: "https://www.sleepfoundation.org/sleep-topics/sleep-trackers", source: "Sleep Foundation" },
      { title: "Sleep Health", url: "https://www.cdc.gov/sleep/index.html", source: "CDC" },
    ],
  };

  const sources = researchSources[post.category] ?? researchSources["Sleep Tips"];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://sleeptwo.app/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: {
      "@type": "ImageObject",
      url: post.imageUrl,
      width: 1080,
      height: 720,
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: [
      {
        "@type": "Organization",
        "@id": "https://sleeptwo.app/#organization",
        name: "SleepTwo",
        url: "https://sleeptwo.app",
      },
      {
        "@type": "Person",
        name: "SleepTwo Team",
        url: "https://sleeptwo.app/about",
      },
    ],
    publisher: {
      "@type": "Organization",
      "@id": "https://sleeptwo.app/#organization",
      name: "SleepTwo",
      url: "https://sleeptwo.app",
      logo: {
        "@type": "ImageObject",
        url: "https://sleeptwo.app/icon.png",
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sleeptwo.app/blog/${post.slug}`,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": "https://sleeptwo.app/blog",
      name: "SleepTwo Blog",
      publisher: {
        "@id": "https://sleeptwo.app/#organization",
      },
    },
    about: {
      "@type": "Thing",
      name: post.category,
    },
    articleSection: post.category,
    inLanguage: "en",
    timeRequired: `PT${post.readTime}M`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sleeptwo.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://sleeptwo.app/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://sleeptwo.app/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Hero image */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(7,7,15,0.3) 0%, rgba(7,7,15,0.85) 100%)",
            }}
          />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl mx-auto px-6 pb-10 w-full">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-sm mb-4 hover:text-white transition-colors"
                style={{ color: "var(--muted)" }}
              >
                ← All articles
              </Link>
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(124,58,237,0.25)",
                    color: "var(--pa)",
                    border: "1px solid rgba(124,58,237,0.4)",
                  }}
                >
                  {post.category}
                </span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  {post.readTime} min read
                </span>
                <span className="text-xs" style={{ color: "var(--muted)" }}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
              <h1
                className="text-2xl md:text-4xl font-bold leading-tight"
                style={{ color: "var(--text)" }}
              >
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article content */}
        <article className="max-w-3xl mx-auto px-6 py-12">

          {/* Author byline */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, var(--pa), var(--pb))" }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6a5 5 0 0 1 10 0H3z" fill="white"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                SleepTwo Team
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })} · {post.readTime} min read
              </p>
            </div>
          </div>

          {/* Key insight box — answer-first for AI extraction */}
          <div
            className="rounded-2xl p-5 mb-8"
            style={{
              background: "rgba(124,58,237,0.07)",
              borderLeft: "3px solid var(--pa)",
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--pa)" }}>
              Key insight
            </p>
            <p className="leading-relaxed" style={{ color: "var(--text)" }}>
              {post.description}
            </p>
          </div>

          <div
            className="prose-sleeptwo"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

          {/* Research sources */}
          <div
            className="mt-12 rounded-2xl p-6"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--muted)" }}
            >
              Research &amp; further reading
            </p>
            <ul className="space-y-3">
              {sources.map((s) => (
                <li key={s.url} className="flex items-start gap-2 text-sm">
                  <svg className="flex-shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="var(--pa)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 transition-colors hover:text-white"
                      style={{ color: "var(--muted)" }}
                    >
                      {s.title}
                    </a>
                    <span className="ml-1.5 text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                      — {s.source}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Download CTA */}
          <div
            className="mt-16 rounded-3xl p-10 text-center glass"
            style={{ border: "1px solid var(--border)" }}
          >
            <div className="flex justify-center mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/icon.png" alt="SleepTwo" className="w-16 h-16 rounded-2xl" />
            </div>
            <h3
              className="text-xl font-bold mb-2"
              style={{ color: "var(--text)" }}
            >
              Sleep better. Together.
            </h3>
            <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>
              SleepTwo is the only sleep app built for couples. Track your sleep
              via Apple Watch, get a nightly compatibility score, and send
              goodnight messages — all without manual logging.
            </p>
            <ComingSoonButton className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white grad-bg transition-opacity hover:opacity-90">
              Download Free on the App Store
            </ComingSoonButton>
          </div>

          {/* Back to blog */}
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="text-sm font-semibold hover:text-white transition-colors"
              style={{ color: "var(--pa)" }}
            >
              ← Back to all articles
            </Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
