import { motion, MotionProvider, useReducedMotion } from './lib/motion'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProcessSection from './components/ProcessSection'
import WorkSection from './components/WorkSection'

const App = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <MotionProvider>
      <div className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-surface/40 to-ink" />
          <motion.div
            className="absolute -left-1/2 top-1/3 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-accent/25 via-transparent to-transparent blur-[160px]"
            animate={
              prefersReducedMotion ? undefined : { rotate: [0, 6, -4, 0] }
            }
            transition={
              prefersReducedMotion ? undefined : { duration: 32, repeat: Infinity, ease: 'easeInOut' }
            }
          />
          <motion.div
            className="absolute -right-1/3 top-1/4 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-purple-500/20 via-transparent to-transparent blur-[180px]"
            animate={
              prefersReducedMotion ? undefined : { rotate: [0, -5, 4, 0], scale: [1, 1.08, 0.95, 1] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 4 }
            }
          />
          <motion.div
            className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-sky-500/15 via-transparent to-transparent blur-[160px]"
            animate={
              prefersReducedMotion ? undefined : { rotate: [0, 3, -3, 0], y: [0, -12, 6, 0] }
            }
            transition={
              prefersReducedMotion
                ? undefined
                : { duration: 36, repeat: Infinity, ease: 'easeInOut', delay: 2 }
            }
          />
        </div>
        <Navbar />
        <main className="mx-auto max-w-6xl space-y-24 px-4 pb-24 sm:px-6 md:px-8">
          <Hero />
          <WorkSection />
          <AboutSection />
          <ProcessSection />
          <ContactSection />
        </main>
      </div>
    </MotionProvider>
  )
}

export default App
