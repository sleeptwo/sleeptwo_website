import { ImageResponse } from "next/og";

export const alt = "SleepTwo — Couples Sleep Tracking App";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#07070f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left ambient glow */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "rgba(124,58,237,0.22)",
            filter: "blur(120px)",
            top: -250,
            left: -150,
          }}
        />
        {/* Right ambient glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(219,39,119,0.16)",
            filter: "blur(120px)",
            top: -200,
            right: -120,
          }}
        />
        {/* Bottom glow */}
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 300,
            borderRadius: "50%",
            background: "rgba(124,58,237,0.1)",
            filter: "blur(80px)",
            bottom: -100,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />

        {/* Eyebrow badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100,
            padding: "10px 24px",
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#a78bfa",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 18, letterSpacing: 2 }}>
            APPLE WATCH · iOS 17+ · FOR COUPLES
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "white",
            letterSpacing: -3,
            lineHeight: 1.05,
            textAlign: "center",
          }}
        >
          Sleep better.
        </div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            color: "#a78bfa",
            letterSpacing: -3,
            lineHeight: 1.05,
            marginBottom: 28,
          }}
        >
          Together.
        </div>

        {/* Subline */}
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            maxWidth: 720,
            lineHeight: 1.5,
            marginBottom: 52,
          }}
        >
          Nightly compatibility scores for couples — powered by Apple Watch
        </div>

        {/* URL pill */}
        <div
          style={{
            display: "flex",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 100,
            padding: "14px 40px",
            color: "rgba(255,255,255,0.55)",
            fontSize: 22,
            letterSpacing: 1,
          }}
        >
          sleeptwo.app
        </div>
      </div>
    ),
    { ...size }
  );
}
