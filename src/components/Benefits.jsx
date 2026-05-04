export default function Benefits() {
  return (
    <section id="beneficios" className="section">
      <h2>Resultados que fazem diferença</h2>

      <div className="results-grid">
        <div className="result-card time">
          <span className="highlight">+Eficiência</span>
          <p>Automação completa das jornadas</p>
        </div>

        <div className="result-card error">
          <span className="highlight">-Custos</span>
          <p>Redução de retrabalho e desperdício</p>
        </div>

        <div className="result-card speed">
          <span className="highlight">+Velocidade</span>
          <p>Decisões baseadas em dados</p>
        </div>
      </div>
    </section>
  );
}