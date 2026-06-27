import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaOrcamento } from '@/components/cta-orcamento'
import { categorias } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Produtos',
  description:
    'Madeiras, pisos laminados, portas, alumínio, ferragens e acabamentos. Conheça as linhas de produtos da Madeireira Expansão e solicite seu orçamento.',
}

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        breadcrumb="Produtos"
        eyebrow="Nossos produtos"
        title="Tudo para a sua obra, do alicerce ao acabamento"
        description="Trabalhamos com um mix completo de produtos do segmento madeireiro e da construção. Conheça cada categoria e solicite um orçamento sob medida."
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="space-y-20 lg:space-y-28">
          {categorias.map((cat, i) => {
            const reverse = i % 2 === 1
            return (
              <Reveal as="article" key={cat.slug}>
                <div
                  id={cat.slug}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <div
                    className={`relative ${reverse ? 'lg:order-2' : ''}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-lg">
                      <Image
                        src={cat.imagem}
                        alt={cat.titulo}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={reverse ? 'lg:order-1' : ''}>
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                      Categoria {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-3 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
                      {cat.titulo}
                    </h2>
                    <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                      {cat.descricao}
                    </p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {cat.itens.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-foreground/80"
                        >
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contato"
                      className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                    >
                      Solicitar orçamento
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <CtaOrcamento />
    </>
  )
}
