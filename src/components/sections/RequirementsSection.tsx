import { motion } from 'framer-motion'
import { Cpu, Monitor, HardDrive, MemoryStick, Monitor as OsIcon } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

const specs = [
  {
    label: 'CPU',
    icon: Cpu,
    min: '至少4核心且单核最高睿频大于3.0GHz',
    rec: 'Intel i5-12400F / AMD Ryzen 5 5600 或更高',
  },
  {
    label: 'GPU',
    icon: Monitor,
    min: '显存大于2GB（不建议使用核显）',
    rec: 'NVIDIA GTX 1660 / AMD RX 580 或更高',
  },
  {
    label: 'RAM',
    icon: MemoryStick,
    min: '8GB以上（游戏本体至少占用4GB）',
    rec: '16GB DDR4 3200MHz 或更高',
  },
  {
    label: 'ROM',
    icon: HardDrive,
    min: '2GB以上磁盘空间（HDD/SSD）',
    rec: 'SSD 10GB以上可用空间',
  },
  {
    label: '操作系统',
    icon: OsIcon,
    min: 'Windows 10 20H2以上（64位）',
    rec: 'Windows 11 64位',
  },
]

export default function RequirementsSection() {
  return (
    <div className="w-full space-y-10">
      <SectionHeading
        number="03"
        title="配置要求"
        subtitle="我们相信，您的电脑应该带的动"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Spec cards */}
        <div className="space-y-4">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Card className="flex items-start gap-4 p-5">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <spec.icon className="w-5 h-5 text-accent-glow" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base mb-1">
                    {spec.label}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    <span className="text-text-muted text-xs uppercase tracking-wider">
                      最低:{' '}
                    </span>
                    {spec.min}
                  </p>
                  <p className="text-accent-glow text-sm leading-relaxed mt-0.5">
                    <span className="text-accent/60 text-xs uppercase tracking-wider">
                      推荐:{' '}
                    </span>
                    {spec.rec}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Right: Visual */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <img
              src="/images/about-visual.png"
              alt="System Requirements"
              className="w-72 md:w-96 object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-accent/10 blur-3xl rounded-full -z-10 scale-125" />

            {/* Decorative shapes */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-accent/30 rounded-xl rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-accent/20 rounded-lg -rotate-6" />
          </div>
        </motion.div>
      </div>
    </div>
  )
}
