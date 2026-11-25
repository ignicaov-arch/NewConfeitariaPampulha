export interface OpeningRule {
  readonly daysLabel: string;
  readonly daysOfWeek: readonly string[];
  readonly opens: string;
  readonly closes: string;
}

export const BRAND = {
  name: 'Confeitaria Pampulha',
  shortName: 'Pampulha',
  legalName: 'Confeitaria Pampulha Produtos Alimentícios Ltda',
  cnpj: '33.467.786/0001-00',
  subtitle: 'Sobremesas em Belo Horizonte',
  founders: 'Angélica e Yuri',
  foundersRole: 'Mestres Confeiteiros e Fundadores',
  siteUrl: 'https://newconfeitariapampulha.pages.dev',
  whatsappPrimary: '553136537001',
  whatsappDisplay: '(31) 3653-7001',
  defaultWhatsappMessage:
    'Olá, equipe Confeitaria Pampulha! Gostaria de consultar o cardápio e fazer um pedido.',
  instagramUrl: 'https://www.instagram.com/confeitariapampulha/',
  instagramHandle: '@confeitariapampulha',
  googleMapsUrl:
    'https://www.google.com/maps/place/Confeitaria+Pampulha/@-19.842065,-43.9645864,17z/data=!3m1!4b1!4m6!3m5!1s0xa691f18f81967f:0xca082f79de1b6d51!8m2!3d-19.842065!4d-43.9645864!16s%2Fg%2F11t_w3hdq7',
  address: {
    street: 'Rua Maria Moreira Réis, 26, Loja 19',
    complex: 'Centro Empresarial e Comercial Pampulha',
    neighborhood: 'Itapoã',
    city: 'Belo Horizonte',
    state: 'MG',
    postalCode: '31710-320',
    country: 'BR',
    plusCode: '525P+55 Itapoã, Belo Horizonte - MG'
  },
  geo: {
    latitude: -19.842065,
    longitude: -43.9645864
  },
  rating: {
    value: '5.0',
    displayValue: '5,0',
    best: '5',
    count: 53
  },
  socialStats: {
    followers: 2960,
    followersDisplay: '2.960+',
    posts: 554
  },
  hoursSummary: 'Segunda a sexta, 08h às 18h (Loja física) · Sábado e domingo fechado',
  schedule: [
    {
      daysLabel: 'Segunda a sexta',
      daysOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00'
    }
  ] as readonly OpeningRule[],
  publishedIso: '2026-11-25T10:00:00-03:00',
  updatedIso: '2026-11-25T20:00:00-03:00',
  updatedDisplay: '25 de novembro de 2026'
} as const;
