import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "ai-assistant", label: "AI Assistant" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav 
      className="fixed top-0 w-full z-50 bg-background border-b border-border transition-all duration-300"
      style={{ boxShadow: 'var(--shadow-subtle)' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-bold text-xl text-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
              P
            </div>
            Portfolio
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => handleNavClick(item.id)}
                className={`relative px-4 py-2 transition-all duration-300 rounded-full ${
                  activeSection === item.id 
                    ? 'text-accent bg-accent/10 font-bold' 
                    : 'text-foreground/80 hover:text-accent hover:bg-accent/5'
                } ${item.id === 'ai-assistant' ? 'border border-accent/20' : ''}`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent),0.6)]" />
                )}
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between ${
                  activeSection === item.id
                    ? 'bg-accent/10 text-accent font-bold'
                    : 'text-foreground/80 hover:bg-accent/5 hover:text-accent'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_rgba(var(--accent),0.6)]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
