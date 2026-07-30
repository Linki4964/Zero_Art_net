import { motion } from 'framer-motion'

const sections = [
  { id: 0, label: '主页', number: '01' },
  { id: 1, label: '简介', number: '02' },
  { id: 2, label: '配置', number: '03' },
  { id: 3, label: '服务器', number: '04' },
  { id: 4, label: '下载', number: '05' },
]

interface SideNavProps {
  activeSection: number
  onNavigate: (index: number) => void
}

export default function SideNav({ activeSection, onNavigate }: SideNavProps) {
  return (
    <nav className="fixed right-6 md:right-10 top-1/2 -translate-y-1/2 z-40 hidden sm:flex flex-col gap-6">
      {sections.map((section) => (
        <button
          key={section.id}
          onClick={() => onNavigate(section.id)}
          className="relative flex items-center gap-3 group cursor-pointer"
        >
          {/* Label (appears on hover and active) */}
          <span
            className={`text-xs font-medium transition-all duration-300 ${
              activeSection === section.id
                ? 'text-accent-glow opacity-100'
                : 'text-text-muted opacity-0 group-hover:opacity-100'
            }`}
          >
            {section.label}
          </span>

          {/* Dot indicator */}
          <span className="relative flex items-center justify-center w-3 h-3">
            {/* Outer ring glow */}
            {activeSection === section.id && (
              <motion.span
                layoutId="activeDot"
                className="absolute inset-0 rounded-full bg-accent/30 animate-ping-slow"
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
            {/* Inner dot */}
            <span
              className={`block w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section.id
                  ? 'bg-accent-glow shadow-lg shadow-accent/50'
                  : 'bg-white/20 group-hover:bg-white/50'
              }`}
            />
          </span>
        </button>
      ))}
    </nav>
  )
}
