export default function SocialProof() {
  const stats = [
    { value: "2 min", label: "to set up as a couple" },
    { value: "Apple Watch", label: "automatic tracking" },
    { value: "Nightly", label: "compatibility score" },
    { value: "$6.99", label: "per month, covers both" },
  ];

  return (
    <section className="py-12 px-6" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-bold text-2xl mb-1 grad-text">{stat.value}</p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
