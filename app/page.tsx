'use client';

import { useState, useRef } from 'react';
import FogOverlay from '@/components/FogOverlay';
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
  Compass,
  GraduationCap
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2516/2516-preview.mp3'); // Soft forest rain ambience
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

  const projects: Project[] = [
    {
      id: 'my-hygiene',
      title: 'MY-HYGIENE Computer Vision Game',
      category: 'game',
      tagline: 'Award-Winning FYP Educational Architecture',
      summary: 'Transforms children hygiene learning using MediaPipe computer vision gesture tracking[cite: 1].',
      highlights: [
        'Built with Unity 2D & C# for primary school health education[cite: 1].',
        'Real-time physical gesture detection (hand washing & teeth brushing smiles) using MediaPipe[cite: 1].',
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
    <div className="relative min-h-screen starry-bg selection:bg-[#3b7a75] selection:text-[#e2f1f8]">
      {/* Dynamic Animated Fog */}
      <FogOverlay />

      {/* Ambient Audio Floating Toggle */}
      <button
        onClick={toggleAudio}
        className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full twilight-card text-[#70a9a1] hover:text-[#e2f1f8] hover:border-[#70a9a1] transition-all flex items-center gap-2 text-xs shadow-2xl"
        title="Toggle Pacific Northwest Forest Ambience"
      >
        {isPlayingAudio ? <Volume2 size={18} className="animate-pulse" /> : <VolumeX size={18} />}
        <span className="hidden sm:inline font-mono">{isPlayingAudio ? 'Mist Ambience: ON' : 'Atmosphere'}</span>
      </button>

      {/* Top Navigation */}
      <nav className="relative z-20 max-w-5xl mx-auto px-6 py-8 flex items-center justify-between border-b border-[#3b7a75]/20">
        <div className="flex items-center gap-2">
          <Compass size={20} className="text-[#70a9a1]" />
          <span className="font-cinzel text-sm tracking-widest text-[#e2f1f8] uppercase">Forks, WA • 47.9504° N</span>
        </div>
        <div className="flex gap-4 text-xs text-[#8ba2b5]">
          <a href="#about" className="hover:text-[#e2f1f8] transition-colors">About</a>
          <a href="#projects" className="hover:text-[#e2f1f8] transition-colors">Projects</a>
          <a href="#experience" className="hover:text-[#e2f1f8] transition-colors">Experience</a>
        </div>
      </nav>

      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-32 flex flex-col gap-28">
        
        {/* --- HERO SECTION --- */}
        <section id="about" className="flex flex-col items-center text-center">
          
          <p className="font-cinzel text-xs text-[#70a9a1] tracking-[0.3em] uppercase mb-4">
            &ldquo;About three things I was absolutely positive...&rdquo;
          </p>

          <h1 className="font-cinzel text-4xl sm:text-7xl tracking-widest text-[#e2f1f8] uppercase drop-shadow-[0_0_35px_rgba(112,169,161,0.4)] mb-6">
            Siti Nur Maisarah
          </h1>

          <p className="text-base sm:text-xl text-[#8bbcd4] max-w-2xl font-light leading-relaxed">
            Full-Stack Developer • Game Engineer • AI/ML Integrator
          </p>

          <p className="mt-4 text-xs sm:text-sm text-[#8ba2b5] max-w-xl leading-relaxed font-light">
            Computer Science Graduate from Universiti Malaysia Pahang Al-Sultan Abdullah (CGPA 3.52)[cite: 1]. Crafting production web apps, computer vision games, and cloud solutions under evergreen misty skies[cite: 1].
          </p>

          {/* Action Callouts */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-[#10202e] text-[#e2f1f8] border border-[#3b7a75]/50 flex items-center gap-2.5 text-xs tracking-wider uppercase font-medium hover:border-[#8bbcd4] hover:shadow-[0_0_20px_rgba(112,169,161,0.3)] transition-all"
            >
              <Terminal size={16} className="text-[#70a9a1]" />
              View Works
            </a>
            <a
              href="mailto:maisarahmzn@gmail.com"
              className="px-8 py-3.5 rounded-xl twilight-card text-[#8ba2b5] hover:text-[#e2f1f8] flex items-center gap-2.5 text-xs tracking-wider uppercase font-medium transition-all"
            >
              <Mail size={16} />
              Initiate Contact
            </a>
          </div>
        </section>

        {/* --- EXPERIENCE BANNER --- */}
        <section id="experience" className="twilight-card rounded-2xl p-8 border border-[#3b7a75]/30">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3.5 rounded-xl bg-[#04070c] text-[#70a9a1] border border-[#3b7a75]/30">
                <Briefcase size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-[#70a9a1] uppercase tracking-wider">Enterprise IT Internship</span>
                <h3 className="font-cinzel text-lg text-[#e2f1f8]">Information System Intern</h3>
                <p className="text-xs text-[#8ba2b5]">ROHM Electronics (Malaysia) Sdn. Bhd.[cite: 1]</p>
              </div>
            </div>

            <ul className="text-xs text-[#8ba2b5] space-y-1.5 font-light">
              <li>• Built production PHP & SQL Server internal applications[cite: 1].</li>
              <li>• Provisioned Active Directory domain devices and network infrastructure[cite: 1].</li>
              <li>• Configured REST APIs and validated JSON payloads via Postman[cite: 1].</li>
            </ul>
          </div>
        </section>

        {/* --- PROJECTS EXTRAVAGANZA SHOWCASE --- */}
        <section id="projects" className="flex flex-col gap-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[#3b7a75]/20 pb-6">
            <div>
              <div className="flex items-center gap-2 text-[#70a9a1] mb-2">
                <Sparkles size={16} />
                <span className="text-xs uppercase tracking-widest font-mono">Curated Portfolio</span>
              </div>
              <h2 className="font-cinzel text-3xl text-[#e2f1f8] tracking-wider">Project Archives</h2>
            </div>

            {/* Category Filter Tabs */}
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

          {/* Cards Grid with Vampire Sparkle Hover Effect */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        {/* --- ACADEMICS & CERTIFICATIONS --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="twilight-card rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#70a9a1]">
                <GraduationCap size={20} />
                <h3 className="font-cinzel text-sm text-[#e2f1f8]">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs text-[#e2f1f8] font-medium">Bachelor of Computer Science (Graphics & Multimedia)</h4>
                  <p className="text-[11px] text-[#8ba2b5]">Universiti Malaysia Pahang Al-Sultan Abdullah • CGPA 3.52[cite: 1]</p>
                </div>
                <div>
                  <h4 className="text-xs text-[#e2f1f8] font-medium">Diploma in Computer Science</h4>
                  <p className="text-[11px] text-[#8ba2b5]">Universiti Malaysia Pahang Al-Sultan Abdullah • CGPA 3.51[cite: 1]</p>
                </div>
              </div>
            </div>
          </div>

          <div className="twilight-card rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#70a9a1]">
                <Award size={20} />
                <h3 className="font-cinzel text-sm text-[#e2f1f8]">Certifications</h3>
              </div>
              <ul className="text-xs text-[#8ba2b5] space-y-2.5 font-light">
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

        {/* --- FOOTER & PINE FOREST SILHOUETTE --- */}
        <footer className="pt-16 border-t border-[#3b7a75]/20 flex flex-col items-center justify-center text-center gap-6 text-xs text-[#8ba2b5]">
          <p className="font-cinzel tracking-widest text-[#e2f1f8]">
            &ldquo;And so the lion fell in love with the lamb...&rdquo;
          </p>
          <p>© {new Date().getFullYear()} Siti Nur Maisarah • Designed for the Pacific Northwest aesthetic[cite: 1].</p>
          
          <div className="flex gap-6">
            <a href="https://github.com/maisiyy" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8] transition-colors"><FolderGit2 size={20} /></a>
            <a href="https://linkedin.com/in/siti-nur-maisarah-ba225123a" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8] transition-colors"><Globe size={20} /></a>
            <a href="mailto:maisarahmzn@gmail.com" className="hover:text-[#e2f1f8] transition-colors"><Mail size={20} /></a>
          </div>
        </footer>

      </main>

      {/* --- MODAL POPUP --- */}
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