import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Bot, BriefcaseBusiness, Home, Mail, Menu, UserRound, X, Sparkles, Terminal } from "lucide-react";

type BotpressWindow = Window & {
  botpress?: {
    open?: () => void;
  };
  botpressWebChat?: {
    open?: () => void;
  };
};

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: Terminal },
  { id: "ai-assistant", label: "AI Assistant", icon: Bot, isAction: true },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ["hero", "projects", "about", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (itemId: string) => {
    if (itemId === 'ai-assistant') {
      // Try multiple Botpress API namespaces (v3.6/Cloud/v4)
      const botpressWindow = window as BotpressWindow;
      const bp = botpressWindow.botpress;
      const bpWebChat = botpressWindow.botpressWebChat;
      
      if (bp && typeof bp.open === 'function') {
        bp.open();
      } else if (bpWebChat && typeof bpWebChat.open === 'function') {
        bpWebChat.open();
      } else {
        // Fallback: scroll to the section if it exists
        scrollToSection(itemId);
      }
      setIsMobileMenuOpen(false);
    } else {
      scrollToSection(itemId);
    }
  };

  return (
    <nav 
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-all duration-500"
      aria-label="Primary navigation"
    >
      <div 
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${
          isScrolled
            ? 'border-white/10 bg-gray-950/90 shadow-2xl shadow-black/50 backdrop-blur-xl'
            : 'border-white/10 bg-gray-900/50 shadow-lg shadow-black/20 backdrop-blur-xl'
        }`}
      >
        {/* Top gradient line */}
        <div className="absolute inset-x-4 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="flex h-16 items-center justify-between px-4 sm:px-5">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-3 rounded-xl pr-3 transition-all duration-300"
            aria-label="Go to home section"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-sky-500/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-sky-500/40">
              <span className="relative z-10">HK</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-bold leading-tight text-white">Haris Khan</p>
              <p className="text-xs leading-tight text-gray-400">
                AI & Automation Engineer
              </p>
            </div>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-gray-900/80 p-1 backdrop-blur-sm md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/25'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                } ${item.isAction && activeSection !== item.id ? 'ring-1 ring-sky-500/30 hover:ring-sky-500/50' : ''}`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                <item.icon className={`h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${
                  item.isAction && activeSection !== item.id ? 'text-sky-400' : ''
                }`} />
                <span>{item.label}</span>
                {item.isAction && (
                  <Sparkles className="h-3 w-3 text-sky-300 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Right side - Status & CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Availability Indicator */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 backdrop-blur-sm px-3 py-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Available
              </span>
            </div>
            
            {/* Hire Me Button */}
            <div className="group relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
              <Button
                onClick={() => scrollToSection('contact')}
                className="relative h-10 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 font-semibold text-white hover:from-sky-600 hover:to-cyan-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all duration-300 border-0"
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-gray-900/50 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:text-white hover:border-white/20 md:hidden`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden border-t border-white/10 transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? 'max-h-[32rem] opacity-100'
              : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1 px-3 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-sky-500/20 to-cyan-500/20 text-white border border-sky-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/25' 
                      : 'bg-white/5 text-gray-400 group-hover:bg-white/10'
                  }`}>
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                  {item.isAction && (
                    <Sparkles className="h-3 w-3 text-sky-400 animate-pulse" />
                  )}
                </span>
                <span className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  activeSection === item.id 
                    ? 'bg-sky-400 opacity-100 shadow-[0_0_8px_rgba(56,189,248,0.8)]' 
                    : 'opacity-0'
                }`} />
              </button>
            ))}
            
            {/* Mobile Availability */}
            <div className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 mx-3 mt-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                Available for opportunities
              </span>
            </div>
            
            {/* Mobile CTA */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="mt-3 h-12 w-full rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 font-semibold text-white hover:from-sky-600 hover:to-cyan-600 shadow-lg shadow-sky-500/25 transition-all duration-300 border-0"
            >
              <Mail className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;