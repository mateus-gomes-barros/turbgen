import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200', '300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'TurbGen',
  description: 'Aproveite o melhor dos scripts da vturb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
