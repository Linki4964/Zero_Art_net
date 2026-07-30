import { useState, useCallback } from 'react'
import { AnimatePresence } from 'framer-motion'
import Header from './components/layout/Header'
import SideNav from './components/layout/SideNav'
import OuterNav from './components/layout/OuterNav'
import SectionWrapper from './components/layout/SectionWrapper'
import HomeSection from './components/sections/HomeSection'
import FeaturesSection from './components/sections/FeaturesSection'
import RequirementsSection from './components/sections/RequirementsSection'
import ServerSection from './components/sections/ServerSection'
import DownloadSection from './components/sections/DownloadSection'
import { useScrollNavigation } from './hooks/useScrollNavigation'

const TOTAL_SECTIONS = 5

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { activeSection, direction, navigateTo, navigateNext, navigatePrev } =
    useScrollNavigation(TOTAL_SECTIONS)

  const handleToggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const handleCloseMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const handleNavigate = useCallback(
    (index: number) => {
      navigateTo(index)
      setIsMenuOpen(false)
    },
    [navigateTo]
  )

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg text-text-primary">
      {/* Background ambient effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Top-right gradient orb */}
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        {/* Bottom-left gradient orb */}
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <Header
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={handleToggleMenu}
        onNavigate={handleNavigate}
      />

      {/* Side navigation (desktop) */}
      <SideNav activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main viewport */}
      <main className="relative w-full h-full">
        <SectionWrapper
          id="home"
          isActive={activeSection === 0}
          direction={direction}
        >
          <HomeSection onNavigate={handleNavigate} />
        </SectionWrapper>

        <SectionWrapper
          id="features"
          isActive={activeSection === 1}
          direction={direction}
        >
          <FeaturesSection />
        </SectionWrapper>

        <SectionWrapper
          id="requirements"
          isActive={activeSection === 2}
          direction={direction}
        >
          <RequirementsSection />
        </SectionWrapper>

        <SectionWrapper
          id="server"
          isActive={activeSection === 3}
          direction={direction}
        >
          <ServerSection />
        </SectionWrapper>

        <SectionWrapper
          id="download"
          isActive={activeSection === 4}
          direction={direction}
        >
          <DownloadSection />
        </SectionWrapper>
      </main>

      {/* Outer navigation overlay (mobile/tablet menu) */}
      <OuterNav
        isOpen={isMenuOpen}
        activeSection={activeSection}
        onClose={handleCloseMenu}
        onNavigate={handleNavigate}
      />
    </div>
  )
}
