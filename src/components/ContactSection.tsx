import { motion, useReducedMotion } from '../lib/motion'
import { contact } from '../data/content'

const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28 md:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 backdrop-blur-sm sm:p-12 lg:p-16"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left - Content */}
            <div className="space-y-6">
              <span className="inline-block text-sm font-medium uppercase tracking-widest text-accent">
                Get in Touch
              </span>
              <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Let's create something amazing together
              </h2>
              <p className="max-w-md text-base text-muted sm:text-lg">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                {contact.email && (
                  <a
                    href={`mailto:${contact.email}`}
                    className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-white hover:shadow-white/25"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                    {contact.emailLabel ?? 'Send Email'}
                  </a>
                )}
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:text-accent"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Right - Info Cards */}
            <div className="space-y-6">
              {/* Email Card */}
              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-6"
                initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted/70">
                  Email
                </h3>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-display text-lg text-white transition-colors hover:text-accent"
                >
                  {contact.email}
                </a>
              </motion.div>

              {/* Availability Card */}
              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-6"
                initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted/70">
                  Availability
                </h3>
                <p className="font-display text-lg text-white">Open for new projects</p>
                <p className="mt-1 text-sm text-muted">
                  Freelance, contract, or full-time opportunities
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                className="rounded-xl border border-white/10 bg-white/5 p-6"
                initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted/70">
                  Connect
                </h3>
                <div className="flex flex-wrap gap-3">
                  {contact.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-muted transition-all duration-200 hover:border-accent/50 hover:text-accent"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="mt-16 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between"
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Rifqi. All rights reserved.
          </p>
          <p className="text-sm text-muted/60">
            Built with React & Tailwind CSS
          </p>
        </motion.footer>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl" />
      </div>
    </section>
  )
}

export default ContactSection
