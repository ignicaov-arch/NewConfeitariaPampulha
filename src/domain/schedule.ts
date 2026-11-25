export interface BakeryOpenStatus {
  readonly isOpen: boolean;
  readonly shortLabel: string;
  readonly detailLabel: string;
}

export interface PartyOrderEstimate {
  readonly guests: number;
  readonly cakeKgLabel: string;
  readonly sweetsCountLabel: string;
  readonly palhaUnitsLabel: string;
  readonly summaryLabel: string;
}

const WEEKDAY_MAP: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6
};

/** Calcula se a loja da Confeitaria Pampulha (Itapoã, BH) está aberta no horário oficial Seg a Sex 08h-18h. */
export function getBakeryOpenStatus(referenceDate: Date = new Date()): BakeryOpenStatus {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  const parts = formatter.formatToParts(referenceDate);
  const weekdayStr = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon';
  const hourNum = Number(parts.find((p) => p.type === 'hour')?.value ?? '12') % 24;
  const minuteNum = Number(parts.find((p) => p.type === 'minute')?.value ?? '0');

  const dayIndex = WEEKDAY_MAP[weekdayStr] ?? 1;
  const totalMinutes = hourNum * 60 + minuteNum;

  if (dayIndex >= 1 && dayIndex <= 5) {
    const open = totalMinutes >= 8 * 60 && totalMinutes < 18 * 60;
    if (open) {
      return {
        isOpen: true,
        shortLabel: 'Loja aberta agora no Itapoã',
        detailLabel: 'Hoje até 18h · Pronta entrega e encomendas'
      };
    }

    const beforeOpen = totalMinutes < 8 * 60;
    if (beforeOpen) {
      return {
        isOpen: false,
        shortLabel: 'Abrimos hoje às 08h no Itapoã',
        detailLabel: 'Seg a sex 08h às 18h · Deixe seu pedido no WhatsApp'
      };
    }

    return {
      isOpen: false,
      shortLabel: dayIndex === 5 ? 'Atendimento retoma segunda às 08h' : 'Abrimos amanhã às 08h',
      detailLabel: 'Deixe sua encomenda pronta pelo WhatsApp'
    };
  }

  return {
    isOpen: false,
    shortLabel: 'Fim de semana · Retomamos segunda às 08h',
    detailLabel: 'Envie sua data no WhatsApp para reservar a semana'
  };
}

/** Estima peso de bolo, docinhos gourmet e palhas italianas lembrancinha para 10 a 300 pessoas. */
export function estimatePartyOrder(guestsInput: number | string): PartyOrderEstimate {
  const parsed =
    typeof guestsInput === 'number'
      ? guestsInput
      : Number(String(guestsInput).replace(/[^\d]/g, '')) || 25;

  const guests = Math.min(300, Math.max(10, Math.round(parsed)));
  const minKg = Math.max(1.5, Math.round(guests * 0.1 * 2) / 2);
  const maxKg = Math.round((minKg + 0.5) * 2) / 2;
  const minSweets = Math.ceil((guests * 5) / 25) * 25;
  const maxSweets = Math.ceil((guests * 6) / 25) * 25;
  const palhaUnits = Math.ceil((guests * 1.1) / 5) * 5;

  const fmtKg = (n: number) => n.toFixed(1).replace('.', ',');
  const cakeKgLabel = `${fmtKg(minKg)} kg a ${fmtKg(maxKg)} kg`;
  const sweetsCountLabel = `${minSweets} a ${maxSweets} docinhos`;
  const palhaUnitsLabel = `${palhaUnits} palhas italianas`;

  return {
    guests,
    cakeKgLabel,
    sweetsCountLabel,
    palhaUnitsLabel,
    summaryLabel: `Sugestão para ~${guests} pessoas: bolo de ${cakeKgLabel}, ${sweetsCountLabel} ou ${palhaUnitsLabel}.`
  };
}
