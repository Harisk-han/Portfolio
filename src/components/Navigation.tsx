import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Bot, BriefcaseBusiness, Home, Mail, Menu, UserRound, X } from "lucide-react";

const navItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: BriefcaseBusiness },
  { id: "about", label: "About", icon: UserRound },
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
      const sections = ["hero", "projects", "about", "contact"];
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
      const bp = (window as any).botpress;
      const bpWebChat = (window as any).botpressWebChat;
      
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
            ? 'border-border/70 bg-background/90 shadow-lg shadow-primary/10 backdrop-blur-xl'
            : 'border-white/15 bg-white/10 shadow-sm shadow-primary/10 backdrop-blur-md'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4 sm:px-5">
          <button
            onClick={() => scrollToSection('hero')}
            className={`group flex items-center gap-3 rounded-xl pr-3 transition-colors duration-300 ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}
            aria-label="Go to home section"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-md shadow-primary/20 transition-transform duration-300 group-hover:-translate-y-0.5">
              HK
            </div>
            <div className="hidden text-left sm:block">
              <p className="text-sm font-bold leading-tight">Haris Khan</p>
              <p className={`text-xs leading-tight ${
                isScrolled ? 'text-muted-foreground' : 'text-white/65'
              }`}>
                AI Engineer
              </p>
            </div>
          </button>
          
          <div className={`hidden items-center gap-1 rounded-full border p-1 md:flex ${
            isScrolled ? 'border-border/70 bg-muted/50' : 'border-white/15 bg-white/10'
          }`}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`group relative flex h-10 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : isScrolled
                      ? 'text-foreground/75 hover:bg-background hover:text-primary'
                      : 'text-white/75 hover:bg-white/15 hover:text-white'
                } ${item.isAction && activeSection !== item.id ? 'ring-1 ring-accent/30' : ''}`}
                aria-current={activeSection === item.id ? "page" : undefined}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <div className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${
              isScrolled ? 'bg-green-500/10 text-green-700' : 'bg-white/10 text-white/85'
            }`}>
              <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.8)]" />
              Available
            </div>
            <Button
              onClick={() => scrollToSection('contact')}
              className="h-10 rounded-full bg-primary px-5 font-semibold text-primary-foreground hover:bg-primary-light"
            >
              Hire Me
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-colors md:hidden ${
              isScrolled
                ? 'border-border bg-muted/60 text-foreground hover:bg-muted'
                : 'border-white/15 bg-white/10 text-white hover:bg-white/15'
            }`}
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

        <div
          className={`overflow-hidden border-t transition-all duration-300 ease-in-out md:hidden ${
            isMobileMenuOpen
              ? 'max-h-[30rem] border-border/60 opacity-100'
              : 'max-h-0 border-transparent opacity-0'
          }`}
        >
          <div className="space-y-2 px-3 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                    : 'text-foreground/80 hover:bg-muted hover:text-primary'
                }`}
              >
                <span className="flex items-center gap-3 text-sm font-semibold">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                    activeSection === item.id ? 'bg-white/15' : 'bg-primary/10 text-primary'
                  }`}>
                    <item.icon className="h-4 w-4" />
                  </span>
                  {item.label}
                </span>
                <span className={`h-2 w-2 rounded-full transition-opacity ${
                  activeSection === item.id ? 'bg-current opacity-100' : 'opacity-0'
                }`} />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('contact')}
              className="mt-3 h-12 w-full rounded-xl bg-primary font-semibold text-primary-foreground hover:bg-primary-light"
            >
              <Mail className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
