import { useEffect } from "react";

const AIAssistant = () => {
  useEffect(() => {
    // Load Botpress v3.6 inject script
    const injectScript = document.createElement("script");
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js";
    injectScript.async = true;
    
    injectScript.onload = () => {
      // Load bot-specific config script after inject script is ready
      const configScript = document.createElement("script");
      configScript.src = "https://files.bpcontent.cloud/2026/05/15/20/20260515205432-DLU4TJBR.js";
      configScript.defer = true;
      document.body.appendChild(configScript);
    };

    document.body.appendChild(injectScript);

    return () => {
      // Cleanup
      const scripts = document.querySelectorAll('script[src*="botpress"], script[src*="bpcontent"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return null;
};

export default AIAssistant;
