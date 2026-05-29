import PhoneMockup from "./PhoneMockup";
import ComingSoonButton from "./ComingSoonButton";
import type { Translations } from "@/lib/translations";

export default function Hero({ t }: { t: Translations["hero"] }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="ambient w-[600px] h-[600px] -top-32 -left-32" style={{ background: "var(--pa)" }} />
      <div className="ambient w-[500px] h-[500px] -top-16 -right-16" style={{ background: "var(--pb)" }} />
      <div className="ambient w-[400px] h-[400px] bottom-0 left-1/2 -translate-x-1/2" style={{ background: "var(--pa)", opacity: 0.1 }} />

      {/* Badge */}
      <div className="fade-up-1 inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
        <span className="w-2 h-2 rounded-full grad-bg pulse" />
        <span className="text-sm" style={{ color: "var(--muted)" }}>
          {t.badge}
        </span>
      </div>

      {/* Headline */}
      <h1 className="fade-up-2 font-bold tracking-tight mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.05 }}>
        {t.h1a}<br />
        <span className="grad-text">{t.h1b}</span>
      </h1>

      {/* Sub */}
      <p
        className="fade-up-3 max-w-lg mx-auto mb-10 leading-relaxed"
        style={{ color: "var(--muted)", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
      >
        {t.desc}
      </p>

      {/* CTAs */}
      <div className="fade-up-4 flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
        <ComingSoonButton className="grad-bg glow-a text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all hover:scale-105 hover:opacity-90 flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.76 10.45c-.02-2.1 1.71-3.1 1.79-3.16-.98-1.43-2.49-1.62-3.03-1.64-1.29-.13-2.52.76-3.18.76s-1.67-.74-2.74-.73c-1.41.02-2.72.82-3.44 2.08-1.47 2.55-.38 6.32 1.06 8.39.7 1.01 1.53 2.16 2.63 2.11 1.06-.04 1.46-.69 2.74-.69s1.65.69 2.78.67c1.14-.02 1.86-1.03 2.56-2.05.15-.22.43-.67.59-.91-1.47-.56-2.41-2.14-2.39-4.23zm-2.26-7.85c.58-.71.98-1.69.87-2.67-.84.04-1.86.56-2.46 1.25-.54.62-1.01 1.62-.89 2.57.94.08 1.89-.48 2.48-1.15z" fill="white"/>
          </svg>
          {t.cta1}
        </ComingSoonButton>
        <a
          href="#how-it-works"
          className="glass text-white font-medium px-8 py-4 rounded-2xl text-base transition-all hover:scale-105 flex items-center gap-2"
        >
          {t.cta2}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Phone mockups */}
      <div className="relative flex items-end justify-center gap-6 md:gap-10">
        <div className="hidden sm:block" style={{ transform: "rotate(-6deg) translateY(20px)" }}>
          <PhoneMockup screen="bridge" small />
        </div>
        <div style={{ transform: "rotate(0deg)" }} className="glow-both">
          <PhoneMockup screen="score" />
        </div>
        <div className="hidden sm:block" style={{ transform: "rotate(6deg) translateY(20px)" }}>
          <PhoneMockup screen="tonight" small />
        </div>
      </div>
    </section>
  );
}
