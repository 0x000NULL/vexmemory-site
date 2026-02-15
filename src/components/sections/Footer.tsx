export default function Footer() {
  return (
    <footer className="border-t border-dark-500/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="text-xl">🧠</span>
            <span>Vex Memory</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/0x000NULL/vex-memory"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-200 hover:text-white transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://dev.to/0x000null"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-200 hover:text-white transition-colors text-sm"
            >
              Dev.to
            </a>
            <a
              href="https://devconsciousness.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-200 hover:text-white transition-colors text-sm"
            >
              Substack
            </a>
            <a
              href="https://github.com/0x000NULL/vex-memory/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-200 hover:text-white transition-colors text-sm"
            >
              MIT License
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-dark-400 text-xs">
          Built with PostgreSQL, Apache AGE, pgvector, and FastAPI.
          Memory should think — not just store.
        </div>
      </div>
    </footer>
  );
}
