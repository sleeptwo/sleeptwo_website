import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { isValidLocale } from "@/lib/i18n";
import { getT } from "@/lib/translations";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
  const canonical = `https://sleeptwo.app/en/about`;
  return {
    title: `${tr.about.headline} ${tr.about.headlineGrad} — SleepTwo`,
    description: tr.about.intro,
    alternates: {
      canonical,
      languages: {
        en: "https://sleeptwo.app/en/about",
        "zh-Hant": "https://sleeptwo.app/zh-Hant/about",
        "zh-Hans": "https://sleeptwo.app/zh-Hans/about",
      },
    },
    openGraph: {
      title: `About SleepTwo — ${tr.about.headline} ${tr.about.headlineGrad}`,
      description: tr.about.intro,
      url: `https://sleeptwo.app/${locale}/about`,
      type: "website",
    },
  };
}

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://sleeptwo.app/about",
  name: "About SleepTwo",
  url: "https://sleeptwo.app/about",
  description: "SleepTwo is a couples sleep tracking app built by a small independent team in Hong Kong.",
  about: { "@id": "https://sleeptwo.app/#organization" },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sleeptwo.app/#organization",
  name: "SleepTwo",
  url: "https://sleeptwo.app",
  logo: { "@type": "ImageObject", url: "https://sleeptwo.app/icon.png" },
  foundingDate: "2026",
  description: "SleepTwo is an independent app studio based in Hong Kong focused on helping couples improve their shared sleep health through Apple Watch.",
  email: "support@sleeptwo.app",
  areaServed: "Worldwide",
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const tr = getT(locale);
  const a = tr.about;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      <Nav locale={locale} t={tr.nav} />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Header */}
        <div className="relative pt-32 pb-12 px-6 overflow-hidden">
          <div
            className="ambient"
            style={{ width: 500, height: 300, background: "var(--pa)", top: -80, left: "50%", transform: "translateX(-50%)" }}
          />
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--pa)" }}>
              {a.eyebrow}
            </p>
            <h1 className="text-4xl font-bold mb-4" style={{ color: "var(--text)" }}>
              {a.headline}<br />
              <span className="grad-text">{a.headlineGrad}</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              {a.intro}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 pb-24 space-y-12">

          {/* The problem */}
          <div className="glass rounded-3xl p-8 md:p-10" style={{ border: "1px solid var(--border)" }}>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>{a.problemTitle}</h2>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>{a.problem1}</p>
              <p>{a.problem2}</p>
              <p>{a.problem3}</p>
            </div>
          </div>

          {/* The app */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>{a.whatTitle}</h2>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>{a.what1}</p>
              <p>{a.what2}</p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {a.values.map((v) => (
              <div key={v.title} className="glass rounded-2xl p-6" style={{ border: "1px solid var(--border)" }}>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--text)" }}>{v.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{v.body}</p>
              </div>
            ))}
          </div>

          {/* Mission */}
          <div
            className="rounded-3xl p-8 md:p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(219,39,119,0.08))",
              border: "1px solid rgba(124,58,237,0.25)",
            }}
          >
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 grad-text">{a.missionEyebrow}</p>
            <p className="text-2xl font-bold leading-snug" style={{ color: "var(--text)" }}>{a.mission}</p>
            <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>{a.missionSub}</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>{a.contactTitle}</h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>{a.contactDesc}</p>
            <a
              href="mailto:support@sleeptwo.app"
              className="inline-flex items-center gap-2 font-semibold"
              style={{ color: "var(--pa)" }}
            >
              support@sleeptwo.app
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href={`/${locale}/privacy`} className="text-sm hover:text-white transition-colors" style={{ color: "var(--muted)" }}>
                {a.links.privacy}
              </Link>
              <Link href={`/${locale}/terms`} className="text-sm hover:text-white transition-colors" style={{ color: "var(--muted)" }}>
                {a.links.terms}
              </Link>
              <Link href={`/${locale}/blog`} className="text-sm hover:text-white transition-colors" style={{ color: "var(--muted)" }}>
                {a.links.blog}
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer locale={locale} t={tr.footer} />
    </>
  );
}
