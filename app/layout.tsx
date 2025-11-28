import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Nin x Gradient",
  description: "Quick tool to create a 2 colors gradient, and get its code for CSS or Tailwind CSS."
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} text-white text-sm antialiased`}>{children}</body>
    </html>
  )
}
