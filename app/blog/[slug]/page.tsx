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

  return {
    title: `${post.title} — SleepTwo Blog`,
    description: post.description,
    alternates: { canonical: `https://sleeptwo.app/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://sleeptwo.app/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: [{ url: post.imageUrl, width: 1080, height: 720 }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.imageUrl],
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.imageUrl,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "SleepTwo",
      url: "https://sleeptwo.app",
    },
    publisher: {
      "@type": "Organization",
      name: "SleepTwo",
      url: "https://sleeptwo.app",
      logo: {
        "@type": "ImageObject",
        url: "https://sleeptwo.app/icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sleeptwo.app/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          <p
            className="text-lg leading-relaxed mb-8 font-medium"
            style={{ color: "var(--muted)" }}
          >
            {post.description}
          </p>

          <div
            className="prose-sleeptwo"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />

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
