export default function QuemSomos() {
  return (
    <section className="section">
      <h2>Quem somos</h2>

      <p className="section-subtitle">
        A TotalHub ajuda empresas a organizar dados e automatizar operações com inteligência.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <div className="info-icon">⚙️</div>
          <h3>Automação</h3>
          <p>Reduza tarefas manuais e aumente produtividade.</p>
        </div>

        <div className="info-card">
          <div className="info-icon">📊</div>
          <h3>Controle</h3>
          <p>Tenha visibilidade total dos seus processos.</p>
        </div>

        <div className="info-card">
          <div className="info-icon">🚀</div>
          <h3>Escalabilidade</h3>
          <p>Cresça sem aumentar complexidade operacional.</p>
        </div>
      </div>
    </section>
  );
}