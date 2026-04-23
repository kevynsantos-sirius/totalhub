export default function Ecosystem() {
  return (
    <section className="section" id="ecosystem">
      <h2>Ecossistema Total</h2>

      <p>
        Plataformas que conectam dados, automatizam jornadas e criam inteligência contínua.
      </p>

      <div className="grid">
        <div className="card docs">
          <h3>TotalDocs</h3>
          <p>Gestão de documentos e comunicação com controle e automação.</p>
        </div>

        <div className="card sign">
          <h3>TotalSign</h3>
          <p>Assinatura digital com segurança e integração aos processos.</p>
        </div>

        <div className="card bot">
          <h3>TotalBot</h3>
          <p>IA para automatizar interações e executar jornadas.</p>
        </div>

        <div className="card sync">
          <h3>TotalSync</h3>
          <p>Integração e sincronização de dados em tempo real.</p>
        </div>
      </div>
    </section>
  );
}