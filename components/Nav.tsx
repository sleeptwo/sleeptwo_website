"use client";
import { useState, useEffect } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

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
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl grad-bg flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M4 10C4 7.2 6.2 5 9 5s5 2.2 5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            <circle cx="6" cy="12" r="1.5" fill="white" opacity="0.7"/>
            <circle cx="12" cy="12" r="1.5" fill="white" opacity="0.7"/>
            <path d="M9 5V3" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </div>
        <span className="font-semibold text-lg tracking-tight" style={{ color: "var(--text)" }}>
          SleepTwo
        </span>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center gap-8">
        {["Features", "How it works", "Pricing"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(/ /g, "-")}`}
            className="text-sm transition-colors"
            style={{ color: "var(--muted)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            {item}
          </a>
        ))}
      </div>

      {/* CTA */}
      <a
        href="#download"
        className="grad-bg text-white text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-90"
      >
        Download Free
      </a>
    </nav>
  );
}
