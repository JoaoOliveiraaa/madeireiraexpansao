import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { FaqList } from '@/components/faq-list'
import { CtaOrcamento } from '@/components/cta-orcamento'
import { faqItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Perguntas frequentes sobre produtos, entregas, orçamentos, corte de madeira e atendimento da Madeireira Expansão em São Carlos.',
}

export default function FaqPage() {
  return (
    <>
      <PageHero
        breadcrumb="FAQ"
        eyebrow="Dúvidas frequentes"
        title="Tudo o que você precisa saber antes de começar"
        description="Reunimos as perguntas mais comuns sobre nossos produtos, serviços, entregas e formas de atendimento. Não encontrou sua dúvida? Fale com a nossa equipe."
      />

      <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal>
          <FaqList items={faqItems} />
        </Reveal>

        <Reveal className="mt-12 rounded-2xl border border-border bg-secondary/40 p-8 text-center" delay={100}>
          <h2 className="text-xl font-medium text-foreground">
            Ainda tem dúvidas?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Nossa equipe está disponível para orientar você no projeto certo.
          </p>
          <Link
            href="/contato"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
          >
            Fale conosco
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <CtaOrcamento />
    </>
  )
}
