'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/services' },
  { label: 'Интеграции', href: '/integrations' },
  { label: 'Портфолио', href: '/portfolio' },
  { label: 'Партнерам', href: '/partners' },
]

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo with favicon */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-8 h-8">
            <Image
              src="/favicon.ico"
              alt="BOLAT & CO Logo"
              width={32}
              height={32}
              className="object-contain"
              priority
            />
          </div>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            <span className="text-foreground">BOLAT</span>
            <span className="text-primary">&</span>
            <span className="text-foreground">CO</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-sm font-medium tracking-wide transition-colors underline-anim',
                  pathname === link.href
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2 text-sm font-semibold tracking-wide uppercase hover:bg-primary/90 transition-colors rounded-lg"
          >
            Оставить заявку
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-1"
            aria-label="Открыть меню"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-base font-medium transition-colors',
                    pathname === link.href
                      ? 'text-primary'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-flex bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold uppercase tracking-wide rounded-lg"
              >
                Оставить заявку
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}