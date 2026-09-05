
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sellada con cariño',
  description: 'Una pequeña carta para mi querida novia.Hecha con amor',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f0e6',
  userScalable: false,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-[#f7f0e6]">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
