'use client'
import { FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <footer id="contact" className="py-24 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] relative overflow-hidden" ref={ref}>
      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center text-white">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <span className="sr-only">Contact</span>
            Ready to Work Together?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m always interested in hearing about new projects and opportunities. 
            Let&apos;s create something amazing together!
          </motion.p>
          
          <motion.a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=pranitadhangle908@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white font-bold text-lg rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(139,92,246,0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope className="text-2xl" />
            <span>Contact Me</span>
          </motion.a>
        </div>

        {/* Footer */}
        <motion.div 
          className="mt-16 text-center text-white"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg">
            © 2026 Pranit Adhangle. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
