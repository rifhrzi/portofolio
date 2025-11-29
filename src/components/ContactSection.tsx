import { motion, useReducedMotion } from '../lib/motion'
import { contact } from '../data/content'

const ContactSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <p className="text-sm font-medium uppercase tracking-wider text-accent">Get in Touch</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
                Let's create something amazing together
              </h2>
              <p className="mt-4 text-muted">
                Have a project in mind? I'd love to hear about it. Let's discuss how we can work together.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  {contact.emailLabel}
                </a>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
                >
                  View Projects
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-4">
              {/* Email */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted/60">Email</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="mt-1 block font-display text-lg text-white hover:text-accent"
                >
                  {contact.email}
                </a>
              </div>

              {/* Availability */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-muted/60">Availability</p>
                <p className="mt-1 font-display text-lg text-white">Open for projects</p>
              </div>

              {/* Social Links */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted/60">Connect</p>
                <div className="flex flex-wrap gap-2">
                  {contact.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 px-3 py-2 text-sm text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-12 flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
          <p>© {new Date().getFullYear()} Rifqi. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </footer>
      </div>
    </section>
  )
}

export default ContactSection
