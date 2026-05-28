import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SleepTwo",
  description:
    "SleepTwo was built for couples who deserve better than sleep apps designed for individuals. Learn the story behind the app and our mission.",
  alternates: { canonical: "https://sleeptwo.app/about" },
  openGraph: {
    title: "About SleepTwo — Built for Couples",
    description:
      "The story behind SleepTwo — why we built a sleep app specifically for couples, and what drives us.",
    url: "https://sleeptwo.app/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://sleeptwo.app/about",
  name: "About SleepTwo",
  url: "https://sleeptwo.app/about",
  description:
    "SleepTwo is a couples sleep tracking app built by a small independent team in Hong Kong. Our mission is to help couples understand and improve their shared sleep health.",
  about: {
    "@id": "https://sleeptwo.app/#organization",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sleeptwo.app" },
      { "@type": "ListItem", position: 2, name: "About", item: "https://sleeptwo.app/about" },
    ],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sleeptwo.app/#organization",
  name: "SleepTwo",
  url: "https://sleeptwo.app",
  logo: { "@type": "ImageObject", url: "https://sleeptwo.app/icon.png" },
  foundingDate: "2026",
  description:
    "SleepTwo is an independent app studio based in Hong Kong focused on helping couples improve their shared sleep health through Apple Watch.",
  email: "support@sleeptwo.app",
  areaServed: "Worldwide",
  knowsAbout: [
    "couples sleep tracking",
    "sleep compatibility",
    "Apple Watch health",
    "HRV and relationship health",
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <Nav />
      <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
        {/* Header */}
        <div className="relative pt-32 pb-12 px-6 overflow-hidden">
          <div
            className="ambient"
            style={{
              width: 500,
              height: 300,
              background: "var(--pa)",
              top: -80,
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <div className="max-w-3xl mx-auto">
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--pa)" }}
            >
              Our Story
            </p>
            <h1
              className="text-4xl font-bold mb-4"
              style={{ color: "var(--text)" }}
            >
              Built for couples.<br />
              <span className="grad-text">Not just individuals.</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted)" }}>
              Every sleep app we tried tracked one person in isolation. But sleep —
              especially for couples — is anything but isolated.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 pb-24 space-y-12">

          {/* The problem */}
          <div
            className="glass rounded-3xl p-8 md:p-10"
            style={{ border: "1px solid var(--border)" }}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              The problem we kept running into
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                We noticed something that every couple who shares a bed quietly knows:
                your sleep and your partner&apos;s sleep are deeply connected. When one
                person tosses and turns, the other pays for it. When your bedtimes
                drift apart by an hour, the relationship subtly suffers. When you
                finally sync up on a good night, the morning feels different.
              </p>
              <p>
                The research backs this up — sleep compatibility is one of the least
                talked-about but most impactful factors in relationship quality. Yet
                every sleep tracking app treated each person as if they slept alone
                on a desert island.
              </p>
              <p>
                We wanted a number. Something simple that told us, each morning:
                how in sync were we last night? That number didn&apos;t exist. So we
                built it.
              </p>
            </div>
          </div>

          {/* The app */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              What SleepTwo does
            </h2>
            <div className="space-y-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                SleepTwo uses Apple Watch to automatically track both partners&apos; sleep
                — no logging, no buttons, no friction. Each morning it computes a
                &ldquo;compatibility score&rdquo; (0–100) that captures how in sync you slept:
                your bedtime alignment, how much your restlessness crossed over, and
                how your heart rate variability patterns compared.
              </p>
              <p>
                It also does the small things that matter: letting you send a goodnight
                message to your partner&apos;s lock screen even when you go to bed at
                different times, tracking your sleep streak together as a couple, and
                surfacing insights about your shared sleep patterns over time.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                title: "No manual logging",
                body: "Life is too short to tap buttons before bed. Apple Watch handles everything automatically.",
              },
              {
                title: "Both partners, one lens",
                body: "Individual sleep metrics miss the point for couples. Every feature is designed with both of you in mind.",
              },
              {
                title: "Privacy first",
                body: "Your sleep data lives in your personal iCloud (CloudKit). We never sell it or use it for advertising.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="glass rounded-2xl p-6"
                style={{ border: "1px solid var(--border)" }}
              >
                <h3
                  className="font-semibold mb-2 text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {v.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {v.body}
                </p>
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
            <p className="text-sm font-semibold uppercase tracking-widest mb-4 grad-text">
              Our mission
            </p>
            <p
              className="text-2xl font-bold leading-snug"
              style={{ color: "var(--text)" }}
            >
              Help couples sleep better — together.
            </p>
            <p className="mt-4 leading-relaxed" style={{ color: "var(--muted)" }}>
              Because the way you sleep next to someone shapes the relationship you
              build with them. And you deserve data that reflects that.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>
              Get in touch
            </h2>
            <p className="leading-relaxed mb-4" style={{ color: "var(--muted)" }}>
              Questions, feedback, press enquiries, or just want to tell us about
              your compatibility score — we read every email.
            </p>
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
              <Link
                href="/privacy"
                className="text-sm hover:text-white transition-colors"
                style={{ color: "var(--muted)" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:text-white transition-colors"
                style={{ color: "var(--muted)" }}
              >
                Terms of Service
              </Link>
              <Link
                href="/blog"
                className="text-sm hover:text-white transition-colors"
                style={{ color: "var(--muted)" }}
              >
                Blog
              </Link>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
