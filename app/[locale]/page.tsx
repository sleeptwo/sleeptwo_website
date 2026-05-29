import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getT } from "@/lib/translations";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import ScoreDemo from "@/components/ScoreDemo";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
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
  const canonical = locale === "en" ? "https://sleeptwo.app/en" : `https://sleeptwo.app/${locale}`;
  return {
    alternates: {
      canonical,
      languages: {
        en: "https://sleeptwo.app/en",
        "zh-Hant": "https://sleeptwo.app/zh-Hant",
        "zh-Hans": "https://sleeptwo.app/zh-Hans",
      },
    },
    openGraph: { url: canonical },
  };
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sleeptwo.app/#organization",
  name: "SleepTwo",
  url: "https://sleeptwo.app",
  logo: { "@type": "ImageObject", url: "https://sleeptwo.app/icon.png", width: 512, height: 512 },
  description: "SleepTwo is a couples sleep tracking app for iPhone and Apple Watch.",
  email: "support@sleeptwo.app",
  foundingDate: "2026",
  areaServed: "Worldwide",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://sleeptwo.app/#app",
  name: "SleepTwo",
  description: "Couples sleep tracking app that computes nightly compatibility scores from Apple Watch data.",
  url: "https://sleeptwo.app",
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS 17 or later",
  publisher: { "@id": "https://sleeptwo.app/#organization" },
  offers: [
    { "@type": "Offer", name: "Free", price: "0", priceCurrency: "USD" },
    { "@type": "Offer", name: "Together Pro", availability: "https://schema.org/PreOrder" },
  ],
};

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const tr = getT(locale);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <main className="overflow-hidden">
        <Nav locale={locale} t={tr.nav} />
        <Hero t={tr.hero} />
        <SocialProof t={tr.socialProof} />
        <Features t={tr.features} />
        <HowItWorks t={tr.howItWorks} />
        <ScoreDemo t={tr.scoreDemo} />
        <Pricing t={tr.pricing} />
        <Testimonials t={tr.testimonials} />
        <Download t={tr.download} />
        <Footer locale={locale} t={tr.footer} />
      </main>
    </>
  );
}
