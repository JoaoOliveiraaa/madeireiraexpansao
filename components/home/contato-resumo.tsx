import { Phone, MessageCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/icons/instagram'
import { Reveal } from '@/components/reveal'
import { contato } from '@/lib/site-data'

const itens = [
  {
    icon: Phone,
    label: 'Telefone',
    value: contato.telefone,
    href: contato.telefoneHref,
    external: false,
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: contato.whatsapp,
    href: contato.whatsappHref,
    external: true,
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    value: contato.instagramHandle,
    href: contato.instagram,
    external: true,
  },
]

export function ContatoResumo() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Fale com a gente
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Estamos prontos para atender você
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {itens.map((item, i) => (
            <Reveal as="article" key={item.label} delay={i * 80}>
              <a
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="size-6" />
                </span>
                <span className="mt-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </span>
                <span className="mt-1 text-lg font-medium text-foreground">
                  {item.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
