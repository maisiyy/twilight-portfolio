'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import * as THREE from 'three';
import { 
  Sparkles, 
  FolderGit2, 
  Globe, 
  Mail, 
  ExternalLink, 
  Code2, 
  Briefcase, 
  Award, 
  X, 
  Volume2, 
  VolumeX, 
  Terminal, 
  Cpu, 
  Layers,
  Database,
  Brain,
  Moon,
  Film,
  Music,
  Heart,
  GraduationCap,
  Server
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'web' | 'game' | 'ai';
  tagline: string;
  summary: string;
  highlights: string[];
  techStack: string[];
  link: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'all' | 'web' | 'game' | 'ai'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [theme, setTheme] = useState<'twilight' | 'new-moon' | 'eclipse' | 'breaking-dawn'>('twilight');
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Apply Theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // THREE.JS STAR FIELD & FRAME-EDGE COLD SMOKE ENGINE
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Texture Generator: Soft Twinkling Star Texture
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

    // Texture Generator: Cold Fog / Smoke Texture
    const createSmokeTexture = () => {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 128;
      pCanvas.height = 128;
      const ctx = pCanvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
        gradient.addColorStop(0, 'rgba(195, 225, 238, 0.25)');
        gradient.addColorStop(0.35, 'rgba(112, 169, 161, 0.12)');
        gradient.addColorStop(0.7, 'rgba(20, 35, 50, 0.04)');
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(64, 64, 64, 0, Math.PI * 2);
        ctx.fill();
      }
      return new THREE.CanvasTexture(pCanvas);
    };

    // 1. STARFIELD SYSTEM (Blinking Stardust Background)
    const starCount = 1500;
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

    // 2. FRAME EDGE COLD SMOKE (Spawning misty puffs specifically near screen borders)
    const edgeSmokeCount = 60;
    const edgeSmokeGeometry = new THREE.BufferGeometry();
    const edgeSmokePositions = new Float32Array(edgeSmokeCount * 3);
    const edgeSmokeData: { x: number; y: number; z: number; side: 'left' | 'right' | 'top' | 'bottom'; speedY: number; driftX: number }[] = [];

    for (let i = 0; i < edgeSmokeCount; i++) {
      const sides: ('left' | 'right' | 'top' | 'bottom')[] = ['left', 'right', 'top', 'bottom'];
      const side = sides[i % 4];
      let x = 0, y = 0;

      if (side === 'left') {
        x = -11 + (Math.random() * 2);
        y = (Math.random() - 0.5) * 14;
      } else if (side === 'right') {
        x = 11 - (Math.random() * 2);
        y = (Math.random() - 0.5) * 14;
      } else if (side === 'top') {
        x = (Math.random() - 0.5) * 22;
        y = 6 - (Math.random() * 1.5);
      } else {
        x = (Math.random() - 0.5) * 22;
        y = -6 + (Math.random() * 1.5);
      }

      const z = (Math.random() - 0.5) * 4;
      edgeSmokePositions[i * 3] = x;
      edgeSmokePositions[i * 3 + 1] = y;
      edgeSmokePositions[i * 3 + 2] = z;

      edgeSmokeData.push({
        x,
        y,
        z,
        side,
        speedY: (Math.random() - 0.5) * 0.003,
        driftX: (Math.random() - 0.5) * 0.002
      });
    }

    edgeSmokeGeometry.setAttribute('position', new THREE.BufferAttribute(edgeSmokePositions, 3));

    const edgeSmokeMaterial = new THREE.PointsMaterial({
      size: 3.8,
      map: createSmokeTexture(),
      transparent: true,
      opacity: 0.7,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    const edgeSmokeParticles = new THREE.Points(edgeSmokeGeometry, edgeSmokeMaterial);
    scene.add(edgeSmokeParticles);

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Twinkle Stars
      starParticles.rotation.y = elapsedTime * 0.012;
      starParticles.rotation.x = Math.sin(elapsedTime * 0.005) * 0.02;

      // Animate Edge Cold Smoke (Gentle rolling along frame boundaries)
      const posArr = edgeSmokeGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < edgeSmokeCount; i++) {
        const item = edgeSmokeData[i];

        item.x += item.driftX + Math.sin(elapsedTime + i) * 0.001;
        item.y += item.speedY + Math.cos(elapsedTime + i) * 0.001;

        posArr[i * 3] = item.x;
        posArr[i * 3 + 1] = item.y;
      }
      edgeSmokeGeometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2516/2516-preview.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }

    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play();
      setIsPlayingAudio(true);
    }
  };

  const skillCategories = [
    {
      title: "Web & Programming ()",
      items: [
        { name: "Python", icon: Terminal, color: "text-[#8bbcd4]" },
        { name: "C#", icon: Code2, color: "text-[#70a9a1]" },
        { name: "PHP", icon: Code2, color: "text-[#8bbcd4]" },
        { name: "JavaScript", icon: Code2, color: "text-[#70a9a1]" },
        { name: "HTML / CSS", icon: Globe, color: "text-[#8bbcd4]" },
      ]
    },
    {
      title: "Frontend & Game ()",
      items: [
        { name: "Unity 2D/3D", icon: Cpu, color: "text-[#70a9a1]" },
        { name: "Tailwind CSS", icon: Layers, color: "text-[#8bbcd4]" },
        { name: "Next.js", icon: Globe, color: "text-[#70a9a1]" },
        { name: "Figma", icon: Sparkles, color: "text-[#8bbcd4]" },
      ]
    },
    {
      title: "Backend & APIs ()",
      items: [
        { name: "REST API", icon: Terminal, color: "text-[#70a9a1]" },
        { name: "Flask", icon: Terminal, color: "text-[#8bbcd4]" },
        { name: "Aura SQL", icon: Database, color: "text-[#70a9a1]" },
        { name: "MediaPipe", icon: Brain, color: "text-[#8bbcd4]" },
      ]
    },
    {
      title: "Databases & Storage ()",
      items: [
        { name: "MySQL", icon: Database, color: "text-[#70a9a1]" },
        { name: "SQL Server", icon: Database, color: "text-[#8bbcd4]" },
      ]
    },
    {
      title: "Cloud & DevOps ()",
      items: [
        { name: "AWS Beanstalk", icon: Globe, color: "text-[#70a9a1]" },
        { name: "Streamlit Cloud", icon: Layers, color: "text-[#8bbcd4]" },
        { name: "Git / GitHub", icon: FolderGit2, color: "text-[#70a9a1]" },
        { name: "GitHub Actions", icon: Cpu, color: "text-[#8bbcd4]" },
      ]
    },
    {
      title: "System Admin ()",
      items: [
        { name: "MikroTik Winbox", icon: Terminal, color: "text-[#70a9a1]" },
        { name: "Active Directory", icon: Cpu, color: "text-[#8bbcd4]" },
      ]
    }
  ];

  const projects: Project[] = [
    {
      id: 'my-hygiene',
      title: 'MY-HYGIENE Computer Vision Game',
      category: 'game',
      tagline: 'Award-Winning FYP Educational Architecture',
      summary: 'Transforms children hygiene learning using MediaPipe computer vision gesture tracking[cite: 1].',
      highlights: [
        'Built with Unity 2D & C# for primary school health education[cite: 1].',
        'Real-time physical gesture detection using MediaPipe[cite: 1].',
        'Awarded Best Booth at FYPro-Com Exhibition (SEM 1 2025/2026)[cite: 1].'
      ],
      techStack: ['Unity 2D', 'C#', 'MediaPipe', 'Computer Vision'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'rema-lti',
      title: 'REMA LTI Safety Display & Portal',
      category: 'web',
      tagline: 'Enterprise Safety Signage & REST Infrastructure',
      summary: 'Real-time safety display board and incident management system for corporate office signage[cite: 1].',
      highlights: [
        'Real-time display dashboard built with Vite, JavaScript, and CSS[cite: 1].',
        'PHP management portal enabling safety officers to log incidents and manage display slides[cite: 1].',
        'REST API endpoints powered by SQL Server, Aura SQL Query Builder, and Rakit Validator[cite: 1].'
      ],
      techStack: ['PHP', 'SQL Server', 'Vite', 'JavaScript', 'REST API'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'pc-inventory',
      title: 'PC Compliance & Inventory System',
      category: 'web',
      tagline: 'Enterprise Workstation Security Monitor',
      summary: 'Full-stack workstation OS compliance app with role-based controls and CSV workflows[cite: 1].',
      highlights: [
        'Tracks Windows OS compliance across corporate environments[cite: 1].',
        'Built using Laravel, MySQL, and Tailwind CSS[cite: 1].',
        'Includes role-based access control (RBAC) and CSV export/import modules[cite: 1].'
      ],
      techStack: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'energy-ml',
      title: 'Household Energy Load Predictor',
      category: 'ai',
      tagline: 'End-to-End Machine Learning Pipeline',
      summary: 'Predictive smart city resource solution utilizing Random Forest Regression and automated CI/CD[cite: 1].',
      highlights: [
        'Processed UCI Appliances Energy dataset with weather and indoor sensor data[cite: 1].',
        'Deployed real-time prediction dashboard on Streamlit Cloud[cite: 1].',
        'Automated testing and deployment using GitHub Actions CI/CD[cite: 1].'
      ],
      techStack: ['Python', 'Streamlit', 'Random Forest', 'GitHub Actions'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'edu-lms',
      title: 'Edu Fairuzullah Cloud LMS',
      category: 'web',
      tagline: 'AWS Elastic Beanstalk Prototype',
      summary: 'Cloud-native learning management platform featuring secure role-based permissions[cite: 1].',
      highlights: [
        'Developed with Python Flask backend[cite: 1].',
        'Deployed onto AWS Elastic Beanstalk cloud architecture[cite: 1].'
      ],
      techStack: ['Python', 'Flask', 'AWS Elastic Beanstalk'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'aegis',
      title: 'AEGIS: Escape Protocol',
      category: 'game',
      tagline: '3D Tactical Survival Experience',
      summary: 'Sci-fi 3D game featuring pathfinding AI enemies and custom shield mechanics[cite: 1].',
      highlights: [
        'Engineered in Unity 3D with C# combat scripts[cite: 1].',
        'Includes 3 interactive maps and dynamic AI enemy pathing[cite: 1].'
      ],
      techStack: ['Unity 3D', 'C#', 'Game AI'],
      link: 'https://github.com/maisiyy'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="relative min-h-screen selection:bg-[#3b7a75] selection:text-[#e2f1f8] w-full overflow-x-hidden">
      
      {/* Three.js Canvas */}
      <canvas ref={canvasRef} id="three-canvas" />

      {/* Frame Edge Cold Smoke Vignette Overlays (Soft Frost / Smoke on screen edges) */}
      <div className="fixed inset-0 pointer-events-none z-20 shadow-[inset_0_0_90px_rgba(112,169,161,0.16)] border-[6px] border-[#03060a]/30" />
      <div className="fixed inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_65%,rgba(3,6,10,0.85)_100%)]" />

      {/* Orbiting Moon */}
      <div className="moving-moon" />

      {/* Pine Forest Silhouettes */}
      <div className="pine-canopy-left" />
      <div className="pine-canopy-right" />

      {/* Ambient Audio Switch */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full twilight-card text-[#70a9a1] hover:text-[#e2f1f8] transition-all flex items-center gap-2 text-xs shadow-2xl cursor-pointer"
      >
        {isPlayingAudio ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} />}
        <span className="hidden sm:inline font-mono">{isPlayingAudio ? 'Cold Atmosphere: ON' : 'Atmosphere'}</span>
      </button>

      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#03060a]/75 border-b border-[#3b7a75]/20">
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-16 py-4 flex items-center justify-between">
          
          <div className="flex items-center gap-2">
            <Moon className="text-[#70a9a1] fill-[#70a9a1]" size={22} />
            <span className="font-cinzel text-xl font-bold tracking-widest text-[#e2f1f8]">
              MAI<span className="text-[#70a9a1] font-mono text-sm">.dev</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm text-[#8ba2b5]">
            <a href="#home" className="hover:text-[#e2f1f8] transition-colors">Home</a>
            <a href="#skills" className="hover:text-[#e2f1f8] transition-colors">Skills</a>
            <a href="#experience" className="hover:text-[#e2f1f8] transition-colors text-amber-200 font-medium">Experience</a>
            <a href="#projects" className="hover:text-[#e2f1f8] transition-colors">Projects</a>
            <a href="#prom-scene" className="hover:text-[#e2f1f8] transition-colors">Prom Glade</a>
          </nav>

          {/* Twilight Theme Picker */}
          <div className="flex items-center gap-1.5 twilight-card px-3 py-1.5 rounded-full text-xs">
            <Film size={14} className="text-[#70a9a1] mr-1 hidden sm:block" />
            <button 
              onClick={() => setTheme('twilight')} 
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${theme === 'twilight' ? 'bg-[#70a9a1] text-[#04070c] font-bold' : 'text-[#8ba2b5]'}`}
            >
              1. Twilight
            </button>
            <button 
              onClick={() => setTheme('new-moon')} 
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${theme === 'new-moon' ? 'bg-amber-600 text-black font-bold' : 'text-[#8ba2b5]'}`}
            >
              2. New Moon
            </button>
            <button 
              onClick={() => setTheme('eclipse')} 
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${theme === 'eclipse' ? 'bg-rose-600 text-white font-bold' : 'text-[#8ba2b5]'}`}
            >
              3. Eclipse
            </button>
            <button 
              onClick={() => setTheme('breaking-dawn')} 
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer ${theme === 'breaking-dawn' ? 'bg-yellow-500 text-black font-bold' : 'text-[#8ba2b5]'}`}
            >
              4. Breaking Dawn
            </button>
          </div>

        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 w-full max-w-[1700px] mx-auto px-8 sm:px-20 py-16 flex flex-col gap-36">
        
        {/* --- SECTION 1: HERO HOME --- */}
        <section id="home" className="w-full flex flex-col items-center text-center pt-8">
          <div className="relative mb-8">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-[#70a9a1]/40 shadow-[0_0_50px_rgba(112,169,161,0.25)]">
              <Image
                src="/profile.jpg"
                alt="Siti Nur Maisarah"
                fill
                sizes="(max-width: 640px) 192px, 224px"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <p className="font-cinzel text-xs text-[#70a9a1] tracking-[0.35em] uppercase mb-3 animate-pulse">
            &ldquo;About three things I was absolutely positive...&rdquo;
          </p>

          <h1 className="font-cinzel text-5xl sm:text-7xl lg:text-8xl tracking-widest uppercase drop-shadow-[0_0_35px_rgba(112,169,161,0.4)] mb-4">
            Siti Nur Maisarah
          </h1>

          <p className="text-xl sm:text-3xl text-[#8bbcd4] max-w-5xl font-light leading-relaxed">
            Full-Stack Developer • Game Engineer • AI/ML Integrator
          </p>

          <p className="mt-4 text-sm sm:text-lg text-[#8ba2b5] max-w-4xl leading-relaxed font-light">
            Computer Science Graduate from Universiti Malaysia Pahang Al-Sultan Abdullah (CGPA 3.52)[cite: 1]. Crafting production web applications, computer vision interactive games, and cloud solutions under evergreen misty skies[cite: 1].
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-[#0c1a26] text-[#e2f1f8] border border-[#3b7a75]/60 flex items-center gap-3 text-xs tracking-wider uppercase font-medium hover:border-[#8bbcd4] hover:shadow-[0_0_25px_rgba(112,169,161,0.4)] transition-all"
            >
              <Terminal size={18} className="text-[#70a9a1]" />
              Explore Projects
            </a>
            <a
              href="mailto:maisarahmzn@gmail.com"
              className="px-8 py-4 rounded-xl twilight-card text-[#8ba2b5] hover:text-[#e2f1f8] flex items-center gap-3 text-xs tracking-wider uppercase font-medium transition-all"
            >
              <Mail size={18} />
              Get In Touch
            </a>
          </div>
        </section>

        {/* --- SECTION 2: TECH STACK --- */}
        <section id="skills" className="w-full flex flex-col items-center gap-14 scroll-mt-28">
          <div className="flex items-center gap-6 w-full justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#3b7a75]/40" />
            <h2 className="font-cinzel text-3xl sm:text-5xl text-[#e2f1f8] tracking-wider text-center">
              &lt; Tech Stack /&gt;
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#3b7a75]/40" />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx} className="twilight-card rounded-2xl p-7 flex flex-col gap-5 border border-[#3b7a75]/30">
                <h3 className="font-cinzel text-lg text-[#e2f1f8] flex items-center gap-2">
                  <span>{category.title.split(' ')[0]}</span>
                  <span className="text-[#70a9a1] text-xs font-mono">{category.title.split(' ')[1]}</span>
                </h3>

                <div className="grid grid-cols-2 gap-3.5">
                  {category.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={itemIdx}
                        className="bg-[#04070c]/70 p-4 rounded-xl flex items-center gap-3 border border-[#3b7a75]/20 hover:border-[#70a9a1] transition-all group cursor-pointer"
                      >
                        <Icon className={`${item.color} group-hover:scale-110 transition-transform`} size={22} />
                        <span className="text-xs font-medium text-[#e2f1f8] font-sans">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: GAZEBO FRAME EXPERIENCE SECTION --- */}
        <section id="experience" className="w-full scroll-mt-28 relative">
          
          <div className="relative w-full rounded-3xl border-2 border-amber-500/30 bg-gradient-to-b from-[#0c1622]/95 via-[#080d14]/90 to-[#04070c]/98 p-8 sm:p-16 shadow-[0_0_60px_rgba(251,191,36,0.12)] overflow-hidden">
            
            {/* Gazebo Edge Cold Smoke Effect */}
            <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_50px_rgba(112,169,161,0.22)] border border-amber-300/20 rounded-3xl" />

            {/* Gazebo Roof Trim Beams */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-amber-700/40 via-amber-400/60 to-amber-700/40 border-b border-amber-300/40" />

            {/* Fairy String Lights Garland Graphic */}
            <div className="w-full flex justify-between items-center px-4 -mt-4 mb-8">
              {Array.from({ length: 18 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-amber-400/30" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-300 shadow-[0_0_12px_#fde047] animate-pulse" style={{ animationDelay: `${(i % 5) * 0.3}s` }} />
                </div>
              ))}
            </div>

            <div className="text-center mb-14">
              <span className="font-mono text-xs text-amber-300 uppercase tracking-widest block mb-2">
                Under the Wooden Canopy
              </span>
              <h2 className="font-cinzel text-3xl sm:text-5xl text-[#fef3c7] tracking-wider drop-shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                Experience & Academic Journey
              </h2>
            </div>

            {/* Experience Timeline Entries */}
            <div className="space-y-12 max-w-5xl mx-auto relative z-10">
              
              {/* Entry 1: Working / Internship */}
              <div className="p-8 rounded-2xl bg-[#04070c]/80 border border-amber-400/20 hover:border-amber-400/50 transition-all flex flex-col md:flex-row gap-6 justify-between items-start">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-amber-300 text-xs font-mono">
                    <Server size={16} />
                    <span>MARCH 2026 – MAY 2026</span>[cite: 1]
                  </div>
                  <h3 className="font-cinzel text-xl text-[#e2f1f8] font-semibold">
                    Information System Infrastructure Intern[cite: 1]
                  </h3>
                  <p className="text-xs text-amber-200/80 font-mono">
                    ROHM Electronics Malaysia Sdn. Bhd.[cite: 1]
                  </p>
                  <p className="text-xs sm:text-sm text-[#8ba2b5] leading-relaxed pt-2">
                    Managed server room audits, network administration via MikroTik Winbox, corporate Active Directory operations, antivirus system monitoring, and workstation compliance deployments[cite: 1].
                  </p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/30 text-xs font-mono self-start">
                  Professional Experience
                </span>
              </div>

              {/* Entry 2: Bachelor Degree */}
              <div className="p-8 rounded-2xl bg-[#04070c]/80 border border-[#3b7a75]/30 hover:border-[#70a9a1] transition-all flex flex-col md:flex-row gap-6 justify-between items-start">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-[#70a9a1] text-xs font-mono">
                    <GraduationCap size={16} />
                    <span>2023 – PRESENT (2026)</span>[cite: 1]
                  </div>
                  <h3 className="font-cinzel text-xl text-[#e2f1f8] font-semibold">
                    Bachelor of Computer Science (Graphics & Multimedia)
                  </h3>
                  <p className="text-xs text-[#8bbcd4] font-mono">
                    Universiti Malaysia Pahang Al-Sultan Abdullah • CGPA 3.52[cite: 1]
                  </p>
                  <p className="text-xs sm:text-sm text-[#8ba2b5] leading-relaxed pt-2">
                    Specializing in computer vision algorithms, interactive 2D/3D game development, full-stack web architectures, and cloud deployments[cite: 1]. Completed award-winning Final Year Project MY-HYGIENE[cite: 1].
                  </p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#70a9a1]/10 text-[#70a9a1] border border-[#70a9a1]/30 text-xs font-mono self-start">
                  Degree Education
                </span>
              </div>

              {/* Entry 3: Diploma */}
              <div className="p-8 rounded-2xl bg-[#04070c]/80 border border-[#3b7a75]/30 hover:border-[#70a9a1] transition-all flex flex-col md:flex-row gap-6 justify-between items-start">
                <div className="space-y-2 max-w-2xl">
                  <div className="flex items-center gap-2 text-[#70a9a1] text-xs font-mono">
                    <GraduationCap size={16} />
                    <span>2021 – 2023</span>[cite: 1]
                  </div>
                  <h3 className="font-cinzel text-xl text-[#e2f1f8] font-semibold">
                    Diploma in Computer Science
                  </h3>
                  <p className="text-xs text-[#8bbcd4] font-mono">
                    Universiti Malaysia Pahang Al-Sultan Abdullah • CGPA 3.51[cite: 1]
                  </p>
                  <p className="text-xs sm:text-sm text-[#8ba2b5] leading-relaxed pt-2">
                    Focused on fundamental software engineering, object-oriented programming (C#/Python), relational databases (MySQL/SQL Server), and data structures[cite: 1].
                  </p>
                </div>
                <span className="px-4 py-1.5 rounded-full bg-[#70a9a1]/10 text-[#70a9a1] border border-[#70a9a1]/30 text-xs font-mono self-start">
                  Diploma Education
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* --- SECTION 4: PROJECTS --- */}
        <section id="projects" className="w-full flex flex-col gap-12 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#3b7a75]/20 pb-6">
            <div>
              <div className="flex items-center gap-2 text-[#70a9a1] mb-2">
                <Sparkles size={18} />
                <span className="text-xs uppercase tracking-widest font-mono">Curated Portfolio</span>
              </div>
              <h2 className="font-cinzel text-3xl sm:text-4xl text-[#e2f1f8] tracking-wider">Featured Projects</h2>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {(['all', 'web', 'game', 'ai'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-xl text-xs tracking-wider uppercase transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#3b7a75] text-[#e2f1f8] border border-[#70a9a1] shadow-[0_0_20px_rgba(112,169,161,0.4)]'
                      : 'twilight-card text-[#8ba2b5] hover:text-[#e2f1f8]'
                  }`}
                >
                  {tab === 'all' ? 'All Systems' : tab === 'web' ? 'Full-Stack' : tab === 'game' ? 'Game Dev' : 'AI / ML'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="twilight-card rounded-2xl p-7 flex flex-col justify-between group cursor-pointer hover:-translate-y-1.5 transition-all"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[11px] font-mono text-[#70a9a1] uppercase tracking-wider">{project.tagline}</span>
                    <ExternalLink size={18} className="text-[#8ba2b5] group-hover:text-[#e2f1f8] transition-colors" />
                  </div>
                  
                  <h3 className="font-cinzel text-xl text-[#e2f1f8] group-hover:text-[#8bbcd4] transition-colors mb-4">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#8ba2b5] leading-relaxed mb-6 font-light">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#3b7a75]/20">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] px-3 py-1 rounded-md bg-[#04070c]/80 text-[#8bbcd4] border border-[#3b7a75]/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: PROM GLADE --- */}
        <section id="prom-scene" className="w-full flex flex-col items-center gap-10 scroll-mt-28">
          <div className="text-center max-w-3xl">
            <h2 className="font-cinzel text-4xl sm:text-6xl text-[#e2f1f8] tracking-wider mb-4">
              Prom Night in the Misty Forest
            </h2>
            <p className="text-sm sm:text-base text-[#8ba2b5] font-light">
              Surrounded by pine trees and slow evening cold breeze.
            </p>
          </div>

          <div className="w-full relative rounded-3xl overflow-hidden border border-[#3b7a75]/30 bg-gradient-to-b from-[#080d14]/90 via-[#0a121c]/80 to-[#04070c]/95 p-10 sm:p-20 flex flex-col items-center justify-center min-h-[420px] shadow-[0_0_80px_rgba(0,0,0,0.8)]">
            <div className="relative z-20 flex flex-col items-center text-center gap-6 max-w-2xl">
              <blockquote className="font-cinzel text-2xl sm:text-3xl text-[#e2f1f8] italic leading-relaxed">
                &ldquo;I have died everyday waiting for you. Darling, don&apos;t be afraid, I have loved you for a thousand years...&rdquo;
              </blockquote>

              <p className="text-xs font-mono text-[#70a9a1] uppercase tracking-widest">
                Christina Perri — Twilight Saga
              </p>

              <a
                href="#home"
                className="mt-4 px-8 py-3.5 rounded-full bg-[#3b7a75]/30 text-[#e2f1f8] border border-[#70a9a1]/50 text-xs uppercase font-mono tracking-widest hover:bg-[#3b7a75]/50 transition-all cursor-pointer flex items-center gap-2"
              >
                <Heart size={14} className="fill-[#70a9a1] text-[#70a9a1]" />
                Return To Top
              </a>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="w-full pt-20 border-t border-[#3b7a75]/20 flex flex-col items-center justify-center text-center gap-6 text-xs text-[#8ba2b5]">
          <p className="font-cinzel tracking-widest text-[#e2f1f8] text-sm">
            &ldquo;And so the lion fell in love with the lamb...&rdquo;
          </p>
          <p>© {new Date().getFullYear()} Siti Nur Maisarah • Pacific Northwest Aesthetic[cite: 1].</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/maisiyy" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8] transition-colors"><FolderGit2 size={22} /></a>
            <a href="https://linkedin.com/in/siti-nur-maisarah-ba225123a" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8] transition-colors"><Globe size={22} /></a>
            <a href="mailto:maisarahmzn@gmail.com" className="hover:text-[#e2f1f8] transition-colors"><Mail size={22} /></a>
          </div>
        </footer>

      </main>

      {/* --- POPUP MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#03060a]/85 backdrop-blur-lg">
          <div className="twilight-card max-w-xl w-full rounded-3xl p-8 relative border border-[#70a9a1]/50 shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 text-[#8ba2b5] hover:text-[#e2f1f8] cursor-pointer"
            >
              <X size={24} />
            </button>

            <span className="text-[11px] font-mono text-[#70a9a1] uppercase tracking-widest mb-2 block">
              {selectedProject.tagline}
            </span>
            
            <h3 className="font-cinzel text-2xl text-[#e2f1f8] mb-4">{selectedProject.title}</h3>
            
            <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#8ba2b5] leading-relaxed">
              {selectedProject.highlights.map((point, idx) => (
                <p key={idx} className="flex items-start gap-2.5">
                  <span className="text-[#70a9a1]">•</span> {point}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.techStack.map((tech, idx) => (
                <span key={idx} className="text-[11px] px-3 py-1 rounded-md bg-[#04070c] text-[#8bbcd4] border border-[#3b7a75]/30 font-mono">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noreferrer"
              className="w-full py-4 rounded-xl bg-[#0c1a26] text-[#e2f1f8] border border-[#3b7a75]/50 flex items-center justify-center gap-2.5 text-xs font-medium hover:border-[#8bbcd4] transition-all"
            >
              <FolderGit2 size={18} />
              Open Source Repository
            </a>
          </div>
        </div>
      )}
    </div>
  );
}