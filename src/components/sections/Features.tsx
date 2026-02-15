import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: "🕸️",
    title: "Graph Relationships",
    description: "Apache AGE property graph connects memories with typed edges — CAUSED_BY, SUPPORTS, CONTRADICTS. Traverse 2+ hops to find context vector search misses.",
  },
  {
    icon: "🔍",
    title: "Hybrid Semantic Search",
    description: "pgvector embeddings + keyword matching for best-of-both-worlds retrieval. Optional Qdrant integration for dedicated vector search at scale.",
  },
  {
    icon: "⏳",
    title: "Importance Decay",
    description: "Ebbinghaus-inspired forgetting curves with 30-day half-life. Frequently accessed memories resist decay. Unused ones fade naturally.",
  },
  {
    icon: "🤖",
    title: "Auto-Extraction",
    description: "NLP pipeline (spaCy NER + pattern matching) extracts decisions, events, facts, and learnings from raw text — no LLM call needed.",
  },
  {
    icon: "😴",
    title: "Sleep Consolidation",
    description: "Clusters semantically similar memories, creates summaries, and lowers importance of originals. Like your brain during sleep. Cron-schedulable.",
  },
  {
    icon: "💭",
    title: "Emotion Tagging",
    description: "Keyword-based sentiment analysis tags memories with dominant emotions — joy, pride, frustration, excitement, concern, relief, curiosity, satisfaction.",
  },
  {
    icon: "🧠",
    title: "Smart Startup Recall",
    description: "Session-start endpoint pulls relevant context from graph + vector search based on the user's first message. Agents wake up with full context.",
  },
  {
    icon: "💾",
    title: "Pre-Compaction Dump",
    description: "Flush important context to the graph DB before LLM context window compaction. Prevents memory loss during long sessions.",
  },
  {
    icon: "⚡",
    title: "Contradiction Detection",
    description: "Automatically identifies conflicting memories and creates CONTRADICTS graph edges, helping agents resolve inconsistencies.",
  },
  {
    icon: "🐳",
    title: "Docker One-Command Deploy",
    description: "git clone, docker compose up, done. PostgreSQL, AGE, pgvector, and the API all configured. Optional Qdrant with --profile qdrant.",
  },
  {
    icon: "📊",
    title: "Built-in Dashboard",
    description: "Real-time web UI showing memory stats, types, emotions, entity graphs, and recent activity. No extra setup needed.",
  },
  {
    icon: "📈",
    title: "Feedback & Learning",
    description: "Track which memories are used, ignored, or corrected. Importance scores adjust based on observed usefulness over time.",
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
