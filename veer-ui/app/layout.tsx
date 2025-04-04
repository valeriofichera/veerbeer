import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./provider"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "@0xVEER Action Figure | Limited Edition",
  description: "Pre-order your exclusive @0xVEER action figure. Only 100 will ever be made!",
  icons: {
    icon: "/favicon.ico",
  },
  generator: 'v0dev',
  openGraph: {
    title: "@0xVEER Action Figure | Limited Edition",
    description: "Pre-order your exclusive @0xVEER action figure. Only 100 will ever be made!",
    type: "website",
    images: [
      {
        url: "/veer-og.png",
        width: 1024,
        height: 1024,
        alt: "VEER Action Figure Preview"
      }
    ]
  },
  twitter: {
        card: "summary_large_image",
        title: "@0xVEER Action Figure | Limited Edition",
        description: "Pre-order your exclusive @0xVEER action figure. Only 100 will ever be made!",
        images: ["/veer-og.png"]
      }
    }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}



import './globals.css'