'use client';

import { useEffect } from 'react';
import { X, ExternalLink, FolderGit2 } from 'lucide-react';
import { Project } from '@/data/portfolio';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="twilight-card relative w-full max-w-lg rounded-xl border border-[var(--border-glass)] bg-[var(--surface-glass-strong)] backdrop-blur-xl p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X size={20} />
        </button>

        <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
          {project.tagline}
        </span>

        <h3 className="font-[Cinzel] text-2xl mt-2 mb-4 text-[var(--text-primary)]">
          {project.title}
        </h3>

        <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
          {project.summary}
        </p>

        <ul className="space-y-2 mb-6">
          {project.highlights.map((point, i) => (
            <li key={i} className="flex gap-2 text-sm text-[var(--text-primary)]">
              <span className="text-[var(--accent)] mt-0.5">▸</span>
              {point}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded-md border border-[var(--border-glass)] text-[var(--text-muted)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {(project.link || project.github) && (
          <div className="flex gap-3 pt-4 border-t border-[var(--border-glass)]">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[var(--accent)] hover:opacity-80 transition-opacity mt-4"
              >
                <ExternalLink size={14} /> View live
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-[var(--text-primary)] hover:opacity-80 transition-opacity mt-4"
              >
                <FolderGit2 size={14} /> View code
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
