const steps = [
  {
    num: "01",
    title: "Pair with your partner",
    desc: "One of you generates a 6-digit code. The other enters it. You're connected in under 2 minutes — no accounts, no email required.",
    color: "#7C3AED",
  },
  {
    num: "02",
    title: "Wear your Apple Watch to bed",
    desc: "SleepTwo reads your sleep data automatically from HealthKit. No buttons to press. Just go to sleep normally.",
    color: "#A855F7",
  },
  {
    num: "03",
    title: "Wake up to your score",
    desc: "Every morning, see how in sync you were — your compatibility score, breakdown by category, and a goodnight message if your partner sent one.",
    color: "#DB2777",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 grad-text uppercase tracking-widest">How it works</p>
          <h2 className="font-bold" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Up and running<br />
            <span className="grad-text">in 2 minutes</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px"
            style={{ background: "linear-gradient(90deg, #7C3AED, #DB2777)" }}
          />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center">
              {/* Number circle */}
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 font-bold text-xl relative z-10"
                style={{ background: `${step.color}22`, border: `2px solid ${step.color}`, color: step.color }}
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
            Requires <span style={{ color: "var(--text)" }}>Apple Watch Series 4+</span> with sleep tracking enabled
          </p>
        </div>
      </div>
    </section>
  );
}
