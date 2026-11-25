import { BRAND } from '../data/brand';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function LocationSection() {
  const mapsHref = sanitizeUrl(BRAND.googleMapsUrl);
  const instagramHref = sanitizeUrl(BRAND.instagramUrl);
  const whatsappHref = sanitizeUrl(buildWhatsAppUrl());

  return (
    <section className="secao secao--curta" id="endereco" aria-labelledby="titulo-endereco">
      <div className="wrap endereco max-w-7xl">
        <div className="endereco__dados revela">
          <p className="etiqueta">
            <i aria-hidden="true" />
            Localização e retirada
          </p>
          <h2 className="titulo-m" id="titulo-endereco">
            No coração do Itapoã, <em>fácil de retirar.</em>
          </h2>

          <dl className="dados">
            <div>
              <dt>Endereço</dt>
              <dd>
                {BRAND.address.street} · {BRAND.address.complex}
                <br />
                Bairro {BRAND.address.neighborhood}, {BRAND.address.city} - {BRAND.address.state},
                CEP {BRAND.address.postalCode}
              </dd>
            </div>
            <div>
              <dt>Horários</dt>
              <dd>
                Segunda a sexta, 08h às 18h
                <br />
                Sábado e domingo fechado · <span data-open-status>Consulte agenda</span>
              </dd>
            </div>
            <div>
              <dt>Contato</dt>
              <dd>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  {BRAND.whatsappDisplay}
                </a>{' '}
                ·{' '}
                <a href={instagramHref} target="_blank" rel="noopener noreferrer">
                  {BRAND.instagramHandle}
                </a>
              </dd>
            </div>
          </dl>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <a
              className="botao botao--linha"
              href={mapsHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir rotas no Google Maps
            </a>
            <a className="botao botao--escuro" href="/linkbio">
              Ver LinkBio completo
            </a>
          </div>
        </div>

        <div className="mapa revela" aria-hidden="true">
          <svg
            width={600}
            height={420}
            viewBox="0 0 600 420"
            preserveAspectRatio="xMidYMid slice"
          >
            <path className="mapa__agua" d="M-20 355 C 160 320, 320 385, 620 335" />
            <path className="mapa__rua mapa__rua--larga" d="M-20 265 C 180 235, 360 285, 620 225" />
            <path className="mapa__rua" d="M135 -20 L 210 440" />
            <path className="mapa__rua" d="M390 -20 C 370 140, 415 260, 395 440" />
            <path className="mapa__rua" d="M-20 112 L 620 78" />
            <path className="mapa__rua mapa__rua--fina" d="M-20 185 L 620 158" />
            <path className="mapa__rua mapa__rua--fina" d="M515 -20 L 472 440" />
            <rect className="mapa__praca" x="235" y="102" width="114" height="68" rx="16" />
          </svg>
          <span className="mapa__pino">
            <i />
          </span>
          <span className="mapa__rotulo">Confeitaria Pampulha · Loja 19</span>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;
