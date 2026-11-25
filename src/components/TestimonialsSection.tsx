import { BRAND } from '../data/brand';
import { TESTIMONIALS } from '../data/socialProof';

export function TestimonialsSection() {
  return (
    <section className="secao" id="depoimentos" aria-labelledby="titulo-depoimentos">
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--centro">
          <p className="etiqueta">
            <i aria-hidden="true" />
            Nota {BRAND.rating.displayValue} estrelas em {BRAND.rating.count} avaliações no Google
          </p>
          <h2 className="titulo-l" id="titulo-depoimentos">
            Quem prova lembra <em>do sabor e do carinho.</em>
          </h2>
        </div>

        <div className="depoimentos">
          {TESTIMONIALS.map((item) => (
            <blockquote
              key={item.author}
              className={`depo revela${item.highlight ? ' depo--destaque' : ''}`}
            >
              <p>“{item.quote}”</p>
              <footer>
                <b>{item.author}</b>
                <span>{item.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
