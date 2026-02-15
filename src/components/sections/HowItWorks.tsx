import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Store",
    subtitle: "Memories go in with context",
    description: "Send raw text or structured data to the API. Vex automatically generates embeddings, extracts entities (people, decisions, events), tags emotions, and assigns importance scores.",
    visual: (
      <div className="font-mono text-sm bg-dark-900/80 rounded-lg p-4 border border-dark-500/30">
        <div className="text-dark-300">POST /memories</div>
        <div className="text-purple-500 mt-1">{`{`}</div>
        <div className="text-green-400 ml-4">{`"content": "We decided to use`}</div>
        <div className="text-green-400 ml-4">{`  PostgreSQL for the backend",`}</div>
        <div className="text-blue-400 ml-4">{`"type": "decision"`}</div>
        <div className="text-purple-500">{`}`}</div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Connect",
    subtitle: "Entities form a knowledge graph",
    description: "Extracted entities are linked in Apache AGE. \"PostgreSQL\" connects to \"backend\" via PART_OF. Similar memories auto-link above cosine 0.7. You can traverse relationships to find causal chains.",
    visual: (
      <div className="flex items-center justify-center gap-3 py-4">
        <div className="bg-purple-600/20 border border-purple-600/40 rounded-full px-4 py-2 text-sm text-purple-400">PostgreSQL</div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-px bg-purple-600/40" />
          <span className="text-xs text-dark-300 mt-1">PART_OF</span>
        </div>
        <div className="bg-purple-600/20 border border-purple-600/40 rounded-full px-4 py-2 text-sm text-purple-400">Backend</div>
        <div className="flex flex-col items-center">
          <div className="w-12 h-px bg-purple-600/40" />
          <span className="text-xs text-dark-300 mt-1">CAUSED_BY</span>
        </div>
        <div className="bg-purple-600/20 border border-purple-600/40 rounded-full px-4 py-2 text-sm text-purple-400">Decision</div>
      </div>
    ),
  },
  {
    num: "03",
    title: "Recall",
    subtitle: "Intelligent retrieval when you need it",
    description: "Query with natural language. Vex combines vector similarity, graph traversal, temporal relevance, and importance weighting to return exactly the context your agent needs — not just similar text.",
    visual: (
      <div className="font-mono text-sm bg-dark-900/80 rounded-lg p-4 border border-dark-500/30">
        <div className="text-dark-300">POST /context</div>
        <div className="text-purple-500">{`{`}</div>
        <div className="text-green-400 ml-4">{`"message": "What did we decide`}</div>
        <div className="text-green-400 ml-4">{`  about the database?"`}</div>
        <div className="text-purple-500">{`}`}</div>
        <div className="text-dark-400 mt-2">→ Returns decision + graph context</div>
      </div>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-dark-200 text-lg max-w-2xl mx-auto">
              Three steps from raw text to intelligent recall.
            </p>
          </div>
        </ScrollReveal>

        <div className="space-y-16">
          {steps.map((s, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className={`flex flex-col ${i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}>
                <div className="flex-1">
                  <div className="text-purple-600 font-mono text-sm mb-2">{s.num}</div>
                  <h3 className="text-2xl font-bold text-white mb-1">{s.title}</h3>
                  <p className="text-purple-400 text-sm mb-3">{s.subtitle}</p>
                  <p className="text-dark-200 leading-relaxed">{s.description}</p>
                </div>
                <div className="flex-1 w-full">{s.visual}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
