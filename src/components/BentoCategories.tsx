import { BENTO_CATEGORIES, EXTRA_CATEGORY_CARD } from '../data/catalog';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function BentoCategories() {
  const extraHref = sanitizeUrl(buildWhatsAppUrl(EXTRA_CATEGORY_CARD.whatsappMessage));

  return (
    <section className="secao" id="especialidades" aria-labelledby="titulo-especialidades">
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--lado">
          <div>
            <p className="etiqueta">
              <i aria-hidden="true" />
              Nossas especialidades
            </p>
            <h2 className="titulo-l" id="titulo-especialidades">
              Receitas autorais, <em>quatro jeitos</em> de adoçar o dia.
            </h2>
          </div>
          <p className="cabeca__texto">
            Da pausa da tarde na Pampulha às grandes celebrações em Belo Horizonte. Toque em qualquer
            cartão para pedir direto no WhatsApp.
          </p>
        </div>

        <div className="bento">
          {BENTO_CATEGORIES.map((item) => {
            const href = sanitizeUrl(buildWhatsAppUrl(item.whatsappMessage));
            return (
              <a
                key={item.id}
                className={`festa ${item.variantClass} revela text-white`}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#FFF7F9', textDecoration: 'none' }}
              >
                <img
                  src={item.image800}
                  srcSet={`${item.image800} 800w, ${item.image} 1600w`}
                  sizes="(max-width: 860px) 92vw, 52vw"
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                  alt={item.alt}
                />
                <span className="festa__tag">{item.tag}</span>
                <div className="festa__base">
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <span className="festa__seta" aria-hidden="true">
                    <svg
                      width={22}
                      height={22}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      vectorEffect="non-scaling-stroke"
                    >
                      <path d="M7 17 17 7M9 7h8v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </span>
                </div>
              </a>
            );
          })}

          <div className="festa festa--extra revela">
            <p className="festa__extra-num">
              <em>{EXTRA_CATEGORY_CARD.eyebrow}</em>
            </p>
            <h3>{EXTRA_CATEGORY_CARD.title}</h3>
            <p>{EXTRA_CATEGORY_CARD.description}</p>
            <a
              className="link-seta text-current"
              href={extraHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#2B1712', textDecoration: 'none' }}
            >
              <span>{EXTRA_CATEGORY_CARD.ctaLabel}</span>
              <svg
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                vectorEffect="non-scaling-stroke"
              >
                <path d="M5 12h14M13 6l6 6-6 6" vectorEffect="non-scaling-stroke" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BentoCategories;
