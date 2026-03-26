import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RevealOnScroll from '@/components/common/RevealOnScroll'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Clearview Land Survey',
  description: 'Professional Land Surveying Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RevealOnScroll />
        {children}
      </body>
    </html>
  )
}
