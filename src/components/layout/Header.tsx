import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const sections = [
  { id: 0, label: '主页', number: '01' },
  { id: 1, label: '简介', number: '02' },
  { id: 2, label: '配置要求', number: '03' },
  { id: 3, label: '服务器', number: '04' },
  { id: 4, label: '下载', number: '05' },
]

interface HeaderProps {
  activeSection: number
  isMenuOpen: boolean
  onToggleMenu: () => void
  onNavigate: (index: number) => void
}

export default function Header({
  activeSection,
  isMenuOpen,
  onToggleMenu,
  onNavigate,
}: HeaderProps) {
  const showCTA = activeSection !== 0 && activeSection !== 4

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-6 md:px-10">
      {/* Logo */}
      <motion.a
        href="#home"
        onClick={(e) => {
          e.preventDefault()
          onNavigate(0)
        }}
        className="flex items-center gap-3 text-white no-underline z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/images/logo.png"
          alt="ZeroArt"
          className="w-8 h-8 md:w-10 md:h-10"
        />
        <span className="font-display font-bold text-sm md:text-base uppercase tracking-wider">
          ZeroArt
        </span>
      </motion.a>

      {/* Right-side CTA - positioned near sidebar, only visible on middle sections */}
      <motion.button
        onClick={() => onNavigate(4)}
        className="absolute right-16 md:right-24 px-5 py-2 bg-accent hover:bg-accent-glow text-white text-sm font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent/25"
        initial={{ opacity: 0 }}
        animate={{
          opacity: showCTA ? 1 : 0,
          pointerEvents: showCTA ? 'auto' : 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        下载
      </motion.button>

      {/* Hamburger menu toggle */}
      <motion.button
        onClick={onToggleMenu}
        className="relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 cursor-pointer"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMenuOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <>
            <span className="w-5 h-0.5 bg-white rounded-full" />
            <span className="w-4 h-0.5 bg-white rounded-full" />
            <span className="w-5 h-0.5 bg-white rounded-full" />
          </>
        )}
      </motion.button>
    </header>
  )
}
