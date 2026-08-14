'use client'
import { useState, useRef } from 'react'
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt, 
  FaGithub, 
  FaCode, 
  FaBrain, 
  FaChartBar, 
  FaChartLine, 
  FaSearch, 
  FaBolt 
} from 'react-icons/fa'
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMysql, 
  SiJavascript, 
  SiPhp, 
  SiNumpy, 
  SiPandas, 
  SiScikitlearn 
} from 'react-icons/si'
import { motion, AnimatePresence, useInView } from 'framer-motion'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeCategory, setActiveCategory] = useState('fullstack')

  const categories = [
    { id: 'fullstack', label: 'Full Stack Development' },
    { id: 'datascience', label: 'Data Science' },
  ]

  const fullStackSkills = [
    { name: 'React', icon: <FaReact className="text-6xl text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-6xl text-gray-900" /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-6xl text-yellow-500" /> },
    { name: 'HTML', icon: <FaHtml5 className="text-6xl text-orange-600" /> },
    { name: 'CSS', icon: <FaCss3Alt className="text-6xl text-blue-600" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-6xl text-cyan-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-6xl text-green-600" /> },
    { name: 'PHP', icon: <SiPhp className="text-6xl text-indigo-600" /> },
    { name: 'MySQL', icon: <SiMysql className="text-6xl text-blue-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-6xl text-orange-600" /> },
    { name: 'GitHub', icon: <FaGithub className="text-6xl text-gray-900" /> },
    { name: 'VS Code', icon: <FaCode className="text-6xl text-blue-600" /> },
  ]

  const dataScienceSkills = [
    { name: 'Python', icon: <FaPython className="text-6xl text-blue-500" /> },
    { name: 'NumPy', icon: <SiNumpy className="text-6xl text-blue-600" /> },
    { name: 'Pandas', icon: <SiPandas className="text-6xl text-indigo-600" /> },
    { name: 'Matplotlib', icon: <FaChartLine className="text-6xl text-emerald-500" /> },
    { name: 'Scikit-learn', icon: <SiScikitlearn className="text-6xl text-orange-500" /> },
    { name: 'XGBoost', icon: <FaBolt className="text-6xl text-yellow-500" /> },
    { name: 'BeautifulSoup', icon: <FaSearch className="text-6xl text-purple-600" /> },
    { name: 'Data Visualization', icon: <FaChartBar className="text-6xl text-blue-500" /> },
    { name: 'Machine Learning', icon: <FaBrain className="text-6xl text-purple-500" /> },
  ]

  const currentSkills = activeCategory === 'fullstack' ? fullStackSkills : dataScienceSkills

  return (
    <section id="skills" className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <span className="sr-only">Skills</span>
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Tech Stack
          </span>
        </motion.h2>

        {/* Category Tabs */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex p-1.5 bg-gray-100/80 backdrop-blur-sm rounded-xl border border-gray-200 shadow-inner max-w-full overflow-x-auto">
            {categories.map((category) => {
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`relative px-5 py-2.5 text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 whitespace-nowrap focus:outline-none ${
                    isActive ? 'text-white shadow-md' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              )
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 min-h-[220px]"
        >
          <AnimatePresence mode="wait">
            {currentSkills.map((tech, idx) => (
              <motion.div 
                key={`${activeCategory}-${tech.name}`} 
                className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <div className="mb-4">
                  {tech.icon}
                </div>
                <p className="font-medium text-gray-800">{tech.name}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

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
