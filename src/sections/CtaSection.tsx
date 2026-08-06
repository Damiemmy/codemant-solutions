import { ArrowRight, Mail, MessageCircle } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { Card } from '../components/ui/Card'

export function CtaSection() {
  const contactLinks = [
    { label: 'Email', href: 'mailto:damisaemmanuel778@gmail.com', icon: Mail },
    { label: 'WhatsApp', href: 'https://wa.me/2348141437254', icon: MessageCircle },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/damisaemmanuel', icon: FaLinkedin },
    { label: 'GitHub', href: 'https://github.com/Damiemmy', icon: FaGithub },
  ]

  return (
    <section id="contact" className="py-20 sm:py-24">
      <Container>
        <Card className="border-red-500/20 bg-linear-to-br from-white/10 to-white/5">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">Ready to build?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Ready to build something extraordinary? Let’s discuss your next project.</h2>
              <p className="mt-4 text-base leading-8 text-gray-400">Whether you need a new product, automation, a modern platform or a trusted technical partner, the conversation starts with a short consultation.</p>
            </div>
            <Button href="mailto:damisaemmanuel778@gmail.com" variant="primary" icon={<ArrowRight size={16} />}>
              Book Free Consultation
            </Button>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {contactLinks.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-gray-300 transition hover:bg-white/10">
                  <Icon size={16} className="text-red-400" />
                  <span>{item.label}</span>
                </a>
              )
            })}
          </div>
        </Card>
      </Container>
    </section>
  )
}
