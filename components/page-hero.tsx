import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string
  title: string
  description: string
  breadcrumb: string
}) {
  return (
    <section className="border-b border-border bg-secondary/40 pt-32 pb-16 sm:pt-36 lg:pt-44 lg:pb-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav
          aria-label="Trilha de navegação"
          className="flex items-center gap-1.5 text-xs text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5" />
          <span className="text-foreground">{breadcrumb}</span>
        </nav>
        <span className="mt-8 block text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-medium leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  )
}
