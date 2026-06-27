export const contato = {
  telefone: '(16) 3361-1713',
  telefoneHref: 'tel:+551633611713',
  whatsapp: '(16) 99773-3318',
  whatsappHref:
    'https://wa.me/5516997733318?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.',
  instagram: 'https://www.instagram.com/expansaomadeireira',
  instagramHandle: '@expansaomadeireira',
  email: 'contato@madeireiraexpansao.com.br',
  emailHref: 'mailto:contato@madeireiraexpansao.com.br',
  endereco: 'Av. Das Gardenias, 421. Cid. Jardim, São Carlos',
  enderecoCompleto:
    'Av. Das Gardenias, 421. Cid. Jardim, São Carlos, Brazil - CEP 13566-540 — atendemos a cidade e toda a região com entrega própria.',
  horario: 'Segunda a sexta, 8h às 18h · Sábado, 8h às 12h',
  fundacao: 1996,
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3704.0!2d-47.8906!3d-22.0175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDAxJzAzLjAiUyA0N8KwNTMnMjYuMiJX!5e0!3m2!1spt-BR!2sbr!4v1',
}

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/sobre' },
  { label: 'Produtos', href: '/produtos' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Portfólio', href: '/portfolio' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contato', href: '/contato' },
]

export const categorias = [
  {
    slug: 'madeiras',
    titulo: 'Madeiras',
    imagem: '/images/cat-madeiras.png',
    resumo:
      'Madeiras serradas, beneficiadas e tratadas para estrutura, marcenaria e acabamento.',
    descricao:
      'Trabalhamos com uma ampla seleção de madeiras nativas e de reflorestamento, em diferentes bitolas e acabamentos. Da estrutura bruta ao detalhe refinado da marcenaria, oferecemos peças selecionadas por quem entende do assunto.',
    itens: [
      'Madeira serrada e aparelhada',
      'Caibros, ripas e vigas',
      'Tábuas e pranchas',
      'Madeira para telhado e estrutura',
      'Madeira de reflorestamento',
    ],
  },
  {
    slug: 'pisos-laminados',
    titulo: 'Pisos Laminados',
    imagem: '/images/cat-pisos.png',
    resumo:
      'Pisos laminados e vinílicos de alta resistência, com texturas que valorizam cada ambiente.',
    descricao:
      'Pisos que unem beleza e durabilidade. Trabalhamos com as principais linhas do mercado, em diversos tons e padrões, ideais para ambientes residenciais e comerciais que buscam sofisticação com praticidade.',
    itens: [
      'Pisos laminados',
      'Pisos vinílicos',
      'Rodapés e perfis de acabamento',
      'Mantas e acessórios de instalação',
    ],
  },
  {
    slug: 'portas',
    titulo: 'Portas',
    imagem: '/images/cat-portas.png',
    resumo:
      'Portas de madeira maciça, semi-ocas e prontas, com encaixe e acabamento impecáveis.',
    descricao:
      'Uma linha completa de portas para todos os ambientes da obra. De modelos prontos a soluções sob medida, com batentes, guarnições e ferragens que garantem instalação perfeita.',
    itens: [
      'Portas de madeira maciça',
      'Portas semi-ocas',
      'Portas prontas com batente',
      'Batentes e guarnições',
      'Portas internas e externas',
    ],
  },
  {
    slug: 'aluminio',
    titulo: 'Alumínio',
    imagem: '/images/cat-aluminio.png',
    resumo:
      'Perfis, esquadrias e acessórios em alumínio para janelas, portas e fechamentos.',
    descricao:
      'Soluções em alumínio que combinam leveza, resistência e estética moderna. Atendemos profissionais e consumidores com perfis, esquadrias e todos os componentes necessários para a montagem.',
    itens: [
      'Janelas e portas de alumínio',
      'Perfis e barras',
      'Acessórios e roldanas',
      'Fechamentos e esquadrias',
    ],
  },
  {
    slug: 'ferragens',
    titulo: 'Ferragens',
    imagem: '/images/cat-ferragens.png',
    resumo:
      'Fechaduras, dobradiças, puxadores e fixadores das melhores marcas do mercado.',
    descricao:
      'Tudo o que a sua obra precisa em ferragens e fixadores. Produtos selecionados pela durabilidade e acabamento, para que cada detalhe funcione com precisão por muitos anos.',
    itens: [
      'Fechaduras e dobradiças',
      'Puxadores e maçanetas',
      'Parafusos e fixadores',
      'Trilhos e roldanas',
      'Ferramentas e acessórios',
    ],
  },
  {
    slug: 'acabamentos',
    titulo: 'Acabamentos',
    imagem: '/images/cat-acabamentos.png',
    resumo:
      'Vernizes, molduras, rodapés e tudo para os detalhes finais da sua obra.',
    descricao:
      'O acabamento é o que transforma uma obra em um ambiente. Oferecemos materiais que valorizam cada detalhe, com a orientação de quem acompanha o segmento há quase três décadas.',
    itens: [
      'Vernizes e seladoras',
      'Molduras e rodapés',
      'Forros e lambris',
      'Materiais de marcenaria',
      'Itens de acabamento em geral',
    ],
  },
]

