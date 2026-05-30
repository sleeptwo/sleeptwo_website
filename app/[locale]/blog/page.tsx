import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getT } from "@/lib/translations";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ComingSoonButton from "@/components/ComingSoonButton";
import { getLocalizedPosts, categories } from "@/lib/posts";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh-Hant" }, { locale: "zh-Hans" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const tr = getT(locale);
  const canonical = `https://sleeptwo.app/${locale}/blog`;
  return {
    title: `${tr.blog.title} — SleepTwo`,
    description: tr.blog.desc,
    alternates: {
      canonical,
      languages: {
        en: "https://sleeptwo.app/en/blog",
        "zh-Hant": "https://sleeptwo.app/zh-Hant/blog",
        "zh-Hans": "https://sleeptwo.app/zh-Hans/blog",
      },
    },
    openGraph: { title: tr.blog.title, description: tr.blog.desc, url: canonical, type: "website" },
  };
}

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

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const tr = getT(locale);
  const localizedPosts = getLocalizedPosts(locale);
  const featured = localizedPosts[0];
  const rest = localizedPosts.slice(1);

  return (
    <>
      <Nav locale={locale} t={tr.nav} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Header */}
        <section className="relative pt-32 pb-16 px-6 text-center overflow-hidden">
          <div className="ambient" style={{ width: 600, height: 400, background: "var(--pa)", top: -100, left: "50%", transform: "translateX(-50%)" }} />
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--pa)" }}>
            {tr.blog.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
            {tr.blog.title}
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            {tr.blog.desc}
          </p>
        </section>

        {/* Category pills */}
        <div className="px-6 pb-8">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: `${getCategoryColor(cat)}22`, color: getCategoryColor(cat), border: `1px solid ${getCategoryColor(cat)}44` }}
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
              href={`/${locale}/blog/${featured.slug}`}
              className="group block rounded-3xl overflow-hidden glass hover:border-white/20 transition-all duration-300"
              style={{ border: "1px solid var(--border)" }}
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto min-h-64">
                  <Image src={featured.imageUrl} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" priority />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: `${getCategoryColor(featured.category)}22`, color: getCategoryColor(featured.category), border: `1px solid ${getCategoryColor(featured.category)}44` }}>
                      {featured.category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--muted)" }}>
                      {featured.readTime} {tr.blog.minRead}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors" style={{ color: "var(--text)" }}>
                    {featured.title}
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                    {featured.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold grad-text">{tr.blog.readMore}</span>
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
                  href={`/${locale}/blog/${post.slug}`}
                  className="group glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image src={post.imageUrl} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full text-xs font-medium" style={{ background: `${getCategoryColor(post.category)}33`, color: getCategoryColor(post.category), border: `1px solid ${getCategoryColor(post.category)}55`, backdropFilter: "blur(8px)" }}>
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-base font-semibold mb-2 leading-snug group-hover:text-white transition-colors" style={{ color: "var(--text)" }}>
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: "var(--muted)" }}>
                      {post.description.slice(0, 100)}{post.description.length > 100 ? "…" : ""}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs" style={{ color: "var(--muted)" }}>{post.readTime} {tr.blog.minRead}</span>
                      <span className="text-xs font-semibold grad-text opacity-0 group-hover:opacity-100 transition-opacity">{tr.blog.readMore} →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-2xl mx-auto text-center glass rounded-3xl p-12" style={{ border: "1px solid var(--border)" }}>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--text)" }}>{tr.download.h1}</h2>
            <p className="mb-8" style={{ color: "var(--muted)" }}>{tr.download.desc.split("\n")[1]}</p>
            <ComingSoonButton className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white grad-bg transition-opacity hover:opacity-90">
              {tr.download.cta}
            </ComingSoonButton>
          </div>
        </section>
      </main>
      <Footer locale={locale} t={tr.footer} />
    </>
  );
}
