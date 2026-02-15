import ScrollReveal from "@/components/ScrollReveal";

const updates = [
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
      "Pre-compaction dump script for long-session memory preservation",
      "Feedback loops — memories adjust importance based on actual usage",
      "Temporal reasoning with natural language date queries",
    ],
  },
  {
    date: "Feb 2026",
    title: "v0.1 — Initial Release",
    items: [
      "Core memory CRUD with pgvector embeddings",
      "Apache AGE graph relationships",
      "FastAPI REST API",
      "Docker Compose one-command deploy",
      "Built-in dashboard",
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
              Recent improvements to Vex Memory
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {updates.map((update, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="bg-dark-800/50 border border-dark-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-mono bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">
                    {update.date}
                  </span>
                  <h3 className="text-xl font-semibold text-white">{update.title}</h3>
                </div>
                <ul className="space-y-2">
                  {update.items.map((item, j) => (
                    <li key={j} className="text-dark-200 text-sm flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
