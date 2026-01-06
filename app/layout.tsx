import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "LineupDesigner - Hockey Lineup Management for Coaches",
  description: "Build and manage hockey lineups with ease. Drag-and-drop interface for 5v5, powerplay, penalty kill, and more. Coming Q1 2026.",
  keywords: ["hockey", "lineup", "coach", "team management", "ice hockey", "lineup builder"],
  openGraph: {
    title: "LineupDesigner - Hockey Lineup Management",
    description: "Build and manage hockey lineups with ease. Coming Q1 2026.",
    type: "website",
    url: "https://lineupdesigner.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "LineupDesigner - Hockey Lineup Management",
    description: "Build and manage hockey lineups with ease. Coming Q1 2026.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="antialiased">{children}</body>
    </html>
  )
}
