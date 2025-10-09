import { motion, useReducedMotion } from '../lib/motion'
import ProjectCard from './ProjectCard'
import { projects } from '../data/content'

const WorkSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id="work"
      className="relative px-4 pb-24 sm:px-6 sm:pb-32 md:px-8"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 48 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={
        prefersReducedMotion ? undefined : { once: true, amount: 0.2, margin: '-15% 0px -15% 0px' }
      }
      transition={
        prefersReducedMotion ? undefined : { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }
      }
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] md:items-end">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-muted/70">Selected Work</p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Projects bridging game design, mobile services, and community learning.
            </h2>
            <p className="text-sm text-muted md:max-w-xl">
              Every build blends playtesting, UX research, and iterative engineering - from Teelite storefronts and finance tools to Exorcist Bane combat loops, HMI study clubs, and campus apps that keep players, students, and alumni engaged long after release.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-muted shadow-lg shadow-black/10 backdrop-blur">
            <span className="font-semibold text-white">Core capabilities</span>
            <ul className="mt-3 grid gap-2 text-xs uppercase tracking-[0.3em] text-muted/70 sm:grid-cols-2">
              <li>Game Systems</li>
              <li>Flutter Development</li>
              <li>UX Research</li>
              <li>Community Programs</li>
            </ul>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)]">
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} className="h-full" />
            ))}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-32 space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-surface/70 via-surface/40 to-transparent p-6 text-sm text-muted shadow-inner shadow-black/40 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.3em] text-muted/70">Workflow snapshots</p>
              <ul className="space-y-4">
                <li>
                  <span className="font-semibold text-white">Insight-led loops</span>
                  <p>Player tests, student surveys, and alumni feedback inform mechanics and feature priorities.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">Prototyping rhythm</span>
                  <p>Figma journeys, Flutter builds, and paper playtests keep teams aligned on the next iteration.</p>
                </li>
                <li>
                  <span className="font-semibold text-white">Community enablement</span>
                  <p>Workshops, study clubs, and documentation ensure knowledge stays with the people we serve.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <div className="mt-6 space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-surface/70 via-surface/40 to-transparent p-6 text-sm text-muted shadow-inner shadow-black/40 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-muted/70">Workflow snapshots</p>
            <ul className="space-y-4">
              <li>
                <span className="font-semibold text-white">Insight-led loops</span>
                <p>Player tests, student surveys, and alumni feedback inform mechanics and feature priorities.</p>
              </li>
              <li>
                <span className="font-semibold text-white">Prototyping rhythm</span>
                <p>Figma journeys, Flutter builds, and paper playtests keep teams aligned on the next iteration.</p>
              </li>
              <li>
                <span className="font-semibold text-white">Community enablement</span>
                <p>Workshops, study clubs, and documentation ensure knowledge stays with the people we serve.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
      </div>
    </motion.section>
  )
}

export default WorkSection
