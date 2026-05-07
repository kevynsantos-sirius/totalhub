import { Cpu, BarChart, Clock, Edit3 } from "lucide-react"; // Importando novos ícones para dar mais variação

export default function Intelligence() {
  return (
    <section id="ia" className="section">
      <h2>Inteligência operacional <span className="marked_text">com IA</span></h2>

      <p className="subtitle">
        O TotalHub transforma dados em decisões e automação em vantagem competitiva.
      </p>

      <div className="grid">
        <div className="card premium">
          <div className="icon">
            <Cpu size={40} />
          </div>
          <h3>Orquestração automática</h3>
          <p>Fluxos inteligentes sem intervenção manual</p>
        </div>

        <div className="card premium">
          <div className="icon">
            <BarChart size={40} />
          </div>
          <h3>Insights acionáveis</h3>
          <p>Dados transformados em estratégia</p>
        </div>

        <div className="card premium">
          <div className="icon">
            <Clock size={40} />
          </div>
          <h3>Otimização contínua</h3>
          <p>Melhoria constante baseada em comportamento</p>
        </div>
      </div>
    </section>
  );
}