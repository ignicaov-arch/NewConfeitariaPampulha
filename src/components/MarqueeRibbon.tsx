const RIBBON_ITEMS = [
  { text: 'Palha Italiana Artesanal', italic: false },
  { text: 'Brownie Recheado de Ninho', italic: true },
  { text: 'Bolo de Pote Prestígio', italic: false },
  { text: 'Tortas e Fatias Dois Amores', italic: true },
  { text: 'Brigadeiros Gourmet', italic: false },
  { text: 'Brindes Corporativos em BH', italic: true }
] as const;

export function MarqueeRibbon() {
  return (
    <div className="faixa-wrap" aria-label="Destaques da Confeitaria Pampulha">
      <div className="faixa" id="faixa-marquee">
        <div className="faixa__trilho">
          {RIBBON_ITEMS.map((item) => (
            <span key={`a-${item.text}`}>
              {item.italic ? <em>{item.text}</em> : item.text}
              <b aria-hidden="true"> ✦ </b>
            </span>
          ))}
          {RIBBON_ITEMS.map((item) => (
            <span key={`b-${item.text}`} aria-hidden="true">
              {item.italic ? <em>{item.text}</em> : item.text}
              <b> ✦ </b>
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        id="btn-pausar-faixa"
        className="faixa__controle"
        aria-label="Pausar faixa em movimento"
      >
        Pausar
      </button>
    </div>
  );
}

export default MarqueeRibbon;
