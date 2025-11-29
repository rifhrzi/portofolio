import { motion, MotionProvider, useReducedMotion } from "./lib/motion";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProcessSection from "./components/ProcessSection";
import WorkSection from "./components/WorkSection";

const AnimatedBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />

      {prefersReducedMotion ? (
        <>
          <div className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]" />
          <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]" />
        </>
      ) : (
        <>
          <motion.div
            className="absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/15 blur-[120px]"
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]"
            animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[100px]"
            animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
};

const App = () => (
  <MotionProvider>
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <Hero />
        <WorkSection />
        <AboutSection />
        <ProcessSection />
        <ContactSection />
      </main>
    </div>
  </MotionProvider>
);

export default App;
