const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="url(#fg1)" strokeWidth="2"/>
        <path d="M14 8v6l3.5 3.5" stroke="url(#fg1)" strokeWidth="2" strokeLinecap="round"/>
        <defs><linearGradient id="fg1" x1="3" y1="3" x2="25" y2="25"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#DB2777"/></linearGradient></defs>
      </svg>
    ),
    title: "Compatibility Score",
    desc: "Every morning, see how in sync you and your partner were — scored across schedule overlap, sleep stage harmony, and mutual disturbances.",
    pill: "Core feature",
    pillColor: "#7C3AED",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M5 20L9 16H23V6H5V20Z" stroke="url(#fg2)" strokeWidth="2" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="1.5" fill="url(#fg2)"/>
        <circle cx="14" cy="11" r="1.5" fill="url(#fg2)"/>
        <circle cx="17" cy="11" r="1.5" fill="url(#fg2)"/>
        <defs><linearGradient id="fg2" x1="5" y1="6" x2="23" y2="20"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#DB2777"/></linearGradient></defs>
      </svg>
    ),
    title: "Bedtime Bridge",
    desc: "Send a goodnight message, a sleep intention, or a reaction when you wake up. Stay connected even when life gets in the way of synced bedtimes.",
    pill: "Connection",
    pillColor: "#DB2777",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h4l3-6 4 12 3-6h6" stroke="url(#fg3)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="fg3" x1="4" y1="8" x2="24" y2="20"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#DB2777"/></linearGradient></defs>
      </svg>
    ),
    title: "HRV Nervous System Sync",
    desc: "See if your heart rate variability rhythms are co-regulating over weeks. Couples who sleep in sync show measurably lower stress responses.",
    pill: "Together Pro",
    pillColor: "#A855F7",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L16.5 10H23L18 14L20 21L14 17L8 21L10 14L5 10H11.5L14 4Z" stroke="url(#fg4)" strokeWidth="2" strokeLinejoin="round"/>
        <defs><linearGradient id="fg4" x1="5" y1="4" x2="23" y2="21"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#DB2777"/></linearGradient></defs>
      </svg>
    ),
    title: "Sleep Streak",
    desc: "Build a shared habit. Your streak grows every night both partners track — a gentle motivator that makes consistent sleep feel like a team sport.",
    pill: "Habit",
    pillColor: "#7C3AED",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="14" r="5" stroke="url(#fg5)" strokeWidth="2"/>
        <circle cx="18" cy="14" r="5" stroke="url(#fg5)" strokeWidth="2"/>
        <defs><linearGradient id="fg5" x1="5" y1="9" x2="23" y2="19"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#DB2777"/></linearGradient></defs>
      </svg>
    ),
    title: "One Sub, Two Partners",
    desc: "Together Pro covers both of you for $6.99/month. One person subscribes — the other gets full access automatically through your shared pair.",
    pill: "Together Pro",
    pillColor: "#DB2777",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="5" width="18" height="18" rx="4" stroke="url(#fg6)" strokeWidth="2"/>
        <path d="M9 14l3.5 3.5L19 10" stroke="url(#fg6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <defs><linearGradient id="fg6" x1="5" y1="5" x2="23" y2="23"><stop stopColor="#7C3AED"/><stop offset="1" stopColor="#DB2777"/></linearGradient></defs>
      </svg>
    ),
    title: "Zero Manual Logging",
    desc: "Wear your Apple Watch to bed. SleepTwo reads your sleep data automatically — no buttons, no journals, no friction. Just wake up and see your score.",
    pill: "Automatic",
    pillColor: "#7C3AED",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 grad-text uppercase tracking-widest">Features</p>
          <h2 className="font-bold mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}>
            Everything a couple needs<br />
            <span className="grad-text">to sleep better together</span>
          </h2>
          <p className="max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Built specifically for couples. Not a solo sleep tracker with a sharing button tacked on.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02]"
              style={{ cursor: "default" }}
            >
              <div className="mb-4">{f.icon}</div>
              <div className="flex items-center gap-2 mb-3">
                <h3 className="font-semibold text-base" style={{ color: "var(--text)" }}>{f.title}</h3>
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{ background: `${f.pillColor}22`, color: f.pillColor }}
                >
                  {f.pill}
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
