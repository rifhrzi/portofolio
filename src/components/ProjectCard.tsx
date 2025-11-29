import { motion, useReducedMotion } from '../lib/motion'
import type { projects } from '../data/content'

type Project = (typeof projects)[number]

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.article
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-accent/30"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
          {project.year}
        </span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-white/10 hover:text-accent"
            aria-label={`View ${project.title}`}
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      {/* Content */}
      <h3 className="mb-2 font-display text-lg font-semibold text-white transition-colors group-hover:text-accent">
        {project.title}
      </h3>
      <p className="mb-4 line-clamp-3 flex-1 text-sm text-muted">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="rounded bg-white/5 px-2 py-1 text-xs text-muted/70">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="rounded bg-white/5 px-2 py-1 text-xs text-muted/50">
            +{project.tags.length - 3}
          </span>
        )}
      </div>

      {/* Role */}
      <div className="mt-4 border-t border-white/5 pt-4">
        <p className="text-xs text-muted">{project.role}</p>
      </div>
    </motion.article>
  )
}

export default ProjectCard
