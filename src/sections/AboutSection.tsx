import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { fadeUp } from '../animations/variants'

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionTitle
            eyebrow="About the Founder"
            title="Built by DevDamisa, shaped by business problems."
            description="I am the founder of Codemant Solutions, and I build software with a clear focus: reliable systems, thoughtful architecture and measurable business value."
          />
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <Card>
              <p className="text-base leading-8 text-gray-400">
                My work centres on scalable backend systems, elegant software architecture and the practical application of modern tools to solve real operational challenges. I care deeply about building products that feel premium to the end user while remaining dependable for the teams behind them.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {['Scalable backend design', 'Workflow automation', 'AI-enabled product thinking', 'Long-term technical partnership'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-300">
                    {item}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
