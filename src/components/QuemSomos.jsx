import { Settings, BarChart3, Rocket } from "lucide-react";

export default function QuemSomos() {
  return (
    <section id="quem" className="section">
      <h2>Quem somos</h2>

      <p className="section-subtitle">
        Transformamos operações complexas em fluxos simples, inteligentes e escaláveis.
      </p>

      <div className="premium-grid">
        <div className="premium-card">
          <div className="icon-wrapper blue">
            <Settings size={42} />
          </div>
          <h3>Automação inteligente</h3>
          <p>Elimine tarefas repetitivas e ganhe eficiência operacional.</p>
        </div>

        <div className="premium-card">
          <div className="icon-wrapper purple">
            <BarChart3 size={42} />
          </div>
          <h3>Visão estratégica</h3>
          <p>Dados organizados para decisões rápidas e assertivas.</p>
        </div>

        <div className="premium-card">
          <div className="icon-wrapper green">
            <Rocket size={42} />
          </div>
          <h3>Escala real</h3>
          <p>Cresça sem aumentar complexidade e custo operacional.</p>
        </div>
      </div>
    </section>
  );
}