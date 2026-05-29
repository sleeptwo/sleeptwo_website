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
      <body className="antialiased">{children}</body>
    </html>
  );
}
