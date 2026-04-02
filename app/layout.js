import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pranit Adhangle | Portfolio',
  description:
    'Pranit Adhangle portfolio showcasing full stack development, data science projects, education, and contact details for collaboration.',
  keywords: [
    'Pranit portfolio',
    'Pranit Adhangle',
    'Pranit Adhangle developer',
    'Pranit Data Science portfolio',
    'Pranit Java developer portfolio',
    'portfolio',
    'full stack developer'
  ],
  authors: [{ name: 'Pranit Adhangle' }],
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
