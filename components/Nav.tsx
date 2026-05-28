"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ComingSoonButton from "./ComingSoonButton";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Prefix anchor links with "/" when not on the homepage
  function sectionHref(anchor: string) {
    return isHome ? `#${anchor}` : `/#${anchor}`;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
      {/* Logo — always links back to homepage */}
      <Link href="/" className="flex items-center gap-2.5 hover:opacity-85 transition-opacity">
        <Image src="/icon.png" alt="SleepTwo" width={36} height={36} className="rounded-xl" />
        <span className="font-semibold text-lg tracking-tight" style={{ color: "var(--text)" }}>
          SleepTwo
        </span>
      </Link>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {[
          { label: "Features",     anchor: "features"      },
          { label: "How it works", anchor: "how-it-works"  },
          { label: "Pricing",      anchor: "pricing"       },
        ].map(({ label, anchor }) => (
          <a
            key={label}
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
          href="/blog"
          className="text-sm transition-colors"
          style={{ color: pathname.startsWith("/blog") ? "var(--text)" : "var(--muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          Blog
        </Link>
      </div>

      {/* CTA */}
      <ComingSoonButton className="grad-bg text-white text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90">
        Download Free
      </ComingSoonButton>
    </nav>
  );
}
