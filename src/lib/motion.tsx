import { LazyMotion, domAnimation, m, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import type { Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const MotionProvider = ({ children }: { children: ReactNode }) => (
  <LazyMotion features={domAnimation}>{children}</LazyMotion>
)

export { MotionProvider, useMotionValue, useSpring, useReducedMotion }
export type { Variants }
export const motion = m
