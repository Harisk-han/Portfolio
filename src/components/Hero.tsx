import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Terminal, Code2, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeroBackground3D } from "@/components/3d/HeroBackground3D";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openGitHub = () => {
    window.open('https://github.com/Harisk-han', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/hariskhan164', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} gl={{ antialias: true, alpha: true }}>
          <Suspense fallback={null}>
            <HeroBackground3D />
          </Suspense>
        </Canvas>
      </div>
      
      {/* Content overlay - positioned above canvas */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col items-start">
            {/* Terminal-style status bar */}
            <div className="animate-fade-in mb-8 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-gray-900/80 backdrop-blur-sm p-1 pr-4">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-gray-800">
                <Terminal className="h-4 w-4 text-sky-400" />
                <span className="text-xs font-mono text-gray-400">terminal</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
                <span className="text-xs font-medium text-green-400 tracking-wide uppercase">Available for opportunities</span>
              </div>
            </div>

            {/* Main Heading with gradient border */}
            <div className="animate-fade-in relative" style={{ animationDelay: '0.1s' }}>
              <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-cyan-400 to-violet-400 rounded-full" />
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4">
                Haris{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  Khan
                </span>
              </h1>
            </div>

            {/* Role Title */}
            <div className="animate-fade-in flex flex-wrap items-center gap-2 sm:gap-3" style={{ animationDelay: '0.2s' }}>
              <Code2 className="h-6 w-6 text-sky-400" />
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light tracking-tight">
                AI & Automation Engineer
              </h2>
              <span className="text-gray-600 text-2xl">·</span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
                AI Specialist
              </span>
            </div>

            {/* Description */}
            <div className="animate-fade-in max-w-2xl mt-8" style={{ animationDelay: '0.3s' }}>
              <div className="relative rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur-sm p-6">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/5 to-violet-500/5" />
                <p className="relative text-base sm:text-lg text-gray-400 leading-relaxed">
                  Designing and deploying intelligent automation systems powered by{" "}
                  <span className="text-sky-300 font-medium">AI agents</span>,{" "}
                  <span className="text-violet-300 font-medium">RAG pipelines</span>, and{" "}
                  <span className="text-cyan-300 font-medium">conversational workflows</span>.
                </p>
              </div>
            </div>

            {/* Buttons Section - Combined in one row */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {/* Get in Touch */}
              <Button
                onClick={scrollToContact}
                size="lg"
                className="h-12 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-600 hover:to-cyan-600 font-semibold px-3.5 sm:px-5 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 border-0"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>

              {/* Download CV */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 rounded-xl bg-transparent border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/20 font-medium px-3.5 sm:px-5 transition-all duration-300 backdrop-blur-sm"
              >
                <a href="/cv/Curriculum%20v.pdf" download="Haris_Khan_CV.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>

              {/* GitHub */}
              <Button
                onClick={openGitHub}
                variant="ghost"
                size="lg"
                className="h-12 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 px-2.5 sm:px-3.5"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>

              {/* LinkedIn */}
              <Button
                onClick={openLinkedIn}
                variant="ghost"
                size="lg"
                className="h-12 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-300 px-2.5 sm:px-3.5"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="animate-fade-in mt-12" style={{ animationDelay: '0.5s' }}>
              <button
                onClick={scrollToProjects}
                className="group flex items-center gap-3 text-gray-500 hover:text-sky-400 transition-all duration-300"
              >
                <span className="text-sm font-medium tracking-wide">View my work</span>
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-sky-500/20 blur-sm group-hover:bg-sky-500/30 transition-all duration-300" />
                  <ArrowDown className="relative w-4 h-4 animate-bounce" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Column - Profile Image (No border) */}
          <div className="relative flex justify-center items-center animate-fade-in mt-12 xl:mt-0" style={{ animationDelay: '0.4s' }}>
            <div className="relative w-full max-w-[320px] aspect-[3/4] group">
              {/* Subtle ambient glow behind the photo - removed any border styling */}
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-sky-500/15 to-violet-500/15 blur-3xl group-hover:from-sky-500/25 group-hover:to-violet-500/25 transition-all duration-700" />

              {/* Photo with clean edges zoomed to crop out baked-in margins */}
              <div className="relative h-full w-full overflow-hidden rounded-[2rem]">
                <img
                  src="/profile.jpg"
                  alt="Haris Khan - AI & Automation Engineer"
                  className="relative h-full w-full object-cover scale-[1.28] transition-transform duration-700 group-hover:scale-[1.33] shadow-2xl shadow-black/30"
                />
              </div>
            </div>
          </div>
        </div>

      {/* Bottom fade gradient */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
      </div>
    </section>
  );
};

export default Hero;