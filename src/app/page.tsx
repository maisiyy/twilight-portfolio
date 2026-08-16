'use client';

import { useState, useRef, useEffect } from 'react';
import { useColdSmokeCanvas } from '@/src/hooks/useColdSmokeCanvas';
import { Project } from '@/src/data/portfolio';

import { Hero } from '@/src/components/hero';
import { Projects } from '@/src/components/projects';
import { ProjectModal } from '@/src/components/projectModal';

export default function Home() {
  const [theme, setTheme] = useState<'twilight' | 'eclipse'>('twilight');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize background Canvas via custom hook
  useColdSmokeCanvas(canvasRef);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen selection:bg-[#3b7a75] selection:text-[#e2f1f8] w-full overflow-x-hidden">
      {/* Background 3D Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 w-full h-full" />

      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-20 shadow-[inset_0_0_90px_rgba(112,169,161,0.16)] border-[6px] border-[#03060a]/30" />

      {/* Main Page Layout */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-8 py-16 flex flex-col gap-24">
        <Hero />
        <Projects onSelectProject={setSelectedProject} />
      </main>

      {/* Modal Popup (Rendered conditionally) */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}