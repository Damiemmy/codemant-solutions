import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Container } from '../components/ui/Container'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Card } from '../components/ui/Card'
import { fadeUp, staggerContainer } from '../animations/variants'
import { projects } from '../constants/content'

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          eyebrow="Featured Work"
          title="Case studies built to create commercial impact."
          description="The work below reflects how we pair strategy, product thinking and engineering discipline to deliver stronger digital experiences."
        />
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={staggerContainer} className="mt-12 space-y-6">
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <Card className="overflow-hidden p-0">
                <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                  <img loading="lazy" src={project.image} alt={project.title} className="h-64 w-full object-cover lg:h-full" />
                  <div className="p-6 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-400">Case Study</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
                    <div className="mt-6 space-y-4 text-sm leading-7 text-gray-400">
                      <div>
                        <p className="font-semibold text-white">Problem</p>
                        <p className="mt-1">{project.problem}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Solution</p>
                        <p className="mt-1">{project.solution}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Business Value</p>
                        <p className="mt-1">{project.businessValue}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                        Live Demo <ArrowUpRight size={16} />
                      </a>
                      <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">
                        <FaGithub size={16} /> GitHub
                      </a>
                    </div>
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
