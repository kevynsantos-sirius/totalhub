import { Workflow, UserRoundPlus, BarChart3 } from "lucide-react";

export default function Benefits() {
  return (
    <section id="beneficios" className="section">
      <h2>Resultados que fazem diferença</h2>

      <p className="section-subtitle">
        O TotalHub transforma operações fragmentadas em jornadas
        automatizadas, inteligentes e escaláveis.
      </p>

      <div className="results-grid">
        {/* EFICIÊNCIA */}
        <div className="result-card time">
          <div className="result-icon">
            <Workflow size={28} />
          </div>

          <span className="highlight">Eficiência</span>

          <p>
            Automação completa das jornadas operacionais e comunicação
            integrada entre sistemas.
          </p>
        </div>

        {/* ONBOARDING */}
        <div className="result-card error">
          <div className="result-icon">
            <UserRoundPlus size={28} />
          </div>

          <span className="highlight">Onboarding Inteligente</span>

          <p>
            Facilidade de acesso, integração rápida e melhor experiência
            para entrada de novos clientes.
          </p>
        </div>

        {/* VELOCIDADE */}
        <div className="result-card speed">
          <div className="result-icon">
            <BarChart3 size={28} />
          </div>

          <span className="highlight">Velocidade</span>

          <p>
            Dados transformados em insights acionáveis para decisões mais
            rápidas e estratégicas.
          </p>
        </div>
      </div>
    </section>
  );
}