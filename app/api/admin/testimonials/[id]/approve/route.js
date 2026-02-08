import { NextResponse } from 'next/server'
import pool from '@/lib/db'

// PUT - Approve a testimonial
export async function PUT(request, { params }) {
  try {
    const { id } = params

    if (!id) {
      return NextResponse.json({
        success: false,
        error: 'Testimonial ID is required'
      }, { status: 400 })
    }

    const [result] = await pool.query(
      'UPDATE testimonials SET approved = true WHERE id = ?',
      [id]
    )

    if (result.affectedRows === 0) {
      return NextResponse.json({
        success: false,
        error: 'Testimonial not found'
      }, { status: 404 })
    }

    return NextResponse.json({
      success: true,
      message: 'Testimonial approved successfully'
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({
      success: false,
      error: 'Failed to approve testimonial'
    }, { status: 500 })
  }
}
