import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Projects", id: "projects" },
    { name: "Tech", id: "tech" },
    { name: "Contact", id: "contact" },
  ]

  // SCROLL SPY
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 150

      navItems.forEach((item) => {
        const el = document.getElementById(item.id)
        if (!el) return

        const top = el.offsetTop
        const bottom = top + el.offsetHeight

        if (scrollY >= top && scrollY < bottom) {
          setActive(item.id)
        }
      })

      if (window.scrollY < 100) {
        setActive("home")
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // SCROLL FUNCTION
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      })

      setActive(id)
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* HEADER */}
      <div className="backdrop-blur-xl bg-black/70 border-b border-white/10">
        <div className="flex items-center justify-between px-6 md:px-20 py-4">

          {/* LOGO */}
          <motion.h1
            onClick={() => scrollToSection("home")}
            whileHover={{ scale: 1.05 }}
            className="text-white font-bold cursor-pointer"
          >
            Dev<span className="text-purple-400">Damisa</span>
          </motion.h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10 text-sm relative">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative transition ${
                  active === item.id ? "text-white" : "text-gray-400"
                }`}
              >
                {item.name}

                {active === item.id && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-purple-400 to-pink-500"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <button
            onClick={() => scrollToSection("contact")}
            className="hidden md:flex bg-white text-black px-4 py-2 rounded-xl
            hover:scale-105 active:scale-95 transition"
          >
            Hire Me
          </button>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white z-[60]"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40"
            />

            {/* MENU CONTENT */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex flex-col justify-center items-center px-6 text-center"
            >

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white hover:scale-110 transition z-[60]"
              >
                <X size={32} />
              </button>

              {/* NAV LINKS */}
              <div className="flex flex-col gap-6 w-full max-w-sm">

                {navItems.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className={`text-2xl font-semibold px-6 py-3 rounded-xl transition-all
                    ${
                      active === item.id
                        ? "bg-white text-black"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}

              </div>

              {/* CTA */}
              <motion.button
                onClick={() => scrollToSection("contact")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10 bg-gradient-to-r from-purple-500 to-pink-500
                text-white px-8 py-3 rounded-xl font-medium
                hover:scale-105 active:scale-95 transition"
              >
                Hire Me
              </motion.button>

              {/* SOCIALS */}
              <motion.div
                className="flex gap-6 mt-10 text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:scale-110 transition"
                >
                  <FaGithub size={24} />
                </a>

                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 hover:scale-110 transition"
                >
                  <FaLinkedin size={24} />
                </a>

                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 hover:scale-110 transition"
                >
                  <FaInstagram size={24} />
                </a>
              </motion.div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  )
}