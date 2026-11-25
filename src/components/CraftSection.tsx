import { BRAND } from '../data/brand';
import { BRAND_COUNTERS, CRAFT_FEATURES } from '../data/catalog';

export function CraftSection() {
  return (
    <section className="secao secao--papel" id="confeitaria" aria-labelledby="titulo-confeitaria">
      <div className="wrap espaco max-w-7xl">
        <div className="espaco__texto">
          <p className="etiqueta">
            <i aria-hidden="true" />
            A confeitaria no Itapoã
          </p>
          <h2 className="titulo-l" id="titulo-confeitaria">
            Feito com alma, cuidado e <em>mãos de fada.</em>
          </h2>
          <p>
            Comandada por {BRAND.founders} no Centro Empresarial e Comercial Pampulha, nossa cozinha
            une técnica refinada e hospitalidade mineira para transformar cafés da tarde,
            casamentos e eventos empresariais em momentos inesquecíveis.
          </p>

          <ul className="comodidades">
            {CRAFT_FEATURES.map((feature) => (
              <li key={feature}>
                <svg
                  width={22}
                  height={22}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  vectorEffect="non-scaling-stroke"
                >
                  <path d="M4 12.5 9.5 18 20 6" vectorEffect="non-scaling-stroke" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="espaco__foto revela">
          <img
            src="/img/atelie-800.webp"
            srcSet="/img/atelie-800.webp 800w, /img/atelie.webp 1200w"
            sizes="(max-width: 860px) 92vw, 44vw"
            width={1200}
            height={1500}
            loading="lazy"
            decoding="async"
            alt="Armário rústico da Confeitaria Pampulha exibindo bolos no pote para casamento, docinhos e flores"
          />
          <figcaption className="espaco__selo">
            <span>Loja 19 · Itapoã</span>
            Centro Empresarial e Comercial Pampulha em Belo Horizonte
          </figcaption>
        </figure>
      </div>

      <div className="wrap max-w-7xl">
        <ul className="numeros">
          {BRAND_COUNTERS.map((counter) => (
            <li key={counter.label}>
              <strong>
                <span className="conta" data-ate={String(counter.value)}>
                  {counter.value}
                </span>
                {counter.suffix ? <small>{counter.suffix}</small> : null}
              </strong>
              <span>{counter.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CraftSection;
