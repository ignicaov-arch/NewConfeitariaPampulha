export interface TestimonialItem {
  readonly quote: string;
  readonly author: string;
  readonly context: string;
  readonly highlight?: boolean;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const TESTIMONIALS: readonly TestimonialItem[] = [
  {
    quote:
      'Pensa num atendimento extremamente profissional e muito atencioso! A Angélica e seu esposo foram super solícitos no meu pedido. As tortas são maravilhosas, parabéns pela qualidade dos produtos.',
    author: 'Talita Faustino',
    context: 'Avaliação 5 estrelas no Google'
  },
  {
    quote:
      'O Yuri e a Angélica são impecáveis. Além de fornecer doces e palhas italianas para a empresa que administro no Minas Tênis Clube com pontualidade, fizeram os bolos no pote do meu casamento com dedicação total.',
    author: 'Stéphanie Almada',
    context: 'Casamento e eventos corporativos · 5 estrelas',
    highlight: true
  },
  {
    quote:
      'Sem sombra de dúvida a melhor confeitaria de BH. Os bolos além de muito saborosos são lindos, e os docinhos, a palha italiana e a pipoca gourmet são perfeitos.',
    author: 'Janaina Ruas',
    context: 'Avaliação 5 estrelas no Google'
  }
] as const;

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: 'Quais são os carros-chefes da Confeitaria Pampulha?',
    answer:
      'Nossos carros-chefes em Belo Horizonte são a palha italiana artesanal cremosa, os brownies recheados com creme de Ninho ou avelã, os bolos no pote como Prestígio e Baunilha com Brigadeiro, as fatias altas Dois Amores e os brigadeiros gourmet para festas e brindes corporativos.'
  },
  {
    question: 'Onde fica a loja física e qual o horário de atendimento?',
    answer:
      'Atendemos na Rua Maria Moreira Réis, 26, Loja 19, no Centro Empresarial e Comercial Pampulha, bairro Itapoã, em Belo Horizonte. A loja funciona de segunda a sexta-feira, das 08h às 18h, com opções de pronta entrega e retirada de encomendas.'
  },
  {
    question: 'Com quanta antecedência devo encomendar bolos, doces ou kits corporativos?',
    answer:
      'Para bolos festivos e docinhos de aniversário recomendamos solicitar com 3 a 7 dias de antecedência. Para casamentos, grandes lotes de brindes corporativos e datas sazonais como a Páscoa, o ideal é reservar de 7 a 15 dias antes pelo WhatsApp.'
  },
  {
    question: 'Vocês atendem empresas e eventos corporativos em Belo Horizonte?',
    answer:
      'Sim. Preparamos brindes corporativos personalizados com palha italiana, mini brownies, bolos no pote e caixas de brigadeiros gourmet para ações internas, recepção de clientes, confraternizações e eventos em clubes e empresas de toda Belo Horizonte.'
  },
  {
    question: 'Tem pronta entrega durante a semana na região da Pampulha?',
    answer:
      'De segunda a sexta-feira mantemos vitrine diária com palha italiana, brownie recheado, bolo de pote e fatias selecionadas conforme a fornada do dia. Basta mandar uma mensagem no WhatsApp para confirmar os sabores frescos disponíveis naquele momento.'
  },
  {
    question: 'Como funciona a retirada no Itapoã e a entrega em BH?',
    answer:
      'Você pode retirar diretamente na Loja 19 do Centro Empresarial e Comercial Pampulha com praticidade de acesso pela Avenida Portugal, ou solicitar entrega agendada em Belo Horizonte conforme a região, o volume do pedido e a disponibilidade de horário.'
  }
] as const;
