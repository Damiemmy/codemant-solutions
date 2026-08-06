import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { fadeUp, staggerContainer } from '../animations/variants'
import { valuePoints } from '../constants/content'

export function ValueSection() {
  return (
    <section id="value" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Why Codemant"
          title="Built to earn trust from the first conversation."
          description="Businesses choose us when they need more than a developer. They need a dependable partner who can shape the product, strengthen the platform and support growth."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {valuePoints.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="h-full">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-red-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gray-400">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
