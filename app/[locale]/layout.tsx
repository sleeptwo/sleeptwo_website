import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { isValidLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh-Hant" }, { locale: "zh-Hans" }];
}

export const metadata: Metadata = {
  metadataBase: new URL("https://sleeptwo.app"),
  title: {
    default: "SleepTwo — Couples Sleep Tracking App",
    template: "%s — SleepTwo",
  },
  description:
    "SleepTwo gives couples a nightly sleep compatibility score, goodnight messages, and real sleep insights — all automatically from Apple Watch.",
  openGraph: {
    title: "SleepTwo — Couples Sleep Tracking App",
    description: "Nightly sleep compatibility scores for couples. Powered by Apple Watch.",
    type: "website",
    siteName: "SleepTwo",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sleeptwoapp",
  },
  robots: { index: true, follow: true },
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
  contactPoint: { "@type": "ContactPoint", email: "support@sleeptwo.app", contactType: "customer support" },
  sameAs: ["https://apps.apple.com/app/sleeptwo/id6738919691"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sleeptwo.app/#website",
  url: "https://sleeptwo.app",
  name: "SleepTwo",
  description: "The only sleep app built for couples. Nightly compatibility scores powered by Apple Watch.",
  publisher: { "@id": "https://sleeptwo.app/#organization" },
  inLanguage: ["en", "zh-TW", "zh-CN"],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();

  const htmlLang = locale === "zh-Hant" ? "zh-TW" : locale === "zh-Hans" ? "zh-CN" : "en";

  return (
    <html lang={htmlLang} className={`${inter.variable} scroll-smooth`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
