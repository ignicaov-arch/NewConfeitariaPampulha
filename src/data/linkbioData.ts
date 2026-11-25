import { BRAND } from './brand';

export interface LinkBioCardItem {
  readonly id: string;
  readonly title: string;
  readonly subtitle: string;
  readonly href: string;
  readonly badge?: string;
  readonly highlight?: boolean;
  readonly external?: boolean;
  readonly icon: 'whatsapp' | 'corporate' | 'calculator' | 'menu' | 'map' | 'star' | 'instagram';
}

export interface LinkBioShowcaseItem {
  readonly title: string;
  readonly caption: string;
  readonly image: string;
  readonly alt: string;
  readonly href: string;
}

export const LINKBIO_CARDS: readonly LinkBioCardItem[] = [
  {
    id: 'whatsapp-pronta-entrega',
    title: 'Pedir agora no WhatsApp',
    subtitle: 'Pronta entrega seg a sex, palha italiana, brownies e encomendas',
    href: `https://wa.me/${BRAND.whatsappPrimary}?text=${encodeURIComponent(
      'Olá, Confeitaria Pampulha! Vim pelo LinkBio e quero ver as opções disponíveis hoje.'
    )}`,
    badge: 'Atendimento direto',
    highlight: true,
    external: true,
    icon: 'whatsapp'
  },
  {
    id: 'brindes-corporativos',
    title: 'Brindes Corporativos e Eventos',
    subtitle: 'Caixas personalizadas, casamentos, Minas Tênis e empresas em BH',
    href: `https://wa.me/${BRAND.whatsappPrimary}?text=${encodeURIComponent(
      'Olá! Gostaria de um orçamento para brindes corporativos ou evento na Confeitaria Pampulha.'
    )}`,
    badge: 'Empresas',
    external: true,
    icon: 'corporate'
  },
  {
    id: 'simulador-festa',
    title: 'Simulador de Festa e Porções',
    subtitle: 'Calcule bolo, brigadeiros e palhas italianas para seus convidados',
    href: '/#orcamento',
    icon: 'calculator'
  },
  {
    id: 'cardapio-completo',
    title: 'Cardápio Artesanal no Site',
    subtitle: 'Palha italiana, bolo de pote, tortas, fatias Dois Amores e sabores',
    href: '/#cardapio',
    icon: 'menu'
  },
  {
    id: 'como-chegar',
    title: 'Como Chegar na Loja (Itapoã)',
    subtitle: 'R. Maria Moreira Réis, 26, Lj 19 · Centro Empresarial Pampulha',
    href: BRAND.googleMapsUrl,
    external: true,
    icon: 'map'
  },
  {
    id: 'avaliacoes-google',
    title: 'Nota 5,0 ★ no Google (53 avaliações)',
    subtitle: 'Leia os relatos reais de quem encomenda com Angélica e Yuri',
    href: '/#depoimentos',
    icon: 'star'
  },
  {
    id: 'instagram-oficial',
    title: 'Instagram @confeitariapampulha',
    subtitle: 'Fornadas do dia, Festival de Fatias e encomendas recentes',
    href: BRAND.instagramUrl,
    external: true,
    icon: 'instagram'
  }
] as const;

export const LINKBIO_SHOWCASE: readonly LinkBioShowcaseItem[] = [
  {
    title: 'Palha Italiana',
    caption: 'A receita assinatura de BH',
    image: '/img/palha-italiana-800.webp',
    alt: 'Palha italiana artesanal cremosa da Confeitaria Pampulha',
    href: '/#especialidades'
  },
  {
    title: 'Brownies e Potes',
    caption: 'Ninho, avelã e Prestígio',
    image: '/img/brownies-pote-800.webp',
    alt: 'Brownies recheados e bolos de pote artesanais',
    href: '/#cardapio'
  },
  {
    title: 'Bolos e Fatias',
    caption: 'Morango, limão e churros',
    image: '/img/tortas-bolos-800.webp',
    alt: 'Bolo festivo artesanal decorado com morangos e fatia alta',
    href: '/#orcamento'
  },
  {
    title: 'Kits Corporativos',
    caption: 'Presentes sob medida',
    image: '/img/corporativo-800.webp',
    alt: 'Caixas de brindes corporativos com doces artesanais',
    href: '/#personalizacao'
  }
] as const;
