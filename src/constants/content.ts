import type { FaqItem, NavItem, ProjectItem, ServiceItem, StepItem, TestimonialItem, ValueItem } from '../types/content'

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const valuePoints: ValueItem[] = [
  {
    title: 'Scalable Architecture',
    description: 'Future-ready systems designed to support growth without rework.',
  },
  {
    title: 'Secure Systems',
    description: 'Enterprise-grade practices that protect data, operations and trust.',
  },
  {
    title: 'Clean Code',
    description: 'Maintainable software that accelerates delivery and reduces long-term cost.',
  },
  {
    title: 'Long-Term Partnership',
    description: 'We stay close after launch to support iteration, stability and expansion.',
  },
  {
    title: 'Performance Optimized',
    description: 'Fast experiences that feel effortless for your users and your team.',
  },
  {
    title: 'Business First',
    description: 'Every decision is anchored in outcomes, adoption and measurable growth.',
  },
]

export const services: ServiceItem[] = [
  {
    title: 'Custom Web Applications',
    description: 'High-performance products tailored to your workflows, customers and growth plan.',
  },
  {
    title: 'Business Automation',
    description: 'Workflow design and implementation that reduces manual effort and improves reliability.',
  },
  {
    title: 'AI Integration',
    description: 'Practical AI features that improve support, decision-making and operational efficiency.',
  },
  {
    title: 'API Development',
    description: 'Reliable integrations that connect tools, partners and platforms without friction.',
  },
  {
    title: 'Cloud Solutions',
    description: 'Modern deployment, monitoring and infrastructure that scale with your ambition.',
  },
  {
    title: 'System Architecture',
    description: 'Thoughtful backend design that keeps systems resilient, secure and maintainable.',
  },
  {
    title: 'Technical Consulting',
    description: 'Strategic leadership for product roadmaps, architecture choices and delivery clarity.',
  },
]

export const projects: ProjectItem[] = [
  {
    title: 'Reservation Experience Platform',
    problem: 'A hospitality business needed a faster booking journey with better visibility across reservations and customer communication.',
    solution: 'We designed and delivered a polished booking experience with automation and a scalable service layer that reduced friction and improved operations.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    businessValue: 'Improved conversion and reduced operational overhead through a cleaner, faster customer flow.',
    github: 'https://github.com/Damiemmy',
    live: 'https://bookreservations.netlify.app/',
    image: `${import.meta.env.BASE_URL}projects/airbnb.jpg`,
  },
  {
    title: 'Commerce Growth Platform',
    problem: 'An online retail brand needed a stronger digital storefront with better performance and a more dependable checkout experience.',
    solution: 'We rebuilt the experience around reliability, speed and clear product journeys while keeping the platform easy to extend.',
    technologies: ['React', 'TypeScript', 'Express', 'Stripe'],
    businessValue: 'Lifted confidence in the buying journey and created a stronger foundation for future growth.',
    github: 'https://github.com/Damiemmy',
    live: 'https://buyit-wymc.onrender.com/',
    image: `${import.meta.env.BASE_URL}projects/ecommerce.jpg`,
  },
  {
    title: 'Internal Operations Suite',
    problem: 'A team needed a more structured way to manage requests, approvals and recurring work without scattered tools.',
    solution: 'We created a focused internal platform that centralised workflow tasks and helped leadership operate with clarity.',
    technologies: ['Django', 'PostgreSQL', 'Docker', 'REST APIs'],
    businessValue: 'Reduced friction in daily operations and gave the team a dependable system to scale with.',
    github: 'https://github.com/Damiemmy',
    live: 'https://github.com/Damiemmy',
    image: `${import.meta.env.BASE_URL}projects/damisa23.jpeg`,
  },
]

export const processSteps: StepItem[] = [
  { title: 'Discover', description: 'We learn your goals, constraints and the business problem that needs solving.' },
  { title: 'Plan', description: 'We shape the roadmap, clarify scope and propose a pragmatic path to delivery.' },
  { title: 'Design', description: 'We align the product experience and system structure around trust and usability.' },
  { title: 'Develop', description: 'We build with speed, quality and maintainability at the core of the work.' },
  { title: 'Deploy', description: 'We release with confidence through careful testing and thoughtful rollout.' },
  { title: 'Support', description: 'We continue to refine, optimise and support your digital product as it grows.' },
]

export const testimonials: TestimonialItem[] = [
  {
    quote: 'They understood our business objectives immediately and translated them into a product that feels premium and reliable.',
    name: 'Aisha Bello',
    role: 'Founder, Growth Studio',
  },
  {
    quote: 'The team brought structure and clarity to a complex problem. The result was faster delivery and better decisions.',
    name: 'Tunde Okafor',
    role: 'Operations Lead, Northstar Labs',
  },
  {
    quote: 'The experience felt strategic from day one. We were never just buying development; we were gaining an engineering partner.',
    name: 'Mina Yusuf',
    role: 'CEO, Elevate Commerce',
  },
]

export const faqItems: FaqItem[] = [
  {
    question: 'What kinds of businesses do you work with?',
    answer: 'We partner with founders, growing companies, schools, hospitals, NGOs, logistics teams and established organisations that need dependable digital solutions.',
  },
  {
    question: 'How quickly can we start?',
    answer: 'Most engagements begin with a discovery conversation, after which we can move into planning and delivery with clear milestones.',
  },
  {
    question: 'Do you build custom solutions or use off-the-shelf products?',
    answer: 'We recommend a tailored approach when the problem needs precision, integration or long-term flexibility.',
  },
  {
    question: 'Can you help with existing systems?',
    answer: 'Yes. We can modernise existing tools, improve performance and integrate new capabilities without disrupting your operations.',
  },
  {
    question: 'What is the engagement model?',
    answer: 'We offer consulting, project-based delivery and long-term support depending on the scope, pace and internal capacity of your team.',
  },
]
