import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Github,
  Layers3,
  LucideIcon,
  Sparkles,
  Workflow,
  Trophy,
  Zap,
  Star,
  TrendingUp,
} from "lucide-react";

type Project = {
  title: string;
  category: string;
  role: string;
  summary: string;
  result: string;
  technologies: string[];
  icon: LucideIcon;
  accent: string;
  color: string;
  glow: string;
  metric: string;
  highlighted?: boolean;
  links?: {
    label: string;
    href: string;
    icon: LucideIcon;
  }[];
};

const projects: Project[] = [
  {
    title: "AI Customer Support Chatbot",
    category: "Chatbot Automation",
    role: "AI Automation Engineer",
    summary:
      "Subscription-aware assistant for Pocket Pinky and AI Homebuilder with account lookup and premium access logic.",
    result:
      "Personalized support replies and reduced repetitive customer support handling.",
    technologies: ["Botpress", "OpenAI", "JavaScript", "Webchat"],
    icon: Bot,
    accent: "from-sky-400 via-cyan-400 to-sky-400",
    color: "bg-gradient-to-br from-sky-500 to-cyan-500 text-white",
    glow: "shadow-sky-500/20",
    metric: "Support AI",
    highlighted: true,
    links: [
      { label: "Pocket Pinky", href: "https://www.pocketpinky.com/", icon: ArrowUpRight },
      { label: "AI Homebuilder", href: "https://www.aiforhomebuilders.com/", icon: ArrowUpRight },
    ],
  },
  {
    title: "Automated Course Promo Workflow",
    category: "AI Video Workflow",
    role: "Workflow Automation Developer",
    summary:
      "Daily short-form promo video pipeline covering voiceover, avatar video, captions, scheduling, and publishing.",
    result:
      "Removed manual steps from repeat content production and distribution.",
    technologies: ["n8n", "ElevenLabs", "HeyGen", "Metricool"],
    icon: Workflow,
    accent: "from-violet-400 via-purple-400 to-violet-400",
    color: "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white",
    glow: "shadow-violet-500/20",
    metric: "Daily",
  },
  {
    title: "AI Funnel Builder Matchmaking",
    category: "Lead Qualification",
    role: "Conversation Designer",
    summary:
      "AI workflow that collects business requirements, asks clarifying questions, and recommends funnel builders.",
    result:
      "Converted incomplete lead inputs into structured, useful recommendations.",
    technologies: ["n8n", "OpenAI", "Webhooks", "Google Sheets"],
    icon: Workflow,
    accent: "from-emerald-400 via-teal-400 to-emerald-400",
    color: "bg-gradient-to-br from-emerald-500 to-teal-500 text-white",
    glow: "shadow-emerald-500/20",
    metric: "Leads",
  },
  {
    title: "Company Policy RAG Chatbot",
    category: "RAG Assistant",
    role: "AI Engineer Intern",
    summary:
      "Internal HR assistant using embedded policy documents and semantic retrieval for employee questions.",
    result:
      "Reduced manual HR workload by 60% across 30-40 policy documents.",
    technologies: ["RAG", "Qdrant", "Embeddings", "NLP"],
    icon: Layers3,
    accent: "from-amber-400 via-orange-400 to-amber-400",
    color: "bg-gradient-to-br from-amber-500 to-orange-500 text-white",
    glow: "shadow-amber-500/20",
    metric: "60%",
  },
  {
    title: "JD Generator and Resume Screening Agents",
    category: "Agentic Hiring",
    role: "Agentic AI Developer",
    summary:
      "LangGraph workflow for structured job post generation and batch resume screening.",
    result:
      "Screened 50-100 resumes per batch with semantic matching and structured outputs.",
    technologies: ["LangGraph", "Qdrant", "LLMs", "Prompting"],
    icon: Sparkles,
    accent: "from-rose-400 via-pink-400 to-rose-400",
    color: "bg-gradient-to-br from-rose-500 to-pink-500 text-white",
    glow: "shadow-rose-500/20",
    metric: "100 CVs",
  },
  {
    title: "MotorCut Automotive CV System",
    category: "Computer Vision",
    role: "Computer Vision Engineer",
    summary:
      "Vehicle inspection models for number plate detection, segmentation, and orientation classification.",
    result:
      "Improved inspection coverage across vehicles, lighting, camera angles, and side views.",
    technologies: ["YOLOv8", "Mask R-CNN", "ConvNeXt", "Python"],
    icon: BrainCircuit,
    accent: "from-blue-400 via-indigo-400 to-blue-400",
    color: "bg-gradient-to-br from-blue-500 to-indigo-500 text-white",
    glow: "shadow-blue-500/20",
    metric: "CV",
  },
  {
    title: "ML-as-a-Service Mini Project",
    category: "ML API",
    role: "ML API Developer",
    summary:
      "Machine learning workflow exposed through an API for repeatable inference and web integration.",
    result:
      "Made model behavior easier to test, reuse, and connect to interfaces.",
    technologies: ["Python", "FastAPI", "ML", "API Design"],
    icon: Layers3,
    accent: "from-lime-400 via-green-400 to-lime-400",
    color: "bg-gradient-to-br from-lime-500 to-green-500 text-white",
    glow: "shadow-lime-500/20",
    metric: "API",
    links: [
      {
        label: "Code",
        href: "https://github.com/Harisk-han/-Mini-Project-ML-as-a-Service",
        icon: Github,
      },
    ],
  },
];

