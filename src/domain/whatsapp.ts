import { BRAND } from '../data/brand';

export interface OrderInquiryInput {
  readonly occasion: string;
  readonly desiredDate: string;
  readonly guestsRange: string;
  readonly flavorNotes?: string;
}

const ALLOWED_EXTERNAL_HOSTS = new Set([
  'wa.me',
  'api.whatsapp.com',
  'www.instagram.com',
  'instagram.com',
  'www.google.com',
  'maps.google.com',
  'newconfeitariapampulha.pages.dev'
]);

/** Sanitiza caracteres de controle preservando acentos PT-BR. */
export function cleanUserText(input: unknown, maxLen = 140): string {
  if (typeof input !== 'string') return '';
  return input
    .replace(/[\p{Cc}<>]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen);
}

/** Valida URLs externas e rotas locais bloqueando esquemas inseguros. */
export function sanitizeUrl(rawUrl: string): string {
  const trimmed = String(rawUrl || '').trim();
  if (!trimmed) return '/';
  if (trimmed.startsWith('/') && !trimmed.startsWith('//')) return trimmed;
  if (trimmed.startsWith('#')) return trimmed;

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'https:') return '/';
    if (!ALLOWED_EXTERNAL_HOSTS.has(parsed.hostname.toLowerCase())) return '/';
    return parsed.toString();
  } catch {
    return '/';
  }
}

/** Constrói link oficial https://wa.me com número validado e mensagem codificada. */
export function buildWhatsAppUrl(
  message?: string,
  phone: string = BRAND.whatsappPrimary
): string {
  const digits = String(phone || '').replace(/\D+/g, '');
  const validPhone = digits.length >= 12 && digits.length <= 15 ? digits : BRAND.whatsappPrimary;
  const safeMsg =
    cleanUserText(message || BRAND.defaultWhatsappMessage, 420) || BRAND.defaultWhatsappMessage;
  return `https://wa.me/${validPhone}?text=${encodeURIComponent(safeMsg)}`;
}

/** Monta a mensagem estruturada do simulador para o WhatsApp da Confeitaria Pampulha. */
export function buildOrderInquiryMessage(input: OrderInquiryInput): string {
  const occasion = cleanUserText(input.occasion, 60) || 'Encomenda especial';
  const desiredDate = cleanUserText(input.desiredDate, 50) || 'a definir';
  const guestsRange = cleanUserText(input.guestsRange, 40) || 'a definir';
  const notes = cleanUserText(input.flavorNotes ?? '', 120);

  const lines = [
    'Olá, equipe Confeitaria Pampulha! Vim pelo site e gostaria de um orçamento.',
    `Ocasião: ${occasion}`,
    `Data desejada: ${desiredDate}`,
    `Quantidade estimada: ${guestsRange}`
  ];

  if (notes) {
    lines.push(`Sabores ou detalhes: ${notes}`);
  }

  return lines.join('\n');
}
