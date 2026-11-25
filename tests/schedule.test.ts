import { describe, it, expect } from 'vitest';
import { estimatePartyOrder, getBakeryOpenStatus } from '../src/domain/schedule';

describe('schedule domain', () => {
  it('identifica loja aberta de segunda a sexta entre 08h e 18h em BRT e usa data padrão', () => {
    const wednesdayMorning = new Date('2026-11-25T13:30:00Z'); // 10:30 BRT
    const status = getBakeryOpenStatus(wednesdayMorning);
    expect(status.isOpen).toBe(true);
    expect(status.shortLabel).toContain('Loja aberta agora');
    expect(typeof getBakeryOpenStatus().isOpen).toBe('boolean');
  });

  it('identifica horário antes da abertura e após 18h em dias úteis (seg-qui vs sex)', () => {
    const earlyMorning = new Date('2026-11-25T10:15:00Z'); // 07:15 BRT
    expect(getBakeryOpenStatus(earlyMorning).isOpen).toBe(false);
    expect(getBakeryOpenStatus(earlyMorning).shortLabel).toContain('08h');

    const thursdayNight = new Date('2026-11-26T22:00:00Z'); // Quinta 19:00 BRT
    expect(getBakeryOpenStatus(thursdayNight).isOpen).toBe(false);
    expect(getBakeryOpenStatus(thursdayNight).shortLabel).toContain('amanhã às 08h');

    const fridayNight = new Date('2026-11-27T22:00:00Z'); // Sexta 19:00 BRT
    expect(getBakeryOpenStatus(fridayNight).isOpen).toBe(false);
    expect(getBakeryOpenStatus(fridayNight).shortLabel).toContain('segunda');
  });

  it('identifica loja física fechada aos sábados e domingos', () => {
    const saturdayNoon = new Date('2026-11-28T15:00:00Z');
    const sundayNoon = new Date('2026-11-29T15:00:00Z');
    expect(getBakeryOpenStatus(saturdayNoon).isOpen).toBe(false);
    expect(getBakeryOpenStatus(sundayNoon).isOpen).toBe(false);
    expect(getBakeryOpenStatus(sundayNoon).shortLabel).toContain('segunda');
  });

  it('calcula estimativas proporcionais respeitando limites de 10 a 300 convidados e fallback texto', () => {
    const small = estimatePartyOrder(4);
    expect(small.guests).toBe(10);
    expect(small.cakeKgLabel).toContain('1,5 kg');

    const fallbackText = estimatePartyOrder('sem numero');
    expect(fallbackText.guests).toBe(25);

    const medium = estimatePartyOrder('25 pessoas');
    expect(medium.guests).toBe(25);
    expect(medium.sweetsCountLabel).toContain('125 a 150');
    expect(medium.palhaUnitsLabel).toBe('30 palhas italianas');

    const large = estimatePartyOrder(999);
    expect(large.guests).toBe(300);
    expect(large.summaryLabel).toContain('300 pessoas');
  });
});
