import type { Metadata } from "next";
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

export const metadata: Metadata = {
  alternates: { canonical: "https://sleeptwo.app" },
  openGraph: {
    title: "SleepTwo — Couples Sleep Tracking App",
    description:
      "Nightly sleep compatibility scores for couples. Powered by Apple Watch. No manual logging.",
    url: "https://sleeptwo.app",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
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
  description:
    "SleepTwo is a couples sleep tracking app for iPhone and Apple Watch that gives partners a nightly sleep compatibility score and relationship-focused sleep insights.",
  email: "support@sleeptwo.app",
  foundingDate: "2026",
  areaServed: "Worldwide",
  knowsAbout: [
    "couples sleep tracking",
    "sleep compatibility",
    "Apple Watch sleep",
    "HRV heart rate variability",
    "relationship health",
    "sleep science",
  ],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://sleeptwo.app/#app",
  name: "SleepTwo",
  alternateName: "SleepTwo — Couples Sleep Tracking",
  description:
    "SleepTwo is a couples sleep tracking app that uses Apple Watch to automatically compute nightly sleep compatibility scores, enabling partners to understand and improve their shared sleep health.",
  url: "https://sleeptwo.app",
  applicationCategory: "HealthApplication",
  applicationSubCategory: "Sleep Tracking",
  operatingSystem: "iOS 17 or later",
  softwareRequirements: "Apple Watch Series 4 or later, iPhone with iOS 17+",
  featureList: [
    "Nightly sleep compatibility score (0–100)",
    "Bedtime Bridge goodnight messaging",
    "HRV Nervous System Sync",
    "Sleep Ripple analysis",
    "Full score history and trends",
    "Morning survey and rested rating",
    "Joint weekly sleep goals",
    "Sleep streak tracking",
    "Automatic Apple Watch sleep detection",
    "Partner bedtime and wake time view",
  ],
  screenshot: "https://sleeptwo.app/icon.png",
  publisher: {
    "@id": "https://sleeptwo.app/#organization",
  },
  offers: [
    {
      "@type": "Offer",
      name: "Free",
      price: "0",
      priceCurrency: "USD",
      description:
        "Nightly compatibility score, Bedtime Bridge, sleep streak, schedule breakdown, partner bedtime view.",
    },
    {
      "@type": "Offer",
      name: "Together Pro",
      description:
        "Full score history, HRV Nervous System Sync, Sleep Ripple, advanced insights. One subscription covers both partners.",
      availability: "https://schema.org/PreOrder",
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sleeptwo.app/#website",
  url: "https://sleeptwo.app",
  name: "SleepTwo",
  description:
    "Couples sleep tracking app — nightly compatibility scores powered by Apple Watch.",
  publisher: {
    "@id": "https://sleeptwo.app/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sleeptwo.app/blog?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is SleepTwo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SleepTwo is a couples sleep tracking app for iPhone and Apple Watch. It automatically tracks both partners' sleep and computes a nightly compatibility score (0–100) showing how in sync you slept — factoring in timing alignment, restlessness, and heart rate variability patterns.",
      },
    },
    {
      "@type": "Question",
      name: "How does SleepTwo work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both partners wear Apple Watch to bed. Apple Watch automatically detects sleep — no manual logging required. In the morning, SleepTwo syncs both partners' data via iCloud and computes a nightly compatibility score, sleep stage breakdown, and relationship-focused insights.",
      },
    },
    {
      "@type": "Question",
      name: "Do both partners need an Apple Watch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Both partners need an Apple Watch (Series 4 or later) and iPhone with iOS 17 or later. SleepTwo reads sleep and HRV data from both Apple Watches to compute the compatibility score.",
      },
    },
    {
      "@type": "Question",
      name: "What is a sleep compatibility score?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The sleep compatibility score is a 0–100 number computed each morning from both partners' Apple Watch data. It measures how in sync you slept — considering bedtime and wake time alignment, overlapping awake and restless periods, and heart rate variability correlation. A score above 80 means you slept highly in sync that night.",
      },
    },
    {
      "@type": "Question",
      name: "Is SleepTwo free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, SleepTwo is free to download and includes the nightly compatibility score, Bedtime Bridge messaging, sleep streak tracking, and partner schedule view. Together Pro is a paid subscription that adds full score history, HRV Nervous System Sync, Sleep Ripple analysis, and advanced insights — and covers both partners under one subscription.",
      },
    },
    {
      "@type": "Question",
      name: "Can couples use SleepTwo if they sleep in different places?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SleepTwo syncs data between partners over iCloud (Apple CloudKit), so it works for long-distance couples or partners who travel. Both partners simply wear their Apple Watch to sleep wherever they are.",
      },
    },
    {
      "@type": "Question",
      name: "What is Bedtime Bridge in SleepTwo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bedtime Bridge is SleepTwo's goodnight messaging feature. Partners can send goodnight messages and emoji reactions (heart, moon, Zzz) that appear on each other's lock screen at bedtime — keeping you connected even if you go to sleep at different times or in different places.",
      },
    },
    {
      "@type": "Question",
      name: "Is SleepTwo available on Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SleepTwo is an iOS-only app and requires Apple Watch. It is not available on Android or for non-Apple smartwatches.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="overflow-hidden">
        <Nav />
        <Hero />
        <SocialProof />
        <Features />
        <HowItWorks />
        <ScoreDemo />
        <Pricing />
        <Testimonials />
        <Download />
        <Footer />
      </main>
    </>
  );
}
