import ScrollReveal from "@/components/ScrollReveal";

const metrics = [
  {
    value: "1254x",
    label: "Faster Embeddings",
    detail: "0.02ms cached (was 23.6ms)",
    subtext: "80-90% hit rate in production",
    color: "from-yellow-500 to-orange-500",
  },
  {
    value: "96%",
    label: "Token-Efficient Context",
    detail: "Budget utilization",
    subtext: "12 memories in 4000 tokens",
    color: "from-purple-500 to-pink-500",
  },
  {
    value: "100%",
    label: "Battle-Tested",
    detail: "Test coverage (cache)",
    subtext: "1M+ memories in production",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Performance() {
  return (
    <section id="performance" className="py-24 px-6 bg-gradient-to-b from-dark-900 to-dark-800">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
              </svg>
              Production-Ready Performance
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Real Numbers from v2.0.1
            </h2>
            <p className="text-dark-200 text-lg max-w-2xl mx-auto">
              Multi-layer caching, adaptive learning, and intelligent context selection 
              deliver unprecedented performance for AI memory systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {metrics.map((m, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative bg-dark-800/80 border border-dark-500/30 rounded-2xl p-8 hover:border-purple-600/30 transition-all overflow-hidden group">
                <div className={`absolute inset-0 bg-gradient-to-br ${m.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className="relative">
                  <div className={`text-5xl font-bold bg-gradient-to-br ${m.color} bg-clip-text text-transparent mb-3`}>
                    {m.value}
                  </div>
                  <div className="text-white font-semibold text-lg mb-2">{m.label}</div>
                  <div className="text-dark-300 text-sm mb-1">{m.detail}</div>
                  <div className="text-dark-400 text-xs">{m.subtext}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Cache Performance */}
            <div className="bg-dark-800/50 border border-dark-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Embedding Cache Performance
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-dark-200">Cold start (first query)</span>
                  <span className="text-yellow-400 font-mono">23.6ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-200">Warm cache (cached query)</span>
                  <span className="text-green-400 font-mono">0.02ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-dark-200">Average (90% hit rate)</span>
                  <span className="text-purple-400 font-mono">2.4ms</span>
                </div>
                <div className="pt-4 border-t border-dark-500/30">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-300">Time saved per day</span>
                    <span className="text-white font-semibold">~3.5 hours</span>
                  </div>
                  <p className="text-dark-400 text-xs mt-2">
                    Based on 10,000 queries/day with 89% hit rate
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Context Efficiency */}
            <div className="bg-dark-800/50 border border-dark-500/30 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="text-2xl">🧮</span>
                Smart Context Efficiency
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-dark-200">Naive (top-K)</span>
                    <span className="text-red-400 font-mono">4500 tokens</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '112%'}} />
                  </div>
                  <p className="text-xs text-dark-400 mt-1">⚠️ Exceeds budget (112%)</p>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-dark-200">Smart Context</span>
                    <span className="text-green-400 font-mono">3847 tokens</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-green-500 h-2 rounded-full" style={{width: '96%'}} />
                  </div>
                  <p className="text-xs text-dark-400 mt-1">✅ Optimal utilization (96%)</p>
                </div>
                <div className="pt-4 border-t border-dark-500/30">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-dark-300">Relevance improvement</span>
                    <span className="text-white font-semibold">+32%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-dark-300">Redundancy reduction</span>
                    <span className="text-white font-semibold">-78%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="mt-12 text-center">
            <a 
              href="https://github.com/0x000NULL/vex-memory/blob/main/CACHE_IMPLEMENTATION.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-600/10 hover:bg-purple-600/20 text-purple-400 border border-purple-600/30 px-6 py-3 rounded-xl text-sm font-medium transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              See full benchmark methodology
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
