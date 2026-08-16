import { Reveal } from '@/components/reveal';

interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  place: string;
  description: string;
}

// NOTE: fill in your exact dates and diploma institution — placeholders below
// are marked so nothing fabricated ends up on the live site.
const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'diploma',
    period: 'TODO — e.g. 2021 – 2023',
    title: 'Diploma',
    place: 'TODO — your diploma institution & field',
    description: 'TODO — a line on what the diploma covered.',
  },
  {
    id: 'degree',
    period: 'TODO — e.g. 2023 – Present',
    title: 'Bachelor of Graphics & Multimedia Technology',
    place: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)',
    description: 'Focused on graphics, multimedia, and game development.',
  },
  {
    id: 'internship',
    period: 'TODO — e.g. Mar – Aug 2026',
    title: '24-Week Industrial Training',
    place: 'ROHM Electronics Malaysia (REMA), Information System Department',
    description:
      'Built full-stack internal tools spanning safety display systems, patrol workflows, and PC inventory management.',
  },
];

export function Experience() {
  return (
    <section id="experience">
      <h2 className="font-[Cinzel] text-3xl tracking-wide text-[var(--text-primary)] mb-10">
        Experience
      </h2>

      <div className="relative pl-8 border-l border-[var(--border-glass)] flex flex-col gap-12">
        {EXPERIENCE.map((item, i) => (
          <Reveal key={item.id} delay={i * 120}>
            <div className="relative">
              <span className="absolute -left-[41px] top-1 w-3 h-3 rounded-full bg-[var(--accent)] shadow-[0_0_12px_var(--accent)]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                {item.period}
              </span>
              <h3 className="font-[Cinzel] text-xl mt-1 text-[var(--text-primary)]">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1">{item.place}</p>
              <p className="text-sm text-[var(--text-muted)] mt-2 leading-relaxed max-w-md">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
