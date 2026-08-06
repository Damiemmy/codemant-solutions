import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]) {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? 'home')

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 140

      const activeSection = sectionIds
        .map((id) => {
          const element = document.getElementById(id)
          if (!element) return null

          return {
            id,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight,
          }
        })
        .find((section) => section && offset >= section.top && offset < section.bottom)

      if (activeSection?.id) {
        setActiveId(activeSection.id)
      } else if (window.scrollY < 120) {
        setActiveId('home')
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sectionIds])

  return activeId
}
