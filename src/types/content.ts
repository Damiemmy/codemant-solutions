export interface NavItem {
  label: string
  href: string
}

export interface ProjectItem {
  title: string
  problem: string
  solution: string
  technologies: string[]
  businessValue: string
  github: string
  live: string
  image: string
}

export interface ValueItem {
  title: string
  description: string
}

export interface ServiceItem {
  title: string
  description: string
}

export interface StepItem {
  title: string
  description: string
}

export interface TestimonialItem {
  quote: string
  name: string
  role: string
}

export interface FaqItem {
  question: string
  answer: string
}
