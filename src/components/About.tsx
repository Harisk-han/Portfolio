import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/SectionHeader";
import { Bot, BrainCircuit, Database, Workflow, Zap, Sparkles, ArrowRight, Code2, Layers } from "lucide-react";

const skills = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "n8n, Zapier, webhooks, Google Sheets, social publishing",
    accent: "from-sky-400 via-cyan-400 to-sky-400",
    color: "bg-gradient-to-br from-sky-500 to-cyan-500",
  },
  {
    icon: Bot,
    title: "Conversational AI",
    description: "Botpress, Vapi, OpenAI APIs, stateful flows, guardrail testing",
    accent: "from-violet-400 via-purple-400 to-violet-400",
    color: "bg-gradient-to-br from-violet-500 to-purple-500",
  },
  {
    icon: Database,
    title: "RAG & Vector Search",
    description: "LangChain, LangGraph, Qdrant, Pinecone, policy knowledge bases",
    accent: "from-emerald-400 via-teal-400 to-emerald-400",
    color: "bg-gradient-to-br from-emerald-500 to-teal-500",
  },
  {
    icon: BrainCircuit,
    title: "Applied ML",
    description: "NLP, computer vision, YOLOv8, Mask R-CNN, model fine-tuning",
    accent: "from-amber-400 via-orange-400 to-amber-400",
    color: "bg-gradient-to-br from-amber-500 to-orange-500",
  },
];

const highlights = [
  {
    icon: Code2,
    label: "AI Systems",
    value: "20+",
    accent: "from-sky-400 to-cyan-400",
  },
  {
    icon: Layers,
    label: "Integrations",
    value: "50+",
    accent: "from-violet-400 to-purple-400",
  },
  {
    icon: Sparkles,
    label: "Models Deployed",
    value: "15+",
    accent: "from-emerald-400 to-teal-400",
  },
];

const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] py-20 sm:py-24">
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
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-300">
                  <Sparkles className="h-3.5 w-3.5 animate-pulse" aria-hidden="true" />
                  About Me
                </span>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  AI systems for the web,{" "}
                  <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                    from workflow to interface
                  </span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
                  I build practical AI and automation products that connect LLMs, data, APIs, 
                  and web experiences into systems people can actually use.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-3">
                {highlights.map(({ icon: Icon, label, value, accent }) => (
                  <div
                    key={label}
                    className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-violet-500/0 group-hover:from-sky-500/5 group-hover:to-violet-500/5 transition-all duration-500" />
                    <Icon className="h-4 w-4 text-gray-500 mb-2" />
                    <p className={`text-2xl font-bold bg-gradient-to-r ${accent} bg-clip-text text-transparent`}>
                      {value}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            {/* Left Column - Bio Cards */}
            <div className="animate-slide-up space-y-4">
              {/* Primary Bio Card */}
              <div className="group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-violet-400 opacity-30 group-hover:opacity-70 transition-all duration-500" />
                <div className="relative rounded-2xl bg-gray-950 p-6 sm:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 shadow-lg shadow-sky-500/20">
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Haris Khan</h3>
                      <p className="text-sm font-semibold text-sky-400">AI & Automation Engineer</p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                    I'm Haris Khan, an AI and Automation Engineer focused on web-based systems:
                    support bots, RAG assistants, lead qualification flows, hiring agents, and
                    computer vision services. My work sits where product logic, AI behavior,
                    integrations, and user experience meet.
                  </p>
                </div>
              </div>

              {/* Secondary Bio Card */}
              <div className="group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-400 via-purple-400 to-sky-400 opacity-20 group-hover:opacity-60 transition-all duration-500" />
                <div className="relative rounded-2xl bg-gray-950 p-6 sm:p-8">
                  <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                    Recent systems include subscription-aware Botpress chatbots, n8n content
                    automation, AI funnel-builder matchmaking, HR policy RAG, and LangGraph
                    resume-screening agents. I care about reliable state, useful context,
                    clean integrations, and measurable business outcomes.
                  </p>
                </div>
              </div>

              {/* Working Style Card */}
              <div className="group relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 opacity-20 group-hover:opacity-50 transition-all duration-500" />
                <div className="relative rounded-2xl bg-gray-950 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500">
                      <ArrowRight className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
                      Working Style
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-gray-400">
                    I approach AI projects as product systems: define the user flow, connect the
                    right data, design the AI behavior, test failure cases, and make the output
                    easy to use inside a web or automation workflow.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Skills Grid */}
            <div className="grid grid-cols-1 gap-3 animate-scale-in sm:grid-cols-2" style={{ animationDelay: '0.3s' }}>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1"
                  style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                >
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative flex flex-col rounded-xl bg-gray-950 p-6 h-full">
                    {/* Top accent line */}
                    <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${skill.accent}`} />

                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${skill.color} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <skill.icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </div>
                    
                    <h3 className="mb-2 text-base font-bold text-white transition-colors duration-300">
                      {skill.title}
                    </h3>
                    
                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                      {skill.description}
                    </p>

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-600" />
                      <span className="text-xs font-medium text-gray-500">Learn more</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center animate-fade-in animation-delay-500">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3 text-sm text-gray-400">
              <Sparkles className="h-4 w-4 text-sky-400" />
              <span>Always exploring new AI technologies and frameworks</span>
              <ArrowRight className="h-4 w-4 text-sky-400" />
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
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
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

export default About;