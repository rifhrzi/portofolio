import { motion, useReducedMotion } from '../lib/motion'
import { navigation } from '../data/content'

const Navbar = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <header className="sticky top-4 z-30 flex justify-center px-3 sm:top-6 sm:px-4">
      <motion.nav
        className="flex w-full max-w-4xl items-center justify-between rounded-full border border-white/10 bg-surface/70 px-4 py-2.5 backdrop-blur-xl sm:px-6 sm:py-3"
        initial={prefersReducedMotion ? undefined : { opacity: 0, y: -20 }}
        animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
        transition={
          prefersReducedMotion ? undefined : { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
        }
      >
        <a href="#top" className="font-display text-lg tracking-tight text-white">
          Rifqi<span className="text-accent">.</span>
        </a>
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {navigation.map((item) => (
            <li key={item.href}>
              <a
                className="relative font-medium text-muted transition-colors duration-300 hover:text-accent"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-flex items-center rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition hover:bg-accent hover:text-ink"
        >
          Let&apos;s collaborate
        </a>
      </motion.nav>
    </header>
  )
}

export default Navbar
