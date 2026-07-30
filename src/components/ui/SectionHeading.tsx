import { motion } from 'framer-motion'

interface SectionHeadingProps {
  number: string
  title: string
  subtitle?: string
}

export default function SectionHeading({
  number,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <span className="font-mono text-xs tracking-[0.3em] text-accent/60 uppercase mb-3 block">
        {number}
      </span>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-6 h-px w-16 bg-gradient-to-r from-accent/60 to-transparent" />
    </motion.div>
  )
}
