'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCode, FaTrophy, FaBrain } from 'react-icons/fa'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Me
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a passionate{" "}
              <span className="font-semibold text-gray-900">
                Computer Engineering student
              </span>{" "}
              who loves building real-world tech solutions and participating in{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Hackathons
              </span>.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I enjoy learning new technologies, solving complex problems, and
              working on innovative projects that create real impact.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              I have experience in{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Web Development
              </span>{" "}
              and{" "}
              <span className="font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                Data Science
              </span>, and I’m always eager to grow, collaborate, and compete in
              high-level tech events.
            </p>
          </motion.div>

          {/* RIGHT SIDE — HIGHLIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid gap-6"
          >
            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <FaTrophy className="text-purple-500 text-3xl" />
                <div>
                  <h4 className="font-semibold text-gray-900">Hackathon Enthusiast</h4>
                  <p className="text-sm text-gray-500">
                    Actively participating and competing in national-level hackathons
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <FaCode className="text-blue-500 text-3xl" />
                <div>
                  <h4 className="font-semibold text-gray-900">Web Developer</h4>
                  <p className="text-sm text-gray-500">
                    Building modern responsive web applications
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-4">
                <FaBrain className="text-indigo-500 text-3xl" />
                <div>
                  <h4 className="font-semibold text-gray-900">Data Science Learner</h4>
                  <p className="text-sm text-gray-500">
                    Exploring AI, ML and data-driven problem solving
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
