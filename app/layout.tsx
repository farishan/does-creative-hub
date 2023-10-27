import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientComponents from './_components/ClientComponents'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DOES Creative Hub',
  description: 'Creative Space and Workshop by DOES University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientComponents />
        {children}
      </body>
    </html>
  )
}
