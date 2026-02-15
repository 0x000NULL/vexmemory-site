import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: "🕸️",
    title: "Graph Relationships",
    description: "Apache AGE property graph connects memories with typed edges — CAUSED_BY, SUPPORTS, CONTRADICTS. Traverse 2+ hops to find context vector search misses.",
  },
  {
    icon: "🔍",
    title: "Semantic Vector Search",
    description: "pgvector embeddings (384-dim) enable similarity search across your entire memory store. Find relevant context even when exact words don't match.",
  },
  {
    icon: "⏳",
    title: "Temporal Memory Decay",
    description: "Ebbinghaus-inspired forgetting curves with 30-day half-life. Frequently accessed memories resist decay. Importance adjusts automatically.",
  },
  {
    icon: "🤖",
    title: "Auto Entity Extraction",
    description: "NLP pipeline (spaCy NER + pattern matching) extracts decisions, events, facts, and learnings from raw text — no LLM call needed.",
  },
  {
    icon: "😴",
    title: "Sleep-Cycle Consolidation",
    description: "Clusters semantically similar memories, creates summaries, and lowers importance of originals. Like your brain during sleep.",
  },
  {
    icon: "⚡",
    title: "REST API (FastAPI)",
    description: "Full CRUD, semantic query, context endpoints for agent integration, graph traversal, timeline queries, and feedback loops — all over HTTP.",
  },
  {
    icon: "🐳",
    title: "Docker One-Command Deploy",
    description: "git clone, docker compose up, done. PostgreSQL, AGE, pgvector, and the API all configured. Production-ready in 60 seconds.",
  },
  {
    icon: "📊",
    title: "Built-in Dashboard",
    description: "Real-time web UI showing memory stats, types, emotions, entity graphs, and recent activity. No extra setup needed.",
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
              Not just storage — a cognitive memory layer that models how humans actually recall information.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="bg-dark-800/50 border border-dark-500/30 rounded-2xl p-6 hover:border-purple-600/30 hover:bg-dark-800/80 transition-all h-full group">
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-dark-200 text-sm leading-relaxed">{f.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
