import { motion } from 'framer-motion'
import { Mail, MessageCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Container } from './ui/Container'

export default function Footer() {
  const socials = [
    { label: 'Email', href: 'mailto:damisaemmanuel778@gmail.com', icon: Mail },
    { label: 'WhatsApp', href: 'https://wa.me/2347043777486', icon: MessageCircle },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/damisaemmanuel', icon: FaLinkedin },
    { label: 'GitHub', href: 'https://github.com/Damiemmy', icon: FaGithub },
  ]

  return (
    <footer className="border-t border-white/10 bg-[#05070b] py-16">
      <Container className="space-y-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">Codemant Solutions</p>
            <h2 className="mt-3 text-2xl font-semibold text-white">Built by DevDamisa for businesses that need clarity, speed and trust.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400">
              We help companies build software that performs, scales and supports growth without compromising quality.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Quick Links</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                <a href="#home" className="transition hover:text-white">Home</a>
                <a href="#services" className="transition hover:text-white">Services</a>
                <a href="#projects" className="transition hover:text-white">Projects</a>
                <a href="#contact" className="transition hover:text-white">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white">Contact</h3>
              <div className="mt-4 flex flex-col gap-3 text-sm text-gray-400">
                {socials.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a key={social.label} href={social.href} target="_blank" rel="noreferrer" whileHover={{ x: 4 }} className="flex items-center gap-2 transition hover:text-white">
                      <Icon size={16} className="text-red-400" />
                      <span>{social.label}</span>
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 border-t border-white/10 pt-8 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Codemant Solutions. All rights reserved.</p>
          <p>Built by DevDamisa</p>
        </div>
      </Container>
    </footer>
  )
}
