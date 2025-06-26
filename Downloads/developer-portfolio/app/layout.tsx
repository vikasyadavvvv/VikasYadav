import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vikas Yadav - Full-Stack Developer Portfolio",
  description:
    "Professional portfolio showcasing full-stack development skills, projects, and experience with modern web technologies.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark overflow-x-hidden">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <link rel="icon" href="/Profile.png" type="image/png" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
