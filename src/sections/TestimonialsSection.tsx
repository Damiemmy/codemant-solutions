import { motion } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { fadeUp, staggerContainer } from '../animations/variants'
import { testimonials } from '../constants/content'

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted by leaders who value clarity and execution."
          description="The following notes are ready for your future client feedback and can be swapped out as you grow."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.name} variants={fadeUp}>
              <Card className="h-full">
                <p className="text-base leading-8 text-gray-300">“{testimonial.quote}”</p>
                <div className="mt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
