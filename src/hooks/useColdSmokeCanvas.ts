'use client';

import { useEffect, RefObject } from 'react';
import * as THREE from 'three';

export function useColdSmokeCanvas(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    // 1. Check if the canvas element is mounted in the DOM
    const canvas = canvasRef.current;
    if (!canvas) return;

    // 2. Setup Three.js core components: Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Helper: Create radial gradient textures programmatically using 2D Canvas
    const createStarTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 32;
      pCanvas.height = 32;
      const ctx = pCanvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(180, 220, 240, 0.9)');
        gradient.addColorStop(0.6, 'rgba(112, 169, 161, 0.3)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    // 3. Build Star Particle Geometry
    const starCount = 1200;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 26;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));

    const starMaterial = new THREE.PointsMaterial({
      size: 0.1,
      map: createStarTexture(),
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    const starParticles = new THREE.Points(starGeometry, starMaterial);
    scene.add(starParticles);

    // 4. Handle Window Resize Events
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // 5. Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      // Rotate stars slowly
      starParticles.rotation.y = elapsedTime * 0.012;
      starParticles.rotation.x = Math.sin(elapsedTime * 0.005) * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    // 6. Cleanup Function (Runs when component unmounts)
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, [canvasRef]);
}