import { useState, useEffect } from 'react'

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState(0)

  useEffect(() => {
    const handleHashChange = () => {
      const sections = ['home', 'features', 'requirements', 'server', 'download']
      const hash = window.location.hash.replace('#', '')
      const index = sections.indexOf(hash)
      if (index >= 0) setActiveSection(index)
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return { activeSection, setActiveSection }
}
