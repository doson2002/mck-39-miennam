import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MCK Miền Nam',
  description: 'MCK App',
  generator: 'MCK',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
