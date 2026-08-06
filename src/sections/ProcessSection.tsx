import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { fadeUp, staggerContainer } from '../animations/variants'
import { processSteps } from '../constants/content'

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Process"
          title="A precise path from challenge to launch."
          description="The engagement stays structured, collaborative and outcome-oriented at every stage."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.div key={step.title} variants={fadeUp}>
              <Card className="h-full">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{step.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
