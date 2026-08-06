import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { fadeUp, staggerContainer } from '../animations/variants'

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.24),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_30%)]" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-2xl">
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-[0.35em] text-red-400">
              Codemant Solutions
            </motion.p>
            <motion.h1 variants={fadeUp} className="mt-5 text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Engineering digital solutions that drive growth.
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg leading-8 text-gray-400 sm:text-xl">
              We help businesses modernise operations, automate workflows, integrate AI and launch products that create a measurable edge.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="#contact" variant="primary" icon={<ArrowRight size={16} />}>
                Book a Free Consultation
              </Button>
              <Button href="#projects" variant="secondary" icon={<Play size={16} />}>
                View Projects
              </Button>
            </motion.div>
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="rounded-full border border-white/10 px-3 py-1">Trusted by founders and teams</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Scalable systems</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Premium delivery</span>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-4xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-3xl border border-white/10 bg-[#090b10] p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">Founder</p>
                    <p className="mt-1 text-xl font-semibold text-white">DevDamisa</p>
                  </div>
                  <div className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-sm text-red-400">Available</div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {['Backend systems', 'AI-enabled products', 'Workflow automation', 'Reliable architecture'].map((item) => (
                    <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-300">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-200">
                  “We turn complex challenges into clear, dependable digital outcomes.”
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
