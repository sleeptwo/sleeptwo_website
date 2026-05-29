import ComingSoonButton from "./ComingSoonButton";
import type { Translations } from "@/lib/translations";

export default function Download({ t }: { t: Translations["download"] }) {
  const [descLine1, descLine2] = t.desc.split("\n");
  return (
    <section id="download" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="ambient w-[600px] h-[600px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "var(--pa)", opacity: 0.12 }} />
      <div className="ambient w-[400px] h-[400px] left-1/4 top-1/2 -translate-y-1/2" style={{ background: "var(--pb)", opacity: 0.1 }} />

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="mx-auto mb-8 glow-both" style={{ width: 88, height: 88 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icon.png" alt="SleepTwo" className="w-full h-full rounded-[22px]" />
        </div>

        <h2 className="font-bold mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
          {t.h1}
          <br />
          <span className="grad-text">{t.h1grad}</span>
        </h2>

        <p className="mb-10 leading-relaxed" style={{ color: "var(--muted)", fontSize: "1.1rem" }}>
          {descLine1}
          <br />
          {descLine2}
        </p>

        {/* App Store button */}
        <ComingSoonButton
          className="inline-flex items-center gap-4 glass rounded-2xl px-8 py-4 transition-all hover:scale-105 hover:border-white/20 mb-4"
          style={{ border: "1px solid rgba(255,255,255,0.1)" }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path d="M23.5 17.2c-.04-3.36 2.74-4.97 2.86-5.05-1.56-2.28-3.98-2.59-4.84-2.63-2.07-.21-4.04 1.22-5.09 1.22-1.05 0-2.67-1.19-4.39-1.16-2.26.03-4.35 1.31-5.51 3.33-2.35 4.08-.6 10.12 1.69 13.43 1.12 1.62 2.46 3.45 4.22 3.38 1.7-.07 2.34-1.1 4.39-1.1 2.06 0 2.64 1.1 4.44 1.07 1.82-.03 2.98-1.65 4.1-3.28.24-.35.68-1.07.94-1.45-2.35-.9-3.85-3.42-3.81-6.76z" fill="white"/>
            <path d="M20.13 7.9c.93-1.13 1.56-2.7 1.39-4.27-1.34.06-2.97.9-3.93 2-.86.99-1.62 2.59-1.42 4.12 1.5.12 3.02-.76 3.96-1.85z" fill="white"/>
          </svg>
          <div className="text-left">
            <p className="text-xs" style={{ color: "var(--muted)" }}>Download on the</p>
            <p className="text-lg font-semibold" style={{ color: "var(--text)" }}>App Store</p>
          </div>
        </ComingSoonButton>

        <p className="text-xs" style={{ color: "var(--muted)" }}>
          {t.note}
        </p>
      </div>
    </section>
  );
}
