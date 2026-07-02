import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ninja Xpress Clone',
  description: 'Layanan pengiriman barang',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}