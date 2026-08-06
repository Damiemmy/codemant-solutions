import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { fadeUp, staggerContainer } from '../animations/variants'
import { faqItems } from '../constants/content'

export function FaqSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="FAQ"
          title="Common questions from business owners."
          description="We believe the best partnerships begin with clarity, honesty and a shared understanding of the outcome."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="mt-12 space-y-4">
          {faqItems.map((item) => (
            <motion.div key={item.question} variants={fadeUp}>
              <Card>
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{item.answer}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
