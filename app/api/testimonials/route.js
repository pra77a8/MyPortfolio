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

// GET - Fetch approved testimonials
export async function GET() {
  try {
    if (useDatabase) {
      const [rows] = await pool.query(
        'SELECT id, name, role, message, rating, createdAt FROM testimonials WHERE approved = true ORDER BY createdAt DESC'
      )

      return NextResponse.json({
        success: true,
        data: rows
      })
    }

    const store = getMemoryStore()
    const approved = store.filter((item) => item.approved)

    return NextResponse.json({
      success: true,
      data: approved
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch testimonials'
    }, { status: 500 })
  }
}

// POST - Submit new testimonial
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, role, message, rating } = body

    // Validation
    if (!name || !role || !message || !rating) {
      return NextResponse.json({
        success: false,
        error: 'All fields are required (name, role, message, rating)'
      }, { status: 400 })
    }

    // Validate rating is between 1 and 5
    const ratingNum = parseInt(rating)
    if (isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) {
      return NextResponse.json({
        success: false,
        error: 'Rating must be a number between 1 and 5'
      }, { status: 400 })
    }

    if (useDatabase) {
      // Insert into database with approved = false
      const [result] = await pool.query(
        'INSERT INTO testimonials (name, role, message, rating, approved) VALUES (?, ?, ?, ?, false)',
        [name, role, message, ratingNum]
      )

      return NextResponse.json({
        success: true,
        message: 'Testimonial submitted successfully! It will be visible after approval.',
        data: {
          id: result.insertId,
          name,
          role,
          message,
          rating: ratingNum,
          approved: false
        }
      }, { status: 201 })
    }

    const store = getMemoryStore()
    const id = store.length + 1
    store.push({
      id,
      name,
      role,
      message,
      rating: ratingNum,
      approved: false,
      createdAt: new Date().toISOString()
    })

    return NextResponse.json({
      success: true,
      message: 'Testimonial submitted successfully! It will be visible after approval.',
      data: {
        id,
        name,
        role,
        message,
        rating: ratingNum,
        approved: false
      }
    }, { status: 201 })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to submit testimonial'
    }, { status: 500 })
  }
}
