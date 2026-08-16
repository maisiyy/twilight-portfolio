import Image from 'next/image';
import { Terminal, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="w-full flex flex-col items-center text-center pt-8">
      <div className="relative mb-8">
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[var(--accent)]/40 shadow-[0_0_50px_rgba(112,169,161,0.25)]">
          <Image src="/profile.jpg" alt="Profile" fill sizes="224px" className="object-cover" priority />
        </div>
      </div>

      <h1 className="font-[Cinzel] text-5xl sm:text-7xl font-bold uppercase tracking-widest text-[var(--text-primary)] mb-4">
        Siti Nur Maisarah
      </h1>

      <p className="text-xl sm:text-2xl text-[var(--text-secondary)]">
        Full-Stack Developer • Game Engineer • AI/ML
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-xl bg-[var(--surface-glass-strong)] text-[var(--text-primary)] border border-[var(--border-glass)] flex items-center gap-2 text-xs font-mono hover:border-[var(--accent)]/60 transition-colors"
        >
          <Terminal size={16} /> View Projects
        </a>
        <a
          href="mailto:contact@example.com"
          className="px-6 py-3 rounded-xl twilight-card text-[var(--text-secondary)] flex items-center gap-2 text-xs font-mono hover:text-[var(--text-primary)] transition-colors"
        >
          <Mail size={16} /> Contact
        </a>
      </div>
    </section>
  );
}
