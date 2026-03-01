import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: "🧮",
    title: "Smart Context Prioritization",
    description: "Token-aware memory selection with multi-factor scoring (similarity + importance + recency + diversity). Never exceed your LLM's context budget.",
    badge: "v1.1.0+",
  },
  {
    icon: "⚡",
    title: "1254x Performance Boost",
    description: "Multi-layer embedding cache reduces query latency from 23.6ms to 0.02ms. 80-90% hit rate in production.",
    badge: "v2.0.1",
    highlight: true,
  },
  {
    icon: "🎓",
    title: "Adaptive Learning",
    description: "System learns optimal weights from your usage patterns. Self-improving memory selection with privacy-first analytics.",
    badge: "v2.0.0",
  },
  {
    icon: "🎲",
    title: "MMR Diversity",
    description: "Maximal Marginal Relevance eliminates redundancy in retrieved memories. Get comprehensive, non-repetitive context.",
    badge: "v1.2.0",
  },
  {
    icon: "🕸️",
    title: "Graph Relationships",
    description: "Apache AGE property graph connects memories with typed edges—CAUSED_BY, SUPPORTS, CONTRADICTS. Traverse 2+ hops to find context vector search misses.",
    badge: "Core",
  },
  {
    icon: "🐍",
    title: "Python SDK + CLI",
    description: "Developer-friendly client library with type-safe API, auto-retry, and circuit breaker. Plus command-line tool for scripting.",
    badge: "v2.0.0",
  },
  {
    icon: "🤝",
    title: "Multi-Agent Namespaces",
    description: "Share memories across sub-agents with granular access control. Eliminate cold starts in multi-agent systems.",
    badge: "v1.3.0",
  },
  {
    icon: "🔒",
    title: "Privacy-First & GDPR",
    description: "Self-hosted, no vendor lock-in. Analytics opt-out, query sanitization, data export/deletion APIs. SOC 2 ready.",
    badge: "Core",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Everything Your Agent Needs to Remember
            </h2>
            <p className="text-dark-200 text-lg max-w-2xl mx-auto">
              Not just storage—a cognitive memory layer that models how humans actually recall information.
              Now with adaptive learning and 1000x+ performance gains.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className={`bg-dark-800/50 border rounded-2xl p-6 transition-all h-full group relative overflow-hidden
                ${f.highlight 
                  ? 'border-purple-600/50 bg-dark-800/80 glow-purple' 
                  : 'border-dark-500/30 hover:border-purple-600/30 hover:bg-dark-800/80'
                }`}>
                {f.highlight && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs px-3 py-1 rounded-bl-lg font-medium">
                    NEW
                  </div>
                )}
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{f.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                </div>
                <p className="text-dark-200 text-sm leading-relaxed mb-3">{f.description}</p>
                <span className="inline-block text-xs px-2 py-1 rounded bg-dark-700/50 text-purple-400 border border-purple-600/20">
                  {f.badge}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <p className="text-dark-300 text-sm mb-4">
              Plus: Memory Decay, Sleep Consolidation, Entity Extraction, Contradiction Detection, Emotion Tagging, and more.
            </p>
            <a 
              href="https://github.com/0x000NULL/vex-memory#-features"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium"
            >
              View all features
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
