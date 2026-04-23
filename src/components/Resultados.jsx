import { Clock, AlertTriangle, TrendingUp } from "lucide-react";

export default function Resultados() {
  return (
    <section className="section" id="resultados">
      <h2>Resultados</h2>

      <p className="subtitle">
        Impactos reais na operação com o uso do ecossistema Total
      </p>

      <div className="results-grid">

        <div className="result-card time">
          <div className="result-icon">
            <Clock size={28} />
          </div>
          <h3>Redução de tempo</h3>
          <span className="highlight">Até 70%</span>
          <p>em tarefas operacionais e fluxos manuais</p>
        </div>

        <div className="result-card error">
          <div className="result-icon">
            <AlertTriangle size={28} />
          </div>
          <h3>Menos erros</h3>
          <span className="highlight">+ precisão</span>
          <p>com automação e padronização de processos</p>
        </div>

        <div className="result-card speed">
          <div className="result-icon">
            <TrendingUp size={28} />
          </div>
          <h3>Decisões mais rápidas</h3>
          <span className="highlight">Tempo real</span>
          <p>com dados organizados e insights contínuos</p>
        </div>

      </div>
    </section>
  );
}