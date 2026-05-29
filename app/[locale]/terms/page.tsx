import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getT } from "@/lib/translations";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TermsBody from "@/app/_content/TermsBody";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh-Hant" }, { locale: "zh-Hans" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const canonical = "https://sleeptwo.app/en/terms";
  return {
    title: "Terms of Service — SleepTwo",
    description: "SleepTwo's terms of service. Read the terms governing your use of the SleepTwo couples sleep tracking app.",
    alternates: {
      canonical,
      languages: {
        en: "https://sleeptwo.app/en/terms",
        "zh-Hant": "https://sleeptwo.app/zh-Hant/terms",
        "zh-Hans": "https://sleeptwo.app/zh-Hans/terms",
      },
    },
    openGraph: { url: `https://sleeptwo.app/${locale}/terms` },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const tr = getT(locale);
  return (
    <>
      <Nav locale={locale} t={tr.nav} />
      <TermsBody />
      <Footer locale={locale} t={tr.footer} />
    </>
  );
}
