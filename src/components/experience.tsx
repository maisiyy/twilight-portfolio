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
    period: '2021 – 2023',
    title: 'Diploma of Computer Science',
    place: 'Universiti Malaysia Pahang',
    description: 'Final Year Project : E-Blood Donation System using PHP and mySQL.',
  },
  {
    id: 'degree',
    period: '2023 – 2026',
    title: 'Bachelor of Computer Science (Graphics & Multimedia Technology)',
    place: 'Universiti Malaysia Pahang Al-Sultan Abdullah (UMPSA)',
    description: 'Final Year Project : MY-HYGIENE : Using Image Processing in a 2D Educational Game for Young Learners using Unity and C#.',
  },
  {
    id: 'internship',
    period: 'March – August 2026',
    title: 'Information System Intern',
    place: 'ROHM Electronics Malaysia (REMA), Information System Department',
    description:
      '',
  },
];

export function Experience() {
  return (
    <section id="experience" className="screen-section mx-auto w-full max-w-3xl flex flex-col justify-center">
      <h2 className="font-[Cinzel] text-3xl tracking-wide text-[var(--text-primary)] mb-10 text-center">
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
