import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

const sections = [
  { id: 0, label: '主页', number: '01' },
  { id: 1, label: '简介', number: '02' },
  { id: 2, label: '配置要求', number: '03' },
  { id: 3, label: '服务器地址', number: '04' },
  { id: 4, label: '下载', number: '05' },
]

interface OuterNavProps {
  isOpen: boolean
  activeSection: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function OuterNav({
  isOpen,
  activeSection,
  onClose,
  onNavigate,
}: OuterNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-bg/95 backdrop-blur-xl flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Close button */}
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors z-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2 }}
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Navigation items */}
          <ul className="flex flex-col items-center gap-6">
            {sections.map((section, index) => (
              <motion.li
                key={section.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ delay: 0.1 + index * 0.06, duration: 0.5 }}
              >
                <button
                  onClick={() => {
                    onNavigate(section.id)
                    onClose()
                  }}
                  className="relative text-center group cursor-pointer"
                >
                  <span className="block font-mono text-xs tracking-[0.3em] text-accent/60 mb-2">
                    {section.number}
                  </span>
                  <span
                    className={`block font-display text-4xl md:text-6xl font-bold transition-all duration-300 ${
                      activeSection === section.id
                        ? 'text-accent-glow text-glow'
                        : 'text-white/40 group-hover:text-white/80'
                    }`}
                  >
                    {section.label}
                  </span>
                  {/* Active indicator bar */}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="outerNavBar"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-accent rounded-full"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Invisible close area behind nav items */}
          <div className="absolute inset-0 -z-10" onClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
