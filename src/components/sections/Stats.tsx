import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  {
    value: "<15ms",
    label: "Semantic Query Latency",
    detail: "pgvector HNSW index on 384-dim embeddings",
  },
  {
    value: "100K+",
    label: "Memory Capacity",
    detail: "PostgreSQL scales with your hardware",
  },
  {
    value: "3.2×",
    label: "Better Recall vs Flat Files",
    detail: "Graph + vector hybrid retrieval",
  },
  {
    value: "60s",
    label: "Time to Deploy",
    detail: "docker compose up and you're live",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for Performance
            </h2>
            <p className="text-dark-200 text-lg max-w-2xl mx-auto">
              Real numbers from a real system. Currently running with 500+ memories and 1,500+ indexed entities.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center bg-dark-800/50 border border-dark-500/30 rounded-2xl p-8 hover:border-purple-600/30 transition-all">
                <div className="text-4xl font-bold gradient-text mb-2">{s.value}</div>
                <div className="text-white font-medium mb-1">{s.label}</div>
                <div className="text-dark-300 text-sm">{s.detail}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
