import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

interface CopyButtonProps {
  text: string
  label?: string
}

export default function CopyButton({ text, label = '复制' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea')
      textarea.value = text
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }, [text])

  return (
    <motion.button
      onClick={handleCopy}
      className="relative flex items-center gap-2 px-5 py-3 bg-accent/10 hover:bg-accent/20 border border-accent/30 hover:border-accent/50 rounded-xl transition-all duration-300 cursor-pointer group"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-sm font-medium text-accent-glow">
        {copied ? '已复制！' : label}
      </span>
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.div
            key="check"
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Check className="w-4 h-4 text-green-400" />
          </motion.div>
        ) : (
          <motion.div
            key="copy"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Copy className="w-4 h-4 text-accent-glow group-hover:text-accent transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
