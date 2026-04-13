import { motion, useReducedMotion } from '../lib/motion'
import { process } from '../data/content'

const icons = [
  // Discover icon
  <svg key="discover" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
  </svg>,
  // Design icon
  <svg key="design" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
  </svg>,
  // Launch icon
  <svg key="launch" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>,
]

const ProcessSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="process" className="relative px-4 py-20 sm:px-6 sm:py-28 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="mb-16 max-w-2xl space-y-4"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-sm font-medium uppercase tracking-widest text-accent">
            My Process
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            How I bring ideas to life
          </h2>
          <p className="text-base text-muted sm:text-lg">
            Every project follows a structured approach to ensure quality delivery
            and meaningful results.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          <div className="grid gap-8 lg:grid-cols-3">
            {process.map((step, index) => (
              <motion.div
                key={step.stage}
                className="relative"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                {/* Step Card */}
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-accent/30 sm:p-8">
                  {/* Icon */}
                  <div className="mb-6 flex items-center gap-4">
                    <div className="relative">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-ink">
                        {icons[index]}
                      </div>
                      {/* Step Number */}
                      <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-xs font-bold text-accent ring-2 ring-accent/30">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 font-display text-xl font-semibold text-white">
                    {step.stage}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted">{step.summary}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="mb-6 text-muted">Ready to start a project together?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-sm font-semibold text-ink shadow-lg shadow-accent/25 transition-all duration-300 hover:bg-white hover:shadow-white/25"
          >
            Get in touch
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-500/5 blur-3xl" />
      </div>
    </section>
  )
}

export default ProcessSection
