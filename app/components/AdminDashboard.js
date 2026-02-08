'use client'
import { useState, useEffect } from 'react'
import { FaStar, FaCheck, FaTimes, FaSpinner, FaSignOutAlt } from 'react-icons/fa'

export default function AdminDashboard({ onLogout }) {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all') // all, approved, pending
  const [actionLoading, setActionLoading] = useState(null)

  useEffect(() => {
    fetchAllTestimonials()
  }, [])

  const fetchAllTestimonials = async () => {
    try {
      const response = await fetch('/api/admin/testimonials')
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

  const handleApprove = async (id) => {
    setActionLoading(id)
    try {
      const response = await fetch(`/api/admin/testimonials/${id}/approve`, {
        method: 'PUT',
      })
      const result = await response.json()
      
      if (result.success) {
        setTestimonials(testimonials.map(t => 
          t.id === id ? { ...t, approved: true } : t
        ))
      } else {
        alert('Failed to approve testimonial')
      }
    } catch (error) {
      console.error('Error approving testimonial:', error)
      alert('Error approving testimonial')
    } finally {
      setActionLoading(null)
    }
  }

  const handleDisapprove = async (id) => {
    setActionLoading(id)
    try {
      const response = await fetch(`/api/admin/testimonials/${id}/disapprove`, {
        method: 'PUT',
      })
      const result = await response.json()
      
      if (result.success) {
        setTestimonials(testimonials.map(t => 
          t.id === id ? { ...t, approved: false } : t
        ))
      } else {
        alert('Failed to disapprove testimonial')
      }
    } catch (error) {
      console.error('Error disapproving testimonial:', error)
      alert('Error disapproving testimonial')
    } finally {
      setActionLoading(null)
    }
  }

  const filteredTestimonials = testimonials.filter(t => {
    if (filter === 'approved') return t.approved === 1 || t.approved === true
    if (filter === 'pending') return t.approved === 0 || t.approved === false
    return true
  })

  const stats = {
    total: testimonials.length,
    approved: testimonials.filter(t => t.approved === 1 || t.approved === true).length,
    pending: testimonials.filter(t => t.approved === 0 || t.approved === false).length,
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">
              Manage testimonials and reviews
            </p>
          </div>
          <button
            onClick={onLogout}
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Total Testimonials</h3>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Approved</h3>
            <p className="text-3xl font-bold text-green-600">{stats.approved}</p>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-gray-500 text-sm font-medium mb-1">Pending Review</h3>
            <p className="text-3xl font-bold text-yellow-600">{stats.pending}</p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6">
          <div className="bg-white rounded-lg shadow p-2 inline-flex space-x-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === 'all'
                  ? 'bg-primary text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              All ({stats.total})
            </button>
            <button
              onClick={() => setFilter('pending')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === 'pending'
                  ? 'bg-yellow-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Pending ({stats.pending})
            </button>
            <button
              onClick={() => setFilter('approved')}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                filter === 'approved'
                  ? 'bg-green-500 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Approved ({stats.approved})
            </button>
          </div>
        </div>

        {/* Testimonials List */}
        {loading ? (
          <div className="text-center py-12">
            <FaSpinner className="animate-spin text-4xl text-primary mx-auto mb-4" />
            <p className="text-gray-600">Loading testimonials...</p>
          </div>
        ) : filteredTestimonials.length === 0 ? (
          <div className="bg-white rounded-lg shadow p-12 text-center">
            <p className="text-gray-500 text-lg">No testimonials found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredTestimonials.map((testimonial) => {
              const isApproved = testimonial.approved === 1 || testimonial.approved === true
              
              return (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-lg shadow-md p-6 border-l-4 ${
                    isApproved ? 'border-green-500' : 'border-yellow-500'
                  }`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-gray-900 mr-3">
                          {testimonial.name}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          isApproved
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {isApproved ? 'Approved' : 'Pending'}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-2">{testimonial.role}</p>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            className={`${
                              i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-gray-600 text-sm">
                          {testimonial.rating}/5
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">
                        {new Date(testimonial.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                      <p className="text-xs text-gray-400">
                        ID: {testimonial.id}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-gray-700 leading-relaxed italic">
                      "{testimonial.message}"
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t">
                    {!isApproved ? (
                      <button
                        onClick={() => handleApprove(testimonial.id)}
                        disabled={actionLoading === testimonial.id}
                        className="flex items-center space-x-2 px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {actionLoading === testimonial.id ? (
                          <FaSpinner className="animate-spin" />
                        ) : (
                          <FaCheck />
                        )}
                        <span>Approve</span>
                      </button>
                    ) : (
                      <button
                        onClick={() => handleDisapprove(testimonial.id)}
                        disabled={actionLoading === testimonial.id}
                        className="flex items-center space-x-2 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {actionLoading === testimonial.id ? (
                          <FaSpinner className="animate-spin" />
                        ) : (
                          <FaTimes />
                        )}
                        <span>Disapprove</span>
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <a
            href="/"
            className="inline-block px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            ← Back to Portfolio
          </a>
        </div>
      </div>
    </div>
  )
}
