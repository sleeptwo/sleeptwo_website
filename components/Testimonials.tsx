const testimonials = [
  {
    quote: "We finally have something to talk about in the morning beyond 'did you sleep ok?' — we check the score together over coffee.",
    name: "Sarah & James",
    sub: "Together 3 years",
    color: "#7C3AED",
  },
  {
    quote: "I didn't realise my late bedtimes were pulling our score down. Seeing it visually made me actually want to fix it.",
    name: "Michael",
    sub: "Using SleepTwo for 6 weeks",
    color: "#DB2777",
  },
  {
    quote: "The goodnight messages are unexpectedly sweet. We travel for work a lot — it makes us feel connected even when we're in different time zones.",
    name: "Priya & Tom",
    sub: "Long-distance couple",
    color: "#A855F7",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 grad-text uppercase tracking-widest">Early users</p>
          <h2 className="font-bold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}>
            Couples sleeping<br />
            <span className="grad-text">better together</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="glass rounded-2xl p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill={t.color}>
                    <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4.5L7 9.5 3 12l1.5-4.5L1 5h4.5z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text)" }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                  style={{ background: t.color }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{t.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{t.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
