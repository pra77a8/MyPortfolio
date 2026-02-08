'use client'
import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'
import Testimonials from '../components/Testimonials'

export default function TestimonialsPage() {
  const router = useRouter()

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
        >
          <FaArrowLeft />
          <span>Back</span>
        </button>
      </div>
      <Testimonials limit={null} showViewAllLink={false} />
    </div>
  )
}
