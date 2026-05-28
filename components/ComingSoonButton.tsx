"use client";
import { useState, useEffect } from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function ComingSoonButton({ className, style, children }: Props) {
  const [visible, setVisible] = useState(false);

  function handleClick() {
    setVisible(true);
  }

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <>
      <button onClick={handleClick} className={className} style={style}>
        {children}
      </button>

      {/* Toast */}
      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[999] flex items-center gap-3 px-5 py-3.5 rounded-2xl text-sm font-medium transition-all duration-300"
        style={{
          background: "rgba(20,20,35,0.92)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(20px)",
          color: "var(--text)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          opacity: visible ? 1 : 0,
          transform: visible
            ? "translateX(-50%) translateY(0)"
            : "translateX(-50%) translateY(12px)",
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 1l2 5.5H17l-4.5 3.3 1.7 5.5L9 12l-5.2 3.3 1.7-5.5L1 6.5h6z"
            fill="url(#cs-grad)" />
          <defs>
            <linearGradient id="cs-grad" x1="0" y1="0" x2="18" y2="18" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7C3AED" />
              <stop offset="1" stopColor="#DB2777" />
            </linearGradient>
          </defs>
        </svg>
        SleepTwo is coming soon — stay tuned!
      </div>
    </>
  );
}
