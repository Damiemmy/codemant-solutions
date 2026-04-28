import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-black text-white overflow-hidden">

      {/* GLOW BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 via-black to-black blur-3xl" />

      <div className="relative px-6 md:px-20 py-16">

        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">
              Dev<span className="text-purple-400">Damisa</span>
            </h2>

            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Full-stack engineer building scalable systems, real-time applications,
              and modern web experiences that solve real problems.
            </p>
          </div>

          {/* NAV LINKS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              <a href="#home" className="hover:text-white transition">Home</a>
              <a href="#projects" className="hover:text-white transition">Projects</a>
              <a href="#tech" className="hover:text-white transition">Tech Stack</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </div>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-white font-semibold mb-4">Connect With Me</h3>

            <div className="flex flex-wrap gap-4">

              {[
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/damisaemmanuel" },
                { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=100076613114862" },
                { icon: FaInstagram, link: "https://www.instagram.com/dammiemmy?igsh=YTVtem14a25wYTFy" },
                { icon: FaTiktok, link: "https://www.tiktok.com/@damisaemmanuel?_r=1&_t=ZS-95sBOQVQtea" },
                { icon: FaGithub, link: "https://github.com/Damiemmy" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.link}
                  target="_blank"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl
                  hover:bg-white/10 transition"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}

            </div>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-10 border-t border-white/10" />

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-500">

          <p>
            © {new Date().getFullYear()} DevDamisa. All rights reserved.
          </p>

          <p className="text-gray-400">
            Built with ❤️ using Next.js & Django
          </p>

        </div>

      </div>
    </footer>
  )
}