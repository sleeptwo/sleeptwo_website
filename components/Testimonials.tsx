import type { Translations } from "@/lib/translations";

const colors = ["#7C3AED", "#DB2777", "#A855F7"];

export default function Testimonials({ t }: { t: Translations["testimonials"] }) {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium mb-3 grad-text uppercase tracking-widest">{t.eyebrow}</p>
          <h2 className="font-bold" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: 1.2 }}>
            {t.headline}<br />
            <span className="grad-text">{t.headlineGrad}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.items.map((item, i) => (
            <div key={i} className="glass rounded-2xl p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 14 14" fill={colors[i]}>
                    <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4.5L7 9.5 3 12l1.5-4.5L1 5h4.5z"/>
                  </svg>
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text)" }}>
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white"
                  style={{ background: colors[i] }}
                >
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--text)" }}>{item.name}</p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>{item.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
