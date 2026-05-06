import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Francisco Domínguez — Desarrollador de Software',
    template: '%s — Francisco Domínguez',
  },
  description:
    'Portafolio profesional de Francisco Domínguez, desarrollador de software especializado en aplicaciones web modernas.',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: '/',
    title: 'Francisco Domínguez — Desarrollador de Software',
    description:
      'Portafolio profesional de Francisco Domínguez, desarrollador de software especializado en aplicaciones web modernas.',
    siteName: 'Francisco Domínguez',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Francisco Domínguez — Desarrollador de Software',
    description:
      'Portafolio profesional de Francisco Domínguez, desarrollador de software especializado en aplicaciones web modernas.',
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