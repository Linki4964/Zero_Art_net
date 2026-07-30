import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface CardProps extends HTMLMotionProps<'div'> {
  children: ReactNode
  hover?: boolean
  glow?: boolean
  className?: string
}

export default function Card({
  children,
  hover = true,
  glow = false,
  className = '',
  ...props
}: CardProps) {
  return (
    <motion.div
      className={`glass-card p-6 ${hover ? 'glass-card-hover' : ''} ${
        glow ? 'border-glow' : ''
      } ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
