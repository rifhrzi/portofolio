import { motion, useReducedMotion } from "../lib/motion";
import { hero } from "../data/content";

const stats = [
  { label: "Focus", value: "Full Stack Dev" },
  { label: "Stack", value: "React / Next.js" },
  { label: "Location", value: "Indonesia" },
];

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <section id="top" className="px-4 pb-20 pt-28 sm:px-6 sm:pb-32 sm:pt-36">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-3xl space-y-8">
          {/* Badge */}
          <motion.div {...fadeUp} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
              Available for projects
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2">
            <h1 className="font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl">
              {hero.greeting.replace("Hi, I'm ", "")}
            </h1>
            <p className="font-display text-3xl font-bold text-accent sm:text-4xl md:text-5xl">
              Full Stack Developer
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-xl text-lg text-muted">
            I build modern web applications with clean code and great user
            experiences. Let's create something amazing together.
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4">
            <a
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white">
              {hero.ctaPrimary.label}
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent">
              {hero.ctaSecondary.label}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-8 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xs font-medium uppercase tracking-wider text-muted/60">
                  {stat.label}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
