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

// GET - Fetch ALL testimonials (including unapproved) for admin
export async function GET() {
  try {
    if (useDatabase) {
      try {
        const [rows] = await pool.query(
          'SELECT id, name, role, message, rating, approved, createdAt FROM testimonials ORDER BY createdAt DESC'
        )

        return NextResponse.json({
          success: true,
          data: rows
        })
      } catch (dbError) {
        console.error('Database error:', dbError)
      }
    }

    const store = getMemoryStore()
    return NextResponse.json({
      success: true,
      data: store
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch testimonials'
    }, { status: 500 })
  }
}
