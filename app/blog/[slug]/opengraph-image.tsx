import { ImageResponse } from "next/og";
import { getPost, posts } from "@/lib/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

const categoryColors: Record<string, { pill: string; text: string; glow: string }> = {
  "Sleep Science":        { pill: "rgba(124,58,237,0.25)", text: "#a78bfa", glow: "rgba(124,58,237,0.18)" },
  "Relationship Science": { pill: "rgba(219,39,119,0.25)", text: "#f472b6", glow: "rgba(219,39,119,0.15)" },
  "Apple Watch & Tech":   { pill: "rgba(14,165,233,0.25)",  text: "#38bdf8", glow: "rgba(14,165,233,0.13)" },
  "HRV & Health":         { pill: "rgba(16,185,129,0.25)",  text: "#34d399", glow: "rgba(16,185,129,0.13)" },
  "Sleep Tips":           { pill: "rgba(245,158,11,0.25)",  text: "#fbbf24", glow: "rgba(245,158,11,0.12)" },
  "SleepTwo Guide":       { pill: "rgba(124,58,237,0.25)", text: "#a78bfa", glow: "rgba(124,58,237,0.18)" },
  "Relationship Tips":    { pill: "rgba(219,39,119,0.25)", text: "#f472b6", glow: "rgba(219,39,119,0.15)" },
  "Life Stages":          { pill: "rgba(14,165,233,0.25)",  text: "#38bdf8", glow: "rgba(14,165,233,0.13)" },
  "App Reviews":          { pill: "rgba(16,185,129,0.25)",  text: "#34d399", glow: "rgba(16,185,129,0.13)" },
  "Sleep Issues":         { pill: "rgba(239,68,68,0.25)",   text: "#fca5a5", glow: "rgba(239,68,68,0.12)" },
  "Technology":           { pill: "rgba(14,165,233,0.25)",  text: "#38bdf8", glow: "rgba(14,165,233,0.13)" },
};

const fallback = { pill: "rgba(124,58,237,0.25)", text: "#a78bfa", glow: "rgba(124,58,237,0.18)" };

export default function Image({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  const cat = post ? (categoryColors[post.category] ?? fallback) : fallback;
  const title = post?.title ?? "SleepTwo Blog";
  const category = post?.category ?? "Article";
  const fontSize = title.length > 60 ? 50 : title.length > 45 ? 58 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#07070f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            width: 800,
            height: 800,
            borderRadius: "50%",
            background: cat.glow,
            filter: "blur(140px)",
            bottom: -350,
            right: -250,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(124,58,237,0.1)",
            filter: "blur(80px)",
            top: -150,
            left: -100,
          }}
        />

        {/* Top row: category pill */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              background: cat.pill,
              color: cat.text,
              fontSize: 18,
              fontWeight: 600,
              padding: "9px 22px",
              borderRadius: 100,
              letterSpacing: 0.3,
            }}
          >
            {category}
          </div>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 18 }}>·</span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: 18 }}>SleepTwo Blog</span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize,
            fontWeight: 700,
            color: "white",
            letterSpacing: -1.5,
            lineHeight: 1.15,
            maxWidth: 1000,
          }}
        >
          {title}
        </div>

        {/* Bottom branding row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {/* Gradient logo square */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 11,
                background: "linear-gradient(135deg, #7C3AED, #DB2777)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.8)",
                fontSize: 24,
                fontWeight: 600,
                letterSpacing: -0.5,
              }}
            >
              SleepTwo
            </span>
          </div>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 20 }}>
            sleeptwo.app/blog
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
