export default function PainSection() {
  return (
    <section className="section">
      <h2>O problema não é tecnologia. É fragmentação.</h2>

      <p className="subtitle">
        A maioria das empresas investe em ferramentas, mas continua operando de forma desconectada.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Falta de controle</h3>
          <p>Jornadas espalhadas e sem visibilidade</p>
        </div>

        <div className="card">
          <h3>Processos manuais</h3>
          <p>Dependência de operação humana e retrabalho</p>
        </div>

        <div className="card">
          <h3>Custos elevados</h3>
          <p>Falta de eficiência e desperdício operacional</p>
        </div>

        <div className="card">
          <h3>Experiência ruim</h3>
          <p>Comunicação inconsistente com o cliente</p>
        </div>
      </div>
    </section>
  );
}