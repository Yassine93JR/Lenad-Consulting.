import type { Metadata } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScrollProvider'
import CursorFollower from '@/components/CursorFollower'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Tidiane Dioh & Lenad Consulting',
  description: 'Fonctionnaire international, Responsable de programme médias à l\'OIF. Conseil en Relations Internationales, Médias et Communication.',
  keywords: 'Tidiane Dioh, Lenad Consulting, OIF, Francophonie, Médias, Relations Internationales',
  authors: [{ name: 'Tidiane Dioh' }],
  openGraph: {
    title: 'Tidiane Dioh & Lenad Consulting',
    description: 'Fonctionnaire international, Responsable de programme médias à l\'OIF.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${lora.variable} ${inter.variable} font-sans antialiased`}>
        <SmoothScrollProvider>
          <CursorFollower />
          <Header />
          <main className="relative">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  )
}

