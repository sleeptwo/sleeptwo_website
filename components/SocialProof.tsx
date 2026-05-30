import type { Translations } from "@/lib/translations";

export default function SocialProof({ t }: { t: Translations["socialProof"] }) {
  return (
    <section className="py-12 px-6" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {t.map((stat) => (
          <div key={stat.label}>
            <p
              className="font-bold text-2xl mb-1 grad-text"
              style={stat.value.startsWith("$") ? { filter: "blur(6px)", userSelect: "none" } : undefined}
              aria-hidden={stat.value.startsWith("$") ? "true" : undefined}
            >
              {stat.value}
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