export const servicos = [
  {
    titulo: 'Atendimento especializado',
    descricao:
      'Uma equipe que conhece cada produto e orienta na escolha certa para o seu projeto, do profissional experiente ao cliente que está construindo o primeiro lar.',
    destaque:
      'Consultoria técnica gratuita para ajudar na escolha de materiais, bitolas e acabamentos.',
  },
  {
    titulo: 'Corte e beneficiamento de madeira',
    descricao:
      'Serviço de corte sob medida e beneficiamento, entregando as peças prontas para uso e reduzindo o desperdício na sua obra.',
    destaque:
      'Corte preciso conforme as medidas do seu projeto, com acabamento profissional.',
  },
  {
    titulo: 'Orçamento personalizado',
    descricao:
      'Avaliamos as necessidades do seu projeto e montamos um orçamento transparente, com as melhores condições para cada perfil de cliente.',
    destaque:
      'Resposta rápida e proposta detalhada, sem surpresas no final da obra.',
  },
  {
    titulo: 'Entrega rápida na região',
    descricao:
      'Logística própria e ágil para São Carlos e região, levando seus materiais com cuidado e dentro do prazo combinado.',
    destaque:
      'Entrega programada para não parar a sua obra no momento certo.',
  },
  {
    titulo: 'Apoio a profissionais',
    descricao:
      'Condições especiais e suporte técnico para marceneiros, construtores, arquitetos e engenheiros que confiam na Expansão.',
    destaque:
      'Parceria de longa data com profissionais da construção e marcenaria.',
  },
  {
    titulo: 'Variedade e disponibilidade',
    descricao:
      'Um mix completo de produtos sempre à disposição, para que você encontre tudo o que precisa em um só lugar.',
    destaque:
      'Seis linhas de produtos reunidas em um único ponto de compra.',
  },
]

export const diferenciais = [
  {
    titulo: 'Tradição desde 1996',
    descricao:
      'Quase três décadas servindo São Carlos e região com seriedade e consistência.',
  },
  {
    titulo: 'Atendimento especializado',
    descricao:
      'Profissionais que entendem do segmento e orientam cada cliente com atenção.',
  },
  {
    titulo: 'Produtos de qualidade',
    descricao:
      'Materiais selecionados das melhores marcas, escolhidos pela durabilidade.',
  },
  {
    titulo: 'Grande variedade',
    descricao:
      'Madeiras, portas, pisos, alumínio, ferragens e acabamentos em um só lugar.',
  },
  {
    titulo: 'Entrega rápida',
    descricao:
      'Logística ágil para que os materiais cheguem à sua obra no tempo certo.',
  },
  {
    titulo: 'Para todos os perfis',
    descricao:
      'Atendemos profissionais da construção e consumidores finais com o mesmo cuidado.',
  },
]

