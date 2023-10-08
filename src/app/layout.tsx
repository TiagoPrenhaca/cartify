import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cartify',
  description: 'Seu destino único para uma experiência de compra perfeita',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
