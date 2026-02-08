import { NextResponse } from 'next/server'
import pool from '@/lib/db'

const useDatabase = Boolean(
  process.env.DB_HOST &&
  process.env.DB_USER &&
  process.env.DB_NAME
)

const getMemoryStore = () => {
  if (!globalThis.__testimonialsStore) {
    globalThis.__testimonialsStore = []
  }
  return globalThis.__testimonialsStore
}

// PUT - Disapprove a testimonial
export async function PUT(request, { params }) {
  try {
    const { id } = params

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Testimonial ID is required'
      }, { status: 400 })
    }

    if (useDatabase) {
      const [result] = await pool.query(
        'UPDATE testimonials SET approved = false WHERE id = ?',
        [id]
      )

      if (result.affectedRows === 0) {
        return NextResponse.json({
          success: false,
          error: 'Testimonial not found'
        }, { status: 404 })
      }
    } else {
      const store = getMemoryStore()
      const item = store.find((entry) => String(entry.id) === String(id))

      if (!item) {
        return NextResponse.json({
          success: false,
          error: 'Testimonial not found'
        }, { status: 404 })
      }

      item.approved = false
    }

    return NextResponse.json({
      success: true,
      message: 'Testimonial disapproved successfully'
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to disapprove testimonial'
    }, { status: 500 })
  }
}
