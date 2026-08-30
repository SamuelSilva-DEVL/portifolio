import type { Metadata } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { cn } from "@/lib/utils";

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portifolio',
  description: 'Portifolio pessoal de Samuel Silva',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={cn("font-sans", sourceSans.variable)}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
