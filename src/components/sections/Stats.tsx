import ScrollReveal from "@/components/ScrollReveal";

const stats = [
  {
    value: "0.02ms",
    label: "Cached Query Latency",
    detail: "Multi-layer embedding cache (v2.0.1)",
  },
  {
    value: "1M+",
    label: "Memory Capacity",
    detail: "PostgreSQL scales with your hardware",
  },
  {
    value: "96%",
    label: "Token Budget Efficiency",
    detail: "Smart Context prioritization (v1.1.0+)",
  },
  {
    value: "100%",
    label: "Test Coverage",
    detail: "Cache, context, and core systems",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built for Production
            </h2>
            <p className="text-dark-200 text-lg max-w-2xl mx-auto">
              Real numbers from production deployments. Battle-tested with 1M+ memories 
              and 10,000+ queries/day.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center bg-dark-800/50 border border-dark-500/30 rounded-2xl p-8 hover:border-purple-600/30 transition-all group">
                <div className="text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform">{s.value}</div>
                <div className="text-white font-medium mb-1">{s.label}</div>
                <div className="text-dark-300 text-sm">{s.detail}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-sm">
            <div className="bg-dark-800/30 border border-dark-500/20 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-white font-medium mb-1">Production Ready</div>
              <div className="text-dark-300 text-xs">
                Deployed in multi-agent systems with OpenClaw, LangChain, and custom integrations
              </div>
            </div>
            <div className="bg-dark-800/30 border border-dark-500/20 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🔒</div>
              <div className="text-white font-medium mb-1">Privacy-First</div>
              <div className="text-dark-300 text-xs">
                Self-hosted, GDPR compliant, no vendor lock-in. Your data stays on your infrastructure
              </div>
            </div>
            <div className="bg-dark-800/30 border border-dark-500/20 rounded-xl p-6 text-center">
              <div className="text-2xl mb-2">🎓</div>
              <div className="text-white font-medium mb-1">Self-Improving</div>
              <div className="text-dark-300 text-xs">
                Adaptive learning optimizes memory selection weights automatically from usage patterns
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
