'use client'
import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

export default function Projects({ limit = 2, showViewAllLink = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [showAll, setShowAll] = useState(false)
  const projects = [
    {
      title: "AI DPR Evaluation System",
      description:
        "SIH final project for automated DPR evaluation, combining AI-driven insights with a clean, modern web interface for streamlined review workflows.",
      image: "/dpr.png",
      techStack: ["Python", "React", "MongoDB", "TypeScript"],
      live: "https://ai-dpr-evaluation-system-rovq.vercel.app",
      github: "https://github.com/pra77a8/ai-dpr-evaluation-system.git",
    },
    {
      title: 'YouTube Video Optimizer',
      description: 'A web app that uses AI to analyze YouTube videos and provide actionable optimization suggestions for titles, descriptions, tags, and thumbnails to boost views and engagement.',
      image: '/yt.png',
      techStack: ['HTML', 'Python', 'NLP', 'CSS'],
      live: 'https://ai-dpr-evaluation-system-7l7j.vercel.app/',
      github: 'https://github.com/pra77a8/YT-video-optimizer.git',
    },
    {
      title: 'File Compressor',
      description: 'C++ project implementing lossless file compression and decompression using Huffman coding, with a Windows GUI for file selection and ZIP archive operations.',
      image: '/file-compressor.png',
      techStack: ['C++', 'Huffman Coding'],
      github: 'https://github.com/pra77a8/File-compressor.git',
    },
    {
      title: 'Historical Stock & Revenue Analysis',
      description: 'IBM Data Science Certification project analyzing historical stock and revenue data using Python, web scraping, and data visualization to uncover trends and compare company performance.',
      image: '/file-compressor.png',
      techStack: ['Python', 'Pandas', 'Web Scraping', 'BeautifulSoup', 'Matplotlib'],
      github: 'https://github.com/pra77a8/Analyzing-Historical-stock-Revenue-Data-and-Building-a-Dashboard.git',
    }
  ]

  const visibleProjects = showAll
    ? projects
    : typeof limit === 'number' ? projects.slice(0, 3) : projects

  const isRealLiveUrl = (url) => Boolean(url && typeof url === 'string' && url.startsWith('http'))

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] relative overflow-hidden" ref={ref}>
      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          My <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, idx) => {
            const hasLive = isRealLiveUrl(project.live)

            return (
              <motion.article 
                key={idx} 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden group transition-all duration-300 flex flex-col h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -8, boxShadow: "0 25px 50px rgba(139,92,246,0.1)" }}
              >
                {/* Preview Area */}
                {hasLive ? (
                  <div className="relative h-56 sm:h-60 md:h-64 overflow-hidden bg-black/20">
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-sm font-semibold opacity-0 hover:opacity-100 transition-opacity"
                    >
                      View Live
                    </a>
                  </div>
                ) : (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative h-56 sm:h-60 md:h-64 overflow-hidden bg-slate-900/60 border-b border-white/10 flex flex-col items-center justify-center group-hover:bg-slate-900/80 transition-colors"
                  >
                    <FaGithub className="text-6xl text-gray-300 group-hover:text-white group-hover:scale-110 transition-all duration-300 mb-2" />
                    <span className="text-xs sm:text-sm font-medium text-gray-400 group-hover:text-purple-300 transition-colors">
                      View Code on GitHub
                    </span>
                  </a>
                )}

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.map((tech, techIdx) => (
                        <span key={techIdx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full border border-purple-500/30">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 pt-2">
                    {hasLive && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <FaExternalLinkAlt />
                        <span>Live Demo</span>
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        {showViewAllLink && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white font-semibold rounded-lg px-6 py-3"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
