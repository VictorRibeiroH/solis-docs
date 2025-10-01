import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
})

export const metadata: Metadata = {
  title: "Guia de Sistema - Solis Educacional",
  description: "Como usar o sistema Solis Educacional",
  generator: "Víctor Ribeiro",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={quicksand.variable}>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
