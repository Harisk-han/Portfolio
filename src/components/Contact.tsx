import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import SectionHeader from "@/components/SectionHeader";
import { Bot, Linkedin, Mail, MapPin, Phone, Send, Workflow, Sparkles, ArrowRight, MessageSquare, Clock, Shield } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "harriskhann164@gmail.com",
    href: "mailto:harriskhann164@gmail.com",
    accent: "from-sky-400 to-cyan-400",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 317 0158305",
    href: "tel:+923170158305",
    accent: "from-violet-400 to-purple-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hariskhan164",
    href: "https://www.linkedin.com/in/hariskhan164",
    accent: "from-blue-400 to-indigo-400",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rawalpindi, Pakistan",
    accent: "from-emerald-400 to-teal-400",
  },
];

const quickInfo = [
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
  {
    icon: Shield,
    label: "Availability",
    value: "Open to opportunities",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-[#0a0a0f] py-20 sm:py-24">
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5" />
      </div>

      {/* Animated orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[100px] animate-pulse" />
        <div className="absolute top-60 -left-40 h-96 w-96 rounded-full bg-violet-500/10 blur-[100px] animate-pulse animation-delay-1000" />
        <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/8 blur-[100px] animate-pulse animation-delay-2000" />
      </div>

      {/* Top border gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-16 animate-fade-in">
            <SectionHeader
              eyebrow="Contact"
              title="Let's build a useful AI workflow"
              description="Reach out for AI automation, web chatbot, RAG assistant, or applied ML work. Share the business process, the data sources, and the outcome you want to improve."
              icon={Mail}
            />
          </div>
          
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <div className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-violet-400 opacity-30 group-hover:opacity-70 transition-all duration-500" />
                
                <div className="relative rounded-2xl bg-gray-950 p-6 sm:p-8">
                  {/* Top accent line */}
                  <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400" />
                  
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg shadow-sky-500/20">
                      <MessageSquare className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Send a Message</h3>
                      <p className="text-sm text-gray-400">I'll get back to you within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <Label htmlFor="name" className="text-gray-300 font-semibold mb-2 block">
                          Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-gray-600 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-sky-500/30 focus-visible:border-sky-500/50"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-gray-300 font-semibold mb-2 block">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 rounded-xl bg-white/5 border-white/10 text-white placeholder:text-gray-600 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-sky-500/30 focus-visible:border-sky-500/50"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-gray-300 font-semibold mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="min-h-[180px] rounded-xl bg-white/5 border-white/10 text-white placeholder:text-gray-600 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-sky-500/30 focus-visible:border-sky-500/50 resize-none"
                        placeholder="Tell me about your process, stack, and the automation result you want..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="relative h-12 w-full rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 font-semibold text-white transition-all duration-300 hover:from-sky-600 hover:to-cyan-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 border-0 overflow-hidden group"
                      disabled={isSubmitting}
                      aria-live="polite"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        {isSubmitting ? (
                          <>
                            <div className="mr-3 h-5 w-5 animate-spin rounded-full border-b-2 border-white" aria-hidden="true"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                            Send Message
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="animate-scale-in space-y-6" style={{ animationDelay: '0.3s' }}>
              {/* Contact Methods */}
              <div className="grid gap-3">
                {contactMethods.map((method, index) => {
                  const content = (
                    <>
                      <span className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${method.accent} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <method.icon className="h-5 w-5 text-white" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">{method.label}</span>
                        <span className="block break-words text-sm text-gray-400">{method.value}</span>
                      </span>
                    </>
                  );

                  const CardWrapper = method.href ? 'a' : 'div';
                  const cardProps = method.href ? {
                    href: method.href,
                    target: method.href.startsWith("http") ? "_blank" : undefined,
                    rel: method.href.startsWith("http") ? "noopener noreferrer" : undefined,
                  } : {};

                  return (
                    <CardWrapper
                      key={method.label}
                      {...cardProps}
                      className="group relative flex items-center gap-4 rounded-xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1 cursor-pointer block"
                    >
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${method.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      <div className="relative flex items-center gap-4 rounded-xl bg-gray-950 p-5 w-full">
                        {content}
                        <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-white transition-all duration-300 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0" />
                      </div>
                    </CardWrapper>
                  );
                })}
              </div>

              {/* Quick Info Cards */}
              <div className="grid grid-cols-2 gap-3">
                {quickInfo.map((info) => (
                  <div
                    key={info.label}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-violet-500/0 group-hover:from-sky-500/5 group-hover:to-violet-500/5 transition-all duration-500" />
                    <info.icon className="h-5 w-5 text-gray-500 mb-2" />
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                      {info.label}
                    </p>
                    <p className="text-sm font-bold text-white">
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Collaboration Card */}
              <div className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1 group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-violet-400 opacity-30 group-hover:opacity-70 transition-all duration-500" />
                
                <div className="relative rounded-2xl bg-gray-950 p-6 sm:p-8 overflow-hidden">
                  {/* Background pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.5),transparent_70%)]" />
                  </div>
                  
                  <div className="relative">
                    <div className="mb-5 flex gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg shadow-sky-500/20">
                        <Workflow className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 shadow-lg shadow-violet-500/20">
                        <Bot className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      Best-fit collaborations
                    </h3>
                    
                    <p className="mb-6 text-base leading-relaxed text-gray-400">
                      AI customer support, RAG knowledge bases, multi-agent workflows,
                      automations with webhooks and APIs, and computer vision model development.
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {['Chatbots', 'RAG Systems', 'n8n Workflows', 'Computer Vision', 'API Integration'].map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      asChild
                      className="relative h-12 w-full rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 font-semibold text-white transition-all duration-300 hover:from-sky-600 hover:to-cyan-600 shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 border-0 overflow-hidden group/btn"
                    >
                      <a href="mailto:harriskhann164@gmail.com?subject=AI%20Automation%20Project%20Inquiry">
                        <span className="relative z-10 flex items-center justify-center">
                          <Sparkles className="mr-2 h-4 w-4" />
                          Start a Project
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                        </span>
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover/btn:opacity-100 blur transition-all duration-300" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
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

export default Contact;