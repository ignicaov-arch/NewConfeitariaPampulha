import { GIFT_INCLUDES, GIFT_STYLES } from '../data/menuCatalog';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function CustomDesignSection() {
  const corporateHref = sanitizeUrl(
    buildWhatsAppUrl(
      'Olá, Yuri e Angélica! Quero conhecer as opções de brindes corporativos e presentes da Confeitaria Pampulha.'
    )
  );

  return (
    <section className="secao" id="personalizacao" aria-labelledby="titulo-personalizacao">
      <div className="wrap decoracao max-w-7xl">
        <figure className="decoracao__foto revela">
          <img
            src="/img/presentes-800.webp"
            srcSet="/img/presentes-800.webp 800w, /img/presentes.webp 1200w"
            sizes="(max-width: 860px) 92vw, 42vw"
            width={1200}
            height={1600}
            loading="lazy"
            decoding="async"
            alt="Caixa presenteável rosa e creme da Confeitaria Pampulha com brigadeiros gourmet e brownie embrulhado"
          />
        </figure>

        <div className="decoracao__texto">
          <p className="etiqueta">
            <i aria-hidden="true" />
            Presentes, casamentos e corporativo
          </p>
          <h2 className="titulo-l" id="titulo-personalizacao">
            Da caixa de brigadeiros ao <em>brinde da empresa.</em>
          </h2>
          <p>
            Criamos kits sob medida para surpreender colaboradores, clientes e convidados. De
            casamentos intimistas com bolos no pote personalizados a entregas mensais para clubes e
            escritórios em Belo Horizonte.
          </p>

          <ul className="estilos" aria-label="Formatos de kits e lembranças">
            {GIFT_STYLES.map((style) => (
              <li key={style}>{style}</li>
            ))}
          </ul>

          <ol className="inclusos">
            {GIFT_INCLUDES.map((item) => (
              <li key={item.num}>
                <b>{item.num}</b>
                <span>
                  <strong>{item.title}:</strong> {item.detail}
                </span>
              </li>
            ))}
          </ol>

          <a
            className="botao botao--escuro text-white"
            href={corporateHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FFFDFB', textDecoration: 'none' }}
          >
            <span>Solicitar catálogo corporativo</span>
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

export default CustomDesignSection;
