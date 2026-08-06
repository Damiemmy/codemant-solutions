import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../constants/content'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { Button } from './ui/Button'

export default function Header() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(['home', 'services', 'projects', 'about', 'contact'])

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({ top: element.offsetTop - 90, behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05070b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <button onClick={() => handleNavClick('home')} className="text-lg font-semibold tracking-[0.2em] text-white">
          CODEMANT <span className="text-red-400">SOLUTIONS</span>
        </button>

        <nav className="hidden items-center gap-7 text-sm text-gray-400 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`transition ${activeId === item.href.replace('#', '') ? 'text-white' : 'hover:text-white'}`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="#contact" variant="primary" className="px-4 py-2">
            Book Consultation
          </Button>
        </div>

        <button className="rounded-full border border-white/10 p-2 text-white md:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="border-t border-white/10 bg-[#05070b]/95 px-5 py-5 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`rounded-2xl px-4 py-3 text-left text-sm transition ${activeId === item.href.replace('#', '') ? 'bg-white/10 text-white' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
