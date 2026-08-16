'use client';

import { useState } from 'react';
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
  FileDown 
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'web' | 'game' | 'ai';
  shortDesc: string;
  fullDesc: string[];
  tags: string[];
  link: string;
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'game' | 'ai'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'my-hygiene',
      title: 'MY-HYGIENE Game',
      category: 'game',
      shortDesc: 'Award-winning 2D educational game transforming hygiene learning via computer vision[cite: 1].',
      fullDesc: [
        'Built with Unity 2D & C# for primary school interactive learning[cite: 1].',
        'Integrated MediaPipe computer vision for real-time physical gesture detection (hand washing, teeth brushing)[cite: 1].',
        'Won Best Booth at FYPro-Com Exhibition (SEM 1 2025/2026)[cite: 1].'
      ],
      tags: ['Unity 2D', 'C#', 'MediaPipe', 'Computer Vision'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'rema-lti',
      title: 'REMA LTI Display Board',
      category: 'web',
      shortDesc: 'Real-time safety display & management system built for corporate office signage[cite: 1].',
      fullDesc: [
        'Frontend built using Vite, JavaScript, and CSS for dynamic days-without-accident display[cite: 1].',
        'PHP management dashboard integrated into internal portal with role validation[cite: 1].',
        'REST API endpoints using SQL Server, Aura SQL Query Builder, and Rakit Validator[cite: 1].'
      ],
      tags: ['PHP', 'SQL Server', 'Vite', 'JavaScript', 'REST API'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'pc-inventory',
      title: 'PC Compliance System',
      category: 'web',
      shortDesc: 'Full-stack workstation OS tracking application with role-based access control[cite: 1].',
      fullDesc: [
        'Built with Laravel, MySQL, and Tailwind CSS to track Windows version compliance[cite: 1].',
        'Features complete CRUD workflows, CSV import/export, and dark mode theme[cite: 1].'
      ],
      tags: ['Laravel', 'MySQL', 'Tailwind CSS', 'PHP'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'energy-ml',
      title: 'Household Energy ML',
      category: 'ai',
      shortDesc: 'End-to-end Machine Learning forecasting dashboard using Random Forest Regression[cite: 1].',
      fullDesc: [
        'Processed UCI Appliances Energy Prediction dataset containing sensor and weather metrics[cite: 1].',
        'Deployed interactive prediction dashboard on Streamlit Cloud[cite: 1].',
        'Automated deployment pipeline configured with GitHub Actions CI/CD[cite: 1].'
      ],
      tags: ['Python', 'Streamlit', 'Random Forest', 'CI/CD'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'edu-lms',
      title: 'Edu Fairuzullah LMS',
      category: 'web',
      shortDesc: 'Cloud-native learning management system prototype deployed on AWS[cite: 1].',
      fullDesc: [
        'Python Flask application architecture featuring secure role-based access control[cite: 1].',
        'Deployed on AWS Elastic Beanstalk infrastructure[cite: 1].'
      ],
      tags: ['Python', 'Flask', 'AWS Elastic Beanstalk'],
      link: 'https://github.com/maisiyy'
    },
    {
      id: 'aegis',
      title: 'AEGIS: Escape Protocol',
      category: 'game',
      shortDesc: '3D sci-fi game featuring custom C# combat mechanics and AI enemies[cite: 1].',
      fullDesc: [
        'Designed 3 interactive sci-fi maps with pathfinding AI enemy behaviors[cite: 1].',
        'Engineered energy shields and combat mechanics in Unity 3D & C#[cite: 1].'
      ],
      tags: ['Unity 3D', 'C#', 'Game AI'],
      link: 'https://github.com/maisiyy'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="relative min-h-screen starry-bg selection:bg-[#3b7a75] selection:text-white">
      {/* Animated Fog */}
      <FogOverlay />

      {/* Atmospheric Vignette */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#070a10]/50 via-transparent to-[#070a10] pointer-events-none z-[2]" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col gap-24">
        
        {/* --- Hero Section --- */}
        <section className="flex flex-col items-center text-center pt-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full twilight-glass text-xs text-[#8bbcd4] tracking-widest uppercase mb-6">
            <Sparkles size={14} className="animate-pulse text-[#70a9a1]" />
            <span>Forks, Washington • Portfolio</span>
          </div>

          <h1 className="font-cinzel text-4xl sm:text-6xl tracking-widest text-[#e2f1f8] uppercase drop-shadow-[0_0_25px_rgba(112,169,161,0.35)]">
            Siti Nur Maisarah
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#8ba2b5] max-w-xl font-light leading-relaxed">
            Computer Science Graduate (CGPA 3.52)[cite: 1]. Specializing in full-stack web development, database architectures, AI/ML integrations, and game systems[cite: 1].
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-[#132332] text-[#e2f1f8] border border-[#3b7a75]/40 flex items-center gap-2 text-sm font-medium hover:border-[#8bbcd4] transition-all"
            >
              <Code2 size={16} />
              Explore Work
            </a>
            <a
              href="mailto:maisarahmzn@gmail.com"
              className="px-6 py-3 rounded-xl twilight-glass text-[#8ba2b5] hover:text-[#e2f1f8] flex items-center gap-2 text-sm font-medium transition-all"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </section>

        {/* --- Work Experience Banner --- */}
        <section className="twilight-glass rounded-2xl p-6 border border-[#3b7a75]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#070a10]/60 text-[#70a9a1] border border-[#3b7a75]/30">
              <Briefcase size={22} />
            </div>
            <div>
              <h3 className="font-cinzel text-sm text-[#e2f1f8] tracking-wide">Information System Intern</h3>
              <p className="text-xs text-[#8ba2b5]">ROHM Electronics (Malaysia) Sdn. Bhd.[cite: 1]</p>
            </div>
          </div>
          <span className="text-[10px] px-3 py-1 rounded-full bg-[#070a10]/80 text-[#70a9a1] border border-[#3b7a75]/30 font-mono">
            PHP • MS SQL • Active Directory[cite: 1]
          </span>
        </section>

        {/* --- Interactive Projects Section --- */}
        <section id="projects" className="flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-cinzel text-2xl text-[#e2f1f8] tracking-wider">Featured Work</h2>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {(['all', 'web', 'game', 'ai'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 py-1 rounded-lg text-xs uppercase tracking-wider transition-all ${
                    activeFilter === filter
                      ? 'bg-[#3b7a75] text-[#e2f1f8] border border-[#70a9a1]'
                      : 'twilight-glass text-[#8ba2b5] hover:text-[#e2f1f8]'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter === 'web' ? 'Web Dev' : filter === 'game' ? 'Game' : 'AI/ML'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="twilight-glass rounded-2xl p-6 flex flex-col justify-between group hover:border-[#70a9a1]/50 transition-all cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-cinzel text-base text-[#e2f1f8] group-hover:text-[#70a9a1] transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink size={16} className="text-[#8ba2b5] group-hover:text-[#e2f1f8]" />
                  </div>
                  <p className="text-xs text-[#8ba2b5] leading-relaxed mb-6 font-light">
                    {project.shortDesc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-[#070a10]/60 text-[#70a9a1] border border-[#3b7a75]/20 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Certifications & Skills Section --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="twilight-glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4 text-[#70a9a1]">
              <Award size={18} />
              <h3 className="font-cinzel text-sm text-[#e2f1f8]">Certifications</h3>
            </div>
            <ul className="text-xs text-[#8ba2b5] space-y-2.5">
              <li className="flex justify-between">
                <span>AWS Cloud Practitioner Essentials[cite: 1]</span>
                <span className="font-mono text-[#70a9a1]">2025[cite: 1]</span>
              </li>
              <li className="flex justify-between">
                <span>AWS Cloud Migration Factory[cite: 1]</span>
                <span className="font-mono text-[#70a9a1]">2025[cite: 1]</span>
              </li>
              <li className="flex justify-between">
                <span>Cisco CCNA: Intro to Networks[cite: 1]</span>
                <span className="font-mono text-[#70a9a1]">2023[cite: 1]</span>
              </li>
            </ul>
          </div>

          <div className="twilight-glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4 text-[#70a9a1]">
              <Code2 size={18} />
              <h3 className="font-cinzel text-sm text-[#e2f1f8]">Core Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-[#8ba2b5]">
              {['PHP', 'Laravel', 'React.js', 'Python', 'C#', 'Unity', 'MySQL', 'MS SQL', 'AWS', 'Git'].map((tech, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-[#070a10]/60 border border-[#3b7a75]/30">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="pt-12 border-t border-[#3b7a75]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#8ba2b5]">
          <p>© {new Date().getFullYear()} Siti Nur Maisarah • Built with Next.js & Vercel[cite: 1].</p>
          <div className="flex gap-5">
            <a href="https://github.com/maisiyy" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8] transition-colors"><FolderGit2 size={18} /></a>
            <a href="https://linkedin.com/in/siti-nur-maisarah-ba225123a" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8] transition-colors"><Globe size={18} /></a>
            <a href="mailto:maisarahmzn@gmail.com" className="hover:text-[#e2f1f8] transition-colors"><Mail size={18} /></a>
          </div>
        </footer>

      </main>

      {/* --- Interactive Project Details Modal --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#070a10]/80 backdrop-blur-md">
          <div className="twilight-glass max-w-md w-full rounded-2xl p-6 relative border border-[#70a9a1]/40 shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#8ba2b5] hover:text-[#e2f1f8]"
            >
              <X size={20} />
            </button>

            <h3 className="font-cinzel text-xl text-[#e2f1f8] mb-2">{selectedProject.title}</h3>
            
            <div className="space-y-2 mb-6 text-xs text-[#8ba2b5]">
              {selectedProject.fullDesc.map((point, idx) => (
                <p key={idx}>• {point}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedProject.tags.map((tag, tIdx) => (
                <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded bg-[#070a10]/80 text-[#70a9a1] border border-[#3b7a75]/30 font-mono">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={selectedProject.link}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#132332] text-[#e2f1f8] border border-[#3b7a75]/40 flex items-center justify-center gap-2 text-xs font-medium hover:border-[#8bbcd4] transition-all"
            >
              <FolderGit2 size={16} />
              View Repository on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
}