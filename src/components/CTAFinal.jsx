export default function CTAFinal() {
  return (
    <section className="section">
      <h2>Transforme sua operação com inteligência</h2>

      <p>
        Transforme dados em insights, insights em jornadas e jornadas em resultados.
      </p>

      <button
        className="cta-button-primary"
        onClick={() => alert("Abrir fluxo de demonstração 🚀")}
      >
        <span>Solicitar demonstração</span>
        <span className="arrow">→</span>
      </button>
    </section>
  );
}