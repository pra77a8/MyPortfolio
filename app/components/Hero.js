'use client'
import Image from 'next/image'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const fullPhrase = "Hi, I'm Pranit Adhangle"
  const name = 'Pranit Adhangle'
  const prefix = "Hi, I'm "
  const [typedText, setTypedText] = useState('')

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      index += 1
      setTypedText(fullPhrase.slice(0, index))
      if (index >= fullPhrase.length) {
        clearInterval(interval)
      }
    }, 90)

    return () => clearInterval(interval)
  }, [fullPhrase])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] text-white relative overflow-hidden">
      {/* Animated glow blobs in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-float delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center md:text-left order-2 md:order-2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>{typedText.slice(0, Math.min(typedText.length, prefix.length))}</span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                {typedText.length > prefix.length ? typedText.slice(prefix.length) : ''}
              </span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl mb-6 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer & IBM Certified Data Scientist
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate about building innovative solutions and turning data into insights.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center md:justify-start space-x-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.a 
                href="https://github.com/pra77a8/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-3xl hover:text-yellow-300 transition-all duration-300 hover:scale-125 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/pranit-adhangle-590718322" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-3xl hover:text-yellow-300 transition-all duration-300 hover:scale-125 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=pranitadhangle908@gmail.com" 
                className="text-3xl hover:text-yellow-300 transition-all duration-300 hover:scale-125 cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaEnvelope />
              </motion.a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white font-semibold rounded-lg shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139,92,246,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a 
                href="/pranit%20resume.pdf" 
                download
                className="px-8 py-3 border-2 border-purple-400/40 text-white font-semibold rounded-lg hover:bg-purple-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center md:justify-start order-1 md:order-1"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-white shadow-2xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/pranit.jpg" 
                alt="Pranit Adhangle"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
