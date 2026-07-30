import { motion } from 'framer-motion'
import { Download, ExternalLink, Heart, Mail } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function DownloadSection() {
  return (
    <div className="w-full space-y-10 py-8">
      <SectionHeading
        number="05"
        title="下载"
        subtitle="获取 ROMC 整合包，开始你的 Minecraft 之旅"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current version - Featured */}
        <motion.div
          className="lg:col-span-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 md:p-8 border-accent/20 border-glow overflow-hidden relative">
            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/10 blur-3xl rounded-full" />

            <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs font-semibold bg-accent/20 text-accent-glow rounded-full border border-accent/30">
                    最新发布 2023/08/01
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
                  ROMC 2.0 Beta
                </h3>
                <p className="text-text-secondary">Minecraft 1.19.2 整合包</p>
                <p className="text-text-muted text-sm">
                  包含完整 Forge MOD、OptiFine、Patrix 材质包及 RTX 光追支持
                </p>
              </div>
              <Button
                variant="primary"
                size="lg"
                href="https://drive.weixin.qq.com/s?k=AJQA7QdEAG4r7UUAAk"
              >
                <Download className="w-5 h-5" />
                立即下载
              </Button>
            </div>
          </Card>
        </motion.div>

        {/* Legacy versions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="p-6 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2 py-1 text-xs font-medium bg-white/[0.05] text-text-muted rounded-lg">
                旧版本
              </span>
              <h4 className="font-display text-lg font-bold text-white">
                ROMC 1.5 Beta
              </h4>
              <p className="text-text-secondary text-sm">MC 1.16.5</p>
              <p className="text-text-muted text-xs">
                该版本没有在运行的服务器，有需要可自行搭建
              </p>
            </div>
            <Button variant="ghost" size="sm" className="mt-4" href="#">
              暂无下载
            </Button>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="p-6 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2 py-1 text-xs font-medium bg-white/[0.05] text-text-muted rounded-lg">
                旧版本
              </span>
              <h4 className="font-display text-lg font-bold text-white">
                ROMC 1.0 正式版
              </h4>
              <p className="text-text-secondary text-sm">MC 1.12.2</p>
              <p className="text-text-muted text-xs">
                该版本没有在运行的服务器，有需要可自行搭建
              </p>
            </div>
            <Button variant="ghost" size="sm" className="mt-4" href="#">
              暂无下载
            </Button>
          </Card>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="p-6 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2 py-1 text-xs font-medium bg-amber-500/10 text-amber-400 rounded-lg">
                必备工具
              </span>
              <h4 className="font-display text-lg font-bold text-white">
                Java JDK 17
              </h4>
              <p className="text-text-secondary text-sm">MC运行必备插件</p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="mt-4"
              href="https://www.oracle.com/java/technologies/downloads/#java8-windows"
            >
              <ExternalLink className="w-4 h-4" />
              前往下载
            </Button>
          </Card>
        </motion.div>

        {/* Tutorial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6 h-full flex flex-col justify-between">
            <div className="space-y-3">
              <span className="px-2 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-lg">
                教程指南
              </span>
              <h4 className="font-display text-lg font-bold text-white">
                ROMC 2.0 教程
              </h4>
              <p className="text-text-secondary text-sm">
                快速上手 ROMC 整合包
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              className="mt-4"
              href="https://drive.weixin.qq.com/s?k=AJQA7QdEAG40rD2IkS"
            >
              <ExternalLink className="w-4 h-4" />
              查看教程
            </Button>
          </Card>
        </motion.div>
      </div>

      {/* Donation section */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-8 p-8 glass-card rounded-2xl mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {/* QR Code */}
        <div className="flex-shrink-0">
          <img
            src="/images/donate-wecom.png"
            alt="Donate QR Code"
            className="w-48 h-48 md:w-56 md:h-56 object-contain rounded-xl bg-white p-2"
          />
        </div>

        <div className="space-y-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            <h3 className="font-display text-xl font-bold text-white">
              Donate US or Join US
            </h3>
          </div>
          <p className="text-text-secondary text-sm max-w-md">
            感谢您对 ROMC 的支持！扫描二维码捐赠，或加入我们的团队一起打造更好的 Minecraft 体验。
          </p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-text-muted text-sm">
            <Mail className="w-4 h-4" />
            <a
              href="mailto:frozenki@gmail.com"
              className="hover:text-accent-glow transition-colors"
            >
              frozenki@gmail.com
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
