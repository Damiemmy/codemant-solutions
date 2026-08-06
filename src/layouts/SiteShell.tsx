import type { ReactNode } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

interface SiteShellProps {
  children: ReactNode
}

export default function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-[#05070b] text-white">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
