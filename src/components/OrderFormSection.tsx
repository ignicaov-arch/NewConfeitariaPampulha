import { useState, type ChangeEvent, type FormEvent } from 'react';
import { estimatePartyOrder } from '../domain/schedule';
import { buildOrderInquiryMessage, buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

const OCCASION_OPTIONS = [
  'Palha Italiana e Brownies (Pronta entrega)',
  'Aniversário ou Festa',
  'Casamento ou Bolos no Pote',
  'Brindes Corporativos',
  'Torta ou Bolo Personalizado',
  'Outra encomenda'
] as const;

const GUEST_RANGE_OPTIONS = [
  { label: 'Até 15 pessoas', guests: 15 },
  { label: '20 a 30 pessoas', guests: 25 },
  { label: '40 a 60 pessoas', guests: 50 },
  { label: '80 a 120+ pessoas', guests: 100 }
] as const;

export function OrderFormSection() {
  const [selectedGuests, setSelectedGuests] = useState<number>(25);
  const estimate = estimatePartyOrder(selectedGuests);

  const handleGuestsChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = event.currentTarget.selectedOptions[0];
    const nextGuests = Number(selectedOption?.getAttribute('data-guests') || 25);
    setSelectedGuests(nextGuests);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event.defaultPrevented || event.nativeEvent.defaultPrevented) return;
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = buildOrderInquiryMessage({
      occasion: String(formData.get('occasion') ?? ''),
      desiredDate: String(formData.get('desiredDate') ?? ''),
      guestsRange: String(formData.get('guestsRange') ?? ''),
      flavorNotes: String(formData.get('flavorNotes') ?? '')
    });
    const safeWhatsappUrl = sanitizeUrl(buildWhatsAppUrl(message));
    window.open(safeWhatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="secao secao--curta" id="orcamento" aria-labelledby="titulo-orcamento">
      <div className="wrap max-w-7xl">
        <div className="agendar revela">
          <div className="agendar__texto">
            <p className="etiqueta etiqueta--escura">
              <i aria-hidden="true" />
              Simulador de pedido e orçamento
            </p>
            <h2 className="agendar__titulo" id="titulo-orcamento">
              Peça o seu kit <em>em segundos.</em>
            </h2>
            <p>
              Escolha a ocasião e a quantidade de pessoas para calcular nossa sugestão ideal de
              bolo, docinhos ou palhas italianas. Ao enviar, a mensagem já sai pronta no WhatsApp.
            </p>
          </div>

          <form className="agendar__form" id="form-encomenda" onSubmit={handleSubmit} noValidate>
            <label className="campo" htmlFor="select-ocasiao">
              <span>O que você deseja encomendar</span>
              <select
                id="select-ocasiao"
                name="occasion"
                defaultValue="Palha Italiana e Brownies (Pronta entrega)"
                className="campo__controle text-base"
              >
                {OCCASION_OPTIONS.map((occasion) => (
                  <option key={occasion} value={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>
            </label>

            <label className="campo" htmlFor="input-data-desejada">
              <span>Data desejada</span>
              <input
                id="input-data-desejada"
                type="text"
                name="desiredDate"
                placeholder="Ex.: esta sexta-feira ou 20 de dezembro"
                autoComplete="off"
                className="campo__controle text-base"
              />
            </label>

            <label className="campo" htmlFor="select-convidados">
              <span>Quantidade estimada</span>
              <select
                name="guestsRange"
                id="select-convidados"
                defaultValue="20 a 30 pessoas"
                onChange={handleGuestsChange}
                className="campo__controle text-base"
              >
                {GUEST_RANGE_OPTIONS.map((option) => (
                  <option
                    key={option.guests}
                    value={option.label}
                    data-guests={String(option.guests)}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <output
              id="estimativa-porcoes"
              htmlFor="select-convidados"
              aria-live="polite"
              className="estimativa-box"
            >
              {estimate.summaryLabel}
            </output>

            <label className="campo" htmlFor="input-sabores">
              <span>Sabores ou detalhes (opcional)</span>
              <input
                id="input-sabores"
                type="text"
                name="flavorNotes"
                placeholder="Ex.: palha italiana tradicional, bolo de morango com limão"
                autoComplete="off"
                className="campo__controle text-base"
              />
            </label>

            <button className="botao botao--escuro botao--largo" type="submit">
              <span>Enviar pedido no WhatsApp</span>
              <span className="botao__seta" aria-hidden="true">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" vectorEffect="non-scaling-stroke" />
                </svg>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default OrderFormSection;
