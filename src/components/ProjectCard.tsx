import { motion, useReducedMotion } from '../lib/motion'
import type { projects } from '../data/content'

type Project = (typeof projects)[number]

type ProjectCardProps = {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const prefersReducedMotion = useReducedMotion()
  const delay = prefersReducedMotion ? 0 : 0.05 * (index % 6)

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.08]"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? undefined : { y: -4 }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">
          {project.year}
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-muted transition-all duration-200 hover:bg-accent hover:text-ink"
            onClick={(e) => e.stopPropagation()}
            aria-label={`View ${project.title}`}
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
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="mb-2 font-display text-xl font-semibold text-white transition-colors group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
      </div>

      {/* Tags */}
      <div className="mt-auto space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-muted/80 transition-colors group-hover:bg-accent/10 group-hover:text-accent/80"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-muted/60">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Role */}
        <div className="flex items-center gap-2 border-t border-white/5 pt-4">
          <div className="h-1.5 w-1.5 rounded-full bg-accent/60" />
          <span className="text-xs font-medium text-muted">{project.role}</span>
        </div>
      </div>

      {/* Hover Gradient */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 50% 0%, rgba(255, 137, 6, 0.1), transparent 50%)',
        }}
      />
    </motion.article>
  )
}

export default ProjectCard
