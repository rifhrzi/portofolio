import { motion, useReducedMotion } from '../lib/motion'
import { contact } from '../data/content'

const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.section
      id="contact"
      className="relative px-4 pb-20 sm:px-6 sm:pb-28 md:px-8"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 60 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={
        prefersReducedMotion ? undefined : { once: true, amount: 0.35, margin: '-8% 0px -12% 0px' }
      }
      transition={
        prefersReducedMotion ? undefined : { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const }
      }
    >
      <motion.div
        className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6 shadow-inner shadow-black/30 backdrop-blur-xl sm:p-10 lg:p-12"
        whileHover={{ borderColor: 'rgba(255, 137, 6, 0.4)' }}
      >
        <div className="grid gap-8 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] md:items-center md:gap-10">
          <div className="space-y-5 text-left">
            <p className="text-sm uppercase tracking-[0.24em] text-muted/70 sm:tracking-[0.32em] md:tracking-[0.4em]">
              Contact
            </p>
            <h2 className="font-display text-3xl text-white text-pretty sm:text-4xl lg:text-5xl">
              Let's create something vivid.
            </h2>
            <p className="text-sm text-pretty text-muted md:max-w-md">
              I'm open to collaborations, artful product engagements, and conversations about how design and
              engineering can move together.
            </p>
            <div className="flex flex-wrap gap-3">
              {contact.email && (
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center rounded-full bg-accent px-8 py-3 text-sm font-semibold text-ink shadow-glow transition hover:bg-white"
                >
                  {contact.emailLabel ?? contact.email}
                </a>
              )}
              <a
                href="#work"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent"
              >
                See recent projects
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-sm text-muted shadow-inner shadow-black/20 backdrop-blur sm:p-6">
            <span className="text-xs uppercase tracking-[0.18em] text-muted/70 sm:tracking-[0.24em] md:tracking-[0.3em]">
              Availability
            </span>
            <p className="mt-2 text-white text-pretty">Bookings open for November 2025</p>
            <p className="mt-2 text-pretty">
              Half and full collaborations, with flexible retainers for product teams needing embedded support.
            </p>
            <div className="mt-6 grid gap-3 text-sm">
              <span className="text-xs uppercase tracking-[0.18em] text-muted/70 sm:tracking-[0.24em] md:tracking-[0.3em]">
                Elsewhere
              </span>
              <div className="flex flex-wrap gap-3">
                {contact.socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-full border border-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-white transition hover:border-accent/60 hover:text-accent sm:tracking-[0.24em] md:tracking-[0.3em]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <p className="mt-10 text-center text-xs text-pretty text-muted">
        Copyright {new Date().getFullYear()} Rifqi. Crafted with curiosity and a love for visual rhythm.
      </p>
    </motion.section>
  )
}

export default ContactSection

