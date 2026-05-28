type Screen = "score" | "bridge" | "tonight";

interface Props {
  screen: Screen;
  small?: boolean;
}

export default function PhoneMockup({ screen, small }: Props) {
  const w = small ? 180 : 240;
  const h = small ? 360 : 480;
  const r = small ? 36 : 44;

  return (
    <div
      className="phone-frame relative flex-shrink-0"
      style={{ width: w, height: h, borderRadius: r }}
    >
      {/* Notch */}
      <div
        className="absolute top-3 left-1/2 -translate-x-1/2 z-10 rounded-full"
        style={{ width: 80, height: 28, background: "#000", borderRadius: 20 }}
      />

      {/* Screen content */}
      <div className="w-full h-full" style={{ background: "var(--bg)", paddingTop: 44 }}>
        {screen === "score" && <ScoreScreen small={small} />}
        {screen === "bridge" && <BridgeScreen small={small} />}
        {screen === "tonight" && <TonightScreen small={small} />}
      </div>
    </div>
  );
}

function ScoreScreen({ small }: { small?: boolean }) {
  const s = small ? 0.72 : 1;
  return (
    <div className="flex flex-col items-center px-4 pt-2" style={{ transform: `scale(${s})`, transformOrigin: "top center" }}>
      <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Tonight&apos;s Score</p>
      {/* Score ring */}
      <div className="relative flex items-center justify-center my-2">
        <svg width="120" height="120" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="10" />
          <circle
            cx="60" cy="60" r="50"
            fill="none"
            stroke="url(#scoreGrad)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray="314"
            strokeDashoffset="75"
            transform="rotate(-90 60 60)"
          />
          <defs>
            <linearGradient id="scoreGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#DB2777" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute text-center">
          <div className="font-bold text-3xl" style={{ color: "var(--text)" }}>82</div>
          <div className="text-xs" style={{ color: "var(--muted)" }}>Synced</div>
        </div>
      </div>
      {/* Chips */}
      {[
        { label: "Schedule", val: 88, color: "#7C3AED" },
        { label: "Harmony", val: 79, color: "#DB2777" },
        { label: "Disturbance", val: 75, color: "#A855F7" },
      ].map((chip) => (
        <div key={chip.label} className="w-full mb-2 glass rounded-xl px-3 py-2">
          <div className="flex justify-between text-xs mb-1">
            <span style={{ color: "var(--muted)" }}>{chip.label}</span>
            <span style={{ color: "var(--text)" }}>{chip.val}</span>
          </div>
          <div className="w-full rounded-full" style={{ height: 4, background: "rgba(255,255,255,0.08)" }}>
            <div className="rounded-full" style={{ height: 4, width: `${chip.val}%`, background: chip.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function BridgeScreen({ small }: { small?: boolean }) {
  const s = small ? 0.72 : 1;
  return (
    <div className="flex flex-col px-4 pt-2" style={{ transform: `scale(${s})`, transformOrigin: "top center" }}>
      <p className="text-xs mb-3 text-center" style={{ color: "var(--muted)" }}>Bedtime Bridge</p>
      {/* Partner avatar */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm text-white" style={{ background: "#7C3AED" }}>K</div>
        <div>
          <p className="text-xs font-medium" style={{ color: "var(--text)" }}>Kevin sent a goodnight</p>
          <p className="text-xs" style={{ color: "var(--muted)" }}>10:42 PM</p>
        </div>
      </div>
      {/* Message bubble */}
      <div className="rounded-2xl rounded-tl-sm px-3 py-2.5 mb-3" style={{ background: "rgba(124,58,237,0.2)", border: "1px solid rgba(124,58,237,0.3)" }}>
        <p className="text-sm" style={{ color: "var(--text)" }}>Sleep tight 🌙</p>
      </div>
      {/* My goodnight buttons */}
      <p className="text-xs mb-2" style={{ color: "var(--muted)" }}>Send goodnight</p>
      {["Sleep tight 🌙", "Sweet dreams 💜", "Love you ❤️"].map((msg) => (
        <div key={msg} className="glass rounded-xl px-3 py-2 mb-1.5">
          <p className="text-xs" style={{ color: "var(--text)" }}>{msg}</p>
        </div>
      ))}
    </div>
  );
}

function TonightScreen({ small }: { small?: boolean }) {
  const s = small ? 0.72 : 1;
  return (
    <div className="flex flex-col px-4 pt-2" style={{ transform: `scale(${s})`, transformOrigin: "top center" }}>
      <p className="text-xs mb-3 text-center" style={{ color: "var(--muted)" }}>Tonight</p>
      {/* Status card */}
      <div className="glass rounded-2xl p-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full" style={{ background: "#7C3AED" }} />
          <p className="text-xs font-medium" style={{ color: "var(--text)" }}>Mandy is tracking</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full pulse" style={{ background: "#DB2777" }} />
          <p className="text-xs font-medium" style={{ color: "var(--text)" }}>Kevin is tracking</p>
        </div>
      </div>
      {/* Partner bedtime */}
      <div className="glass rounded-2xl p-3 mb-3">
        <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>Partner&apos;s bedtime</p>
        <p className="text-xl font-semibold" style={{ color: "var(--text)" }}>10:30 <span className="text-sm font-normal" style={{ color: "var(--muted)" }}>PM</span></p>
      </div>
      {/* Start tracking */}
      <div className="grad-bg rounded-2xl p-3 text-center">
        <p className="text-sm font-semibold text-white">Start tracking</p>
        <p className="text-xs text-white opacity-70">Wear your Apple Watch</p>
      </div>
    </div>
  );
}
