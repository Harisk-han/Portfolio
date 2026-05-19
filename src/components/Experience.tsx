import SectionHeader from "@/components/SectionHeader";
import { BriefcaseBusiness, CheckCircle2, Calendar, Building2, ArrowRight, Star } from "lucide-react";

const experience = [
  {
    role: "AI Automation Engineer",
    company: "BitzSol",
    period: "Dec 2025 - Present",
    summary:
      "Designing AI automation workflows with n8n, Botpress, conversational AI, APIs, databases, backend integrations, and testing routines.",
    highlights: [
      "Built end-to-end chatbots and autonomous workflow systems",
      "Added error handling, logging, prompt-injection checks, and edge-case validation",
      "Implemented stateful conversations, context management, and conditional decision flows",
    ],
    accent: "from-sky-400 via-cyan-400 to-sky-400",
    color: "bg-gradient-to-br from-sky-500 to-cyan-500",
    isCurrent: true,
  },
  {
    role: "AI Engineer Intern",
    company: "Cortech Sols",
    period: "Aug 2025 - Oct 2025",
    summary:
      "Developed and fine-tuned NLP and computer vision models while supporting dataset preparation, deployment, and production integration.",
    highlights: [
      "Worked on RAG, resume screening agents, and policy chatbot systems",
      "Prepared and annotated datasets for model training",
      "Improved model performance through testing and fine-tuning",
    ],
    accent: "from-violet-400 via-purple-400 to-violet-400",
    color: "bg-gradient-to-br from-violet-500 to-purple-500",
    isCurrent: false,
  },
  {
    role: "AI Intern",
    company: "Digital Empowerment",
    period: "Jul 2024 - Aug 2024",
    summary:
      "Built foundational AI and ML workflows with Python, data preprocessing, and experiments using common machine learning libraries.",
    highlights: [
      "Practiced model workflows with Pandas, NumPy, TensorFlow, and Scikit-learn",
      "Assisted in data collection, organization, and preprocessing",
      "Gained practical experience with small applied AI projects",
    ],
    accent: "from-emerald-400 via-teal-400 to-emerald-400",
    color: "bg-gradient-to-br from-emerald-500 to-teal-500",
    isCurrent: false,
  },
];

const Experience = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0f] py-20 sm:py-24">
      {/* Animated background grid */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5" />
      </div>

      {/* Animated orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-40 h-96 w-96 rounded-full bg-sky-500/10 blur-[100px] animate-pulse" />
        <div className="absolute bottom-0 -left-40 h-96 w-96 rounded-full bg-violet-500/10 blur-[100px] animate-pulse animation-delay-1000" />
        <div className="absolute top-2/3 right-20 h-72 w-72 rounded-full bg-cyan-500/8 blur-[100px] animate-pulse animation-delay-2000" />
      </div>

      {/* Top border gradient */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent" />

      <div className="container mx-auto px-6 relative">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-16 animate-fade-in">
            <SectionHeader
              eyebrow="Experience"
              title="Work experience in AI automation and applied ML"
              description="My professional work is focused on building AI systems that connect web interfaces, data, APIs, and automation workflows."
              icon={BriefcaseBusiness}
            />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px hidden md:block">
              <div className="h-full w-px bg-gradient-to-b from-sky-500/50 via-violet-500/50 to-emerald-500/50" />
            </div>

            <div className="space-y-6 md:space-y-8">
              {experience.map((item, index) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className="group relative animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-8 top-8 -translate-x-1/2 hidden md:flex items-center justify-center z-10">
                    <div className={`relative flex h-10 w-10 items-center justify-center rounded-full ${item.color} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <BriefcaseBusiness className="h-5 w-5 text-white" aria-hidden="true" />
                      {item.isCurrent && (
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                          <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-400" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card */}
                  <div className="ml-0 md:ml-20">
                    <div className="relative rounded-2xl bg-gray-900/50 backdrop-blur-sm p-[1px] transition-all duration-500 hover:-translate-y-1">
                      {/* Gradient border on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                      
                      <div className="relative rounded-2xl bg-gray-950 p-6 sm:p-8">
                        {/* Top accent line */}
                        <div className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${item.accent}`} />

                        <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
                          {/* Left Column - Role Info */}
                          <div>
                            {/* Period Badge */}
                            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm px-3 py-1.5 mb-4">
                              <Calendar className="h-3.5 w-3.5 text-gray-500" />
                              <span className="text-xs font-semibold text-gray-400">
                                {item.period}
                              </span>
                              {item.isCurrent && (
                                <span className="text-xs font-semibold text-sky-400 flex items-center gap-1">
                                  <Star className="h-3 w-3" />
                                  Current
                                </span>
                              )}
                            </div>

                            {/* Role Title */}
                            <h3 className="text-2xl font-bold text-white mb-2">
                              {item.role}
                            </h3>

                            {/* Company */}
                            <div className="flex items-center gap-2 mb-4">
                              <Building2 className="h-4 w-4 text-gray-500" />
                              <span className="text-base font-semibold text-gray-300">
                                {item.company}
                              </span>
                            </div>

                            {/* Summary */}
                            <p className="text-sm leading-relaxed text-gray-400">
                              {item.summary}
                            </p>
                          </div>

                          {/* Right Column - Highlights */}
                          <div className="lg:border-l lg:border-white/10 lg:pl-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-4">
                              Key Achievements
                            </h4>
                            <ul className="space-y-3">
                              {item.highlights.map((highlight, idx) => (
                                <li
                                  key={highlight}
                                  className="group/item flex gap-3 text-sm leading-6 text-gray-400 transition-all duration-300 hover:text-gray-300"
                                >
                                  <CheckCircle2
                                    className={`mt-0.5 h-4 w-4 flex-none transition-colors duration-300 ${
                                      idx === 0
                                        ? 'text-sky-400'
                                        : idx === 1
                                        ? 'text-violet-400'
                                        : 'text-emerald-400'
                                    }`}
                                    aria-hidden="true"
                                  />
                                  <span>{highlight}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Bottom technologies or action */}
                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${item.accent}`} />
                            <span className="text-xs text-gray-500">
                              {item.company} · {item.period}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-600 group-hover:text-gray-500 transition-colors duration-300">
                            <span>View details</span>
                            <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 animate-fade-in animation-delay-500">
            {[
              { value: "3+", label: "Years Experience", accent: "from-sky-400 to-cyan-400" },
              { value: "3", label: "Companies", accent: "from-violet-400 to-purple-400" },
              { value: "10+", label: "AI Projects", accent: "from-emerald-400 to-teal-400" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center transition-all duration-300 hover:bg-white/10 hover:border-white/20 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-500/0 to-violet-500/0 group-hover:from-sky-500/5 group-hover:to-violet-500/5 transition-all duration-500" />
                <p className={`text-3xl font-bold bg-gradient-to-r ${stat.accent} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
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
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out forwards;
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

export default Experience;