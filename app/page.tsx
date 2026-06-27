import { HomeHero } from '@/components/home/home-hero'
import {
  QuemSomos,
  Diferenciais,
  CategoriasHome,
  ServicosHome,
  PortfolioHome,
} from '@/components/home/home-sections'
import { ContatoResumo } from '@/components/home/contato-resumo'
import { CtaOrcamento } from '@/components/cta-orcamento'

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <QuemSomos />
      <Diferenciais />
      <CategoriasHome />
      <ServicosHome />
      <PortfolioHome />
      <CtaOrcamento />
      <ContatoResumo />
    </>
  )
}
