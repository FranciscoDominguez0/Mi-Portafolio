import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Francisco Domínguez | Desarrollador de Software en Panamá',
    template: '%s | Desarrollador Web Panamá',
  },
  description:
    '¿Buscas un desarrollador de software en Panamá? Francisco Domínguez es un programador Full Stack especializado en creación de páginas web, sistemas a medida, React, Node.js y Laravel.',
  keywords: [
    'Desarrollador de Software Panamá',
    'Programador en Panamá',
    'Desarrollo Web Panamá',
    'Creador de páginas web Panamá',
    'Francisco Domínguez',
    'Full Stack Developer Panamá',
    'Ingeniero de Software Panamá',
    'React',
    'Next.js',
    'Node.js',
    'Laravel'
  ],
  authors: [{ name: 'Francisco Domínguez', url: siteUrl }],
  creator: 'Francisco Domínguez',
  publisher: 'Francisco Domínguez',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_PA',
    url: '/',
    title: 'Francisco Domínguez | Desarrollador de Software Full Stack',
    description:
      'Portafolio profesional de Francisco Domínguez. Creación de aplicaciones web modernas, rápidas y escalables.',
    siteName: 'Portafolio de Francisco Domínguez',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Francisco Domínguez - Desarrollador de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Domínguez | Desarrollador de Software',
    description:
      'Echa un vistazo a mi portafolio profesional. Especializado en React, Node.js, Next.js y Laravel.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}