import { motion, AnimatePresence } from 'framer-motion'
import type { ReactNode } from 'react'

interface SectionWrapperProps {
  id: string
  isActive: boolean
  direction: number
  children: ReactNode
  className?: string
}

export default function SectionWrapper({
  id,
  isActive,
  direction,
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key={id}
          id={id}
          className={`absolute inset-0 w-full h-screen flex items-center justify-center overflow-hidden ${className}`}
          initial={{ opacity: 0, y: direction * 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -direction * 60 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Background grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-full flex items-center">
            {children}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
