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
  { id: "ai-assistant", label: "AI Assistant", icon: Bot },
  { id: "contact", label: "Contact", icon: Mail },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
      const botpressWindow = window as BotpressWindow;
      const bp = botpressWindow.botpress;
      const bpWebChat = botpressWindow.botpressWebChat;

      if (bp && typeof bp.open === 'function') {
        bp.open();
      } else if (bpWebChat && typeof bpWebChat.open === 'function') {
        bpWebChat.open();
      } else {
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
        className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-500 ${isScrolled
          ? 'border-white/[0.08] bg-gray-950/95 shadow-2xl shadow-black/40 backdrop-blur-xl'
          : 'border-white/[0.06] bg-gray-900/80 shadow-lg shadow-black/20 backdrop-blur-xl'
          }`}
      >
        <div className="flex h-16 items-center justify-between px-5">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="group flex items-center gap-3 rounded-xl transition-all duration-300"
            aria-label="Go to home section"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-sky-500/30">
              <span>HK</span>
            </div>
            <div className="hidden text-left sm:block">


            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-0.5 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isAiAssistant = item.id === 'ai-assistant';

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group relative flex h-10 items-center gap-2 rounded-lg px-3.5 text-sm font-medium transition-all duration-300 ${isActive
                    ? 'text-white'
                    : isAiAssistant
                      ? 'text-sky-400 hover:text-sky-300'
                      : 'text-gray-400 hover:text-white'
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <div className="absolute inset-0 rounded-lg bg-white/[0.08]" />
                  )}
                  <item.icon className={`relative h-4 w-4 transition-transform duration-300 group-hover:scale-110 ${isAiAssistant ? 'text-sky-400' : ''
                    }`} />
                  <span className="relative">{item.label}</span>
                  {isAiAssistant && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right side - Status & CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            {/* Availability Indicator */}
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Available
              </span>
            </div>

            {/* Hire Me Button */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="h-9 rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:from-sky-600 hover:to-cyan-600 hover:shadow-sky-500/30 border-0"
            >
              <Mail className="mr-2 h-3.5 w-3.5" />
              Hire Me
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-all duration-300 hover:text-white hover:border-white/[0.15] md:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${isMobileMenuOpen
            ? 'max-h-[28rem] opacity-100 border-t border-white/[0.06]'
            : 'max-h-0 opacity-0'
            }`}
        >
          <div className="space-y-0.5 px-3 py-3">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const isAiAssistant = item.id === 'ai-assistant';

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-all duration-300 ${isActive
                    ? 'bg-white/[0.06] text-white'
                    : isAiAssistant
                      ? 'text-sky-400 hover:bg-white/[0.03]'
                      : 'text-gray-400 hover:bg-white/[0.03] hover:text-white'
                    }`}
                >
                  <span className="flex items-center gap-3 text-sm font-medium">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-lg transition-all duration-300 ${isActive
                      ? 'bg-gradient-to-br from-sky-500 to-cyan-500 text-white shadow-lg shadow-sky-500/20'
                      : 'bg-white/[0.03] text-gray-500 group-hover:text-white'
                      }`}>
                      <item.icon className="h-4 w-4" />
                    </span>
                    {item.label}
                    {isAiAssistant && (
                      <span className="flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                  )}
                </button>
              );
            })}

            {/* Mobile Status & CTA */}
            <div className="mt-3 space-y-2 px-1">
              <div className="flex items-center gap-2 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-4 py-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-xs font-medium text-emerald-400">
                  Available for opportunities
                </span>
              </div>

              <Button
                onClick={() => scrollToSection('contact')}
                className="h-11 w-full rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition-all duration-300 hover:from-sky-600 hover:to-cyan-600 border-0"
              >
                <Mail className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;