'use client'
import { useState, useEffect, useRef } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'

export default function Testimonials({ limit = 3, showViewAllLink = true }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    message: '',
    rating: 5
  })
  const [submitStatus, setSubmitStatus] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showAll, setShowAll] = useState(false)

  // Fetch approved testimonials
  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch('/api/testimonials')
      const result = await response.json()
      if (result.success) {
        setTestimonials(result.data)
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setSubmitStatus('')

    try {
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        setFormData({ name: '', role: '', message: '', rating: 5 })
        setTimeout(() => setSubmitStatus(''), 5000)
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const visibleTestimonials = showAll
    ? testimonials
    : typeof limit === 'number' ? testimonials.slice(0, limit) : testimonials

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-[#0b1120] via-[#0f172a] to-[#1e293b] relative overflow-hidden" ref={ref}>
      {/* Animated glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          What People <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">Say</span>
        </motion.h2>

        {/* Testimonials Display */}
        <div className="mb-16">
          {loading ? (
            <div className="text-center text-gray-500">Loading testimonials...</div>
          ) : testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  whileHover={{ y: -8, scale: 1.03, boxShadow: "0 25px 50px rgba(139,92,246,0.1)" }}
                >
                  <div className="flex items-center mb-4">
                    <FaQuoteLeft className="text-4xl text-purple-400 opacity-30" />
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.message}"
                  </p>
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FaStar 
                        key={i} 
                        className={`text-lg ${
                          i < (testimonial.rating || 5) ? 'text-yellow-400' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <h4 className="font-bold text-white text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">
              No testimonials yet. Be the first to share your experience!
            </div>
          )}

          {showViewAllLink && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((prev) => !prev)}
                className="bg-gradient-to-r from-purple-500 to-blue-500 hover:opacity-90 text-white font-semibold rounded-lg px-6 py-3"
              >
                {showAll ? 'Show Less' : 'View All Testimonials'}
              </button>
            </div>
          )}
        </div>

        {/* Testimonial Submission Form */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-1">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-3xl font-bold text-center mb-2 text-gray-800">
                Share Your Experience
              </h3>
              <p className="text-center text-gray-600 mb-8">
                Your testimonial will be reviewed before being published
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-gray-700 font-medium mb-2">
                      Your Role/Company *
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="CEO, Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
                    Rating *
                  </label>
                  <div className="flex items-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setFormData({ ...formData, rating: star })}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <FaStar
                          className={`text-3xl ${
                            star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-4 text-gray-700 font-medium">
                      {formData.rating} / 5
                    </span>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Your Testimonial *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Share your experience working with me..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-4 rounded-lg hover:shadow-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting...' : 'Submit Testimonial'}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
                    ✅ Thank you! Your testimonial has been submitted.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-center">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
