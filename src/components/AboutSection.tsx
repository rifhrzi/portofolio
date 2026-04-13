import { motion, useReducedMotion } from '../lib/motion'
import { experience, principles } from '../data/content'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Prisma', 'REST APIs', 'SQL'] },
  { category: 'Mobile', items: ['Flutter', 'Dart', 'Kotlin', 'Jetpack Compose', 'React Native'] },
  { category: 'Tools', items: ['Git', 'Figma', 'VS Code', 'Docker'] },
]

const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-28 md:px-8">
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
            About Me
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Building digital experiences with passion and purpose
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - About Text & Skills */}
          <motion.div
            className="space-y-8"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4 text-muted">
              <p className="text-base leading-relaxed sm:text-lg">
                I'm a full-stack developer based in Indonesia, passionate about creating 
                intuitive and performant web applications. With experience across various 
                technologies and frameworks, I bring ideas to life through clean code and 
                thoughtful design.
              </p>
              <p className="text-base leading-relaxed sm:text-lg">
                My journey in tech has led me through game design, mobile development, 
                and web engineering. I believe in continuous learning and building products 
                that make a real impact.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
                    {skill.category}
                  </h4>
                  <ul className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm text-muted"
                      >
                        {item}
                        {skill.items.indexOf(item) < skill.items.length - 1 && (
                          <span className="ml-2 text-white/20">•</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Experience Timeline */}
          <motion.div
            className="space-y-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted/70">
              Experience
            </h3>
            <div className="space-y-4">
              {experience.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="group rounded-xl border border-white/10 bg-white/5 p-5 transition-all duration-200 hover:border-accent/30"
                  initial={prefersReducedMotion ? false : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <span className="text-xs font-semibold text-accent">{item.period}</span>
                  <h4 className="mt-2 font-display text-base font-semibold text-white sm:text-lg">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.summary}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Principles */}
        <motion.div
          className="mt-20"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-8 text-xs font-semibold uppercase tracking-wider text-muted/70">
            My Principles
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.heading}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-200 hover:border-accent/30"
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={prefersReducedMotion ? undefined : { y: -4 }}
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <span className="font-display text-lg font-bold">0{index + 1}</span>
                </div>
                <h4 className="mb-2 font-display text-lg font-semibold text-white">
                  {principle.heading}
                </h4>
                <p className="text-sm leading-relaxed text-muted">{principle.copy}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-sky-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>
    </section>
  )
}

export default AboutSection
