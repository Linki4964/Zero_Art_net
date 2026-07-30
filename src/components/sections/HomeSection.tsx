import { motion } from 'framer-motion'
import { ArrowDown, Download, Cpu, Zap, Box } from 'lucide-react'
import Button from '../ui/Button'

interface HomeSectionProps {
  onNavigate: (index: number) => void
}

const featureCards = [
  {
    icon: Zap,
    title: 'RTX光线追踪支持',
    desc: '体验次世代光影效果',
  },
  {
    icon: Box,
    title: 'ROMC 2.0.1 最新发布',
    desc: '全新整合包重磅来袭',
  },
  {
    icon: Cpu,
    title: 'Yuushya材质包',
    desc: '高清晰纹理材质加持',
  },
]

export default function HomeSection({ onNavigate }: HomeSectionProps) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-8">
      {/* Left: Text content */}
      <div className="flex-1 space-y-8 pt-16 lg:pt-0">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight">
            <span className="block text-white">Republic</span>
            <span className="block text-white">of</span>
            <span className="block text-gradient text-glow">
              Minecraft
            </span>
          </h1>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="h-1 w-12 bg-accent rounded-full" />
          <div className="h-px w-24 bg-border" />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate(4)}
            className="group"
          >
            <Download className="w-5 h-5" />
            立即下载
            <motion.span
              className="ml-1"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.span>
          </Button>
        </motion.div>

        {/* Feature quick links */}
        <motion.div
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
        >
          {featureCards.map((card, i) => (
            <motion.button
              key={card.title}
              onClick={() => onNavigate(1)}
              className="flex items-center gap-3 px-4 py-3 glass-card-hover rounded-xl group cursor-pointer"
              whileHover={{ y: -2 }}
              transition={{ delay: i * 0.1 }}
            >
              <card.icon className="w-4 h-4 text-accent-glow" />
              <div className="text-left">
                <p className="text-sm font-semibold text-text-primary group-hover:text-accent-glow transition-colors">
                  {card.title}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Right: Hero image with floating effect */}
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.div
          className="relative"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src="/images/introduction-visual.png"
            alt="ROMC Visual"
            className="w-64 md:w-80 lg:w-96 object-contain drop-shadow-2xl"
          />
          {/* Glow behind image */}
          <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full -z-10 scale-150" />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs text-text-muted tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-4 h-4 text-text-muted" />
        </motion.div>
      </motion.div>
    </div>
  )
}
