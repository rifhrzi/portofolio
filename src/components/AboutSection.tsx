import { motion, useReducedMotion } from '../lib/motion'
import { experience, principles } from '../data/content'

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Prisma', 'REST APIs', 'SQL'] },
  { category: 'Mobile', items: ['Flutter', 'Dart', 'React Native'] },
  { category: 'Tools', items: ['Git', 'Figma', 'Docker', 'VS Code'] },
]

const AboutSection = () => {
  const prefersReducedMotion = useReducedMotion()

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  }

  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.div className="mb-16" {...fadeUp} transition={{ duration: 0.5 }}>
          <p className="text-sm font-medium uppercase tracking-wider text-accent">About Me</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-white sm:text-4xl">
            Building digital experiences with passion
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            I'm a full-stack developer passionate about creating intuitive and performant applications. 
            With experience across web and mobile platforms, I bring ideas to life through clean code 
            and thoughtful design.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          {...fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
                {skill.category}
              </h3>
              <ul className="space-y-1.5">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div className="mb-16" {...fadeUp} transition={{ duration: 0.5, delay: 0.2 }}>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted/60">
            Experience
          </h3>
          <div className="space-y-4">
            {experience.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <span className="text-xs font-semibold text-accent">{item.period}</span>
                <h4 className="mt-1 font-display text-lg font-semibold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm text-muted">{item.summary}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principles */}
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.3 }}>
          <h3 className="mb-6 text-xs font-semibold uppercase tracking-wider text-muted/60">
            My Principles
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((principle, index) => (
              <div
                key={principle.heading}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 font-display text-sm font-bold text-accent">
                  {index + 1}
                </span>
                <h4 className="mt-4 font-display text-lg font-semibold text-white">
                  {principle.heading}
                </h4>
                <p className="mt-2 text-sm text-muted">{principle.copy}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
