import { useEffect } from "react";

const AIAssistant = () => {
  useEffect(() => {
    // Load Botpress v3.6 inject script
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    injectScript.async = true;
    document.body.appendChild(injectScript);

    // Load bot-specific config script
    const configScript = document.createElement("script");
    configScript.src = "https://files.bpcontent.cloud/2026/05/15/20/20260515205432-DLU4TJBR.js";
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
      injectScript.remove();
      configScript.remove();
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="animate-fade-in">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                AI Assistant
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Chat with My AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Interact with my personal AI assistant. You can ask professional info about me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
