import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Fraunces, Inter, Geist_Mono } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Madeireira Expansão | Madeiras e Materiais de Construção em São Carlos',
    template: '%s | Madeireira Expansão',
  },
  description:
    'Referência em São Carlos e região desde 1996. Madeiras, portas, pisos laminados, alumínio, ferragens, acabamentos e materiais de construção com qualidade e atendimento especializado.',
  generator: 'v0.app',
  keywords: [
    'madeireira',
    'madeiras',
    'portas',
    'pisos laminados',
    'alumínio',
    'ferragens',
    'materiais de construção',
    'São Carlos',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#ffffff',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={`light ${fraunces.variable} ${inter.variable} ${geistMono.variable}`}
    >
      <body className="bg-background font-sans antialiased">
        <SiteHeader />
        <main className="min-h-screen">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
