import Link from 'next/link'
import Image from 'next/image'
import { Phone, MessageCircle, MapPin } from 'lucide-react'
import { InstagramIcon } from '@/components/icons/instagram'
import { navLinks, categorias, contato } from '@/lib/site-data'

const footerNavLinks = navLinks.filter((link) => link.href !== '/')

export function SiteFooter() {
  const ano = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-xs">
            <Image
              src="/images/logo-expansao.png"
              alt="Madeireira Expansão"
              width={760}
              height={264}
              className="h-auto w-44"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Tradição em madeiras e materiais de construção em São Carlos e
              região desde {contato.fundacao}. Qualidade, variedade e
              atendimento que constroem confiança.
            </p>
            <Link
              href="/contato"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md"
            >
              Solicitar Orçamento
            </Link>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold tracking-wide text-foreground">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold tracking-wide text-foreground">
              Produtos
            </h3>
            <ul className="mt-5 space-y-3">
              {categorias.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/produtos#${cat.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {cat.titulo}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-sans text-sm font-semibold tracking-wide text-foreground">
              Contato
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href={contato.telefoneHref}
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {contato.telefone}
                </a>
              </li>
              <li>
                <a
                  href={contato.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <MessageCircle className="size-4 text-primary" />
                  {contato.whatsapp}
                </a>
              </li>
              <li>
                <a
                  href={contato.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
                >
                  <InstagramIcon className="size-4 text-primary" />
                  {contato.instagramHandle}
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-4 text-primary" />
                {contato.endereco}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {ano} Madeireira Expansão. Todos os direitos reservados.
          </p>
          <Link
            href="/politica-de-privacidade"
            className="text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            Política de Privacidade
          </Link>
        </div>
      </div>
    </footer>
  )
}
