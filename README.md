# Madeireira Expansão

Site institucional multipáginas da **Madeireira Expansão** — referência em madeiras e materiais de construção em São Carlos e região desde 1996.

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

## Estrutura do site

| Rota | Página | Descrição |
|------|--------|-----------|
| `/` | Home | Hero, teasers e CTAs — visão geral sem excesso de conteúdo |
| `/sobre` | Sobre | História, linha do tempo, missão, visão e valores |
| `/produtos` | Produtos | Catálogo completo por categoria (6 linhas) |
| `/servicos` | Serviços | Atendimento, corte, orçamento, entrega e apoio |
| `/portfolio` | Portfólio | Galeria de projetos e ambientes finalizados |
| `/faq` | FAQ | Perguntas frequentes com accordion interativo |
| `/contato` | Contato | Canais de atendimento, horário e CTA de orçamento |
| `/politica-de-privacidade` | Privacidade | Política de dados e cookies |

Redirect permanente: `/empresa` → `/sobre`

## Arquitetura de componentes

```
app/                    # Páginas (App Router)
components/
  home/                 # Seções exclusivas da Home (teasers)
  ui/                   # Componentes base (button, etc.)
  site-header.tsx       # Header fixo com navegação multipáginas
  site-footer.tsx       # Footer com links, produtos e contato
  page-hero.tsx         # Hero padronizado para páginas internas
  section-header.tsx    # Cabeçalho de seção reutilizável
  cta-orcamento.tsx     # CTA de conversão (orçamento + WhatsApp)
  faq-list.tsx          # Accordion de FAQ
lib/
  site-data.ts          # Dados centralizados (nav, produtos, serviços, FAQ, etc.)
```

## Comandos

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

## Refatoração One Page → Multipáginas

### Problemas identificados na estrutura anterior

1. **Conteúdo concentrado na Home** — todas as seções (empresa, diferenciais, 6 categorias, serviços, portfólio, contato) em uma única página longa.
2. **Navegação incompleta** — links no header apontavam a páginas que não existiam (`/servicos`, `/portfolio`, `/contato`).
3. **Redundância** — conteúdo duplicado entre Home e página Empresa.
4. **SEO limitado** — uma única URL com múltiplos tópicos, sem metadata por página.
5. **CTAs dispersos** — múltiplos blocos de contato sem hierarquia clara.

### Soluções implementadas

- [x] Home enxuta com **teasers** (3 categorias, 3 diferenciais, 3 serviços, 4 portfólio) e links para páginas dedicadas
- [x] Páginas internas com **PageHero**, breadcrumbs e metadata SEO individual
- [x] Navegação completa no header e footer (7 páginas + privacidade)
- [x] Dados centralizados em `lib/site-data.ts`
- [x] Componentes reutilizáveis (`SectionHeader`, `FaqList`, `CtaOrcamento`)
- [x] FAQ dedicada + preview na página de Contato
- [x] Redirect `/empresa` → `/sobre`
- [x] `sitemap.xml` e `robots.txt` automáticos
- [x] Open Graph e Twitter cards no layout
- [x] Footer com CTA de orçamento e links de produtos por categoria (`/produtos#slug`)
- [x] Política de Privacidade

## Tarefas pendentes

- [ ] **Imagens** — adicionar assets em `public/images/` (logo, hero, categorias, portfólio, CTA). Paths referenciados no código:
  - `logo-expansao.png`, `hero-madeira.png`, `empresa-loja.png`, `cta-madeira.png`
  - `cat-madeiras.png`, `cat-pisos.png`, `cat-portas.png`, `cat-aluminio.png`, `cat-ferragens.png`, `cat-acabamentos.png`
  - `portfolio-1.png` a `portfolio-6.png`
- [ ] **Endereço completo** — atualizar `contato.enderecoCompleto` em `site-data.ts` com rua e número
- [ ] **Google Maps** — substituir `mapEmbedUrl` com embed real da localização
- [ ] **Open Graph image** — adicionar `og:image` no metadata do layout
- [ ] **Formulário de contato** — integrar com serviço de e-mail (Resend, Formspree, etc.) se desejado
- [ ] **Favicon** — configurar favicon além do `icon.svg` existente
- [ ] **Blog/Insights** — página opcional para conteúdo e SEO de longo prazo
- [ ] **Páginas individuais de produto** — `/produtos/[slug]` se quiser SEO por categoria
- [ ] **Testes E2E** — validar navegação e links em CI

## Deploy

Projeto preparado para deploy na Vercel. Analytics habilitado em produção via `@vercel/analytics`.
