'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGraduationCap, FaTrophy, FaCertificate } from 'react-icons/fa'

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const educationData = [
    {
      degree: 'B.Tech in Computer Engineering',
      institution: 'K. K. Wagh Institute of Engineering Education & Research',
      period: '2025 – 2028',
      highlights: [
        'Current SGPA: 7.73 (till Semester 3)',
        'SIH Finalist',
        'IBM Certified in Data Science',
        'Actively participating in hackathons'
      ],
      icon: <FaGraduationCap className="text-5xl text-purple-400" />
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'Matoshri Asarabi Polytechnic, Eklahare',
      period: '2022 – 2025',
      highlights: [
        'Topper of the college in 3rd year',
        '90.44% aggregate in final year',
        'Scored 70/70 in Java, Advanced Java, and Mobile App Development',
        'Published review papers and research papers',
        'Presented review paper at Guru Gobind University International Conference 2025',
        '3rd Topper in second year'
      ],
      icon: <FaTrophy className="text-5xl text-blue-400" />
    },
    {
      degree: 'Secondary School (SSC)',
      institution: 'Purushottam English School - Nashik Road',
      period: '2022',
      highlights: [
        'Scored 80%',
        'Represented school in Chess Tournament'
      ],
      icon: <FaCertificate className="text-5xl text-pink-400" />
    }
  ]

  return (
    <section id="education" className="py-24 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] relative overflow-hidden" ref={ref}>
      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Education</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(139,92,246,0.2)" }}
            >
              <div className="flex justify-center mb-6">
                {edu.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 text-center">
                {edu.degree}
              </h3>
              
              <p className="text-purple-400 font-medium text-center mb-2">
                {edu.institution}
              </p>
              
              <p className="text-gray-400 text-sm text-center mb-6">
                {edu.period}
              </p>
              
              <div className="border-t border-white/10 pt-6">
                <ul className="space-y-3">
                  {edu.highlights.map((highlight, hIdx) => (
                    <motion.li 
                      key={hIdx}
                      className="text-gray-300 text-sm flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: idx * 0.2 + hIdx * 0.1 }}
                    >
                      <span className="text-purple-400 mr-2 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
