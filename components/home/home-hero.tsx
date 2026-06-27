import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { contato } from '@/lib/site-data'

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 sm:pt-32 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pb-24">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Desde {contato.fundacao} em São Carlos
          </span>
          <h1 className="mt-6 text-balance text-4xl font-medium leading-[1.04] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            A madeira certa para cada{' '}
            <span className="text-primary">projeto</span> da sua obra
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Há quase três décadas, a Madeireira Expansão é referência em
            madeiras, portas, pisos, alumínio, ferragens e acabamentos para
            quem constrói com qualidade e confiança.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Solicitar Orçamento
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/empresa"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
            >
              Conheça nossa história
            </Link>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            <div>
              <dt className="text-3xl font-medium text-primary">+28</dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                anos de tradição
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-medium text-primary">6</dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                linhas de produtos
              </dd>
            </div>
            <div>
              <dt className="text-3xl font-medium text-primary">100%</dt>
              <dd className="mt-1 text-xs leading-snug text-muted-foreground">
                foco no cliente
              </dd>
            </div>
          </dl>
        </div>

        <div className="fade-up relative" style={{ animationDelay: '120ms' }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border shadow-xl sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src="/images/hero-madeira.png"
              alt="Madeiras selecionadas organizadas no depósito da Madeireira Expansão"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-2 hidden rounded-2xl border border-border bg-card px-6 py-5 shadow-lg sm:block">
            <p className="text-sm font-semibold text-foreground">
              Qualidade que se vê
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Produtos selecionados peça a peça
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
