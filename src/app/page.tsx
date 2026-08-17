'use client';

import { useState, useRef, useEffect } from 'react';
import { useColdSmokeCanvas } from '@/hooks/useColdSmokeCanvas';
import { Project } from '@/data/portfolio';

import { Navbar, Theme } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { ProjectModal } from '@/components/projectModal';
import { Experience } from '@/components/experience';
import { Skills } from '@/components/skills';
import { Moon } from '@/components/moon';
import { Reveal } from '@/components/reveal';
import { Finale } from '@/components/finale';

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
      {/* Background 3D Canvas -- stars + smoke */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 w-full h-full" />

      {/* Moon */}
      <Moon />


      {/* Cinematic Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-20 shadow-[inset_0_0_90px_rgba(112,169,161,0.16)] border-[6px] border-[var(--bg-base)]/30" />

      <Navbar theme={theme} onThemeChange={setTheme} />

      {/* Main Page Layout -- pt-32 clears the fixed navbar (h-16) with room to spare */}
      <main className="relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto px-8">
          <Hero />
        </div>

        {/* Full-bleed on purpose — the forest scene reveal needs room to
            breathe on large screens rather than being boxed into the same
            narrow column as the rest of the content */}
        <Reveal>
          <Projects onSelectProject={setSelectedProject} />
        </Reveal>

        <div className="max-w-[1400px] mx-auto px-8">
          <Reveal>
            <Experience />
          </Reveal>

          <Reveal>
            <Skills />
          </Reveal>
        </div>
      </main>

      {/* Prom-scene finale */}
      <div className="relative z-10">
        <Finale />
      </div>

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
