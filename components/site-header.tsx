'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/logo'
import { navLinks } from '@/lib/site-data'

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 bg-background transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.08)]'
          : 'border-b border-transparent',
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo className="block w-36 sm:w-44" />

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative text-sm font-medium tracking-wide transition-colors',
                  active
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground',
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full',
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contato"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:inline-flex"
          >
            Solicitar Orçamento
          </Link>
          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full text-foreground transition-colors hover:bg-muted lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={cn(
          'overflow-hidden border-t border-border/60 bg-background transition-[max-height,opacity] duration-300 lg:hidden',
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
          {navLinks.map((link) => {
            const active =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                  active
                    ? 'bg-secondary text-primary'
                    : 'text-foreground/80 hover:bg-muted',
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <Link
            href="/contato"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
          >
            Solicitar Orçamento
          </Link>
        </nav>
      </div>
    </header>
  )
}
