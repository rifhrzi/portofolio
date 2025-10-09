import { motion, useReducedMotion } from '../lib/motion'
import { process } from '../data/content'

const ProcessSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id="process"
      className="relative px-4 pb-20 sm:px-6 sm:pb-28 md:px-8"
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 48 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.4 }}
      transition={
        prefersReducedMotion ? undefined : { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }
      }
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.6fr),minmax(0,1fr)] lg:items-start">
          <div className="space-y-4 sm:space-y-6">
            <p className="text-sm uppercase tracking-[0.24em] text-muted/70 sm:tracking-[0.32em] md:tracking-[0.4em]">
              Process
            </p>
            <h2 className="font-display text-3xl text-white text-pretty sm:text-4xl">
              Product journeys anchored in research, playtests, and mentorship.
            </h2>
            <p className="text-sm text-pretty text-muted">
              Whether we are crafting a game experience or a campus service, every phase stays transparent with shared
              briefs, prototype walkthroughs, and facilitation moments that keep contributors aligned.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-muted">
                <span className="text-xs uppercase tracking-[0.18em] text-muted/70 sm:tracking-[0.24em] md:tracking-[0.3em]">
                  Co-creation kit
                </span>
                <p className="mt-2 text-white text-pretty">Figma, FigJam, Notion, Miro</p>
                <p className="text-pretty">Research boards, workshop templates, and async updates that invite cross-team input.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-muted">
                <span className="text-xs uppercase tracking-[0.18em] text-muted/70 sm:tracking-[0.24em] md:tracking-[0.3em]">
                  Delivery
                </span>
                <p className="mt-2 text-white text-pretty">Playable builds & mobile releases</p>
                <p className="text-pretty">Stable code, documentation, and coaching so teams can continue iterating after launch.</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute left-3 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-accent/60 via-white/20 to-transparent sm:left-[19px]" />
            <ol className="space-y-6 pl-8 sm:pl-12">
              {process.map((step, index) => (
                <motion.li
                  key={step.stage}
                  className="relative overflow-visible rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur md:overflow-hidden"
                  initial={prefersReducedMotion ? undefined : { opacity: 0, y: 30 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.4 }}
                  transition={
                    prefersReducedMotion
                      ? undefined
                      : { duration: 0.75, delay: 0.18 + index * 0.08, ease: [0.22, 1, 0.36, 1] as const }
                  }
                >
                  <span className="absolute left-[-20px] top-6 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-accent/20 text-xs font-semibold text-accent sm:left-[-34px]">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-xl text-white text-pretty">{step.stage}</h3>
                  <p className="mt-3 text-sm text-pretty text-muted">{step.summary}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl" />
      </div>
    </motion.section>
  )
}

export default ProcessSection
