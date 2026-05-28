import PhoneMockup from "./PhoneMockup";

export default function Hero() {
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
          Requires Apple Watch · iOS 17+
        </span>
      </div>

      {/* Headline */}
      <h1 className="fade-up-2 font-bold tracking-tight mb-6" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 1.05 }}>
        Sleep better.<br />
        <span className="grad-text">Together.</span>
      </h1>

      {/* Sub */}
      <p
        className="fade-up-3 max-w-lg mx-auto mb-10 leading-relaxed"
        style={{ color: "var(--muted)", fontSize: "clamp(1rem, 2.5vw, 1.2rem)" }}
      >
        SleepTwo gives couples a nightly compatibility score, goodnight messages,
        and real insights — all from your Apple Watch. No manual logging.
      </p>

      {/* CTAs */}
      <div className="fade-up-4 flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
        <a
          href="#download"
          className="grad-bg glow-a text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all hover:scale-105 hover:opacity-90 flex items-center gap-2"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 2C13.866 2 17 5.134 17 9s-3.134 7-7 7S3 12.866 3 9s3.134-7 7-7z" stroke="white" strokeWidth="1.5"/>
            <path d="M10 6v4l2.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          Download on App Store
        </a>
        <a
          href="#how-it-works"
          className="glass text-white font-medium px-8 py-4 rounded-2xl text-base transition-all hover:scale-105 flex items-center gap-2"
        >
          See how it works
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Phone mockups */}
      <div className="relative flex items-end justify-center gap-6 md:gap-10">
        {/* Left phone — slightly lower */}
        <div className="hidden sm:block" style={{ transform: "rotate(-6deg) translateY(20px)" }}>
          <PhoneMockup screen="bridge" small />
        </div>
        {/* Center phone — main */}
        <div style={{ transform: "rotate(0deg)" }} className="glow-both">
          <PhoneMockup screen="score" />
        </div>
        {/* Right phone — slightly lower */}
        <div className="hidden sm:block" style={{ transform: "rotate(6deg) translateY(20px)" }}>
          <PhoneMockup screen="tonight" small />
        </div>
      </div>
    </section>
  );
}
