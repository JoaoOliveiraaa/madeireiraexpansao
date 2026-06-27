import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { contato } from '@/lib/site-data'

export function CtaOrcamento() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-16 shadow-sm sm:px-12 lg:px-20 lg:py-20">
        <Image
          src="/images/cta-madeira.png"
          alt=""
          fill
          className="object-cover opacity-[0.08]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Vamos construir juntos
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Solicite seu orçamento sem compromisso
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Conte para a nossa equipe o que o seu projeto precisa. Atendemos
            profissionais e consumidores com a atenção de quem está no mercado
            há quase 30 anos.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contato"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md sm:w-auto"
            >
              Solicitar Orçamento
              <ArrowRight className="size-4" />
            </Link>
            <a
              href={contato.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary sm:w-auto"
            >
              <MessageCircle className="size-4 text-accent" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
