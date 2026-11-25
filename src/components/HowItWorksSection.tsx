import { COMPARISON_ROWS, ORDER_STEPS } from '../data/menuCatalog';

export function HowItWorksSection() {
  return (
    <section className="secao secao--papel" id="como-funciona" aria-labelledby="titulo-como-funciona">
      <div className="wrap max-w-7xl">
        <div className="cabeca cabeca--lado">
          <div>
            <p className="etiqueta">
              <i aria-hidden="true" />
              Como pedir
            </p>
            <h2 className="titulo-l" id="titulo-como-funciona">
              Quatro passos até <em>chegar na mesa.</em>
            </h2>
          </div>
          <p className="cabeca__texto">
            Atendimento ágil, valores transparentes e preparo artesanal próximo à sua data para
            garantir frescor máximo em cada mordida.
          </p>
        </div>

        <ol className="passos">
          {ORDER_STEPS.map((step) => (
            <li key={step.num} className="passo revela">
              <span className="passo__num">{step.num}</span>
              <span className="passo__tempo">{step.badge}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>

        <div className="comparativo revela">
          <h3>Comparativo rápido de modalidades e prazos</h3>
          <table>
            <thead>
              <tr>
                <th scope="col">Modalidade</th>
                <th scope="col">Antecedência</th>
                <th scope="col">Mais pedidos</th>
                <th scope="col">Retirada ou entrega</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.modality}>
                  <td>
                    <strong>{row.modality}</strong>
                  </td>
                  <td>{row.leadTime}</td>
                  <td>{row.idealFor}</td>
                  <td>{row.delivery}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
