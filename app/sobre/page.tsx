import type { Metadata } from 'next'
import Image from 'next/image'
import { Target, Eye, Heart, ShieldCheck } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaOrcamento } from '@/components/cta-orcamento'

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Conheça a história da Madeireira Expansão, referência em São Carlos desde 1996. Missão, visão, valores e o compromisso com qualidade e atendimento personalizado.',
}

const timeline = [
  {
    ano: '1996',
    titulo: 'O começo de tudo',
    texto:
      'A Madeireira Expansão abre as portas em São Carlos com um propósito claro: oferecer madeira de qualidade e um atendimento honesto a quem constrói.',
  },
  {
    ano: '2005',
    titulo: 'Crescimento e novas linhas',
    texto:
      'A procura cresce e o mix de produtos se expande. Portas, ferragens e materiais de acabamento passam a fazer parte do dia a dia da loja.',
  },
  {
    ano: '2014',
    titulo: 'Referência na região',
    texto:
      'Consolidada entre profissionais e consumidores, a Expansão amplia o estoque e investe em pisos laminados, alumínio e logística de entrega.',
  },
  {
    ano: 'Hoje',
    titulo: 'Tradição que continua',
    texto:
      'Quase três décadas depois, seguimos com a mesma seriedade do primeiro dia, unindo experiência, variedade e um atendimento que faz a diferença.',
  },
]

const valores = [
  {
    icon: Target,
    titulo: 'Missão',
    texto:
      'Fornecer madeiras e materiais de construção de qualidade, com atendimento especializado, contribuindo para que cada projeto seja realizado com confiança e excelência.',
  },
  {
    icon: Eye,
    titulo: 'Visão',
    texto:
      'Ser reconhecida como a referência em produtos do segmento madeireiro em São Carlos e região, mantendo a tradição e evoluindo continuamente.',
  },
  {
    icon: Heart,
    titulo: 'Valores',
    texto:
      'Honestidade, respeito ao cliente, compromisso com a qualidade e a valorização das relações construídas ao longo de quase 30 anos.',
  },
]

const compromissos = [
  {
    icon: ShieldCheck,
    titulo: 'Compromisso com a qualidade',
    texto:
      'Selecionamos cada produto com critério. Trabalhamos com marcas reconhecidas e materiais que entregam durabilidade e bom acabamento, porque sabemos que a sua obra depende disso.',
  },
  {
    icon: Heart,
    titulo: 'Atendimento personalizado',
    texto:
      'Cada cliente é único. Por isso, ouvimos com atenção, orientamos com sinceridade e oferecemos a solução certa para cada projeto, seja para o profissional experiente ou para quem está construindo pela primeira vez.',
  },
]

export default function SobrePage() {
  return (
    <>
      <PageHero
        breadcrumb="Sobre"
        eyebrow="Nossa história"
        title="Quase 30 anos construindo confiança"
        description="Desde 1996, a Madeireira Expansão é parte da história de quem constrói em São Carlos e região. Conheça a empresa por trás de cada atendimento."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Quem somos
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Uma empresa feita de pessoas, madeira e dedicação
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                A Madeireira Expansão nasceu em 1996 do desejo de oferecer algo
                que parecia simples, mas que faz toda a diferença: madeira de
                verdade, vendida por gente que entende do assunto e atende com
                respeito.
              </p>
              <p>
                Com o passar dos anos, ampliamos nossos produtos e serviços, mas
                nunca abrimos mão daquilo que nos trouxe até aqui — a confiança
                de cada cliente que entra pela nossa porta. Hoje, somos um
                endereço completo para a construção, com madeiras, portas,
                pisos, alumínio, ferragens e acabamentos.
              </p>
              <p>
                Mais do que vender materiais, fazemos parte de projetos, sonhos
                e conquistas. É essa a tradição que carregamos com orgulho.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border shadow-lg">
              <Image
                src="/images/empresa-loja.png"
                alt="Loja da Madeireira Expansão em São Carlos"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Reveal className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Nossa trajetória
            </span>
            <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
              Uma linha do tempo de crescimento constante
            </h2>
          </Reveal>

          <ol className="mt-14 space-y-2">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.ano} delay={(i % 4) * 70}>
                <div className="relative grid gap-4 rounded-2xl border border-border bg-card p-7 sm:grid-cols-[140px_1fr] sm:gap-8">
                  <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-1">
                    <span className="font-serif text-3xl font-medium text-primary sm:text-4xl">
                      {item.ano}
                    </span>
                  </div>
                  <div className="sm:border-l sm:border-border sm:pl-8">
                    <h3 className="text-xl font-medium text-foreground">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {item.texto}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            O que nos guia
          </span>
          <h2 className="mt-4 text-balance text-3xl font-medium leading-tight text-foreground sm:text-4xl">
            Missão, visão e valores
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {valores.map((item, i) => (
            <Reveal as="article" key={item.titulo} delay={(i % 3) * 80}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <item.icon className="size-6" />
                </span>
                <h3 className="mt-5 text-2xl font-medium text-foreground">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {item.texto}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-2">
            {compromissos.map((item, i) => (
              <Reveal as="article" key={item.titulo} delay={i * 100}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 lg:p-10">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <item.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 text-2xl font-medium text-foreground">
                    {item.titulo}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                    {item.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaOrcamento />
    </>
  )
}
