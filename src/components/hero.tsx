import Image from 'next/image';
import { Terminal, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="w-full flex flex-col items-center text-center pt-8">
      <div className="relative mb-8">
        <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[#70a9a1]/40 shadow-[0_0_50px_rgba(112,169,161,0.25)]">
          <Image src="/profile.jpg" alt="Profile" fill sizes="224px" className="object-cover" priority />
        </div>
      </div>
      <h1 className="font-cinzel text-5xl sm:text-7xl font-bold uppercase tracking-widest text-[#e2f1f8] mb-4">
        Siti Nur Maisarah
      </h1>
      <p className="text-xl sm:text-2xl text-[#8bbcd4]">Full-Stack Developer • Game Engineer • AI/ML</p>
      <div className="mt-8 flex gap-4">
        <a href="#projects" className="px-6 py-3 rounded-xl bg-[#0c1a26] text-[#e2f1f8] border border-[#3b7a75]/60 flex items-center gap-2 text-xs font-mono">
          <Terminal size={16} /> View Projects
        </a>
        <a href="mailto:contact@example.com" className="px-6 py-3 rounded-xl twilight-card text-[#8ba2b5] flex items-center gap-2 text-xs font-mono">
          <Mail size={16} /> Contact
        </a>
      </div>
    </section>
  );
}