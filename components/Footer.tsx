import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import type { Translations } from "@/lib/translations";

export default function Footer({
  locale,
  t,
}: {
  locale: Locale;
  t: Translations["footer"];
}) {
  return (
    <footer className="px-6 py-12" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image src="/icon.png" alt="SleepTwo" width={28} height={28} className="rounded-lg" />
            <span className="font-semibold text-base" style={{ color: "var(--text)" }}>SleepTwo</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm" style={{ color: "var(--muted)" }}>
            <a href={`/${locale}/blog`} className="hover:text-white transition-colors">{t.links.blog}</a>
            <a href={`/${locale}/about`} className="hover:text-white transition-colors">{t.links.about}</a>
            <a href={`/${locale}/privacy`} className="hover:text-white transition-colors">{t.links.privacy}</a>
            <a href={`/${locale}/terms`} className="hover:text-white transition-colors">{t.links.terms}</a>
            <a href="mailto:support@sleeptwo.app" className="hover:text-white transition-colors">{t.links.contact}</a>
          </div>

          {/* Copyright */}
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
