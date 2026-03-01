"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

export default function QuickStart() {
  const [activeTab, setActiveTab] = useState<"docker" | "sdk">("docker");

  return (
    <section id="quickstart" className="py-24 px-6 grid-bg">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Running in 60 Seconds
            </h2>
            <p className="text-dark-200 text-lg">
              Choose your setup: full server or Python SDK
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          {/* Tabs */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveTab("docker")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === "docker"
                  ? "bg-purple-600 text-white"
                  : "bg-dark-700 text-dark-300 hover:bg-dark-600"
              }`}
            >
              Docker (Full Server)
            </button>
            <button
              onClick={() => setActiveTab("sdk")}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeTab === "sdk"
                  ? "bg-purple-600 text-white"
                  : "bg-dark-700 text-dark-300 hover:bg-dark-600"
              }`}
            >
              Python SDK
            </button>
          </div>

          <div className="bg-dark-800/80 border border-dark-500/30 rounded-2xl overflow-hidden glow-purple">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-800 border-b border-dark-500/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-dark-300 text-xs font-mono">
                {activeTab === "docker" ? "terminal" : "python"}
              </span>
            </div>

            {/* Docker Tab */}
            {activeTab === "docker" && (
              <div className="p-6 font-mono text-sm space-y-6 overflow-x-auto">
                {/* Step 1 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Clone the repo</div>
                  <div className="text-green-400">
                    <span className="text-purple-400">$</span> git clone https://github.com/0x000NULL/vex-memory.git
                  </div>
                  <div className="text-green-400">
                    <span className="text-purple-400">$</span> cd vex-memory
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Start everything</div>
                  <div className="text-green-400">
                    <span className="text-purple-400">$</span> cp .env.example .env
                  </div>
                  <div className="text-green-400">
                    <span className="text-purple-400">$</span> docker compose up -d
                  </div>
                  <div className="text-dark-400 mt-1">
                    ✓ PostgreSQL 16 + AGE + pgvector ... <span className="text-green-400">ready</span><br/>
                    ✓ FastAPI server .................. <span className="text-green-400">ready</span><br/>
                    ✓ Dashboard ....................... <span className="text-green-400">ready</span><br/>
                    ✓ Embedding cache ................. <span className="text-green-400">enabled</span>
                  </div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Install Ollama (for embeddings)</div>
                  <div className="text-green-400">
                    <span className="text-purple-400">$</span> curl -fsSL https://ollama.com/install.sh | sh
                  </div>
                  <div className="text-green-400">
                    <span className="text-purple-400">$</span> ollama pull all-minilm
                  </div>
                </div>

                {/* Step 4 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Verify installation</div>
                  <div className="text-green-400">
                    <span className="text-purple-400">$</span> curl http://localhost:8000/health
                  </div>
                  <div className="text-dark-400 mt-1">
                    {`{"status": "ok", "database": true, "cache_stats": {"hit_rate": 0.0}}`}
                  </div>
                </div>
              </div>
            )}

            {/* SDK Tab */}
            {activeTab === "sdk" && (
              <div className="p-6 font-mono text-sm space-y-6 overflow-x-auto">
                {/* Step 1 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Install the SDK</div>
                  <div className="text-green-400">
                    <span className="text-purple-400">$</span> pip install vex-memory
                  </div>
                  <div className="text-dark-400 mt-1">
                    Collecting vex-memory<br/>
                    Successfully installed vex-memory-2.0.0
                  </div>
                </div>

                {/* Step 2 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Connect to server</div>
                  <div><span className="text-purple-400">from</span> <span className="text-white">vex_memory</span> <span className="text-purple-400">import</span> <span className="text-white">MemoryClient</span></div>
                  <div className="mt-2"><span className="text-white">client</span> <span className="text-purple-400">=</span> <span className="text-white">MemoryClient</span>(<span className="text-green-400">&quot;http://localhost:8000&quot;</span>)</div>
                </div>

                {/* Step 3 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Store your first memory</div>
                  <div><span className="text-white">memory</span> <span className="text-purple-400">=</span> <span className="text-white">client</span>.<span className="text-yellow-400">store</span>(</div>
                  <div className="ml-4"><span className="text-green-400">&quot;Vex Memory is running!&quot;</span>,</div>
                  <div className="ml-4">importance<span className="text-purple-400">=</span><span className="text-blue-400">0.8</span></div>
                  <div>)</div>
                </div>

                {/* Step 4 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Build intelligent context</div>
                  <div><span className="text-white">context</span> <span className="text-purple-400">=</span> <span className="text-white">client</span>.<span className="text-yellow-400">build_context</span>(</div>
                  <div className="ml-4">query<span className="text-purple-400">=</span><span className="text-green-400">&quot;What just happened?&quot;</span>,</div>
                  <div className="ml-4">token_budget<span className="text-purple-400">=</span><span className="text-blue-400">2000</span>,</div>
                  <div className="ml-4">use_mmr<span className="text-purple-400">=</span><span className="text-blue-400">True</span>  <span className="text-dark-400"># Use diversity algorithm</span></div>
                  <div>)</div>
                  <div className="mt-2 text-dark-400">
                    {`# Returns: {'memories': [...], 'metadata': {'total_tokens': 147, ...}}`}
                  </div>
                </div>

                {/* Step 5 */}
                <div>
                  <div className="text-dark-300 text-xs mb-1"># Format for your LLM</div>
                  <div><span className="text-white">formatted</span> <span className="text-purple-400">=</span> <span className="text-white">client</span>.<span className="text-yellow-400">format_context_for_llm</span>(<span className="text-white">context</span>)</div>
                  <div><span className="text-purple-400">print</span>(<span className="text-white">formatted</span>)</div>
                  <div className="mt-2 text-dark-400">
                    → Vex Memory is running! (importance: 0.8, score: 0.94)
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-dark-800/50 border border-dark-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
                <span className="text-white font-medium">Dashboard</span>
              </div>
              <p className="text-dark-300 text-xs">
                Real-time UI at <code className="text-purple-400 bg-dark-700 px-1 py-0.5 rounded">localhost:8000/dashboard</code>
              </p>
            </div>
            <div className="bg-dark-800/50 border border-dark-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                <span className="text-white font-medium">API Docs</span>
              </div>
              <p className="text-dark-300 text-xs">
                Interactive API at <code className="text-purple-400 bg-dark-700 px-1 py-0.5 rounded">localhost:8000/docs</code>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/0x000NULL/vex-memory-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium"
            >
              View full SDK documentation
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
