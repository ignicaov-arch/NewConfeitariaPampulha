import type { ReactNode } from 'react';
import { BRAND } from '../data/brand';

export interface HeroSectionProps {
  readonly children: ReactNode;
}

export function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="hero" id="inicio" aria-label="Apresentação Confeitaria Pampulha">
      <div className="hero__moldura">
        <img
          className="hero__foto"
          src="/img/hero.webp"
          srcSet="/img/hero-800.webp 800w, /img/hero.webp 1600w"
          sizes="100vw"
          width={1600}
          height={1066}
          fetchPriority="high"
          decoding="async"
          alt="Mesa artesanal da Confeitaria Pampulha em Belo Horizonte com torta de chocolate, palha italiana e brigadeiros em forminhas rosa"
        />
        <div className="hero__veu" aria-hidden="true" />
        <div className="chuva" id="chuva" aria-hidden="true" />

        <div className="hero__conteudo max-w-4xl">
          <p className="etiqueta etiqueta--clara surge">
            <i aria-hidden="true" />
            <span data-open-status>Pronta entrega e encomendas no Itapoã, BH</span>
          </p>

          {children}

          <p className="hero__lead answer-first surge">
            Na <strong>{BRAND.name}</strong>, {BRAND.founders} preparam a melhor palha italiana de
            Belo Horizonte, brownies recheados, bolos de pote, tortas e brindes corporativos com
            receitas autorais e atendimento de 5 estrelas no bairro Itapoã.
          </p>

          <div className="hero__acoes surge">
            <a
              className="botao text-white"
              href="#orcamento"
              style={{ color: '#FFFDFB', textDecoration: 'none' }}
            >
              <span className="rolling-wrap">
                <span className="rolling-line">Montar minha encomenda</span>
                <span className="rolling-line is-clone" aria-hidden="true">
                  Montar minha encomenda
                </span>
              </span>
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

            <a
              className="botao botao--vidro text-white"
              href="#cardapio"
              style={{ color: '#FFF7F9', textDecoration: 'none' }}
            >
              Ver cardápio da casa
            </a>
          </div>

          <ul className="hero__fatos surge">
            <li>
              <strong>{BRAND.rating.displayValue} ★</strong> no Google ({BRAND.rating.count} avaliações)
            </li>
            <li>
              <strong>Seg a Sex</strong> 08h às 18h
            </li>
            <li>
              <strong>{BRAND.address.neighborhood}</strong> · Belo Horizonte
            </li>
          </ul>
        </div>

        <p className="hero__marca" aria-hidden="true">
          Pampulha
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
