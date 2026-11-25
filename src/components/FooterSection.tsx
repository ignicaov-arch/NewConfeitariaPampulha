import { BRAND } from '../data/brand';

export interface FooterSectionProps {
  readonly isHome?: boolean;
}

export function FooterSection({ isHome = true }: FooterSectionProps) {
  const prefix = isHome ? '' : '/';

  return (
    <>
      <div className="wrap rodape__topo max-w-7xl">
        <p className="rodape__frase">
          Tem uma comemoração ou presente chegando? <em>Conte com a nossa cozinha.</em>
        </p>
        <nav className="rodape__links" aria-label="Navegação do rodapé">
          <a href={`${prefix}#especialidades`}>Especialidades</a>
          <a href={`${prefix}#confeitaria`}>A loja</a>
          <a href={`${prefix}#cardapio`}>Cardápio</a>
          <a href={`${prefix}#duvidas`}>Dúvidas</a>
          <a href="/linkbio">Links Oficiais</a>
          <a href="/politica-de-privacidade">Política de Privacidade</a>
        </nav>
      </div>

      <p className="rodape__marca" aria-hidden="true">
        Pampulha<span>.</span>
      </p>

      <div className="wrap rodape__base max-w-7xl">
        <span>
          © 2026 {BRAND.name} · {BRAND.address.street}, {BRAND.address.neighborhood},{' '}
          {BRAND.address.city} - {BRAND.address.state}.
        </span>
        <button
          type="button"
          id="btn-preferencias-cookies"
          className="cursor-pointer"
          style={{
            minHeight: '44px',
            padding: '8px 16px',
            borderRadius: '999px',
            border: '1px solid rgba(255, 253, 251, 0.24)',
            background: 'transparent',
            color: 'inherit',
            font: 'inherit',
            cursor: 'pointer'
          }}
        >
          Preferências de Privacidade
        </button>
      </div>
    </>
  );
}

export default FooterSection;
