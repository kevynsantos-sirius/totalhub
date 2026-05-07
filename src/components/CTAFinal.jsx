export default function CTAFinal() {
  return (
    <section
      className="cta-section"
      style={{
        backgroundImage: `url('/src/assets/background-bottom.png')`,
        width: '100%',
        height: '900px',
        backgroundPosition: 'center',
        padding: '100px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        textAlign: 'left',
      }}
    >
      <h2 className="cta-title">Transforme sua operação</h2>
      <h2><span className="cta-title cta-marked-text">com inteligência</span></h2>

      <p className="cta-subtitle">
        Transforme dados em insights, insights em jornadas e jornadas em resultados.
      </p>

      <button
        className="cta-button"
        onClick={() => alert("Abrir fluxo de demonstração 🚀")}
      >
        <span>Solicitar demonstração</span>
        <span className="cta-arrow">→</span>
      </button>
    </section>
  );
}