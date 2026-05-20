import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Sparkles, Terminal, Code2, Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openGitHub = () => {
    window.open('https://github.com', '_blank');
  };

  const openLinkedIn = () => {
    window.open('https://linkedin.com', '_blank');
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]">
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5" />
      </div>

      {/* Background Image with blend */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.15] mix-blend-luminosity"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/50 via-transparent to-[#0a0a0f]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-transparent to-violet-500/10" />

      {/* Animated orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-20 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -left-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px] animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[100px] animate-pulse animation-delay-2000" />
      </div>

      {/* Floating particles effect */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-sky-400/50 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-violet-400/50 rounded-full animate-pulse animation-delay-500" />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-sky-400/50 rounded-full animate-pulse animation-delay-1500" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8 pt-20 pb-16">
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

          {/* Role Title with typing effect style */}
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

          {/* Description with enhanced styling */}
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

          {/* Tech Stack Pills */}
          <div className="animate-fade-in flex flex-wrap gap-2 mt-6 mb-10" style={{ animationDelay: '0.35s' }}>
            {[''].map((tech, idx) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-300 hover:border-sky-500/30 hover:text-sky-300 hover:bg-sky-500/5"
                style={{ animationDelay: `${0.35 + idx * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-wrap gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="group relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
              <Button
                onClick={scrollToContact}
                size="lg"
                className="relative bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-600 hover:to-cyan-600 font-semibold px-6 h-12 transition-all duration-300 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 border-0"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in Touch
              </Button>
            </div>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="relative bg-transparent border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/20 font-medium px-6 h-12 transition-all duration-300 backdrop-blur-sm"
            >
              <a href="/cv/cv.pdf" download="Haris_Khan_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>

            <Button
              onClick={openGitHub}
              variant="outline"
              size="lg"
              className="relative bg-transparent border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/20 font-medium px-6 h-12 transition-all duration-300 backdrop-blur-sm"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>

            <Button
              onClick={openLinkedIn}
              variant="outline"
              size="lg"
              className="relative bg-transparent border-white/10 text-gray-300 hover:text-white hover:bg-white/5 hover:border-white/20 font-medium px-6 h-12 transition-all duration-300 backdrop-blur-sm"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
          </div>

          {/* Scroll Indicator with enhanced design */}
          <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
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
        
        /* Custom scrollbar */
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
    </section>
  );
};

export default Hero;
