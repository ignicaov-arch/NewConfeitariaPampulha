import { FAQ_ITEMS } from '../data/socialProof';
import { buildWhatsAppUrl, sanitizeUrl } from '../domain/whatsapp';

export function FaqSection() {
  const faqWhatsappHref = sanitizeUrl(
    buildWhatsAppUrl('Olá! Tenho uma dúvida sobre os produtos e encomendas da Confeitaria Pampulha.')
  );

  return (
    <section className="secao secao--papel" id="duvidas" aria-labelledby="titulo-duvidas">
      <div className="wrap faq max-w-7xl">
        <div className="faq__cabeca">
          <p className="etiqueta">
            <i aria-hidden="true" />
            Dúvidas frequentes
          </p>
          <h2 className="titulo-l" id="titulo-duvidas">
            Perguntas que <em>todo cliente</em> faz.
          </h2>
          <p>
            Quer confirmar sabores do dia ou consultar disponibilidade para a sua festa? Nossa equipe
            responde direto pelo WhatsApp.
          </p>
          <a
            className="botao botao--escuro text-white"
            href={faqWhatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#FFFDFB', textDecoration: 'none' }}
          >
            <span>Tirar dúvida no WhatsApp</span>
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

        <div className="faq__lista">
          {FAQ_ITEMS.map((item, idx) => (
            <details key={item.question} className="pergunta" name="duvida-pampulha" open={idx === 0}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
