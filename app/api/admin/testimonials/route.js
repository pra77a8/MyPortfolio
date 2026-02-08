import { NextResponse } from 'next/server'
import pool from '@/lib/db'

// GET - Fetch ALL testimonials (including unapproved) for admin
export async function GET() {
  try {
    const [rows] = await pool.query(
      'SELECT id, name, role, message, rating, approved, createdAt FROM testimonials ORDER BY createdAt DESC'
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
