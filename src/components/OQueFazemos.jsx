export default function OQueFazemos() {
  return (
    <section className="section">
      <h2>O que fazemos</h2>

      <p className="section-subtitle">
        Centralizamos dados, documentos e processos em uma única plataforma inteligente.
      </p>

      <div className="info-grid">
        <div className="info-card">
          <div className="info-icon docs">📄</div>
          <h3>Gestão de documentos</h3>
          <p>Organize e controle tudo em um só lugar.</p>
        </div>

        <div className="info-card">
          <div className="info-icon bot">🤖</div>
          <h3>Automação inteligente</h3>
          <p>Fluxos que evoluem com o uso.</p>
        </div>

        <div className="info-card">
          <div className="info-icon sync">🔄</div>
          <h3>Integração total</h3>
          <p>Conecte sistemas e centralize informações.</p>
        </div>
      </div>
    </section>
  );
}