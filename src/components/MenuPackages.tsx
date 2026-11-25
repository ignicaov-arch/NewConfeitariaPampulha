import { CELEBRATION_COMBO, MENU_BLOCKS } from '../data/menuCatalog';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function MenuPackages() {
  const comboHref = sanitizeUrl(buildWhatsAppUrl(CELEBRATION_COMBO.whatsappMessage));

  return (
    <section className="secao secao--escura" id="cardapio" aria-labelledby="titulo-cardapio">
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--centro">
          <p className="etiqueta etiqueta--clara">
            <i aria-hidden="true" />
            Cardápio da Confeitaria Pampulha
          </p>
          <h2 className="titulo-l" id="titulo-cardapio">
            Cacau nobre, ponto cremoso e <em>fartura em cada fatia.</em>
          </h2>
          <p className="cabeca__texto">
            Peça itens individuais para a sua semana ou monte a mesa completa de sobremesas e
            brindes para o seu evento em Belo Horizonte.
          </p>
        </div>

        <div className="menus">
          {MENU_BLOCKS.map((block) => (
            <article key={block.number} className="menu-card revela">
              <header>
                <span className="menu-card__num">{block.number}</span>
                <h3>{block.title}</h3>
              </header>
              <p className="menu-card__preco">
                <small>{block.pricePrefix}</small> {block.priceValue}{' '}
                <small>{block.priceSuffix}</small>
              </p>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="menu-card__rodape">{block.footerNote}</p>
            </article>
          ))}
        </div>

        <div className="pacote revela">
          <div>
            <p className="pacote__rotulo">{CELEBRATION_COMBO.label}</p>
            <p className="pacote__texto">
              {CELEBRATION_COMBO.textPrefix}
              <strong>{CELEBRATION_COMBO.textHighlight}</strong>
            </p>
          </div>
          <a
            className="botao text-white"
            href={comboHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FFFDFB', textDecoration: 'none' }}
          >
            <span>{CELEBRATION_COMBO.ctaLabel}</span>
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
          </a>
        </div>
      </div>
    </section>
  );
}

export default MenuPackages;
