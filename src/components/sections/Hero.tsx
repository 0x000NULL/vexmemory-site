"use client";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/40 to-dark-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-500 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          v2.0.1 — Production Ready — MIT Licensed
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          The Memory System That{" "}
          <span className="gradient-text">Gets Smarter</span>{" "}
          Over Time
        </h1>

        <p className="text-lg sm:text-xl text-dark-200 max-w-3xl mx-auto mb-10 leading-relaxed">
          Vex Memory combines graph traversal, vector search, and adaptive learning to give your AI agents 
          human-like recall—intelligent context selection, automatic forgetting, and <strong className="text-purple-400">1254x faster retrieval</strong>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com/0x000NULL/vex-memory-sdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl text-base font-medium transition-all hover:scale-105 glow-purple"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
            Try the SDK
          </a>
          <a
            href="https://github.com/0x000NULL/vex-memory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-dark-600 hover:bg-dark-500 text-white px-8 py-3.5 rounded-xl text-base font-medium transition-all border border-dark-400/50"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View on GitHub
          </a>
          <a
            href="#performance"
            className="inline-flex items-center gap-2 bg-transparent hover:bg-dark-600 text-purple-400 border border-purple-600/30 px-8 py-3.5 rounded-xl text-base font-medium transition-all"
          >
            See Performance
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </a>
        </div>

        {/* Code Example */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-dark-800/90 border border-dark-500/30 rounded-2xl overflow-hidden glow-purple text-left">
            <div className="flex items-center justify-between px-4 py-2 bg-dark-800 border-b border-dark-500/30">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 text-dark-300 text-xs font-mono">Python SDK</span>
              </div>
              <span className="text-xs text-dark-400">Quick Start</span>
            </div>
            <div className="p-6 font-mono text-sm space-y-2">
              <div className="text-purple-400"># Install</div>
              <div className="text-green-400">pip install vex-memory</div>
              <div className="mt-4 text-purple-400"># Use immediately</div>
              <div><span className="text-purple-400">from</span> <span className="text-white">vex_memory</span> <span className="text-purple-400">import</span> <span className="text-white">MemoryClient</span></div>
              <div className="mt-2"><span className="text-white">client</span> <span className="text-purple-400">=</span> <span className="text-white">MemoryClient</span>()</div>
              <div className="mt-2 text-dark-300"># Store important context</div>
              <div><span className="text-white">client</span>.<span className="text-yellow-400">store</span>(<span className="text-green-400">&quot;Completed Q1 roadmap&quot;</span>, importance<span className="text-purple-400">=</span><span className="text-blue-400">0.9</span>)</div>
              <div className="mt-2 text-dark-300"># Get smart, token-aware context</div>
              <div><span className="text-white">context</span> <span className="text-purple-400">=</span> <span className="text-white">client</span>.<span className="text-yellow-400">build_context</span>(</div>
              <div className="ml-4">query<span className="text-purple-400">=</span><span className="text-green-400">&quot;What did we accomplish?&quot;</span>,</div>
              <div className="ml-4">token_budget<span className="text-purple-400">=</span><span className="text-blue-400">2000</span>,</div>
              <div className="ml-4">use_mmr<span className="text-purple-400">=</span><span className="text-blue-400">True</span>  <span className="text-dark-400"># Maximize diversity</span></div>
              <div>)</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-dark-300 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-purple-500 font-mono font-bold">PostgreSQL</span>
          </div>
          <span className="text-dark-500">+</span>
          <div className="flex items-center gap-2">
            <span className="text-purple-500 font-mono font-bold">Apache AGE</span>
          </div>
          <span className="text-dark-500">+</span>
          <div className="flex items-center gap-2">
            <span className="text-purple-500 font-mono font-bold">pgvector</span>
          </div>
          <span className="text-dark-500">+</span>
          <div className="flex items-center gap-2">
            <span className="text-purple-500 font-mono font-bold">FastAPI</span>
          </div>
          <span className="text-dark-500">+</span>
          <div className="flex items-center gap-2">
            <span className="text-purple-500 font-mono font-bold">Python SDK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
