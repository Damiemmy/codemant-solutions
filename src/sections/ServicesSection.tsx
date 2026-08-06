import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { fadeUp, staggerContainer } from '../animations/variants'
import { services } from '../constants/content'

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Services"
          title="Engineering support for the product, platform and business."
          description="Every engagement is shaped around outcomes, speed and clarity so your team can move with confidence."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer} className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <Card className="h-full">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-400">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
