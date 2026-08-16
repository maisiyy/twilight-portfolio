'use client';

import { RefObject, useEffect } from 'react';
import * as THREE from 'three';

const STAR_COUNT = 1400;
const SMOKE_PLANE_COUNT = 6;

export function useColdSmokeCanvas(canvasRef: RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // ---- Starfield ----
    const starGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);

    for (let i = 0; i < STAR_COUNT; i++) {
      const radius = 80 + Math.random() * 220;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      sizes[i] = Math.random() * 1.8 + 0.4;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const starMaterial = new THREE.PointsMaterial({
      color: 0xbfe3e0,
      size: 1.1,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ---- Cold smoke gradient planes ----
    const smokeTexture = createSmokeTexture();
    const smokePlanes: THREE.Mesh[] = [];

    for (let i = 0; i < SMOKE_PLANE_COUNT; i++) {
      const material = new THREE.MeshBasicMaterial({
        map: smokeTexture,
        transparent: true,
        opacity: 0.05 + Math.random() * 0.05,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });
      const geometry = new THREE.PlaneGeometry(140, 140);
      const plane = new THREE.Mesh(geometry, material);

      const angle = (i / SMOKE_PLANE_COUNT) * Math.PI * 2;
      const distance = 90;
      plane.position.set(Math.cos(angle) * distance, Math.sin(angle) * distance, -40);
      plane.rotation.z = Math.random() * Math.PI;

      smokePlanes.push(plane);
      scene.add(plane);
    }

    // ---- Resize handling ----
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ---- Animation loop ----
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        stars.rotation.y = elapsed * 0.008;
        stars.rotation.x = elapsed * 0.003;

        smokePlanes.forEach((plane, i) => {
          plane.rotation.z += 0.0003 * (i % 2 === 0 ? 1 : -1);
          plane.position.y += Math.sin(elapsed * 0.15 + i) * 0.01;
        });
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      starGeometry.dispose();
      starMaterial.dispose();
      smokeTexture.dispose();
      smokePlanes.forEach((plane) => {
        plane.geometry.dispose();
        (plane.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [canvasRef]);
}

function createSmokeTexture(): THREE.Texture {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;

  const gradient = ctx.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, 'rgba(112, 169, 161, 0.35)');
  gradient.addColorStop(0.5, 'rgba(59, 122, 117, 0.12)');
  gradient.addColorStop(1, 'rgba(3, 6, 10, 0)');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}
