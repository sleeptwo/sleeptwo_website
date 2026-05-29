import ComingSoonButton from "./ComingSoonButton";
import type { Translations } from "@/lib/translations";

export default function Pricing({ t }: { t: Translations["pricing"] }) {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 grad-text uppercase tracking-widest">{t.eyebrow}</p>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            {t.headline}<br />
            <span className="grad-text">{t.headlineGrad}</span>
          </h2>
          <p style={{ color: "var(--muted)" }}>{t.sub}</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="glass rounded-3xl p-8">
            <p className="text-sm font-medium mb-1" style={{ color: "var(--muted)" }}>{t.freePlan.name}</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="font-bold text-4xl" style={{ color: "var(--text)" }}>$0</span>
              <span className="text-sm pb-1" style={{ color: "var(--muted)" }}>{t.freePlan.period}</span>
            </div>
            <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>{t.freePlan.desc}</p>

            <ul className="space-y-3 mb-8">
              {t.freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ color: "var(--text)" }}>{f}</span>
                </li>
              ))}
            </ul>

            <ComingSoonButton
              className="block w-full text-center py-3 rounded-2xl font-medium text-sm transition-all hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.07)", color: "var(--text)" }}
            >
              {t.freePlan.cta}
            </ComingSoonButton>
          </div>

          {/* Pro */}
          <div className="relative rounded-3xl p-8" style={{ background: "var(--surface2)" }}>
            <div
              className="absolute inset-0 rounded-3xl -z-10"
              style={{ padding: 1, background: "linear-gradient(135deg, #7C3AED, #DB2777)", borderRadius: 24 }}
            >
              <div className="w-full h-full rounded-3xl" style={{ background: "var(--surface2)" }} />
            </div>
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: "linear-gradient(135deg, #7C3AED, #DB2777)", padding: "1px", zIndex: -1 }}
            />

            {/* Badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="grad-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                {t.proPlan.badge}
              </span>
            </div>

            <p className="text-sm font-medium mb-1 grad-text">{t.proPlan.name}</p>
            <div className="flex items-end gap-2 mb-2">
              <span
                className="font-bold text-4xl select-none"
                style={{ color: "var(--text)", filter: "blur(10px)", userSelect: "none" }}
                aria-hidden="true"
              >
                $6.99
              </span>
              <span
                className="text-sm pb-1 select-none"
                style={{ color: "var(--muted)", filter: "blur(6px)" }}
                aria-hidden="true"
              >
                {t.proPlan.period}
              </span>
              <span className="text-xs font-medium px-2 py-0.5 rounded-full mb-1" style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}>
                {t.proPlan.priceBadge}
              </span>
            </div>
            <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>{t.proPlan.desc}</p>

            <ul className="space-y-3 mb-8">
              {t.proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="rgba(124,58,237,0.2)"/>
                    <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ color: "var(--text)" }}>{f}</span>
                </li>
              ))}
            </ul>

            <ComingSoonButton className="grad-bg block w-full text-center py-3 rounded-2xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]">
              {t.proPlan.cta}
            </ComingSoonButton>
          </div>
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "var(--muted)" }}>
          {t.footer}
        </p>
      </div>
    </section>
  );
}
