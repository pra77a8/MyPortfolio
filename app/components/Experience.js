'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaBriefcase, FaCode, FaLaptopCode } from 'react-icons/fa'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] relative overflow-hidden" ref={ref}>
      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Experience</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(139,92,246,0.2)" }}
          >
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <FaBriefcase className="text-3xl text-white" />
                </div>
              </div>
              
              <div className="flex-1 mt-6 md:mt-0">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Intern
                    </h3>
                    <p className="text-purple-400 font-semibold text-lg">
                      Innovation Hub, Nashik
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">
                    June 2024 – July 2024
                  </span>
                </div>
                
                <div className="border-t border-white/10 pt-6">
                  <ul className="space-y-3">
                    {[
                      'Learned Bootstrap, HTML, CSS, PHP',
                      'Built a Car Rental Web Project',
                      'Gained real-world web development experience'
                    ].map((item, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start space-x-3 text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                      >
                        <span className="text-purple-400 mt-0.5 flex-shrink-0 font-bold">|</span>
                        <span className="text-base leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
