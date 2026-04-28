import { motion } from "framer-motion"
import { Mail, ArrowRight } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import Header from "./header"
import Footer from "./footer"


export default function Home() {

  const projects = [
    {
      title: "Airbnb Clone",
      description:
        "Designed a scalable rental platform with booking system and real-time messaging.",
      image: "/projects/airbnb.jpg",
      live: "https://bookreservations.netlify.app/",
      github: "https://github.com/yourusername/airbnb-clone",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Full shopping system with payments and secure checkout flow.",
      image: "/projects/ecommerce.jpg",
      live: "https://buyit-wymc.onrender.com/",
      github: "https://github.com/yourusername/ecommerce",
    }
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <>
      <Header />

      <motion.main
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-black text-white overflow-hidden"
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-black blur-3xl" />

        {/* GLOBAL CONTAINER */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-20">

          {/* HERO */}
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="flex flex-col md:flex-row items-center justify-between
            pt-28 pb-16 md:pt-36 md:pb-20 gap-10 md:gap-16"
          >

            {/* TEXT */}
            <div className="w-full md:w-1/2 max-w-2xl text-center md:text-left">

              <motion.h1
                variants={item}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]"
              >
                I build scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  production systems
                </span>
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-5 text-gray-400 text-base sm:text-lg"
              >
                Full-stack engineer specializing in Django, Next.js, and real-time applications.
              </motion.p>

              <motion.div
                variants={item}
                className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start"
              >
                <a
                  href="#projects"
                  className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-xl hover:scale-105 transition"
                >
                  View Work <ArrowRight size={18} />
                </a>

                <a
                  href="mailto:damisaemmanuel778@gmail.com"
                  className="border px-6 py-3 rounded-xl hover:bg-white/10 transition"
                >
                  Contact
                </a>
              </motion.div>

            </div>

            {/* IMAGE (replaced next/image with normal img) */}
            <motion.div
              variants={item}
              className="flex justify-center md:justify-end w-full md:w-1/2"
            >
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-white/10 shadow-xl">
                <img
                  src="projects/damisa.png"
                  alt="Damisa Emmanuel"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </motion.section>

          {/* PROOF */}
          <section className="py-12 sm:py-16 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
              {[
                "Built full-stack production systems",
                "Real-time apps with WebSockets",
                "Secure payment integrations",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/5 p-5 rounded-2xl border border-white/10"
                >
                  <p className="text-gray-300">{text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="py-12 sm:py-16 md:py-20">

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Case Studies
            </h2>

            <div className="grid gap-8 md:gap-10">

              {projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-3xl border border-white/10 overflow-hidden hover:scale-[1.01] transition"
                >

                  <div className="relative w-full h-52 sm:h-64 md:h-72">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-5 sm:p-6 md:p-7">

                    <h3 className="text-xl sm:text-2xl font-semibold">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-gray-400">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4 mt-5">

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl hover:scale-105 transition"
                      >
                        Live <ArrowRight size={16} />
                      </a>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-white/20 rounded-xl hover:bg-white/10 transition"
                      >
                        GitHub
                      </a>

                    </div>

                  </div>

                </div>
              ))}

            </div>
          </section>

          {/* TECH */}
          <section id="tech" className="py-12 sm:py-16 md:py-20">

            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {["Django", "DRF", "Next.js", "React", "Docker", "PostgreSQL"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 transition"
                >
                  {tech}
                </span>
              ))}
            </div>

          </section>

          {/* CONTACT */}
          <section id="contact" className="py-12 sm:py-16 md:py-20 text-center">

            <h2 className="text-3xl sm:text-4xl font-bold">
              Let’s build something impactful
            </h2>

            <div className="flex justify-center gap-6 mt-6">

              <a href="https://github.com/Damiemmy">
                <FaGithub className="hover:scale-110 hover:text-purple-400 transition" size={28} />
              </a>

              <a href="mailto:damisaemmanuel778@gmail.com">
                <Mail className="hover:scale-110 hover:text-pink-400 transition" />
              </a>

            </div>

          </section>

        </div>
      </motion.main>

      <Footer />
    </>
  )
}