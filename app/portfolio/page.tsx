import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'
import { CtaOrcamento } from '@/components/cta-orcamento'
import { portfolioItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Portfólio',
  description:
    'Projetos realizados com materiais da Madeireira Expansão: pisos, portas, madeiras, acabamentos e esquadrias. Veja a qualidade aplicada em obras reais.',
}

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        breadcrumb="Portfólio"
        eyebrow="Nossos projetos"
        title="Projetos que ganham vida com nossos materiais"
        description="Ambientes residenciais, marcenaria, estruturas e acabamentos — cada imagem representa a qualidade dos produtos e o cuidado que colocamos em cada entrega."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Galeria"
          title="Obras e ambientes finalizados"
          description="Uma seleção de projetos em que nossos materiais foram parte essencial do resultado final."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <Reveal as="article" key={item.slug} delay={(i % 3) * 80}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary backdrop-blur-sm">
                    {item.categoria}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-medium text-foreground">
                    {item.titulo}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.descricao}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaOrcamento />
    </>
  )
}
