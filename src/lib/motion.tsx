import { LazyMotion, domAnimation, m, useMotionValue, useReducedMotion as framerUseReducedMotion, useSpring } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { useEffect, useState, type ReactNode } from 'react'

const MotionProvider = ({ children }: { children: ReactNode }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
)

const useReducedMotion = () => {
  const prefersReducedMotion = framerUseReducedMotion()
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false
    }
    return window.matchMedia('(max-width: 767px)').matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }

    const query = window.matchMedia('(max-width: 767px)')

    const updateState = (event: MediaQueryListEvent | MediaQueryList) => {
      setIsMobile(event.matches)
    }

    updateState(query)

    const handler = (event: MediaQueryListEvent) => updateState(event)

    const mq = query as MediaQueryList & {
      addEventListener?: (type: 'change', listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void
      removeEventListener?: (type: 'change', listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void
      addListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void
      removeListener?: (listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void) => void
    }

    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', handler)
      return () => mq.removeEventListener?.('change', handler)
    }

    if (typeof mq.addListener === 'function') {
      mq.addListener(handler)
      return () => mq.removeListener?.(handler)
    }

    return undefined
  }, [])

  return prefersReducedMotion || isMobile
}

export { MotionProvider, useMotionValue, useSpring, useReducedMotion }
export type { Variants }
export const motion = m
