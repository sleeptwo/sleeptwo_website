export default function ScoreDemo() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Ambient */}
      <div className="ambient w-[500px] h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "var(--pa)" }} />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — copy */}
        <div>
          <p className="text-sm font-medium mb-3 grad-text uppercase tracking-widest">The Score</p>
          <h2 className="font-bold mb-6" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Your sleep,<br />
            <span className="grad-text">finally in context</span>
          </h2>
          <p className="mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
            A solo sleep score tells you how you slept. SleepTwo&apos;s compatibility score tells you
            how you slept <em>together</em> — whether your rhythms aligned, your disturbances matched,
            and your deep sleep phased at the same time.
          </p>

          <div className="space-y-4">
            {[
              { label: "Schedule Overlap", desc: "Did your sleep windows match?", pct: 88, color: "#7C3AED" },
              { label: "Stage Harmony", desc: "Did you reach deep sleep together?", pct: 79, color: "#A855F7" },
              { label: "Disturbance Match", desc: "Did you wake each other up?", pct: 75, color: "#DB2777" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl p-4">
                <div className="flex justify-between mb-2">
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{item.label}</p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>{item.desc}</p>
                  </div>
                  <span className="font-bold text-lg" style={{ color: item.color }}>{item.pct}</span>
                </div>
                <div className="w-full rounded-full h-1.5" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <div
                    className="rounded-full h-1.5 transition-all"
                    style={{ width: `${item.pct}%`, background: item.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — big score circle */}
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{ background: "radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)", transform: "scale(1.3)" }}
            />
            <svg width="280" height="280" viewBox="0 0 280 280">
              {/* Background track */}
              <circle cx="140" cy="140" r="120" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="16"/>
              {/* Score arc */}
              <circle
                cx="140" cy="140" r="120"
                fill="none"
                stroke="url(#bigGrad)"
                strokeWidth="16"
                strokeLinecap="round"
                strokeDasharray="754"
                strokeDashoffset="150"
                transform="rotate(-90 140 140)"
              />
              <defs>
                <linearGradient id="bigGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7C3AED"/>
                  <stop offset="100%" stopColor="#DB2777"/>
                </linearGradient>
              </defs>
            </svg>
            {/* Center text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="font-bold" style={{ fontSize: 72, lineHeight: 1, color: "var(--text)" }}>82</span>
              <span className="text-base font-medium grad-text">Synced</span>
              <span className="text-xs mt-1" style={{ color: "var(--muted)" }}>Last night</span>
            </div>
          </div>

          {/* Partner chips */}
          <div className="flex gap-4 mt-8">
            {[
              { name: "Kevin", initial: "K", color: "#7C3AED", time: "10:42 PM → 6:58 AM" },
              { name: "Mandy", initial: "M", color: "#DB2777", time: "10:55 PM → 7:10 AM" },
            ].map((p) => (
              <div key={p.name} className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-white text-sm"
                  style={{ background: p.color }}
                >
                  {p.initial}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{p.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{p.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
