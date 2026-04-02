import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://pranitadhangle.github.io'),
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
  },
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Pranit Adhangle | Portfolio',
    description:
      'Pranit Adhangle portfolio showcasing full stack development, data science projects, education, and contact details for collaboration.',
    url: '/',
    siteName: 'Pranit Adhangle Portfolio',
    type: 'website',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Pranit Adhangle Portfolio Homepage Preview'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranit Adhangle | Portfolio',
    description:
      'Pranit Adhangle portfolio showcasing full stack development, data science projects, education, and contact details for collaboration.',
    images: ['/twitter-image']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
