'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
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
  GraduationCap,
  Layers,
  Database,
  Brain,
  Moon,
  Trees,
  Film
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

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2516/2516-preview.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
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
    <div className="relative min-h-screen starry-bg selection:bg-[#3b7a75] selection:text-[#e2f1f8] w-full overflow-x-hidden">
      
      {/* Moving Celestial Moon */}
      <div className="moving-moon" />

      {/* Atmospheric Dense Smoke/Fog */}
      <div className="smoke-wrapper">
        <div className="smoke-layer smoke-1" />
        <div className="smoke-layer smoke-2" />
      </div>

      {/* Bottom Pine Tree Silhouettes */}
      <div className="pine-forest-bg" />

      {/* Floating Ambient Sound Button */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full twilight-card text-[#70a9a1] hover:text-[#e2f1f8] transition-all flex items-center gap-2 text-xs shadow-2xl"
      >
        {isPlayingAudio ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} />}
        <span className="hidden sm:inline font-mono">{isPlayingAudio ? 'Mist Sound: ON' : 'Atmosphere'}</span>
      </button>

      {/* Sticky Top Navbar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#04070c]/70 border-b border-[#3b7a75]/20">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Moon className="text-[#70a9a1] fill-[#70a9a1]" size={22} />
            <span className="font-cinzel text-xl font-bold tracking-widest text-[#e2f1f8]">
              MAI<span className="text-[#70a9a1] font-mono text-sm">.dev</span>
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-[#8ba2b5]">
            <a href="#home" className="hover:text-[#e2f1f8] transition-colors">Home</a>
            <a href="#skills" className="hover:text-[#e2f1f8] transition-colors">Skills</a>
            <a href="#timeline" className="hover:text-[#e2f1f8] transition-colors">Education</a>
            <a href="#projects" className="hover:text-[#e2f1f8] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#e2f1f8] transition-colors">Experience</a>
          </nav>

          {/* Twilight Saga Movie Themes Switcher */}
          <div className="flex items-center gap-1.5 twilight-card px-3 py-1.5 rounded-full text-xs">
            <Film size={14} className="text-[#70a9a1] mr-1 hidden sm:block" />
            <button 
              onClick={() => setTheme('twilight')} 
              className={`px-2 py-1 rounded-full transition-all ${theme === 'twilight' ? 'bg-[#70a9a1] text-[#04070c] font-bold' : 'text-[#8ba2b5]'}`}
            >
              1. Twilight
            </button>
            <button 
              onClick={() => setTheme('new-moon')} 
              className={`px-2 py-1 rounded-full transition-all ${theme === 'new-moon' ? 'bg-amber-600 text-black font-bold' : 'text-[#8ba2b5]'}`}
            >
              2. New Moon
            </button>
            <button 
              onClick={() => setTheme('eclipse')} 
              className={`px-2 py-1 rounded-full transition-all ${theme === 'eclipse' ? 'bg-rose-600 text-white font-bold' : 'text-[#8ba2b5]'}`}
            >
              3. Eclipse
            </button>
            <button 
              onClick={() => setTheme('breaking-dawn')} 
              className={`px-2 py-1 rounded-full transition-all ${theme === 'breaking-dawn' ? 'bg-yellow-500 text-black font-bold' : 'text-[#8ba2b5]'}`}
            >
              4. Breaking Dawn
            </button>
          </div>
        </div>
      </header>

      {/* Main Container - EXPANDED TO FULL SCREEN WIDTH */}
      <main className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-12 py-16 flex flex-col gap-32">
        
        {/* --- SECTION 1: HERO HOME --- */}
        <section id="home" className="w-full flex flex-col items-center text-center pt-6">
          <div className="profile-aura-frame mb-8 floating-card">
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-2 border-[#04070c]">
              <Image
                src="/profile.jpg"
                alt="Siti Nur Maisarah"
                fill
                sizes="(max-width: 640px) 176px, 208px"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <p className="font-cinzel text-xs text-[#70a9a1] tracking-[0.3em] uppercase mb-3 animate-pulse">
            &ldquo;About three things I was absolutely positive...&rdquo;
          </p>

          <h1 className="font-cinzel text-5xl sm:text-7xl tracking-widest uppercase drop-shadow-[0_0_35px_rgba(112,169,161,0.4)] mb-4 shimmer-text">
            Siti Nur Maisarah
          </h1>

          <p className="text-lg sm:text-2xl text-[#8bbcd4] max-w-4xl font-light leading-relaxed">
            Full-Stack Developer • Game Engineer • AI/ML Integrator
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#8ba2b5] max-w-3xl leading-relaxed font-light">
            Computer Science Graduate from Universiti Malaysia Pahang Al-Sultan Abdullah (CGPA 3.52)[cite: 1]. Crafting production web applications, computer vision interactive games, and cloud solutions under evergreen misty skies[cite: 1].
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-[#10202e] text-[#e2f1f8] border border-[#3b7a75]/50 flex items-center gap-2.5 text-xs tracking-wider uppercase font-medium hover:border-[#8bbcd4] hover:shadow-[0_0_20px_rgba(112,169,161,0.4)] transition-all"
            >
              <Terminal size={16} className="text-[#70a9a1]" />
              Explore Projects
            </a>
            <a
              href="mailto:maisarahmzn@gmail.com"
              className="px-8 py-3.5 rounded-xl twilight-card text-[#8ba2b5] hover:text-[#e2f1f8] flex items-center gap-2.5 text-xs tracking-wider uppercase font-medium transition-all"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>
        </section>

        {/* --- SECTION 2: TECH STACK --- */}
        <section id="skills" className="w-full flex flex-col items-center gap-12">
          <div className="flex items-center gap-4 w-full justify-center">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#3b7a75]/40" />
            <h2 className="font-cinzel text-3xl sm:text-4xl text-[#e2f1f8] tracking-wider text-center">
              &lt; <span className="shimmer-text">Tech Stack</span> /&gt;
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#3b7a75]/40" />
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, catIdx) => (
              <div key={catIdx} className="twilight-card rounded-2xl p-6 flex flex-col gap-4 border border-[#3b7a75]/30">
                <h3 className="font-cinzel text-base text-[#e2f1f8] flex items-center gap-2">
                  <span>{category.title.split(' ')[0]}</span>
                  <span className="text-[#70a9a1] text-xs font-mono">{category.title.split(' ')[1]}</span>
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  {category.items.map((item, itemIdx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={itemIdx}
                        className="bg-[#04070c]/60 p-3.5 rounded-xl flex items-center gap-3 border border-[#3b7a75]/20 hover:border-[#70a9a1] transition-all group cursor-pointer"
                      >
                        <Icon className={`${item.color} group-hover:scale-110 transition-transform`} size={20} />
                        <span className="text-xs font-medium text-[#e2f1f8] font-sans">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 3: EDUCATION TIMELINE --- */}
        <section id="timeline" className="w-full twilight-card rounded-3xl p-8 sm:p-12 border border-[#3b7a75]/30">
          <h2 className="font-cinzel text-3xl text-[#e2f1f8] tracking-wider text-center mb-10">
            Education Timeline
          </h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            <div className="grid grid-cols-6 text-center text-xs font-mono text-[#70a9a1] border-b border-[#3b7a75]/20 pb-2">
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
              <span>2025</span>
              <span>2026</span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-[#e2f1f8]">Diploma in Computer Science</h3>
                <p className="text-xs text-[#8ba2b5]">Universiti Malaysia Pahang Al-Sultan Abdullah • CGPA 3.51[cite: 1]</p>
              </div>
              <div className="w-full md:w-2/3 bg-[#04070c] rounded-full h-8 p-1 border border-[#3b7a75]/20 relative">
                <div className="w-2/5 h-full rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 flex items-center justify-center text-[11px] font-mono font-bold text-slate-950">
                  2021 - 2023[cite: 1]
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-sm font-semibold text-[#e2f1f8]">Bachelor of Computer Science (Graphics & Multimedia)</h3>
                <p className="text-xs text-[#8ba2b5]">Universiti Malaysia Pahang Al-Sultan Abdullah • CGPA 3.52[cite: 1]</p>
              </div>
              <div className="w-full md:w-2/3 bg-[#04070c] rounded-full h-8 p-1 border border-[#3b7a75]/20 relative flex justify-end">
                <div className="w-3/5 h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400 flex items-center justify-center text-[11px] font-mono font-bold text-slate-950">
                  2023 - Present[cite: 1]
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION 4: PROJECTS --- */}
        <section id="projects" className="w-full flex flex-col gap-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#3b7a75]/20 pb-6">
            <div>
              <div className="flex items-center gap-2 text-[#70a9a1] mb-2">
                <Sparkles size={16} />
                <span className="text-xs uppercase tracking-widest font-mono">Curated Portfolio</span>
              </div>
              <h2 className="font-cinzel text-3xl text-[#e2f1f8] tracking-wider">Featured Projects</h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {(['all', 'web', 'game', 'ai'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-xl text-xs tracking-wider uppercase transition-all ${
                    activeTab === tab
                      ? 'bg-[#3b7a75] text-[#e2f1f8] border border-[#70a9a1] shadow-[0_0_15px_rgba(112,169,161,0.4)]'
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
                className="twilight-card vampire-sparkle rounded-2xl p-6 flex flex-col justify-between group cursor-pointer transition-all hover:-translate-y-1"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-[10px] font-mono text-[#70a9a1] uppercase tracking-wider">{project.tagline}</span>
                    <ExternalLink size={16} className="text-[#8ba2b5] group-hover:text-[#e2f1f8] transition-colors" />
                  </div>
                  
                  <h3 className="font-cinzel text-lg text-[#e2f1f8] group-hover:text-[#8bbcd4] transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#8ba2b5] leading-relaxed mb-6 font-light">
                    {project.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#3b7a75]/20">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#04070c]/80 text-[#8bbcd4] border border-[#3b7a75]/30 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- SECTION 5: WORK EXPERIENCE & CERTIFICATIONS --- */}
        <section id="experience" className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="twilight-card rounded-2xl p-8 border border-[#3b7a75]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#70a9a1]">
                <Briefcase size={22} />
                <h3 className="font-cinzel text-base text-[#e2f1f8]">Professional Experience</h3>
              </div>
              <h4 className="text-sm font-semibold text-[#e2f1f8]">Information System Intern</h4>
              <p className="text-xs text-[#8ba2b5] mb-4">ROHM Electronics (Malaysia) Sdn. Bhd.[cite: 1]</p>
              <ul className="text-xs text-[#8ba2b5] space-y-2 font-light">
                <li>• Developed internal applications using PHP and Microsoft SQL Server[cite: 1].</li>
                <li>• Maintained Active Directory domain workstations and domain rules[cite: 1].</li>
                <li>• Built REST APIs and executed payload validation with Postman[cite: 1].</li>
              </ul>
            </div>
          </div>

          <div className="twilight-card rounded-2xl p-8 border border-[#3b7a75]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 text-[#70a9a1]">
                <Award size={22} />
                <h3 className="font-cinzel text-base text-[#e2f1f8]">Certifications</h3>
              </div>
              <ul className="text-xs text-[#8ba2b5] space-y-3 font-light">
                <li className="flex justify-between border-b border-[#3b7a75]/20 pb-2">
                  <span>AWS Cloud Practitioner Essentials[cite: 1]</span>
                  <span className="font-mono text-[#70a9a1]">2025[cite: 1]</span>
                </li>
                <li className="flex justify-between border-b border-[#3b7a75]/20 pb-2">
                  <span>AWS Cloud Migration Factory[cite: 1]</span>
                  <span className="font-mono text-[#70a9a1]">2025[cite: 1]</span>
                </li>
                <li className="flex justify-between">
                  <span>Cisco CCNA: Intro to Networks[cite: 1]</span>
                  <span className="font-mono text-[#70a9a1]">2023[cite: 1]</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="w-full pt-16 border-t border-[#3b7a75]/20 flex flex-col items-center justify-center text-center gap-6 text-xs text-[#8ba2b5]">
          <p className="font-cinzel tracking-widest text-[#e2f1f8]">
            &ldquo;And so the lion fell in love with the lamb...&rdquo;
          </p>
          <p>© {new Date().getFullYear()} Siti Nur Maisarah • Pacific Northwest Aesthetic[cite: 1].</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/maisiyy" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8] transition-colors"><FolderGit2 size={20} /></a>
            <a href="https://linkedin.com/in/siti-nur-maisarah-ba225123a" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8] transition-colors"><Globe size={20} /></a>
            <a href="mailto:maisarahmzn@gmail.com" className="hover:text-[#e2f1f8] transition-colors"><Mail size={20} /></a>
          </div>
        </footer>

      </main>

      {/* --- POPUP MODAL --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#04070c]/85 backdrop-blur-lg">
          <div className="twilight-card max-w-lg w-full rounded-2xl p-8 relative border border-[#70a9a1]/50 shadow-2xl">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-[#8ba2b5] hover:text-[#e2f1f8]"
            >
              <X size={22} />
            </button>

            <span className="text-[10px] font-mono text-[#70a9a1] uppercase tracking-widest mb-1 block">
              {selectedProject.tagline}
            </span>
            
            <h3 className="font-cinzel text-2xl text-[#e2f1f8] mb-4">{selectedProject.title}</h3>
            
            <div className="space-y-2.5 mb-6 text-xs text-[#8ba2b5] leading-relaxed">
              {selectedProject.highlights.map((point, idx) => (
                <p key={idx} className="flex items-start gap-2">
                  <span className="text-[#70a9a1]">•</span> {point}
                </p>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.techStack.map((tech, idx) => (
                <span key={idx} className="text-[10px] px-3 py-1 rounded-md bg-[#04070c] text-[#8bbcd4] border border-[#3b7a75]/30 font-mono">
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 rounded-xl bg-[#10202e] text-[#e2f1f8] border border-[#3b7a75]/40 flex items-center justify-center gap-2 text-xs font-medium hover:border-[#8bbcd4] transition-all"
            >
              <FolderGit2 size={16} />
              Open Source Repository
            </a>
          </div>
        </div>
      )}
    </div>
  );
}