const Projects = () => {
  const featuredProject = projects[0];
  const compactProjects = projects.slice(1);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] py-16 sm:py-20">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="mx-auto max-w-7xl">
          {/* Header Section */}
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 backdrop-blur-sm px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-300 animate-fade-in">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" aria-hidden="true" />
                Featured Projects
              </span>
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl animate-slide-up">
                Selected{" "}
                <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-400 bg-clip-text text-transparent">
                  AI Work
                </span>
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-gray-400 sm:text-lg animate-slide-up animation-delay-100">
                Fast snapshots of AI systems, outcomes, and tools without the heavy case-study wall.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-3 animate-fade-in animation-delay-200">
              {[
                { value: "07", label: "Projects", icon: Zap },
                { value: "04", label: "Domains", icon: Star },
                { value: "AI", label: "Core", icon: Trophy },
              ].map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-violet-500/0 group-hover:from-sky-500/5 group-hover:to-violet-500/5 transition-all duration-500" />
                  <Icon className="h-4 w-4 text-gray-500 mb-2" />
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_1.8fr]">
            {/* Featured Project Card */}
            <article className="group relative flex min-h-[24rem] flex-col rounded-2xl bg-gray-900/50 backdrop-blur-sm p-1 animate-slide-up">
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400 via-cyan-400 to-violet-400 opacity-50 group-hover:opacity-100 transition-all duration-500 animate-border-glow" />

              <div className="relative flex h-full flex-col rounded-2xl bg-gray-950 p-8">
                {/* Featured badge */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 border border-sky-500/30 px-3 py-1.5 text-xs font-semibold text-sky-300">
                    <TrendingUp className="h-3.5 w-3.5" />
                    Featured
                  </span>
                </div>

                <div className="mb-6 flex items-start gap-4">
                  <div className={`flex h-14 w-14 flex-none items-center justify-center rounded-2xl ${featuredProject.color} shadow-lg ${featuredProject.glow} transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                    <featuredProject.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-sky-400">
                      {featuredProject.category}
                    </p>
                    <h3 className="mt-1 text-3xl font-bold text-white">
                      {featuredProject.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {featuredProject.summary}
                </p>

                <div className="grid gap-4 sm:grid-cols-2 mb-6">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-sky-500/30 hover:bg-sky-500/5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                      What I Built
                    </p>
                    <p className="text-sm font-medium text-gray-300">
                      Subscription-aware support bot with premium access logic
                    </p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/30 hover:bg-emerald-500/5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                      Result
                    </p>
                    <p className="text-sm font-medium text-gray-300">
                      Faster, personalized customer support replies
                    </p>
                  </div>
                </div>

                <div className="mt-auto space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech, idx) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-gray-400 transition-all duration-200 hover:border-sky-500/30 hover:text-sky-300 hover:bg-sky-500/5 animate-fade-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {featuredProject.links?.length ? (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {featuredProject.links.map((link) => (
                        <Button
                          key={link.href}
                          asChild
                          size="sm"
                          className="h-10 bg-gradient-to-r from-sky-500 to-cyan-500 px-4 text-sm font-semibold text-white hover:from-sky-600 hover:to-cyan-600 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:shadow-sky-500/40 hover:-translate-y-0.5"
                        >
                          <a href={link.href} target="_blank" rel="noopener noreferrer">
                            {link.label}
                            <link.icon className="ml-1.5 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                          </a>
                        </Button>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </article>

            {/* Compact Projects Grid */}
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {compactProjects.map((project, index) => (
                <article
                  key={project.title}
                  className="group relative flex min-h-[14rem] flex-col rounded-xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1 animate-scale-in"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative flex h-full flex-col rounded-xl bg-gray-950 p-5">
                    {/* Top accent line */}
                    <div className={`absolute inset-x-0 top-0 h-1 rounded-t-xl bg-gradient-to-r ${project.accent}`} />

                    <div className="mb-4 flex items-start justify-between gap-3">
                      <div className={`flex h-10 w-10 flex-none items-center justify-center rounded-xl ${project.color} shadow-lg ${project.glow} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        <project.icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-2.5 py-1.5 text-xs font-semibold text-gray-400">
                        {project.metric}
                      </span>
                    </div>

                    <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                      {project.summary}
                    </p>

                    <div className="mt-auto space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={tech}
                            className="rounded-md border border-white/5 bg-white/[0.03] backdrop-blur-sm px-2 py-1 text-xs font-medium text-gray-500 transition-all duration-200 hover:border-white/20 hover:text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 text-xs font-medium text-gray-600">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {project.links?.length ? (
                        <div className="flex flex-wrap gap-3">
                          {project.links.map((link) => (
                            <Button
                              key={link.href}
                              asChild
                              variant="link"
                              className="h-auto p-0 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-all duration-200 group/link"
                            >
                              <a href={link.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                                {link.label}
                                <link.icon className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" aria-hidden="true" />
                              </a>
                            </Button>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
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

        @keyframes border-glow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
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

        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
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

export default Projects;