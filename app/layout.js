import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://pranitadhangle.github.io'),
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
    canonical: 'https://pranitadhangle.github.io/'
  },
  openGraph: {
    title: 'Pranit Adhangle | Portfolio',
    description:
      'Pranit Adhangle portfolio showcasing full stack development, data science projects, education, and contact details for collaboration.',
    url: 'https://pranitadhangle.github.io/',
    siteName: 'Pranit Adhangle Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://pranitadhangle.github.io/pranit.jpg',
        width: 1200,
        height: 630,
        alt: 'Pranit Adhangle'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pranit Adhangle | Portfolio',
    description:
      'Pranit Adhangle portfolio showcasing full stack development, data science projects, education, and contact details for collaboration.',
    images: ['https://pranitadhangle.github.io/pranit.jpg']
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
