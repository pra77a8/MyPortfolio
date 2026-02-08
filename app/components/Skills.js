'use client'
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaHtml5, FaCss3Alt, FaGithub, FaCode } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMysql, SiJavascript, SiPhp } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const technologies = [
    { name: 'React', icon: <FaReact className="text-6xl text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-6xl text-gray-900" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-6xl text-yellow-500" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-6xl text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-6xl text-blue-600" /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-6xl text-cyan-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-6xl text-green-600" /> },
    { name: 'PHP', icon: <SiPhp className="text-6xl text-indigo-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-6xl text-blue-600" /> },
    { name: 'Java', icon: <FaJava className="text-6xl text-red-600" /> },
    { name: 'Python', icon: <FaPython className="text-6xl text-blue-500" /> },
    { name: 'Git', icon: <FaGitAlt className="text-6xl text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-6xl text-gray-900" /> },
    { name: 'VS Code', icon: <FaCode className="text-6xl text-blue-600" /> },
  ]

  return (
    <section id="skills" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Tech Stack
          </span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div className="mb-4">
                {tech.icon}
              </div>
              <p className="font-medium text-gray-800">{tech.name}</p>
            </motion.div>
          ))}
        </div>

        <motion.p 
          className="text-gray-500 mt-12 text-center italic"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          Constantly learning and exploring new technologies
        </motion.p>
      </div>
    </section>
  )
}
