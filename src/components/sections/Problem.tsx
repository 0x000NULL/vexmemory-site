import ScrollReveal from "@/components/ScrollReveal";

const problems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Flat Files Don't Scale",
    description: "JSON dumps and markdown logs grow linearly. No relationships, no decay, no way to find what matters when you have 10,000+ memories.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: "Vector Search Alone Misses Context",
    description: "Embedding similarity finds related text, but can't traverse relationships. \"What caused this decision?\" requires graph traversal, not cosine distance.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Everything Stays Forever",
    description: "Human memory forgets unimportant things. Most AI systems don't. Without temporal decay, noise drowns out signal as context windows fill.",
  },
];

export default function Problem() {
  return (
    <section className="py-24 px-6 grid-bg">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              AI Memory Is Broken
            </h2>
            <p className="text-dark-200 text-lg max-w-2xl mx-auto">
              Current approaches force a choice between simplicity and intelligence. Vex Memory gives you both.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="bg-dark-800/50 border border-dark-500/30 rounded-2xl p-8 hover:border-purple-600/30 transition-all group">
                <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{p.title}</h3>
                <p className="text-dark-200 leading-relaxed">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
