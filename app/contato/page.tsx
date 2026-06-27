import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from 'lucide-react'
import { InstagramIcon } from '@/components/icons/instagram'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { FaqList } from '@/components/faq-list'
import { contato, faqItems } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Fale com a Madeireira Expansão. Telefone, WhatsApp, e-mail e localização em São Carlos. Solicite seu orçamento personalizado.',
}

const contactChannels = [
  {
    icon: Phone,
    label: 'Telefone',
    value: contato.telefone,
    href: contato.telefoneHref,
    external: false,
    description: 'Ligue para falar com nossa equipe de vendas.',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contato.whatsapp,
    href: contato.whatsappHref,
    external: true,
    description: 'Mensagem rápida para orçamentos e dúvidas.',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: contato.email,
    href: contato.emailHref,
    external: false,
    description: 'Envie detalhes do seu projeto por e-mail.',
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: contato.instagramHandle,
    href: contato.instagram,
    external: true,
    description: 'Siga nosso dia a dia e novidades.',
  },
]

export default function ContatoPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contato"
        eyebrow="Fale conosco"
        title="Estamos prontos para atender o seu projeto"
        description="Seja para uma obra completa, uma reforma ou um projeto de marcenaria, nossa equipe está disponível para orientar e montar o orçamento ideal."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Canais de atendimento
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Escolha a forma mais conveniente
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {contactChannels.map((channel) => (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                >
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <channel.icon className="size-5" />
                  </span>
                  <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {channel.label}
                  </span>
                  <span className="mt-1 text-base font-medium text-foreground">
                    {channel.value}
                  </span>
                  <span className="mt-2 text-sm text-muted-foreground">
                    {channel.description}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 space-y-4 rounded-2xl border border-border bg-secondary/40 p-6">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Localização</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {contato.enderecoCompleto}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Horário</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {contato.horario}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                Solicitar orçamento
              </span>
              <h2 className="mt-4 text-2xl font-medium text-foreground sm:text-3xl">
                Envie os detalhes do seu projeto
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Para uma resposta mais rápida, envie pelo WhatsApp as medidas,
                tipo de material e quantidade estimada. Nossa equipe retorna com
                um orçamento personalizado.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={contato.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
                >
                  <MessageCircle className="size-4" />
                  Enviar mensagem no WhatsApp
                </a>
                <a
                  href={contato.telefoneHref}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:text-primary"
                >
                  <Phone className="size-4" />
                  Ligar agora
                </a>
              </div>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Prefere tirar dúvidas antes?{' '}
                <Link
                  href="/faq"
                  className="font-medium text-primary hover:underline"
                >
                  Veja nossa FAQ
                  <ArrowRight className="ml-1 inline size-3.5" />
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Dúvidas frequentes
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Perguntas comuns
            </h2>
            <p className="mt-4 text-muted-foreground">
              Respostas rápidas para as dúvidas mais frequentes dos nossos
              clientes.
            </p>
          </Reveal>
          <Reveal className="mt-12" delay={100}>
            <FaqList items={faqItems.slice(0, 4)} />
          </Reveal>
          <Reveal className="mt-8 text-center" delay={150}>
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
            >
              Ver todas as perguntas
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}
