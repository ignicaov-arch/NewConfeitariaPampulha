export interface CategoryCard {
  readonly id: string;
  readonly title: string;
  readonly tag: string;
  readonly description: string;
  readonly image: string;
  readonly image800: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
  readonly variantClass: 'festa--a' | 'festa--b' | 'festa--c' | 'festa--d';
  readonly whatsappMessage: string;
}

export const BENTO_CATEGORIES: readonly CategoryCard[] = [
  {
    id: 'palha-italiana',
    title: 'Palha Italiana',
    tag: 'carro-chefe da casa',
    description:
      'Receita autoral cremosa com brigadeiro intenso e biscoito crocante nos sabores tradicional, Ninho e castanhas.',
    image: '/img/palha-italiana.webp',
    image800: '/img/palha-italiana-800.webp',
    width: 1600,
    height: 1066,
    alt: 'Quadrados artesanais de palha italiana polvilhados em prato de cerâmica clara da Confeitaria Pampulha',
    variantClass: 'festa--a',
    whatsappMessage:
      'Olá, equipe Confeitaria Pampulha! Quero fazer um pedido de Palha Italiana artesanal.'
  },
  {
    id: 'brownies-pote',
    title: 'Brownies e Potes',
    tag: 'pronta entrega seg a sex',
    description:
      'Brownie recheado de Ninho ou avelã e bolos no pote em camadas generosas como Prestígio e Baunilha com Brigadeiro.',
    image: '/img/brownies-pote.webp',
    image800: '/img/brownies-pote-800.webp',
    width: 1600,
    height: 1066,
    alt: 'Brownies recheados com creme de Ninho ao lado de bolos no pote artesanais em camadas',
    variantClass: 'festa--b',
    whatsappMessage:
      'Olá! Gostaria de saber os sabores disponíveis hoje de Brownie Recheado e Bolo de Pote.'
  },
  {
    id: 'tortas-bolos',
    title: 'Bolos e Tortas',
    tag: 'festas e casamentos',
    description:
      'Fatias altas Dois Amores, tortas geladas e bolos festivos de morango com limão ou churros feitos sob encomenda.',
    image: '/img/tortas-bolos.webp',
    image800: '/img/tortas-bolos-800.webp',
    width: 1200,
    height: 1500,
    alt: 'Bolo artesanal decorado com morangos frescos, raspas de limão e fatia alta de chocolate',
    variantClass: 'festa--c',
    whatsappMessage:
      'Olá! Quero solicitar um orçamento de bolo festivo ou torta artesanal na Confeitaria Pampulha.'
  },
  {
    id: 'corporativo',
    title: 'Corporativo',
    tag: 'brindes personalizados',
    description:
      'Kits empresariais com palhas italianas, brownies e brigadeiros com entrega pontual para eventos e equipes em BH.',
    image: '/img/corporativo.webp',
    image800: '/img/corporativo-800.webp',
    width: 1600,
    height: 1066,
    alt: 'Caixas de brindes corporativos com laço rosa pastel e doces finos artesanais',
    variantClass: 'festa--d',
    whatsappMessage:
      'Olá! Gostaria de um orçamento de brindes corporativos e doces para evento empresarial.'
  }
] as const;

export const EXTRA_CATEGORY_CARD = {
  eyebrow: 'e mais',
  title: 'Brigadeiros gourmet, pipoca gourmet, casamentos e Páscoa',
  description:
    'Docinhos enrolados à mão em forminhas especiais, lembrancinhas no pote para noivos e linhas sazonais exclusivas.',
  ctaLabel: 'Consultar minha data',
  whatsappMessage:
    'Olá! Quero consultar disponibilidade de encomenda personalizada na Confeitaria Pampulha.'
} as const;

export const CRAFT_FEATURES = [
  'Produção diária com cacau nobre',
  'Atendimento próximo por Angélica e Yuri',
  'Pronta entrega de segunda a sexta',
  'Lembrancinhas de casamento no pote',
  'Pontualidade em eventos corporativos',
  'Retirada no Itapoã e entrega em BH'
] as const;

export const BRAND_COUNTERS = [
  { value: 5, suffix: '★', label: 'avaliação média no Google' },
  { value: 53, suffix: '', label: 'avaliações 5 estrelas verificadas' },
  { value: 2960, suffix: '+', label: 'apaixonados no Instagram' },
  { value: 100, suffix: '%', label: 'receitas artesanais sem conservantes' }
] as const;
