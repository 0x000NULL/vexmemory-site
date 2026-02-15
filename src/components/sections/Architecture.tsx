import ScrollReveal from "@/components/ScrollReveal";

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Built on Proven Infrastructure
            </h2>
            <p className="text-dark-200 text-lg max-w-2xl mx-auto">
              One PostgreSQL instance. Three powerful extensions. No external dependencies.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative bg-dark-800/30 border border-dark-500/30 rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Architecture SVG Diagram */}
            <svg viewBox="0 0 900 420" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
              {/* Agent Box */}
              <rect x="20" y="150" width="160" height="100" rx="12" fill="#1a1a1a" stroke="#444" strokeWidth="1.5"/>
              <text x="100" y="190" textAnchor="middle" fill="#e5e5e5" fontSize="14" fontWeight="600">Your AI Agent</text>
              <text x="100" y="212" textAnchor="middle" fill="#999" fontSize="11">OpenClaw / LangChain</text>
              <text x="100" y="228" textAnchor="middle" fill="#999" fontSize="11">or any REST client</text>

              {/* Arrow 1 */}
              <line x1="180" y1="200" x2="260" y2="200" stroke="#7B2FBE" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="220" y="190" textAnchor="middle" fill="#666" fontSize="10">REST</text>

              {/* FastAPI Box */}
              <rect x="260" y="80" width="200" height="240" rx="12" fill="#1a1a1a" stroke="#7B2FBE" strokeWidth="1.5"/>
              <text x="360" y="110" textAnchor="middle" fill="#9B4FDE" fontSize="14" fontWeight="600">FastAPI :8000</text>
              
              <rect x="280" y="125" width="160" height="28" rx="6" fill="#2a2a2a"/>
              <text x="360" y="143" textAnchor="middle" fill="#ccc" fontSize="11">Store &amp; Query</text>
              
              <rect x="280" y="160" width="160" height="28" rx="6" fill="#2a2a2a"/>
              <text x="360" y="178" textAnchor="middle" fill="#ccc" fontSize="11">Context Endpoints</text>
              
              <rect x="280" y="195" width="160" height="28" rx="6" fill="#2a2a2a"/>
              <text x="360" y="213" textAnchor="middle" fill="#ccc" fontSize="11">Entity Extraction</text>
              
              <rect x="280" y="230" width="160" height="28" rx="6" fill="#2a2a2a"/>
              <text x="360" y="248" textAnchor="middle" fill="#ccc" fontSize="11">Consolidation</text>
              
              <rect x="280" y="265" width="160" height="28" rx="6" fill="#2a2a2a"/>
              <text x="360" y="283" textAnchor="middle" fill="#ccc" fontSize="11">Graph Traversal</text>

              {/* Arrow 2 */}
              <line x1="460" y1="200" x2="540" y2="200" stroke="#7B2FBE" strokeWidth="2" markerEnd="url(#arrowhead)"/>
              <text x="500" y="190" textAnchor="middle" fill="#666" fontSize="10">SQL</text>

              {/* PostgreSQL Box */}
              <rect x="540" y="60" width="340" height="300" rx="12" fill="#1a1a1a" stroke="#444" strokeWidth="1.5"/>
              <text x="710" y="92" textAnchor="middle" fill="#e5e5e5" fontSize="14" fontWeight="600">PostgreSQL 16</text>

              {/* pgvector */}
              <rect x="565" y="110" width="145" height="70" rx="8" fill="#2a2a2a" stroke="#7B2FBE" strokeWidth="1" strokeDasharray="4"/>
              <text x="637" y="140" textAnchor="middle" fill="#9B4FDE" fontSize="12" fontWeight="600">pgvector</text>
              <text x="637" y="158" textAnchor="middle" fill="#999" fontSize="10">384-dim embeddings</text>

              {/* Apache AGE */}
              <rect x="725" y="110" width="145" height="70" rx="8" fill="#2a2a2a" stroke="#7B2FBE" strokeWidth="1" strokeDasharray="4"/>
              <text x="797" y="140" textAnchor="middle" fill="#9B4FDE" fontSize="12" fontWeight="600">Apache AGE</text>
              <text x="797" y="158" textAnchor="middle" fill="#999" fontSize="10">Property graph</text>

              {/* Tables */}
              <rect x="565" y="200" width="305" height="40" rx="8" fill="#2a2a2a"/>
              <text x="717" y="225" textAnchor="middle" fill="#ccc" fontSize="11">memories · entities · relationships · feedback</text>

              {/* Decay & Consolidation */}
              <rect x="565" y="255" width="145" height="45" rx="8" fill="#2a2a2a"/>
              <text x="637" y="275" textAnchor="middle" fill="#999" fontSize="10">Temporal Decay</text>
              <text x="637" y="290" textAnchor="middle" fill="#666" fontSize="9">Ebbinghaus curves</text>

              <rect x="725" y="255" width="145" height="45" rx="8" fill="#2a2a2a"/>
              <text x="797" y="275" textAnchor="middle" fill="#999" fontSize="10">Consolidation</text>
              <text x="797" y="290" textAnchor="middle" fill="#666" fontSize="9">Sleep-cycle merging</text>

              {/* Ollama */}
              <rect x="260" y="360" width="200" height="50" rx="12" fill="#1a1a1a" stroke="#444" strokeWidth="1.5"/>
              <text x="360" y="385" textAnchor="middle" fill="#e5e5e5" fontSize="12" fontWeight="600">Ollama (all-minilm)</text>
              <text x="360" y="400" textAnchor="middle" fill="#666" fontSize="10">Local embeddings — optional</text>

              {/* Arrow Ollama */}
              <line x1="360" y1="360" x2="360" y2="320" stroke="#444" strokeWidth="1.5" strokeDasharray="4" markerEnd="url(#arrowhead-dim)"/>

              {/* Arrowhead definitions */}
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#7B2FBE"/>
                </marker>
                <marker id="arrowhead-dim" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#444"/>
                </marker>
              </defs>
            </svg>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
