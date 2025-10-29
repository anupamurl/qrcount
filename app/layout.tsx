import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'QRCount - Track the Untrackable | Enterprise QR Asset Management',
  description: 'QRCount turns physical assets into intelligent, traceable digital entities using smart QR technology. Enterprise-grade asset tracking solution.',
  keywords: 'QR Asset Tracking, Asset Management SaaS, Enterprise QR, Digital Asset Management',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}