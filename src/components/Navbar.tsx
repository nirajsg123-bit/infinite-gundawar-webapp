'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isHome = pathname === '/'

  const navLinks = [
    ...(isHome
      ? [
          { href: '#home', label: 'Home' },
          { href: '#about', label: 'About' },
          { href: '#services', label: 'Services' },
          { href: '#portfolio', label: 'Portfolio' },
          { href: '#testimonials', label: 'Testimonials' },
          { href: '#contact', label: 'Contact' },
        ]
      : []),
    { href: '/finance', label: '📊 Finance' },
    { href: '/ayurveda', label: '🌿 Ayurveda' },
    { href: '/happiness', label: '🧘 Happiness' },
    { href: '/ai-tools', label: '🤖 AI Tools' },
    { href: '/career', label: '💼 Career' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-white/90 nav-blur shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center overflow-hidden shadow-lg ${scrolled || !isHome ? 'bg-gradient-to-br from-[#1e3a5f] to-[#2c5282]' : 'bg-white/10 backdrop-blur-sm border border-white/20'}`}>
              <svg viewBox="0 0 240 240" className="w-9 h-9">
                <defs>
                  <linearGradient id="navGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d4a843"/>
                    <stop offset="100%" stopColor="#ecc94b"/>
                  </linearGradient>
                </defs>
                <circle cx="120" cy="120" r="110" fill="none" stroke="url(#navGold)" strokeWidth="6"/>
                <text x="120" y="105" textAnchor="middle" fill="url(#navGold)" fontSize="48" fontWeight="bold" fontFamily="Arial">IG</text>
                <text x="120" y="145" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">INFINITE</text>
                <text x="120" y="165" textAnchor="middle" fill="#d4a843" fontSize="10" fontFamily="Arial">GUNDAWAR</text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <span className={`font-bold text-lg block leading-tight ${scrolled || !isHome ? 'text-[#1e3a5f]' : 'text-white'}`}>
                Infinite Gundawar
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase ${scrolled || !isHome ? 'text-[#d4a843]' : 'text-white/70'}`}>
                Business Private Limited
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#d4a843] ${scrolled || !isHome ? 'text-gray-700' : 'text-white/90'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-2 rounded-lg ${scrolled || !isHome ? 'text-[#1e3a5f]' : 'text-white'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-white rounded-xl shadow-xl p-4 mt-2">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 px-4 text-gray-700 hover:text-[#d4a843] hover:bg-gray-50 rounded-lg font-medium">
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
