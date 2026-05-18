import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Zap } from "lucide-react";

const skills = [
  {
    icon: Brain,
    title: "AI Automation",
    description: "n8n, Botpress, Zapier, Vapi, API integrations"
  },
  {
    icon: Code,
    title: "Agentic Systems",
    description: "LangChain, LangGraph, RAG, prompt engineering"
  },
  {
    icon: Database,
    title: "Data & APIs",
    description: "FastAPI, Qdrant, Pinecone, Docker, GitHub"
  },
  {
    icon: Zap,
    title: "Applied ML",
    description: "NLP, computer vision, YOLO, segmentation"
  }
];

const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="animate-fade-in">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                  About Me
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                Building Practical AI Systems
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Turning automation, agents, and machine learning into reliable products
              </p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up space-y-8">
              <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Haris Khan, an AI Engineer focused on building useful systems across 
                  automation, conversational AI, computer vision, and NLP. I enjoy taking 
                  messy business problems and turning them into workflows, agents, and models 
                  that are clear, reliable, and easy to use.
                </p>
              </div>
              
              <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My recent work includes RAG-based chatbots, multi-agent hiring workflows, 
                  subscription-aware support bots, and AI automation pipelines built with 
                  tools like n8n, Botpress, LangGraph, Qdrant, and OpenAI APIs. I care about 
                  the full path from prompt design and integrations to testing, logging, and 
                  continuous optimization.
                </p>
              </div>
              
              <div className="p-8 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I also bring hands-on machine learning experience in dataset preparation, 
                  model training, object detection, segmentation, and deployment. Whether it is 
                  a chatbot, an autonomous workflow, or a vision model, my goal is to build AI 
                  that saves time, improves decisions, and holds up in real-world use.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-scale-in" style={{ animationDelay: '0.3s' }}>
              {skills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl hover:shadow-primary/5 transition-all duration-700 hover:-translate-y-2 bg-card border-border/50 hover:border-primary/40"
                >
                  <CardContent className="p-8 text-center">
                    <skill.icon className="w-14 h-14 text-primary mx-auto mb-6 group-hover:scale-110 group-hover:text-accent transition-all duration-500" />
                    <h3 className="font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-500 text-lg">
                      {skill.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
