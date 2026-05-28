const freeFeatures = [
  "Nightly compatibility score",
  "Bedtime Bridge messages",
  "Sleep streak tracking",
  "Schedule & disturbance breakdown",
  "Partner bedtime view",
];

const proFeatures = [
  "Everything in Free",
  "Full score history & trends",
  "HRV Nervous System Sync",
  "Advanced sleep insights",
  "Sleep Ripple analysis",
  "One subscription covers both partners",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "var(--surface)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 grad-text uppercase tracking-widest">Pricing</p>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Simple pricing.<br />
            <span className="grad-text">One couple, one plan.</span>
          </h2>
          <p style={{ color: "var(--muted)" }}>
            No per-person pricing. One subscription covers both of you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="glass rounded-3xl p-8">
            <p className="text-sm font-medium mb-1" style={{ color: "var(--muted)" }}>Free</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="font-bold text-4xl" style={{ color: "var(--text)" }}>$0</span>
              <span className="text-sm pb-1" style={{ color: "var(--muted)" }}>/forever</span>
            </div>
            <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>Start tracking together tonight</p>

            <ul className="space-y-3 mb-8">
              {freeFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5"/>
                    <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ color: "var(--text)" }}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="block text-center py-3 rounded-2xl font-medium text-sm transition-all hover:opacity-80"
              style={{ background: "rgba(255,255,255,0.07)", color: "var(--text)" }}
            >
              Download Free
            </a>
          </div>

          {/* Pro */}
          <div className="relative rounded-3xl p-8" style={{ background: "var(--surface2)" }}>
            {/* Gradient border */}
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

            {/* Best value badge */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="grad-bg text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                Best value
              </span>
            </div>

            <p className="text-sm font-medium mb-1 grad-text">Together Pro</p>
            <div className="flex items-end gap-1 mb-2">
              <span className="font-bold text-4xl" style={{ color: "var(--text)" }}>$6.99</span>
              <span className="text-sm pb-1" style={{ color: "var(--muted)" }}>/month</span>
            </div>
            <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
              Covers both partners · Cancel anytime
            </p>

            <ul className="space-y-3 mb-8">
              {proFeatures.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="7" fill="rgba(124,58,237,0.2)"/>
                    <path d="M5 8l2 2 4-4" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span style={{ color: "var(--text)" }}>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="grad-bg block text-center py-3 rounded-2xl font-semibold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            >
              Start with Together Pro
            </a>
          </div>
        </div>

        <p className="text-center text-sm mt-8" style={{ color: "var(--muted)" }}>
          Subscriptions managed through Apple. Cancel anytime in Settings.
        </p>
      </div>
    </section>
  );
}
