import {
  LazyMotion,
  domAnimation,
  m,
  useMotionValue,
  useReducedMotion as framerUseReducedMotion,
  useSpring,
} from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useEffect, useState, useRef, useCallback, type ReactNode, type RefCallback } from 'react'

// Provider for lazy-loaded animations
const MotionProvider = ({ children }: { children: ReactNode }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
)

// Hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const check = () => setIsMobile(window.innerWidth < 768)
    check()

    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return isMobile
}

// Hook for reduced motion preference (respects system settings + mobile)
const useReducedMotion = () => {
  const prefersReducedMotion = framerUseReducedMotion()
  const isMobile = useIsMobile()
  return prefersReducedMotion || isMobile
}

// Intersection Observer hook for scroll-based animations
interface InViewOptions {
  threshold?: number
  rootMargin?: string
  once?: boolean
}

interface InViewResult {
  ref: RefCallback<Element>
  inView: boolean
}

const useOptimizedInView = (options: InViewOptions = {}): InViewResult => {
  const [inView, setInView] = useState(false)
  const [element, setElement] = useState<Element | null>(null)
  const hasTriggered = useRef(false)
  const { threshold = 0.1, rootMargin = '0px', once = true } = options

  const ref = useCallback((node: Element | null) => {
    setElement(node)
  }, [])

  useEffect(() => {
    if (!element) return
    if (once && hasTriggered.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          hasTriggered.current = true
          if (once) observer.disconnect()
        } else if (!once) {
          setInView(false)
        }
      },
      { threshold, rootMargin }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [element, threshold, rootMargin, once])

  return { ref, inView }
}

export { MotionProvider, useMotionValue, useSpring, useReducedMotion, useOptimizedInView }
export type { Variants }
export const motion = m
