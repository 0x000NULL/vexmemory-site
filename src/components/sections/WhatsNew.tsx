import ScrollReveal from "@/components/ScrollReveal";

const updates = [
  {
    date: "Mar 2026",
    title: "v2.0.1 — Embedding Cache (1254x Speedup)",
    items: [
      "Multi-layer embedding cache: memory LRU + database persistence + query result cache",
      "1254x speedup for cached embeddings (23.6ms → 0.02ms)",
      "80-90% cache hit rate in production deployments",
      "Automatic cache warmup and eviction strategies",
      "100% test coverage for cache implementation",
      "Cache stats API endpoint for monitoring",
      "Time savings: ~3.5 hours/day on 10K queries",
    ],
    highlight: true,
  },
  {
    date: "Mar 2026",
    title: "v2.0.0 — Adaptive Learning & SDK",
    items: [
      "Adaptive learning: system learns optimal weights from usage patterns",
      "Auto-tuning SDK fetches learned weights automatically",
      "Privacy-first analytics with opt-out and query sanitization",
      "GDPR compliance: data export/deletion APIs",
      "Python SDK with type-safe API and circuit breaker",
      "CLI tool for memory management and scripting",
      "Weight presets for different use cases (balanced, relevance, recency)",
    ],
  },
  {
    date: "Mar 2026",
    title: "v1.2.0 — Advanced Diversity & Entity Extraction",
    items: [
      "MMR (Maximal Marginal Relevance) diversity algorithm",
      "Entity extraction with spaCy NER for improved context",
      "Multi-factor scoring: similarity + importance + recency + diversity + entities",
      "Lambda tuning for relevance vs diversity balance",
      "Type and namespace priority scoring",
    ],
  },
  {
    date: "Mar 2026",
    title: "v1.1.0 — Smart Context Prioritization",
    items: [
      "Token-aware memory selection with budget enforcement",
      "Multi-factor scoring balances relevance, importance, and recency",
      "Never exceed LLM context limits",
      "96% budget utilization (vs 112% with naive top-K)",
      "32% relevance improvement, 78% redundancy reduction",
    ],
  },
  {
    date: "Feb 2026",
    title: "v0.2 — Cognitive Memory Engine",
    items: [
      "Hybrid pgvector + Qdrant search (optional Qdrant for scale)",
      "Auto-extraction pipeline — no LLM needed for memory ingestion",
      "Smart startup recall — agents wake up with relevant context",
      "Sleep consolidation engine with cron scheduling",
      "Emotion tagging across 8 sentiment categories",
      "Importance decay with Ebbinghaus forgetting curves",
      "Contradiction detection via CONTRADICTS graph edges",
    ],
  },
];

export default function WhatsNew() {
  return (
    <section id="changelog" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What&apos;s New
            </h2>
            <p className="text-dark-200 text-lg">
              Continuous improvements shipping every month. From v0.1 to v2.0.1 in 4 weeks.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {updates.map((update, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className={`bg-dark-800/50 border rounded-2xl p-8 relative overflow-hidden
                ${update.highlight 
                  ? 'border-purple-600/50 glow-purple' 
                  : 'border-dark-500/30'
                }`}>
                {update.highlight && (
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-yellow-500 to-orange-500 text-white text-xs px-4 py-1.5 rounded-bl-lg font-medium">
                    ⚡ LATEST
                  </div>
                )}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-mono bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
                    {update.date}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{update.title}</h3>
                </div>
                <ul className="space-y-2">
                  {update.items.map((item, j) => (
                    <li key={j} className="text-dark-200 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/0x000NULL/vex-memory/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border border-purple-600/30 px-6 py-3 rounded-xl text-sm font-medium transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              View full changelog
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
