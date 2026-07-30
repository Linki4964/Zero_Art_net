import { useState, useCallback, useEffect, useRef } from 'react'

const TOTAL_SECTIONS = 5
const DEBOUNCE_MS = 800

export function useScrollNavigation(totalSections: number = TOTAL_SECTIONS) {
  const [activeSection, setActiveSection] = useState(0)
  const [direction, setDirection] = useState(0)
  const activeSectionRef = useRef(activeSection)

  // Keep ref in sync
  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

  const navigateTo = useCallback((index: number) => {
    setDirection(index > activeSectionRef.current ? 1 : -1)
    setActiveSection(index)
  }, [])

  const navigateNext = useCallback(() => {
    setDirection(1)
    setActiveSection((prev) => (prev + 1) % totalSections)
  }, [totalSections])

  const navigatePrev = useCallback(() => {
    setDirection(-1)
    setActiveSection((prev) => (prev - 1 + totalSections) % totalSections)
  }, [totalSections])

  useEffect(() => {
    let canScroll = true
    let timeout: ReturnType<typeof setTimeout>

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      if (!canScroll) return

      const delta = e.deltaY

      if (delta > 30) {
        canScroll = false
        clearTimeout(timeout)
        timeout = setTimeout(() => { canScroll = true }, DEBOUNCE_MS)
        navigateNext()
      } else if (delta < -30) {
        canScroll = false
        clearTimeout(timeout)
        timeout = setTimeout(() => { canScroll = true }, DEBOUNCE_MS)
        navigatePrev()
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault()
        navigateNext()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        navigatePrev()
      }
    }

    // Touch handling
    let touchStartY = 0
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }
    const handleTouchEnd = (e: TouchEvent) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(deltaY) > 50) {
        if (deltaY > 0) navigateNext()
        else navigatePrev()
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
      clearTimeout(timeout)
    }
  }, [navigateNext, navigatePrev])

  return { activeSection, direction, navigateTo, navigateNext, navigatePrev }
}
