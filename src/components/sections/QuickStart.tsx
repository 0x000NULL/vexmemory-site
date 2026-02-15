import ScrollReveal from "@/components/ScrollReveal";

export default function QuickStart() {
  return (
    <section id="quickstart" className="py-24 px-6 grid-bg">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Running in 60 Seconds
            </h2>
            <p className="text-dark-200 text-lg">
              Three commands. That&apos;s it.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="bg-dark-800/80 border border-dark-500/30 rounded-2xl overflow-hidden glow-purple">
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-dark-800 border-b border-dark-500/30">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-dark-300 text-xs font-mono">terminal</span>
            </div>

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
                  ✓ Dashboard ....................... <span className="text-green-400">ready</span>
                </div>
              </div>

              {/* Step 3 */}
              <div>
                <div className="text-dark-300 text-xs mb-1"># Store your first memory</div>
                <div className="text-green-400">
                  <span className="text-purple-400">$</span> curl -X POST http://localhost:8000/memories \
                </div>
                <div className="text-green-400 ml-4">
                  -H &quot;Content-Type: application/json&quot; \
                </div>
                <div className="text-green-400 ml-4">
                  {`-d '{"content": "Vex Memory is running!", "type": "event"}'`}
                </div>
                <div className="text-dark-400 mt-1">
                  {`{"id": "a1b2c3...", "status": "created", "entities_extracted": 1}`}
                </div>
              </div>

              {/* Step 4 */}
              <div>
                <div className="text-dark-300 text-xs mb-1"># Query it back</div>
                <div className="text-green-400">
                  <span className="text-purple-400">$</span> curl -X POST http://localhost:8000/query \
                </div>
                <div className="text-green-400 ml-4">
                  {`-d '{"query": "What just happened?"}'`}
                </div>
                <div className="text-dark-400 mt-1">
                  → Vex Memory is running! <span className="text-purple-400">(score: 0.94)</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-center text-dark-300 text-sm mt-6">
            Dashboard available at{" "}
            <code className="text-purple-400 bg-dark-700 px-2 py-0.5 rounded">localhost:8000/dashboard</code>
            {" "}• API docs at{" "}
            <code className="text-purple-400 bg-dark-700 px-2 py-0.5 rounded">localhost:8000/docs</code>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
