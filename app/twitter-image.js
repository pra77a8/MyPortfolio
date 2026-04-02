import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #0b1120, #0f172a, #1e293b)',
          color: '#fff',
          fontFamily: 'Arial',
        }}
      >
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            marginBottom: 18,
            background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Pranit Adhangle
        </div>
        <div style={{ fontSize: 34, fontWeight: 600, marginBottom: 14 }}>
          Portfolio
        </div>
        <div style={{ fontSize: 26, opacity: 0.9 }}>
          Full Stack Developer and IBM Certified Data Scientist
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
