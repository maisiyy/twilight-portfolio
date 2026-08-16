import { Project } from '@/src/data/portfolio';
import { X, ExternalLink } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl bg-[#0c1a26] border border-[#3b7a75]/60 rounded-2xl p-6 shadow-2xl text-[#e2f1f8]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8ba2b5] hover:text-[#e2f1f8] transition-colors"
        >
          <X size={20} />
        </button>

        <span className="text-xs font-mono text-[#70a9a1] uppercase">{project.category}</span>
        <h3 className="font-cinzel text-2xl font-bold mt-1 mb-4">{project.title}</h3>

        <p className="text-sm text-[#8ba2b5] mb-6">{project.summary}</p>

        <h4 className="text-xs font-mono text-[#70a9a1] uppercase mb-2">Key Highlights</h4>
        <ul className="list-disc list-inside text-xs text-[#8ba2b5] space-y-1 mb-6">
          {project.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-[#3b7a75]/20 text-[#8bbcd4] text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3b7a75] text-[#e2f1f8] text-xs font-mono hover:bg-[#3b7a75]/80 transition-colors"
        >
          View Source Code <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}