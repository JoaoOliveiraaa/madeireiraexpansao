import type { Metadata } from 'next'
import {
  Headphones,
  Scissors,
  FileText,
  Truck,
  HardHat,
  Package,
} from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeader } from '@/components/section-header'
import { CtaOrcamento } from '@/components/cta-orcamento'
import { servicos } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Serviços',
  description:
    'Atendimento especializado, corte de madeira sob medida, orçamento personalizado, entrega na região e apoio a profissionais. Conheça os serviços da Madeireira Expansão.',
}

const servicoIcons = [
  Headphones,
  Scissors,
  FileText,
  Truck,
  HardHat,
  Package,
]

export default function ServicosPage() {
  return (
    <>
      <PageHero
        breadcrumb="Serviços"
        eyebrow="Nossos serviços"
        title="Suporte completo para cada etapa da sua obra"
        description="Muito além de vender materiais, oferecemos consultoria, beneficiamento, logística e parceria com profissionais — tudo para que o seu projeto saia do papel com confiança."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHeader
          eyebrow="Como atendemos"
          title="Serviços que facilitam a sua construção"
          description="Cada serviço foi pensado para economizar tempo, reduzir desperdício e garantir que você encontre a solução certa, com a orientação de quem entende do segmento."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.map((servico, i) => {
            const Icon = servicoIcons[i % servicoIcons.length]
            return (
              <Reveal as="article" key={servico.titulo} delay={(i % 3) * 80}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <span className="mt-6 font-serif text-2xl text-primary/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="mt-2 text-xl font-medium text-foreground">
                    {servico.titulo}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {servico.descricao}
                  </p>
                  <p className="mt-4 text-sm font-medium text-primary">
                    {servico.destaque}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Processo simples
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Do primeiro contato à entrega na obra
            </h2>
            <ol className="mt-12 space-y-6 text-left">
              {[
                'Conte o que o seu projeto precisa — por telefone, WhatsApp ou formulário.',
                'Receba orientação técnica e um orçamento personalizado, sem surpresas.',
                'Confirme o pedido e agende a entrega ou retire na loja em São Carlos.',
              ].map((step, i) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed text-muted-foreground">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <CtaOrcamento />
    </>
  )
}