export const portfolioItems = [
  {
    slug: 'residencia-pisos',
    titulo: 'Residência com pisos laminados',
    categoria: 'Pisos',
    imagem: '/images/portfolio-1.png',
    descricao:
      'Ambiente integrado com piso laminado de alta resistência, combinando conforto visual e praticidade no dia a dia.',
  },
  {
    slug: 'marcenaria-portas',
    titulo: 'Marcenaria e portas internas',
    categoria: 'Portas',
    imagem: '/images/portfolio-2.png',
    descricao:
      'Portas de madeira maciça e acabamentos que elevam a estética dos ambientes internos com elegância atemporal.',
  },
  {
    slug: 'estrutura-madeira',
    titulo: 'Estrutura em madeira',
    categoria: 'Madeiras',
    imagem: '/images/portfolio-3.png',
    descricao:
      'Projeto estrutural com madeira selecionada, demonstrando resistência e beleza natural em cada viga e tábua.',
  },
  {
    slug: 'acabamento-forro',
    titulo: 'Acabamento com forro e lambris',
    categoria: 'Acabamentos',
    imagem: '/images/portfolio-4.png',
    descricao:
      'Detalhes de acabamento que transformam paredes e tetos, criando ambientes acolhedores e sofisticados.',
  },
  {
    slug: 'esquadrias-aluminio',
    titulo: 'Esquadrias de alumínio',
    categoria: 'Alumínio',
    imagem: '/images/portfolio-5.png',
    descricao:
      'Fechamentos em alumínio que unem leveza, durabilidade e design moderno para janelas e portas.',
  },
  {
    slug: 'obra-completa',
    titulo: 'Obra completa residencial',
    categoria: 'Projeto integrado',
    imagem: '/images/portfolio-6.png',
    descricao:
      'Da estrutura ao acabamento, materiais da Expansão em cada etapa de uma residência em São Carlos.',
  },
]

export const faqItems = [
  {
    pergunta: 'Quais produtos a Madeireira Expansão oferece?',
    resposta:
      'Trabalhamos com madeiras, pisos laminados e vinílicos, portas, alumínio, ferragens e acabamentos. É um mix completo para construção, reforma e marcenaria — tudo em um só lugar.',
  },
  {
    pergunta: 'Vocês fazem entrega em São Carlos e região?',
    resposta:
      'Sim. Temos logística própria para entrega em São Carlos e cidades da região. O prazo e a disponibilidade são confirmados no orçamento, conforme o volume e o destino.',
  },
  {
    pergunta: 'Como solicito um orçamento?',
    resposta:
      'Você pode ligar, enviar mensagem pelo WhatsApp ou preencher o formulário na página de Contato. Nossa equipe retorna com uma proposta personalizada para o seu projeto.',
  },
  {
    pergunta: 'Vocês cortam madeira sob medida?',
    resposta:
      'Sim. Oferecemos serviço de corte e beneficiamento de madeira conforme as medidas do seu projeto, reduzindo desperdício e facilitando a instalação na obra.',
  },
  {
    pergunta: 'Atendem profissionais da construção e marcenaria?',
    resposta:
      'Atendemos marceneiros, construtores, arquitetos, engenheiros e consumidores finais. Profissionais contam com suporte técnico e condições especiais de parceria.',
  },
  {
    pergunta: 'Quais são os horários de funcionamento?',
    resposta: `Nosso horário de atendimento é ${contato.horario}. Fora desse período, você pode enviar mensagem pelo WhatsApp e retornamos no próximo horário comercial.`,
  },
  {
    pergunta: 'Posso visitar a loja antes de comprar?',
    resposta:
      'Sim, e recomendamos! Visitar a loja permite ver a qualidade dos materiais, conversar com nossa equipe e tirar dúvidas presencialmente. Estamos em São Carlos, SP.',
  },
  {
    pergunta: 'Vocês trabalham com marcas reconhecidas?',
    resposta:
      'Selecionamos produtos de marcas reconhecidas no mercado, priorizando durabilidade, acabamento e confiabilidade — critérios que aplicamos há quase 30 anos.',
  },
]

export const siteConfig = {
  name: 'Madeireira Expansão',
  url: 'https://madeireiraexpansao.com.br',
  description:
    'Referência em São Carlos e região desde 1996. Madeiras, portas, pisos laminados, alumínio, ferragens, acabamentos e materiais de construção com qualidade e atendimento especializado.',
}
