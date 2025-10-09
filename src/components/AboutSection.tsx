import { motion, useReducedMotion } from '../lib/motion'
import { experience, principles } from '../data/content'

const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id="about"
      className="relative overflow-hidden px-4 pb-24 sm:px-6 sm:pb-32 md:px-8"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 48 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.4 }}
      transition={
        prefersReducedMotion ? undefined : { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }
      }
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.8fr)]">
          <div className="space-y-6 sm:space-y-8">
            <p className="text-sm uppercase tracking-[0.4em] text-muted/70">About</p>
            <h2 className="font-display text-3xl text-white sm:text-4xl">
              Cross-discipline builder shaping games, mobile apps, and student-led initiatives.
            </h2>
            <p className="text-sm text-muted">
              My work blends game design, Flutter engineering, and UX research across Teelite storefronts and finance
              tools, Space Studio\'s Exorcist Bane combat loops, Untirta\'s alumni portal, Bangkit\'s mobile library,
              and the HMI R&D study club series. I pair part-time Teelite collaborations with independent builds,
              translating feedback from players, students, and partners into experiences that stay intuitive, playful,
              and sustainable.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-muted">
                <span className="text-xs uppercase tracking-[0.3em] text-muted/70">Focus</span>
                <p className="mt-2 text-white">Playful & community-driven products</p>
                <p>Designing gameplay, mobile flows, and Teelite partner touchpoints that keep students, alumni, and players engaged.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-muted">
                <span className="text-xs uppercase tracking-[0.3em] text-muted/70">Toolset</span>
                <p className="mt-2 text-white">Flutter, Dart, Figma, Notion</p>
                <p>Unity-style prototyping, FigJam for facilitation, and collaboration rituals that keep teams aligned.</p>
              </div>
            </div>
          </div>
          <motion.div
            className="space-y-4 rounded-[32px] border border-white/10 bg-gradient-to-br from-surface/60 via-surface/40 to-transparent p-6 shadow-lg shadow-black/30 backdrop-blur"
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 40 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.4 }}
            transition={
              prefersReducedMotion ? undefined : { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const }
            }
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted/70">Trajectory</p>
            <ul className="space-y-4 text-sm text-muted">
              {experience.map((item) => (
                <li key={item.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent/80">
                    {item.period}
                  </span>
                  <p className="mt-2 font-display text-lg text-white">{item.title}</p>
                  <p className="mt-1 text-xs text-muted/80">{item.summary}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.heading}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/10 backdrop-blur"
              initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
              viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.2 }}
              whileHover={
                prefersReducedMotion ? undefined : { borderColor: 'rgba(255, 137, 6, 0.55)', translateY: -6 }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : { duration: 0.7, delay: 0.25 + index * 0.08, ease: [0.22, 1, 0.36, 1] as const }
              }
            >
              <h3 className="font-display text-xl text-white">{principle.heading}</h3>
              <p className="mt-3 text-sm text-muted">{principle.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
      </div>
    </motion.section>
  )
}

export default AboutSection

