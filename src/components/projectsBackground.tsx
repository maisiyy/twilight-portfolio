'use client';

import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';

// Each layer is a soft blurred cloud positioned at a different spot/depth,
// staggered so fog rolls in over ~2s rather than all layers popping at once.
const FOG_LAYERS = [
  { top: '5%', left: '-15%', width: '70%', height: '60%', delay: 500 },
  { top: '35%', left: '45%', width: '80%', height: '65%', delay: 900 },
  { top: '60%', left: '-10%', width: '65%', height: '55%', delay: 1300 },
  { top: '10%', left: '55%', width: '55%', height: '50%', delay: 1700 },
];

export function ProjectsBackground() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.2);

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* The scenery itself — Ken Burns style reveal (fade + slow scale down) */}
      <Image
        src="/featuredProjects.png"
        alt=""
        fill
        sizes="100vw"
        className={`project-scenery ${isVisible ? 'is-visible' : ''}`}
      />
      <div className="project-scenery-tint absolute inset-0" />

      {/* Fog layers, rolling in staggered after the scenery appears */}
      {FOG_LAYERS.map((layer, i) => (
        <div
          key={i}
          className={`fog-layer ${isVisible ? 'is-visible' : ''}`}
          style={{
            top: layer.top,
            left: layer.left,
            width: layer.width,
            height: layer.height,
            animationDelay: isVisible ? `${layer.delay}ms` : undefined,
          }}
        />
      ))}

      {/* Fades the scenery into the page background at the top/bottom edges
          instead of hard-cutting, so it reads as part of the page, not a box */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, var(--bg-base) 0%, transparent 20%, transparent 80%, var(--bg-base) 100%)',
        }}
      />
    </div>
  );
}
