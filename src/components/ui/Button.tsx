import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  href?: string
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer select-none'

  const variants = {
    primary:
      'bg-accent hover:bg-accent-glow text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5',
    secondary:
      'bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/[0.2] text-text-primary',
    ghost:
      'bg-transparent hover:bg-white/[0.04] text-text-secondary hover:text-text-primary',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm gap-1.5',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-2.5',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(props as any)}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
