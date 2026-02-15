"use client";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900/50 via-dark-900/80 to-dark-900" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-600/10 border border-purple-600/20 text-purple-500 text-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
          Open Source — MIT Licensed
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Memory That{" "}
          <span className="gradient-text">Thinks</span>
        </h1>

        <p className="text-lg sm:text-xl text-dark-200 max-w-2xl mx-auto mb-10 leading-relaxed">
          A graph + vector hybrid memory system for AI agents. Memories decay like human recall, 
          form semantic relationships, and get smarter over time — not just bigger.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://github.com/0x000NULL/vex-memory"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3.5 rounded-xl text-base font-medium transition-all hover:scale-105 glow-purple"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            View on GitHub
          </a>
          <a
            href="#quickstart"
            className="inline-flex items-center gap-2 bg-dark-600 hover:bg-dark-500 text-white px-8 py-3.5 rounded-xl text-base font-medium transition-all border border-dark-400/50"
          >
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-dark-300 text-sm">
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
        </div>
      </div>
    </section>
  );
}
