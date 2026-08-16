'use client';

import { useState, useRef, useEffect } from 'react';
import { useColdSmokeCanvas } from '@/hooks/useColdSmokeCanvas';
import { Project } from '@/data/portfolio';

import { Navbar, Theme } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { ProjectModal } from '@/components/projectModal';
import { Skills } from '@/components/skills';

export default function Home() {
  const [theme, setTheme] = useState<Theme>('twilight');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize background Canvas via custom hook
  useColdSmokeCanvas(canvasRef);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="relative min-h-screen selection:bg-[var(--accent)] selection:text-[var(--accent-contrast)] w-full overflow-x-hidden bg-[var(--bg-base)]">
      {/* Background 3D Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 w-full h-full" />

      {/* Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-20 shadow-[inset_0_0_90px_rgba(112,169,161,0.16)] border-[6px] border-[var(--bg-base)]/30" />

      <Navbar theme={theme} onThemeChange={setTheme} />

      {/* Main Page Layout — pt-32 clears the fixed navbar (h-16) with room to spare */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-8 pt-32 pb-16 flex flex-col gap-24">
        <Hero />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
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
