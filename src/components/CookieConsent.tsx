export function CookieConsent() {
  return (
    <aside
      id="cookie-banner"
      data-lenis-prevent
      role="region"
      aria-label="Preferências de privacidade e LGPD"
      hidden
      style={{
        position: 'fixed',
        left: '16px',
        bottom: '16px',
        zIndex: 55,
        width: 'min(440px, calc(100vw - 104px))',
        padding: '20px',
        borderRadius: '24px',
        background: 'var(--papel, #FFFDFB)',
        color: 'var(--texto, #2B1712)',
        border: '1px solid var(--linha, rgba(43, 23, 18, 0.16))',
        boxShadow: '0 18px 44px -16px rgba(43, 23, 18, 0.32)'
      }}
    >
      <p style={{ margin: '0 0 12px', fontSize: '14px', lineHeight: 1.5 }}>
        Utilizamos apenas armazenamento essencial para lembrar suas preferências neste site,
        conforme a LGPD. Leia nossa{' '}
        <a href="/politica-de-privacidade" style={{ fontWeight: 600, textDecoration: 'underline' }}>
          Política de Privacidade
        </a>
        .
      </p>

      <div id="cookie-opcoes-extras" hidden style={{ marginBottom: '12px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '10px 12px',
            borderRadius: '14px',
            border: '1px solid var(--linha, rgba(43, 23, 18, 0.14))'
          }}
        >
          <span id="label-switch-analytics" style={{ fontSize: '13.5px', fontWeight: 500 }}>
            Métricas anônimas de visitação (opcional)
          </span>
          <button
            type="button"
            role="switch"
            id="switch-analytics"
            aria-checked="false"
            aria-labelledby="label-switch-analytics"
            className="cursor-pointer"
            style={{
              minHeight: '44px',
              minWidth: '64px',
              padding: '6px 12px',
              borderRadius: '999px',
              border: '1px solid var(--tinta, #2B1712)',
              background: 'transparent',
              color: 'var(--texto, #2B1712)',
              fontSize: '13px',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Inativo
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <button
          type="button"
          data-consent-action="accept"
          className="botao botao--escuro botao--pequeno cursor-pointer"
        >
          Aceitar
        </button>
        <button
          type="button"
          data-consent-action="essential"
          className="botao botao--linha botao--pequeno cursor-pointer"
        >
          Apenas essenciais
        </button>
        <button
          type="button"
          data-consent-action="customize"
          aria-expanded="false"
          aria-controls="cookie-opcoes-extras"
          className="botao botao--pequeno cursor-pointer"
          style={{
            background: 'transparent',
            color: 'var(--tinta, #2B1712)',
            border: '1px solid transparent'
          }}
        >
          Personalizar
        </button>
      </div>
    </aside>
  );
}

export default CookieConsent;
