import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { posts, categories } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Sleep & Relationship Blog — SleepTwo",
  description:
    "Expert articles on couples sleep tracking, sleep science, relationship health, HRV, and Apple Watch sleep data. Improve your sleep and your relationship with SleepTwo.",
  alternates: { canonical: "https://sleeptwo.app/blog" },
  openGraph: {
    title: "Sleep & Relationship Blog — SleepTwo",
    description:
      "Expert articles on couples sleep, relationship science, HRV, and Apple Watch tracking.",
    url: "https://sleeptwo.app/blog",
    type: "website",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Relationship Science": "var(--pb)",
  "Sleep Science": "var(--pa)",
  "Apple Watch": "#0A84FF",
  "Relationship Tips": "var(--pb)",
  "Health & HRV": "#30D158",
  "Sleep Tips": "var(--pa)",
  "App Reviews": "#FF9F0A",
  Technology: "#64D2FF",
  "SleepTwo Guide": "var(--pa)",
  "Sleep Issues": "#FF6B6B",
  "Life Stages": "#FF9F0A",
};

function getCategoryColor(cat: string) {
  return CATEGORY_COLORS[cat] ?? "var(--muted)";
}

export default function BlogPage() {
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <Nav />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Header */}
        <section
          className="relative pt-32 pb-16 px-6 text-center overflow-hidden"
        >
          <div
            className="ambient"
            style={{
              width: 600,
              height: 400,
              background: "var(--pa)",
              top: -100,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: "var(--pa)" }}
          >
            Sleep &amp; Relationships
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text)" }}
          >
            The{" "}
            <span className="grad-text">SleepTwo</span> Blog
          </h1>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Science-backed insights on couples&apos; sleep, relationship health,
            HRV, and everything in between.
          </p>
        </section>

        {/* Category pills */}
        <div className="px-6 pb-8">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: `${getCategoryColor(cat)}22`,
                  color: getCategoryColor(cat),
                  border: `1px solid ${getCategoryColor(cat)}44`,
                }}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Featured post */}
        <section className="px-6 pb-12">
          <div className="max-w-6xl mx-auto">
            <Link
              href={`/blog/${featured.slug}`}
              className="group block rounded-3xl overflow-hidden glass hover:border-white/20 transition-all duration-300"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto min-h-64">
                  <Image
                    src={featured.imageUrl}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: `${getCategoryColor(featured.category)}22`,
                        color: getCategoryColor(featured.category),
                        border: `1px solid ${getCategoryColor(featured.category)}44`,
                      }}
                    >
                      {featured.category}
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: "var(--muted)" }}
                    >
                      {featured.readTime} min read
                    </span>
                  </div>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors"
                    style={{ color: "var(--text)" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span
                      className="text-sm font-semibold grad-text"
                    >
                      Read article
                    </span>
                    <span className="grad-text">→</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Post grid */}
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span
                      className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{
                        background: `${getCategoryColor(post.category)}33`,
                        color: getCategoryColor(post.category),
                        border: `1px solid ${getCategoryColor(post.category)}55`,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3
                      className="text-base font-semibold mb-2 leading-snug group-hover:text-white transition-colors"
                      style={{ color: "var(--text)" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed flex-1 mb-4"
                      style={{ color: "var(--muted)" }}
                    >
                      {post.description.slice(0, 100)}
                      {post.description.length > 100 ? "…" : ""}
                    </p>
                    <div className="flex items-center justify-between">
                      <span
                        className="text-xs"
                        style={{ color: "var(--muted)" }}
                      >
                        {post.readTime} min read
                      </span>
                      <span className="text-xs font-semibold grad-text opacity-0 group-hover:opacity-100 transition-opacity">
                        Read →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="px-6 pb-24">
          <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-12" style={{ border: "1px solid var(--border)" }}>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>
              Ready to track sleep together?
            </h2>
            <p className="mb-8" style={{ color: "var(--muted)" }}>
              Download SleepTwo free and wake up to your first compatibility score tomorrow.
            </p>
            <a
              href="https://apps.apple.com/app/sleeptwo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white grad-bg"
            >
              Download on the App Store
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
