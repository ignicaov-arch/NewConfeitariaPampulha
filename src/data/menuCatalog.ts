export interface MenuBlock {
  readonly number: string;
  readonly title: string;
  readonly pricePrefix: string;
  readonly priceValue: string;
  readonly priceSuffix: string;
  readonly items: readonly string[];
  readonly footerNote: string;
}

export interface ComparisonRow {
  readonly modality: string;
  readonly leadTime: string;
  readonly idealFor: string;
  readonly delivery: string;
}

export const MENU_BLOCKS: readonly MenuBlock[] = [
  {
    number: '01',
    title: 'Vitrine e Potes',
    pricePrefix: 'fatias a partir de',
    priceValue: 'R$ 25',
    priceSuffix: 'pronta entrega',
    items: [
      'Palha italiana tradicional e Ninho',
      'Fatia Dois Amores com creme de avelã',
      'Bolo de pote Prestígio molhadinho',
      'Bolo de pote baunilha e brigadeiro',
      'Brownie recheado com brigadeiro de Ninho',
      'Pipoca gourmet caramelizada e Ninho'
    ],
    footerNote: 'disponível de segunda a sexta das 08h às 18h'
  },
  {
    number: '02',
    title: 'Bolos e Docinhos',
    pricePrefix: 'encomendas a partir de',
    priceValue: '14 fatias',
    priceSuffix: 'sob medida',
    items: [
      'Bolo de morango com brigadeiro de limão',
      'Bolo de churros com doce de leite cremoso',
      'Baunilha, limão e geleia artesanal de morango',
      'Brigadeiro gourmet crocante com choco balls',
      'Brigadeiro tradicional, limão e beijinho',
      'Bolos de andares para casamentos e 15 anos'
    ],
    footerNote: 'massa fofinha e recheio generoso em cada camada'
  },
  {
    number: '03',
    title: 'Brindes e Eventos',
    pricePrefix: 'lotes para empresas',
    priceValue: 'Sob medida',
    priceSuffix: 'com agendamento',
    items: [
      'Caixas individuais de palha italiana com tag',
      'Kits corporativos de boas-vindas e datas comemorativas',
      'Mini brownies embrulhados para eventos',
      'Bolos no pote exclusivos para convidados de casamento',
      'Mesas de docinhos finos e brigadeiros em forminhas',
      'Entrega programada em Belo Horizonte e Pampulha'
    ],
    footerNote: 'fornecimento recorrente para empresas e clubes em BH'
  }
] as const;

export const CELEBRATION_COMBO = {
  label: 'Mesa Completa Pampulha',
  textPrefix:
    'Combine bolo personalizado, cento de brigadeiros gourmet e palhas italianas lembrancinha com condições especiais para ',
  textHighlight: 'aniversários, casamentos e empresas.',
  ctaLabel: 'Montar meu pedido',
  whatsappMessage:
    'Olá! Quero montar um combo completo de bolo, docinhos e palhas italianas na Confeitaria Pampulha.'
} as const;

export const GIFT_STYLES = [
  'Palha Italiana',
  'Brownie Recheado',
  'Bolo de Pote',
  'Brigadeiro Crocante',
  'Pipoca Gourmet',
  'Casamentos',
  'Brindes PJ'
] as const;

export const GIFT_INCLUDES = [
  {
    num: '01',
    title: 'Curadoria de sabores',
    detail: 'Você escolhe entre nossos clássicos de cacau 100%, Ninho, limão, churros e morango.'
  },
  {
    num: '02',
    title: 'Acabamento presenteável',
    detail: 'Embalagens delicadas com identidade visual cuidadosa para encantar clientes e convidados.'
  },
  {
    num: '03',
    title: 'Pontualidade garantida',
    detail: 'Produção fresca no dia da entrega com acompanhamento direto pelo WhatsApp.'
  }
] as const;

export const ORDER_STEPS = [
  {
    num: '01',
    badge: 'no WhatsApp',
    title: 'Escolha os sabores',
    description: 'Conte qual produto ou ocasião você deseja e quantas pessoas vão celebrar com você.'
  },
  {
    num: '02',
    badge: 'em poucas horas',
    title: 'Proposta clara',
    description: 'Receba opções de tamanho, recheios, personalização e valores transparentes sem surpresas.'
  },
  {
    num: '03',
    badge: 'produção fresca',
    title: 'Reserva da data',
    description: 'Confirmamos seu horário na agenda para preparar tudo próximo ao momento de servir.'
  },
  {
    num: '04',
    badge: 'Itapoã ou BH',
    title: 'Retirada ou entrega',
    description: 'Retire na Loja 19 do Centro Empresarial Pampulha ou agende entrega combinada na cidade.'
  }
] as const;

export const COMPARISON_ROWS: readonly ComparisonRow[] = [
  {
    modality: 'Pronta Entrega na Loja',
    leadTime: 'Imediato (Seg a Sex, 08h às 18h)',
    idealFor: 'Palha italiana, brownie recheado, bolo de pote e fatias',
    delivery: 'Retirada no Itapoã ou entrega rápida em BH'
  },
  {
    modality: 'Bolos e Doces de Festa',
    leadTime: '3 a 7 dias de antecedência',
    idealFor: 'Aniversários, mesversários, batizados e casamentos',
    delivery: 'Retirada agendada ou entrega cuidadosa'
  },
  {
    modality: 'Brindes Corporativos',
    leadTime: '5 a 10 dias conforme volume',
    idealFor: 'Empresas, ações de endomarketing e eventos',
    delivery: 'Entrega programada no local do evento'
  }
] as const;
