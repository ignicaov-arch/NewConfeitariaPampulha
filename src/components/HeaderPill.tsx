import LogoEmblem from './LogoEmblem';

export function HeaderPill() {
  return (
    <div className="topo__pilula max-w-5xl">
      <a
        className="marca text-current"
        href="#inicio"
        aria-label="Confeitaria Pampulha, voltar ao início"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <LogoEmblem size={36} />
        <span>Confeitaria Pampulha</span>
      </a>

      <nav className="menu" id="menu" aria-label="Navegação principal">
        <a href="#especialidades">Especialidades</a>
        <a href="#confeitaria">A loja</a>
        <a href="#cardapio">Cardápio</a>
        <a href="#personalizacao">Corporativo</a>
        <a href="#duvidas">Dúvidas</a>
        <a href="/linkbio">LinkBio</a>
      </nav>

      <a
        className="botao botao--pequeno topo__cta text-white"
        href="#orcamento"
        style={{ color: '#FFFDFB', textDecoration: 'none' }}
      >
        <span className="rolling-wrap">
          <span className="rolling-line">Encomendar</span>
          <span className="rolling-line is-clone" aria-hidden="true">
            Encomendar
          </span>
        </span>
      </a>

      <button
        type="button"
        className="topo__abrir"
        id="abrir"
        aria-label="Abrir o menu de navegação"
        aria-expanded="false"
        aria-controls="menu"
      >
        <span />
        <span />
      </button>
    </div>
  );
}

export default HeaderPill;
