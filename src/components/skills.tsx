import { SKILL_CATEGORIES } from '@/data/portfolio';

export function Skills() {
  return (
    <section id="skills">
      <h2 className="font-[Cinzel] text-3xl tracking-wide text-[var(--text-primary)] mb-8">
        Skills
      </h2>

      <div className="flex flex-col gap-8">
        {SKILL_CATEGORIES.map((category) => (
          <div key={category.title}>
            <h3 className="font-mono text-xs uppercase tracking-wider text-[var(--accent)] mb-4">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => {
                const isDarkColor = item.color.toLowerCase() === '#000000';

                return (
                  <div
                    key={item.name}
                    className="twilight-card flex items-center gap-2 px-3.5 py-2.5 rounded-lg border border-[var(--border-glass)] bg-[var(--surface-glass)] backdrop-blur-md"
                  >
                    <span
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: isDarkColor ? 'var(--text-primary)' : item.color,
                        boxShadow: `0 0 12px ${item.color}66`,
                      }}
                    />
                    <span className="font-mono text-xs text-[var(--text-secondary)]">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
