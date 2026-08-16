import FogOverlay from '@/components/FogOverlay';
import { Sparkles, FolderGit2, Globe, Mail, ExternalLink, Code2 } from 'lucide-react';
interface Project {
  title: string;
  description: string;
  tags: string[];
}

export default function Home() {
  const projects: Project[] = [
    {
      title: "Interactive Game Project",
      description: "Educational application built with Unity and MediaPipe gesture detection.",
      tags: ["Unity", "C#", "MediaPipe"],
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard analyzing student patterns and academic performance.",
      tags: ["Looker Studio", "Data Viz"],
    },
    {
      title: "Machine Learning Web App",
      description: "Energy prediction web application deployed on Streamlit cloud.",
      tags: ["Python", "Streamlit", "ML"],
    }
  ];

  return (
    <div className="relative min-h-screen starry-bg selection:bg-[#3b7a75] selection:text-white">
      {/* Animated Fog */}
      <FogOverlay />

      {/* Subtle Bottom Glow */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#070a10]/40 via-transparent to-[#070a10] pointer-events-none z-[2]" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-20 flex flex-col gap-20">
        
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center pt-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full twilight-glass text-xs text-[#8bbcd4] tracking-widest uppercase mb-6">
            <Sparkles size={14} className="animate-pulse text-[#70a9a1]" />
            <span>Welcome to the mist</span>
          </div>

          <h1 className="font-cinzel text-5xl sm:text-7xl tracking-widest text-[#e2f1f8] uppercase drop-shadow-[0_0_25px_rgba(112,169,161,0.3)]">
            Portfolio
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#8ba2b5] max-w-lg font-light leading-relaxed">
            Developer & Graphics Specialist. Crafting web experiences, interactive designs, and system architectures under misty skies.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-[#132332] text-[#e2f1f8] border border-[#3b7a75]/40 flex items-center gap-2 text-sm font-medium hover:border-[#8bbcd4] transition-all"
            >
              <Code2 size={16} />
              View Work
            </a>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <h2 className="font-cinzel text-2xl text-[#e2f1f8] tracking-wider">Selected Projects</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#3b7a75]/40 to-transparent" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="twilight-glass rounded-2xl p-6 flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-cinzel text-base text-[#e2f1f8] group-hover:text-[#70a9a1] transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink size={16} className="text-[#8ba2b5]" />
                  </div>
                  <p className="text-xs text-[#8ba2b5] leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[10px] px-2.5 py-1 rounded-md bg-[#070a10]/60 text-[#70a9a1] border border-[#3b7a75]/20 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

       <footer className="pt-12 border-t border-[#3b7a75]/20 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#8ba2b5]">
        <p>© {new Date().getFullYear()} — Designed in the Pacific Northwest aesthetic.</p>
        <div className="flex gap-5">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8]"><FolderGit2 size={18} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#e2f1f8]"><Globe size={18} /></a>
          <a href="mailto:contact@example.com" className="hover:text-[#e2f1f8]"><Mail size={18} /></a>
        </div>
      </footer>

      </main>
    </div>
  );
}