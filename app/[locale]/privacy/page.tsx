import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getT } from "@/lib/translations";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PrivacyBody from "@/app/_content/PrivacyBody";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh-Hant" }, { locale: "zh-Hans" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = "https://sleeptwo.app/en/privacy";
  return {
    title: "Privacy Policy — SleepTwo",
    description: "SleepTwo's privacy policy. Learn how we collect, use, and protect your sleep data and personal information.",
    alternates: {
      canonical,
      languages: {
        en: "https://sleeptwo.app/en/privacy",
        "zh-Hant": "https://sleeptwo.app/zh-Hant/privacy",
        "zh-Hans": "https://sleeptwo.app/zh-Hans/privacy",
      },
    },
    openGraph: { url: `https://sleeptwo.app/${locale}/privacy` },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const tr = getT(locale);
  return (
    <>
      <Nav locale={locale} t={tr.nav} />
      <PrivacyBody />
      <Footer locale={locale} t={tr.footer} />
    </>
  );
}
