import { motion, type Variants, useReducedMotion } from '../lib/motion'
import { hero } from '../data/content'

const container: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: (index = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.15 + index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
}

const stats = [
  { label: 'Current focus', value: 'Teelite (Part-time)' },
  { label: 'Core tracks', value: 'Game design / Flutter / UX' },
  { label: 'Communities served', value: 'Students & alumni' },
  { label: 'Based in', value: 'Jakarta / Remote' },
]

const Hero = () => {
  const prefersReducedMotion = useReducedMotion()
  const sectionProps = prefersReducedMotion
    ? {}
    : { initial: 'hidden' as const, whileInView: 'visible' as const, viewport: { once: true, amount: 0.6 } }

  return (
    <motion.section
      id="top"
      {...sectionProps}
      className="relative isolate overflow-hidden px-4 pt-24 pb-24 sm:px-6 sm:pt-32 sm:pb-28 md:px-8 md:pt-36"
      transition={
        prefersReducedMotion ? undefined : { duration: 1, ease: [0.16, 1, 0.3, 1] as const }
      }
    >
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[minmax(0,1fr),minmax(0,0.8fr)] md:items-end">
        <motion.div className="max-w-3xl space-y-8 md:space-y-10" variants={container}>
          <motion.span
            className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-muted"
            custom={0}
          >
            {hero.greeting}
          </motion.span>
          <motion.h1
            className="font-display text-4xl leading-tight sm:text-5xl md:text-6xl"
            variants={container}
            custom={1}
          >
            {hero.title}
          </motion.h1>
          <motion.p className="max-w-2xl text-lg text-muted" variants={container} custom={2}>
            {hero.subtitle}
          </motion.p>
          <motion.div className="flex flex-wrap gap-4" variants={container} custom={3}>
            <motion.a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink shadow-glow transition hover:bg-white"
              whileHover={prefersReducedMotion ? undefined : { scale: 1.04 }}
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              {hero.ctaPrimary.label}
              <span aria-hidden>-&gt;</span>
            </motion.a>
            <motion.a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent"
              whileHover={
                prefersReducedMotion ? undefined : { scale: 1.02, borderColor: 'rgba(255, 137, 6, 0.6)' }
              }
              whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
            >
              {hero.ctaSecondary.label}
            </motion.a>
          </motion.div>
          <motion.div
            className="grid gap-4 border-l border-white/10 pl-6 text-sm text-muted md:max-w-xl"
            variants={container}
            custom={4}
          >
            <p className="leading-relaxed">
              I build playable loops, mobile features, and UX narratives that translate user research into tangible
              products.
            </p>
            <p className="leading-relaxed text-muted/90">
              Recent work spans Space Studio\'s Exorcist Bane, Untirta\'s alumni portal, Bangkit\'s library experience,
              and innovation programs for HMI Informatika.
            </p>
          </motion.div>
        </motion.div>
        <motion.aside
          variants={container}
          custom={5}
          className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-surface/60 to-transparent p-6 sm:p-8 md:p-10"
        >
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-accent/20 via-transparent to-transparent blur-3xl" />
          <div className="space-y-6">
            <h2 className="font-display text-2xl text-white">Selected collaborations</h2>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex items-start justify-between gap-4">
                <span>
                  Teelite <span className="block text-xs text-muted/70">Part-time web dev & UI/UX</span>
                </span>
                <span className="text-xs font-semibold text-accent">2024-Present</span>
              </li>
              <li className="flex items-start justify-between gap-4">
                <span>
                  Space Studio <span className="block text-xs text-muted/70">Game design contributor</span>
                </span>
                <span className="text-xs font-semibold text-accent">2025</span>
              </li>
              <li className="flex items-start justify-between gap-4">
                <span>
                  UPA TIK Untirta <span className="block text-xs text-muted/70">Flutter mobile intern</span>
                </span>
                <span className="text-xs font-semibold text-accent">2024</span>
              </li>
              <li className="flex items-start justify-between gap-4">
                <span>
                  HMI Informatika <span className="block text-xs text-muted/70">R&D leadership</span>
                </span>
                <span className="text-xs font-semibold text-accent">2023-2024</span>
              </li>
            </ul>
            <motion.dl className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted">
              {stats.map((item, index) => (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: { opacity: 0, y: 26 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.8,
                        delay: 0.55 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1] as const,
                      },
                    },
                  }}
                  initial={prefersReducedMotion ? undefined : 'hidden'}
                  whileInView={prefersReducedMotion ? undefined : 'visible'}
                  viewport={prefersReducedMotion ? undefined : { once: true, amount: 0.4 }}
                >
                  <dt className="text-xs uppercase tracking-[0.3em] text-muted/70">{item.label}</dt>
                  <dd className="font-display text-2xl text-white">{item.value}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </motion.aside>
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="hero-orb-1 absolute -top-20 left-1/4 h-72 w-72 rounded-full bg-accent/30 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, -18, 12, 0], rotate: [0, 6, -4, 0], opacity: [0.85, 1, 0.78, 0.85] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 22, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }
          }
        />
        <motion.div
          className="hero-orb-2 absolute -right-10 top-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, 16, -12, 0], scale: [1, 1.05, 0.95, 1], opacity: [0.6, 0.82, 0.72, 0.6] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 19, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 2.2 }
          }
        />
        <motion.div
          className="hero-orb-3 absolute bottom-0 left-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"
          animate={
            prefersReducedMotion
              ? undefined
              : { y: [0, -12, 18, 0], scale: [1, 1.06, 0.94, 1], opacity: [0.5, 0.7, 0.6, 0.5] }
          }
          transition={
            prefersReducedMotion
              ? undefined
              : { duration: 24, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1.4 }
          }
        />
      </div>
    </motion.section>
  )
}

export default Hero
