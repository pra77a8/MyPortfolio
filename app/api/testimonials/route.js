import { NextResponse } from 'next/server'
import pool from '@/lib/db'

// GET - Fetch approved testimonials
export async function GET() {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, role, message, rating, createdAt FROM testimonials WHERE approved = true ORDER BY createdAt DESC'
    )
    
    return NextResponse.json({
      success: true,
      data: rows
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
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to submit testimonial'
    }, { status: 500 })
  }
}
