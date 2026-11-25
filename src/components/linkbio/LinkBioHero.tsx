import type { ReactNode } from 'react';
import { BRAND } from '../../data/brand';
import LogoEmblem from '../LogoEmblem';

export interface LinkBioHeroProps {
  readonly children: ReactNode;
}

export function LinkBioHero({ children }: LinkBioHeroProps) {
  return (
    <section className="linkbio-hero" aria-label="Identidade Confeitaria Pampulha">
      <div className="linkbio-emblem">
        <LogoEmblem size={114} variant="pink" />
      </div>

      <p className="linkbio-status">
        <span className="linkbio-status__dot" data-open-dot aria-hidden="true" />
        <span data-open-status>Seg a Sex · 08h às 18h</span>
        <span aria-hidden="true">·</span>
        <span data-open-detail>Itapoã, BH</span>
      </p>

      {children}

      <p className="linkbio-hero__bio answer-first">
        A melhor palha italiana de Belo Horizonte, brownie recheado, bolo de pote, tortas e brindes
        corporativos feitos por <strong>{BRAND.founders}</strong>.
      </p>

      <ul className="linkbio-proofs">
        <li className="linkbio-proofs__item">
          {BRAND.rating.displayValue} ★ Google ({BRAND.rating.count} avaliações)
        </li>
        <li className="linkbio-proofs__item">{BRAND.socialStats.followersDisplay} seguidores</li>
        <li className="linkbio-proofs__item">Itapoã · Pampulha, BH</li>
      </ul>
    </section>
  );
}

export default LinkBioHero;
