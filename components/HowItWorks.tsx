import type { Translations } from "@/lib/translations";

const stepColors = ["#7C3AED", "#A855F7", "#DB2777"];

export default function HowItWorks({ t }: { t: Translations["howItWorks"] }) {
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 grad-text uppercase tracking-widest">{t.eyebrow}</p>
          <h2 className="font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            {t.headline}<br />
            <span className="grad-text">{t.headlineGrad}</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
            style={{ background: "linear-gradient(90deg, #7C3AED, #DB2777)" }}
          />

          {t.steps.map((step, i) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 font-bold text-xl relative z-10"
                style={{ background: `${stepColors[i]}22`, border: `2px solid ${stepColors[i]}`, color: stepColors[i] }}
              >
                {step.num}
              </div>
              <h3 className="font-semibold text-lg mb-3" style={{ color: "var(--text)" }}>{step.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Apple Watch note */}
        <div className="mt-16 flex items-center justify-center gap-3 glass rounded-2xl px-6 py-4 max-w-md mx-auto">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="7" y="4" width="10" height="16" rx="3" stroke="#7C3AED" strokeWidth="1.5"/>
            <path d="M9 2h6M9 22h6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="12" cy="12" r="2" fill="#7C3AED"/>
          </svg>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            {t.watchNote}
          </p>
        </div>
      </div>
    </section>
  );
}
