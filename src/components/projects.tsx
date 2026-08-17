'use client';

import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { Project, PROJECTS } from '@/data/portfolio';
import { ProjectsBackground } from '@/components/projectsBackground';

type Filter = 'all' | Project['category'];

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Game', value: 'game' },
  { label: 'AI', value: 'ai' },
];

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<Filter>('all');

  const visibleProjects =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      id="projects"
      className="screen-section relative isolate overflow-hidden w-full py-20 lg:py-32 flex flex-col justify-center"
    >
      <ProjectsBackground />

      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <h2 className="font-[Cinzel] text-3xl tracking-wide text-[var(--text-primary)]">
            Featured Projects
          </h2>

          <div className="flex items-center gap-1 font-mono text-xs">
            {FILTERS.map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`px-3 py-1.5 rounded-md border transition-colors duration-300 uppercase tracking-wider ${
                  filter === value
                    ? 'bg-[var(--accent)] text-[var(--accent-contrast)] border-[var(--accent)]'
                    : 'border-[var(--border-glass)] text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:border-[var(--accent)]/50'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="twilight-card group text-left p-6 rounded-xl border border-[var(--border-glass)] bg-[var(--surface-glass)] backdrop-blur-md transition-all duration-300 hover:border-[var(--accent)]/50 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                  {project.tagline}
                </span>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && <Code size={14} className="text-[var(--text-muted)]" />}
                  {project.link && <ExternalLink size={14} className="text-[var(--text-muted)]" />}
                </div>
              </div>

              <h3 className="font-[Cinzel] text-xl mb-2 text-[var(--text-primary)]">
                {project.title}
              </h3>

              <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                {project.summary}
              </p>
            </button>
          ))}
        </div>

        {visibleProjects.length === 0 && (
          <p className="font-mono text-sm text-[var(--text-muted)] text-center py-12">
            No {filter} projects yet — check back soon.
          </p>
        )}
      </div>
    </section>
  );
}
