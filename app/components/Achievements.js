'use client'
import { FaTrophy, FaCertificate, FaMedal, FaStar } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const achievements = [
    {
      icon: <FaTrophy className="text-5xl text-yellow-400" />,
      title: 'SIH Finalist',
      description: 'Qualified as a finalist in the prestigious Smart India Hackathon, competing among thousands of teams nationwide.',
      date: '2025',
      highlight: true
    },
    {
      icon: <FaMedal className="text-5xl text-purple-400" />,
      title: 'College Topper - Diploma',
      description: 'Secured top position in 3rd year of Diploma in Information Technology with 90.44% aggregate in final year.',
      date: '2025',
      highlight: true
    },
    {
      icon: <FaCertificate className="text-5xl text-blue-400" />,
      title: 'IBM Data Science Professional Certificate',
      description: 'Completed comprehensive data science certification covering Python, machine learning, and data visualization.',
      date: '2025'
    },
    {
      icon: <FaStar className="text-5xl text-pink-400" />,
      title: 'Perfect Scores in Core Subjects',
      description: 'Achieved 70/70 marks in Java, Advanced Java, and Mobile App Development during diploma.',
      date: '2024'
    },
    {
      icon: <FaCertificate className="text-5xl text-green-400" />,
      title: 'Research Paper Presentation',
      description: 'Presented review paper at Guru Gobind University International Conference 2025.',
      date: '2025'
    },
    {
      icon: <FaMedal className="text-5xl text-orange-400" />,
      title: '3rd Topper - Second Year',
      description: 'Secured 3rd position in second year of diploma, demonstrating consistent academic excellence.',
      date: '2024'
    }
  ]

  return (
    <section id="achievements" className="py-24 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] relative overflow-hidden" ref={ref}>
      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Achievements</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, idx) => (
            <motion.div 
              key={idx} 
              className={`bg-white/5 backdrop-blur-md border rounded-2xl p-8 shadow-xl transition-all duration-300 ${
                achievement.highlight 
                  ? 'border-purple-500/40 bg-gradient-to-br from-purple-500/10 to-blue-500/10' 
                  : 'border-white/10'
              }`}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ scale: 1.05, y: -8, boxShadow: "0 25px 50px rgba(139,92,246,0.1)" }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {achievement.title}
                    </h3>
                    <span className="text-sm text-purple-400 font-medium">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
