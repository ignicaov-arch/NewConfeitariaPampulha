import { LINKBIO_SHOWCASE } from '../../data/linkbioData';
import { TESTIMONIALS } from '../../data/socialProof';
import { sanitizeUrl } from '../../domain/whatsapp';

export function LinkBioShowcase() {
  const featuredQuote = TESTIMONIALS[1] ?? TESTIMONIALS[0];

  return (
    <>
      <section aria-labelledby="titulo-vitrine-bio">
        <h2 className="linkbio-sec-title" id="titulo-vitrine-bio">
          Clássicos da nossa vitrine
        </h2>
        <div className="linkbio-vitrine__grid">
          {LINKBIO_SHOWCASE.map((item) => (
            <a
              key={item.title}
              href={sanitizeUrl(item.href)}
              className="linkbio-vitrine__card revela text-current"
              style={{ color: '#2B1712', textDecoration: 'none' }}
            >
              <img
                className="linkbio-vitrine__img"
                src={item.image}
                alt={item.alt}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
              />
              <span className="linkbio-vitrine__title">{item.title}</span>
              <span className="linkbio-vitrine__cap">{item.caption}</span>
            </a>
          ))}
        </div>
      </section>

      {featuredQuote ? (
        <section className="linkbio-panel revela" aria-label="Avaliação em destaque">
          <p style={{ margin: 0, fontSize: '0.78rem', fontWeight: 700, color: 'var(--acento-texto)' }}>
            DEPOIMENTO VERIFICADO · 5,0 ESTRELAS
          </p>
          <blockquote className="linkbio-quote">“{featuredQuote.quote}”</blockquote>
          <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--lb-muted)' }}>
            <strong>{featuredQuote.author}</strong> · {featuredQuote.context}
          </p>
        </section>
      ) : null}
    </>
  );
}

export default LinkBioShowcase;
