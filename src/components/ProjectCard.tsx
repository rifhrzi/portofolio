import { useCallback, useEffect, useState, type MouseEvent } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from '../lib/motion'
import type { projects } from '../data/content'

type Project = (typeof projects)[number]

type ProjectCardProps = {
  project: Project
  index: number
  className?: string
}

const ProjectCard = ({ project, index, className }: ProjectCardProps) => {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 150, damping: 18 })
  const springY = useSpring(rotateY, { stiffness: 150, damping: 18 })
  const prefersReducedMotion = useReducedMotion()
  const [supportsPointerFine, setSupportsPointerFine] = useState(false)
  const baseDelay = prefersReducedMotion ? 0 : 0.2 + index * 0.08

  useEffect(() => {
    if (prefersReducedMotion) {
      setSupportsPointerFine(false)
      return
    }

    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    const query = window.matchMedia('(pointer: fine)')
    const updateState = (event: MediaQueryListEvent | MediaQueryList) =>
      setSupportsPointerFine(event.matches)

    updateState(query)

    const handler = (event: MediaQueryListEvent) => updateState(event)
    query.addEventListener('change', handler)

    return () => {
      query.removeEventListener('change', handler)
    }
  }, [prefersReducedMotion])

  const enableTilt = !prefersReducedMotion && supportsPointerFine

  const handleMouseMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateAmountX = ((y - centerY) / centerY) * -6
      const rotateAmountY = ((x - centerX) / centerX) * 6
      rotateX.set(rotateAmountX)
      rotateY.set(rotateAmountY)
    },
    [rotateX, rotateY],
  )

  const resetRotation = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-8 text-left transition duration-500 md:px-10 md:py-12 ${className ?? ''}`}
      initial={prefersReducedMotion ? undefined : { opacity: 0, y: 32, scale: 0.97 }}
      animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={
        prefersReducedMotion
          ? undefined
          : { duration: 0.9, delay: baseDelay, ease: [0.22, 1, 0.36, 1] as const }
      }
      style={
        enableTilt
          ? { rotateX: springX, rotateY: springY, transformStyle: 'preserve-3d', transformPerspective: 1200 }
          : undefined
      }
      whileHover={
        prefersReducedMotion
          ? undefined
          : enableTilt
            ? { translateY: -8 }
            : { translateY: -6, scale: 1.01 }
      }
      onMouseMove={enableTilt ? handleMouseMove : undefined}
      onMouseLeave={enableTilt ? resetRotation : undefined}
    >
      <div className="mb-8 flex items-center justify-between">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-muted/80">
          {project.year}
        </span>
        <span className="text-sm text-muted">0{index + 1}</span>
      </div>
      <h3 className="font-display text-2xl text-white sm:text-3xl">{project.title}</h3>
      <p className="mt-4 max-w-xl text-sm text-muted">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2 text-xs text-muted/90">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 transition duration-300 group-hover:border-accent/40 group-hover:text-accent"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-8 text-sm font-semibold text-white">{project.role}</div>
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255, 137, 6, 0.25), transparent 55%), radial-gradient(circle at 70% 70%, rgba(46, 180, 255, 0.2), transparent 60%)',
          transform: 'translateZ(-10px)',
        }}
        transition={prefersReducedMotion ? undefined : { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
        aria-hidden
      />
    </motion.article>
  )
}

export default ProjectCard
