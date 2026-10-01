import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Francisco Domínguez | Desarrollador de Software Full Stack',
    template: '%s | Francisco Domínguez',
  },
  description:
    'Portafolio profesional de Francisco Domínguez. Desarrollador de software Full Stack especializado en React, Next.js, Node.js y Laravel. Creación de sitios y aplicaciones web modernas y escalables.',
  keywords: [
    'Francisco Domínguez',
    'Desarrollador Web',
    'Full Stack Developer',
    'Frontend',
    'Backend',
    'Programador Panamá',
    'Desarrollo de Software',
    'React',
    'Next.js',
    'TypeScript',
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
        url: '/Pefil.png',
        width: 800,
        height: 600,
        alt: 'Francisco Domínguez - Desarrollador de Software',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Domínguez | Desarrollador de Software',
    description:
      'Echa un vistazo a mi portafolio profesional. Especializado en React, Node.js, Next.js y Laravel.',
    images: ['/Pefil.png'],
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