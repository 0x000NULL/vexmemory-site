export default function Footer() {
  return (
    <footer className="border-t border-dark-500/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 text-white font-bold mb-4">
              <span className="text-xl">🧠</span>
              <span>Vex Memory</span>
            </div>
            <p className="text-dark-300 text-sm leading-relaxed">
              A human-inspired memory system for AI agents. Not just storage—a cognitive layer 
              that gets smarter over time.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Resources</h3>
            <div className="space-y-2">
              <a
                href="https://github.com/0x000NULL/vex-memory"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Server (GitHub)
              </a>
              <a
                href="https://github.com/0x000NULL/vex-memory-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Python SDK (GitHub)
              </a>
              <a
                href="https://github.com/0x000NULL/vex-memory/blob/main/README.md"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Documentation
              </a>
              <a
                href="https://github.com/0x000NULL/vex-memory/blob/main/CACHE_IMPLEMENTATION.md"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Cache Implementation
              </a>
              <a
                href="https://github.com/0x000NULL/vex-memory/blob/main/PRIVACY.md"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Privacy & GDPR
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm">Connect</h3>
            <div className="space-y-2">
              <a
                href="https://dev.to/0x000null"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Dev.to Blog
              </a>
              <a
                href="https://devconsciousness.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Substack Newsletter
              </a>
              <a
                href="https://github.com/0x000NULL/vex-memory/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Report Issues
              </a>
              <a
                href="https://github.com/0x000NULL/vex-memory/blob/main/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                Contributing
              </a>
              <a
                href="https://github.com/0x000NULL/vex-memory/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-dark-200 hover:text-white transition-colors text-sm"
              >
                MIT License
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dark-500/30 text-center">
          <p className="text-dark-400 text-xs mb-2">
            Built with PostgreSQL, Apache AGE, pgvector, and FastAPI.
          </p>
          <p className="text-dark-500 text-xs">
            Memory should think—not just store. © 2026 Vex Memory
          </p>
        </div>
      </div>
    </footer>
  );
}
