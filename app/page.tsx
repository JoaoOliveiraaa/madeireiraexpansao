import type { Metadata } from 'next'
import { HomeHero } from '@/components/home/home-hero'
import {
  QuemSomos,
  DiferenciaisHome,
  CategoriasHome,
  ServicosHome,
  PortfolioHome,
} from '@/components/home/home-sections'
import { CtaOrcamento } from '@/components/cta-orcamento'

export const metadata: Metadata = {
  title: 'Madeireira Expansão | Madeiras e Materiais de Construção em São Carlos',
  description:
    'Referência em São Carlos e região desde 1996. Madeiras, portas, pisos laminados, alumínio, ferragens e acabamentos com atendimento especializado.',
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <QuemSomos />
      <DiferenciaisHome />
      <CategoriasHome />
      <ServicosHome />
      <PortfolioHome />
      <CtaOrcamento />
    </>
  )
}
