'use client';

import { useState } from 'react';
import { PROJECTS, Project } from '@/src/data/portfolio';
import { ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export function Projects({ onSelectProject }: ProjectsProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'game' | 'ai'>('all');

  // Filter projects dynamically based on category state
  const filtered = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="w-full flex flex-col gap-8">
      <div className="flex justify-between items-center border-b border-[#3b7a75]/20 pb-4">
        <h2 className="font-cinzel text-3xl text-[#e2f1f8]">Featured Projects</h2>
        
        {/* Category Filter Buttons */}
        <div className="flex gap-2">
          {(['all', 'web', 'game', 'ai'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono uppercase transition-all ${
                filter === cat ? 'bg-[#3b7a75] text-[#e2f1f8]' : 'text-[#8ba2b5]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className="twilight-card rounded-xl p-6 cursor-pointer hover:-translate-y-1 transition-all border border-[#3b7a75]/30"
          >
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-mono text-[#70a9a1]">{project.tagline}</span>
              <ExternalLink size={16} className="text-[#8ba2b5]" />
            </div>
            <h3 className="font-cinzel text-lg text-[#e2f1f8] mb-2">{project.title}</h3>
            <p className="text-xs text-[#8ba2b5] font-light">{project.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}