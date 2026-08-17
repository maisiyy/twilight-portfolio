import Image from 'next/image';
import { Mail } from 'lucide-react';
import { Reveal } from '@/components/reveal';

export function Finale() {
  return (
    <section id="contact" className="screen-section relative flex flex-col items-center justify-center text-center py-24 px-8">
      <Reveal>
        <div
          className="relative w-full max-w-3xl mx-auto mb-10"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 75% 70% at 50% 42%, black 55%, transparent 92%)',
            maskImage:
              'radial-gradient(ellipse 75% 70% at 50% 42%, black 55%, transparent 92%)',
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,var(--accent)_0%,transparent_70%)] opacity-25 blur-2xl" />
          <Image
            src="/canopy.png"
            alt="A fairy-light canopy, evoking a twilight prom scene"
            width={1536}
            height={1024}
            className="relative w-full h-auto"
          />
        </div>
      </Reveal>

      <Reveal delay={150}>
        {/* <h2 className="font-[Cinzel] text-3xl sm:text-4xl tracking-wide text-[var(--text-primary)] mb-4">
          One Last Dance
        </h2> */}
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-md mx-auto mb-8 leading-relaxed">
          Thanks for wandering through. If something here caught your eye, I&apos;d love to talk.
        </p>
        <a
          href="mailto:contact@example.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl twilight-card text-[var(--text-primary)] text-xs font-mono hover:border-[var(--accent)]/60 transition-colors"
        >
          <Mail size={16} /> Get in touch
        </a>
      </Reveal>
    </section>
  );
}
