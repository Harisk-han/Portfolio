import { lazy, Suspense } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

// Lazy-load heavy below-the-fold sections to avoid white-screen on initial paint
const Projects = lazy(() => import("@/components/Projects"));
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Contact = lazy(() => import("@/components/Contact"));
const AIAssistant = lazy(() => import("@/components/AIAssistant"));

// Lightweight skeleton shown while a lazy section loads in
const SectionSkeleton = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-2 border-sky-500/30 border-t-sky-400 animate-spin" />
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />
      <Suspense fallback={null}>
        <AIAssistant />
      </Suspense>
      <section id="hero">
        <Hero />
      </section>
      <Suspense fallback={<SectionSkeleton />}>
        <section id="projects">
          <Projects />
        </section>
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <section id="about">
          <About />
        </section>
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <section id="experience">
          <Experience />
        </section>
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>
    </main>
  );
};

export default Index;
