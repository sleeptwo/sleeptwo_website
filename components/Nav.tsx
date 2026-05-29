"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ComingSoonButton from "./ComingSoonButton";
import type { Locale } from "@/lib/i18n";
import { localeLabels } from "@/lib/i18n";
import type { Translations } from "@/lib/translations";

const locales: Locale[] = ["en", "zh-Hant", "zh-Hans"];

export default function Nav({
  locale,
  t,
}: {
  locale: Locale;
  t: Translations["nav"];
}) {
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Determine if we're on the locale home page
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;

  // Prefix anchor links with /${locale} when not on the homepage
  function sectionHref(anchor: string) {
    return isHome ? `#${anchor}` : `/${locale}#${anchor}`;
  }

  // Swap locale in the current path
  function switchLocale(next: Locale) {
    // e.g. /en/blog/slug → /zh-Hant/blog/slug
    const stripped = pathname.replace(/^\/(en|zh-Hant|zh-Hans)/, "");
    return `/${next}${stripped || ""}`;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close lang dropdown on outside click
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,7,15,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      {/* Logo */}
      <Link href={`/${locale}`} className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
        <Image src="/icon.png" alt="SleepTwo" width={36} height={36} className="rounded-xl" />
        <span className="font-semibold text-lg tracking-tight" style={{ color: "var(--text)" }}>
          SleepTwo
        </span>
      </Link>

      {/* Nav links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: t.features,    anchor: "features"     },
          { label: t.howItWorks,  anchor: "how-it-works" },
          { label: t.pricing,     anchor: "pricing"      },
        ].map(({ label, anchor }) => (
          <a
            key={anchor}
            href={sectionHref(anchor)}
            className="text-sm transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
        <Link
          href={`/${locale}/blog`}
          className="text-sm transition-colors"
          style={{ color: pathname.includes("/blog") ? "var(--text)" : "var(--muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          {t.blog}
        </Link>
        <Link
          href={`/${locale}/about`}
          className="text-sm transition-colors"
          style={{ color: pathname.includes("/about") ? "var(--text)" : "var(--muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          {t.about}
        </Link>
      </div>

      {/* Right side: language switcher + CTA */}
      <div className="flex items-center gap-3">
        {/* Language switcher */}
        <div className="relative" ref={langRef}>
          <button
            onClick={() => setLangOpen((o) => !o)}
            className="flex items-center gap-1 text-sm px-3 py-1.5 rounded-full transition-colors"
            style={{
              color: "var(--muted)",
              background: langOpen ? "rgba(255,255,255,0.08)" : "transparent",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            aria-label="Switch language"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ opacity: 0.6 }}>
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M7 1c-1.5 2-2 3.8-2 6s.5 4 2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M7 1c1.5 2 2 3.8 2 6s-.5 4-2 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <path d="M1.5 5.5h11M1.5 8.5h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span>{localeLabels[locale]}</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ opacity: 0.5 }}>
              <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {langOpen && (
            <div
              className="absolute right-0 mt-2 rounded-xl overflow-hidden"
              style={{
                background: "rgba(18,18,30,0.95)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
                minWidth: 120,
                zIndex: 100,
              }}
            >
              {locales.map((l) => (
                <Link
                  key={l}
                  href={switchLocale(l)}
                  onClick={() => setLangOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 text-sm transition-colors"
                  style={{
                    color: l === locale ? "var(--text)" : "var(--muted)",
                    background: l === locale ? "rgba(255,255,255,0.06)" : "transparent",
                  }}
                >
                  <span>{localeLabels[l]}</span>
                  {l === locale && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>

        <ComingSoonButton className="grad-bg text-white text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90">
          {t.download}
        </ComingSoonButton>
      </div>
    </nav>
  );
}
