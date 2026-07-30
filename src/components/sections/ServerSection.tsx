import { motion } from 'framer-motion'
import { Server, Mail } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import CopyButton from '../ui/CopyButton'
import Button from '../ui/Button'

const serverAddress = '34.92.170.206:25565'
const contactEmail = 'ZeroArt@prodesign07.onmicrosoft.com'

export default function ServerSection() {
  return (
    <div className="w-full space-y-10">
      <SectionHeading
        number="04"
        title="服务器地址"
        subtitle="加入我们的 Minecraft 服务器，开启你的冒险之旅"
      />

      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Server card */}
        <motion.div
          className="flex-1 w-full max-w-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card p-8 space-y-6 border-glow">
            {/* Status indicator */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <span className="text-sm text-green-400 font-medium">
                服务器运行中
              </span>
            </div>

            {/* Server icon */}
            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
              <Server className="w-7 h-7 text-accent-glow" />
            </div>

            {/* Server title */}
            <div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">
                ROMC 服务器
              </h3>
              <p className="text-text-secondary text-sm">
                Minecraft Java Edition 1.19.2
              </p>
            </div>

            {/* Address display */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              <code className="font-mono text-lg md:text-xl text-accent-glow font-semibold tracking-wider select-all flex-1">
                {serverAddress}
              </code>
              <CopyButton text={serverAddress} label="点击复制" />
            </div>

            {/* Contact */}
            <div className="flex items-center gap-3 pt-2">
              <Mail className="w-4 h-4 text-text-muted" />
              <a
                href={`mailto:${contactEmail}`}
                className="text-sm text-text-secondary hover:text-accent-glow transition-colors"
              >
                {contactEmail}
              </a>
            </div>
          </div>
        </motion.div>

        {/* Decorative visual */}
        <motion.div
          className="hidden lg:flex flex-1 items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src="/images/contact-visual.png"
            alt="Server"
            className="w-80 lg:w-96 object-contain opacity-80 drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </div>
  )
}
