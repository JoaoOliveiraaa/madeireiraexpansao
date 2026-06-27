import type { Metadata } from 'next'
import Link from 'next/link'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { contato } from '@/lib/site-data'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Política de privacidade e proteção de dados da Madeireira Expansão. Saiba como tratamos suas informações pessoais.',
}

export default function PoliticaPrivacidadePage() {
  return (
    <>
      <PageHero
        breadcrumb="Política de Privacidade"
        eyebrow="Transparência"
        title="Política de Privacidade"
        description="Esta página descreve como a Madeireira Expansão coleta, utiliza e protege as informações dos visitantes e clientes do site."
      />

      <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28">
        <Reveal className="prose prose-neutral max-w-none space-y-8 text-muted-foreground">
          <section>
            <h2 className="text-xl font-medium text-foreground">
              1. Informações que coletamos
            </h2>
            <p className="mt-3 leading-relaxed">
              Podemos coletar informações fornecidas voluntariamente por você
              ao entrar em contato conosco por telefone, WhatsApp, e-mail ou
              formulários do site, como nome, telefone, e-mail e detalhes sobre
              o seu projeto.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">
              2. Como utilizamos suas informações
            </h2>
            <p className="mt-3 leading-relaxed">
              Utilizamos os dados para responder solicitações, elaborar
              orçamentos, prestar atendimento, melhorar nossos serviços e
              manter comunicação relacionada ao seu pedido ou consulta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">
              3. Compartilhamento de dados
            </h2>
            <p className="mt-3 leading-relaxed">
              Não vendemos ou compartilhamos seus dados pessoais com terceiros
              para fins comerciais. Informações podem ser compartilhadas apenas
              quando necessário para cumprir obrigações legais ou prestar
              serviços essenciais à operação (ex.: logística de entrega).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">
              4. Cookies e analytics
            </h2>
            <p className="mt-3 leading-relaxed">
              Este site pode utilizar cookies e ferramentas de análise (como
              Vercel Analytics) para entender o uso do site e melhorar a
              experiência do visitante. Você pode gerenciar cookies nas
              configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">
              5. Segurança e retenção
            </h2>
            <p className="mt-3 leading-relaxed">
              Adotamos medidas razoáveis para proteger suas informações.
              Mantemos os dados apenas pelo tempo necessário para cumprir as
              finalidades descritas nesta política ou exigências legais.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">
              6. Seus direitos
            </h2>
            <p className="mt-3 leading-relaxed">
              Você pode solicitar atualização, correção ou exclusão dos seus
              dados pessoais entrando em contato conosco pelos canais
              indicados abaixo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-medium text-foreground">
              7. Contato
            </h2>
            <p className="mt-3 leading-relaxed">
              Para questões sobre esta política ou sobre seus dados pessoais,
              entre em contato:
            </p>
            <ul className="mt-4 space-y-2">
              <li>
                E-mail:{' '}
                <a
                  href={contato.emailHref}
                  className="text-primary hover:underline"
                >
                  {contato.email}
                </a>
              </li>
              <li>
                Telefone:{' '}
                <a
                  href={contato.telefoneHref}
                  className="text-primary hover:underline"
                >
                  {contato.telefone}
                </a>
              </li>
            </ul>
          </section>

          <p className="text-sm">
            Última atualização: junho de 2026.
          </p>
        </Reveal>

        <Reveal className="mt-12" delay={100}>
          <Link
            href="/contato"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Voltar para Contato
          </Link>
        </Reveal>
      </article>
    </>
  )
}
