import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Puzzle, Zap, Users } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const features = [
  {
    title: 'Forge MOD',
    description: '多个来自Forge平台Mod，让您体验各种新奇玩法',
    image: '/images/work-victory.jpg',
    icon: Puzzle,
  },
  {
    title: 'OptiFine & RTX',
    description: '游戏整合Patrix材质包，配合RTX光追加持，让您分不清游戏和现实',
    image: '/images/work-metiew-smith.jpg',
    icon: Zap,
  },
  {
    title: 'FREE FOR GAMING',
    description: '整合包及多人房间免费游玩，尽享多人联机乐趣',
    image: '/images/work-alex-nowak.jpg',
    icon: Users,
  },
]

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(1)

  const prev = () =>
    setActiveIndex((p) => (p - 1 + features.length) % features.length)
  const next = () => setActiveIndex((p) => (p + 1) % features.length)

  const getPosition = (index: number) => {
    const diff = (index - activeIndex + features.length) % features.length
    if (diff === 0) return 'center'
    if (diff === 1) return 'right'
    return 'left'
  }

  return (
    <div className="w-full space-y-12">
      <SectionHeading number="02" title="特色功能" subtitle="探索 ROMC 整合包的强大功能" />

      <div className="relative flex items-center justify-center h-[450px] md:h-[500px]">
        {/* Cards */}
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          {features.map((feature, index) => {
            const pos = getPosition(index)
            const isCenter = pos === 'center'

            return (
              <motion.div
                key={feature.title}
                className={`absolute flex flex-col items-center text-center ${
                  isCenter ? 'z-20' : 'z-10'
                }`}
                animate={{
                  x:
                    pos === 'center'
                      ? 0
                      : pos === 'left'
                      ? -220
                      : 220,
                  scale: isCenter ? 1 : 0.8,
                  opacity: isCenter ? 1 : 0.5,
                  filter: isCenter ? 'blur(0px)' : 'blur(2px)',
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Image circle */}
                <div
                  className={`relative rounded-full overflow-hidden border-2 transition-all duration-500 ${
                    isCenter
                      ? 'w-64 h-64 md:w-72 md:h-72 border-accent/50 shadow-xl shadow-accent/20'
                      : 'w-40 h-40 md:w-48 md:h-48 border-white/10'
                  }`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  {isCenter && (
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
                  )}
                </div>

                {/* Info */}
                {isCenter && (
                  <motion.div
                    className="mt-6 space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <feature.icon className="w-5 h-5 text-accent-glow" />
                      <h3 className="font-display text-xl font-bold text-white">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-text-secondary text-sm max-w-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-8 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5 text-white/70" />
        </button>
        <button
          onClick={next}
          className="absolute right-0 md:-right-8 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
        >
          <ChevronRight className="w-5 h-5 text-white/70" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-3">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === activeIndex
                ? 'bg-accent-glow w-6 shadow-lg shadow-accent/50'
                : 'bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
