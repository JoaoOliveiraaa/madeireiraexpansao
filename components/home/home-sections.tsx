import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Users,
  ShieldCheck,
  Layers,
  Truck,
  HardHat,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { categorias, diferenciais, servicos } from '@/lib/site-data'

const diferencialIcons = [Award, Users, ShieldCheck, Layers, Truck, HardHat]

export function QuemSomos() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-border shadow-lg">
            <Image
              src="/images/empresa-loja.png"
              alt="Interior amplo e organizado da Madeireira Expansão"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Quem somos
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Uma história construída com madeira, dedicação e confiança
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Fundada em 1996, a Madeireira Expansão nasceu com o propósito de
            oferecer materiais de qualidade e um atendimento que realmente
            entende as necessidades de quem constrói. Ao longo de quase três
            décadas, crescemos junto com São Carlos e região, conquistando a
            confiança de profissionais e famílias.
          </p>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Hoje somos referência em um mix completo de produtos, sempre com a
            mesma seriedade do primeiro dia.
          </p>
          <Link
            href="/empresa"
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Conheça a empresa
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export function Diferenciais() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Nossos diferenciais
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Motivos para construir com a Expansão
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item, i) => {
            const Icon = diferencialIcons[i % diferencialIcons.length]
            return (
              <Reveal as="article" key={item.titulo} delay={(i % 3) * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-xl font-medium text-foreground">
                    {item.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.descricao}
                  </p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function CategoriasHome() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Categorias de produtos
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Tudo para a sua obra em um só lugar
          </h2>
        </div>
        <Link
          href="/produtos"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
        >
          Ver todos os produtos
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categorias.map((cat, i) => (
          <Reveal as="article" key={cat.slug} delay={(i % 3) * 80}>
            <Link
              href="/produtos"
              className="group block h-full overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.imagem}
                  alt={cat.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-3 p-6">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {cat.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {cat.resumo}
                  </p>
                </div>
                <span className="mt-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function ServicosHome() {
  return (
    <section className="bg-secondary/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Serviços
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Muito além de vender materiais
          </h2>
          <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
            Oferecemos suporte completo para que cada etapa do seu projeto seja
            mais simples, do primeiro orçamento à entrega na obra.
          </p>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicos.slice(0, 3).map((servico, i) => (
            <Reveal as="article" key={servico.titulo} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7">
                <span className="font-serif text-2xl text-primary/30">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-medium text-foreground">
                  {servico.titulo}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {servico.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <Link
            href="/servicos"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Saiba mais sobre nossos serviços
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

const portfolioPreview = [
  '/images/portfolio-1.png',
  '/images/portfolio-2.png',
  '/images/portfolio-3.png',
  '/images/portfolio-6.png',
]

export function PortfolioHome() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Portfólio
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Projetos que ganham vida com nossos materiais
          </h2>
        </div>
        <Link
          href="/portfolio"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
        >
          Ver galeria completa
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {portfolioPreview.map((src, i) => (
          <Reveal
            key={src}
            delay={(i % 4) * 70}
            className={i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}
          >
            <div
              className={`group relative overflow-hidden rounded-2xl border border-border ${
                i === 0 ? 'aspect-square sm:h-full' : 'aspect-[4/3]'
              }`}
            >
              <Image
                src={src}
                alt="Ambiente finalizado com materiais da Madeireira Expansão"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
