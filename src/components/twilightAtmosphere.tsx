'use client';

import { useEffect } from 'react';

export function TwilightAtmosphere() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateProgress = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      root.style.setProperty('--scroll-progress', String(height > 0 ? window.scrollY / height : 0));
    };

    const moveMoonlight = (event: PointerEvent) => {
      if (reduceMotion.matches || event.pointerType === 'touch') return;
      root.style.setProperty('--pointer-x', `${event.clientX}px`);
      root.style.setProperty('--pointer-y', `${event.clientY}px`);
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
    window.addEventListener('pointermove', moveMoonlight, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      window.removeEventListener('pointermove', moveMoonlight);
    };
  }, []);

  return <div className="moonlight-cursor fixed inset-0 z-[1] pointer-events-none" aria-hidden="true" />;
}
