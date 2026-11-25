import { describe, it, expect } from 'vitest';
import {
  buildOrderInquiryMessage,
  buildWhatsAppUrl,
  cleanUserText,
  sanitizeUrl
} from '../src/domain/whatsapp';

describe('whatsapp domain', () => {
  it('remove tags e caracteres de controle preservando acentos PT-BR', () => {
    expect(cleanUserText('  <script>Olá\u0000Pampulha!  ')).toBe('script Olá Pampulha!');
    expect(cleanUserText(12345)).toBe('');
  });

  it('bloqueia esquemas perigosos e hosts fora da whitelist', () => {
    expect(sanitizeUrl('')).toBe('/');
    expect(sanitizeUrl('not a valid url')).toBe('/');
    expect(sanitizeUrl('javascript:alert(1)')).toBe('/');
    expect(sanitizeUrl('data:text/html,<h1>x</h1>')).toBe('/');
    expect(sanitizeUrl('http://newconfeitariapampulha.pages.dev/')).toBe('/');
    expect(sanitizeUrl('https://evil.example.com/phish')).toBe('/');
    expect(sanitizeUrl('//evil.example.com')).toBe('/');
    expect(sanitizeUrl('/linkbio')).toBe('/linkbio');
    expect(sanitizeUrl('#cardapio')).toBe('#cardapio');
    expect(sanitizeUrl('https://www.instagram.com/confeitariapampulha/')).toBe(
      'https://www.instagram.com/confeitariapampulha/'
    );
  });

  it('monta URL wa.me com telefone oficial 553136537001 e fallback seguro', () => {
    const defaultUrl = buildWhatsAppUrl('Quero palha italiana');
    expect(defaultUrl).toBe(
      'https://wa.me/553136537001?text=Quero%20palha%20italiana'
    );
    expect(buildWhatsAppUrl()).toContain('https://wa.me/553136537001?text=');
    expect(buildWhatsAppUrl('   <>   ', '')).toContain('https://wa.me/553136537001?text=');
    const customPhoneUrl = buildWhatsAppUrl('Oi', '(31) 3653-7001');
    expect(customPhoneUrl).toBe('https://wa.me/553136537001?text=Oi');
    const invalidPhoneUrl = buildWhatsAppUrl('Oi', '123');
    expect(invalidPhoneUrl.startsWith('https://wa.me/553136537001?text=')).toBe(true);
  });

  it('gera mensagem estruturada do simulador incluindo detalhes opcionais e fallbacks vazios', () => {
    const msg = buildOrderInquiryMessage({
      occasion: 'Casamento',
      desiredDate: '12 de dezembro',
      guestsRange: '40 a 60 pessoas',
      flavorNotes: 'Bolos no pote e palha italiana'
    });
    expect(msg).toContain('Ocasião: Casamento');
    expect(msg).toContain('Data desejada: 12 de dezembro');
    expect(msg).toContain('Quantidade estimada: 40 a 60 pessoas');
    expect(msg).toContain('Sabores ou detalhes: Bolos no pote e palha italiana');

    const minimal = buildOrderInquiryMessage({
      occasion: '',
      desiredDate: '',
      guestsRange: ''
    });
    expect(minimal).toContain('Ocasião: Encomenda especial');
    expect(minimal).toContain('Data desejada: a definir');
    expect(minimal).toContain('Quantidade estimada: a definir');
    expect(minimal).not.toContain('Sabores ou detalhes:');
  });
});
