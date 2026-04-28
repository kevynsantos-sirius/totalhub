import { FileText, Bot, RefreshCw } from "lucide-react";

export default function OQueFazemos() {
  return (
    <section id="fazemos" className="section">
      <h2>O que fazemos</h2>

      <p className="section-subtitle">
        Centralizamos dados, documentos e processos em uma plataforma única,
        transformando operações em fluxos inteligentes e automatizados.
      </p>

      <div className="premium-grid">
        <div className="premium-card">
          <div className="icon-wrapper blue">
            <FileText size={42} />
          </div>
          <h3>Gestão de documentos</h3>
          <p>
            Organize, controle e acompanhe documentos com segurança e rastreabilidade.
          </p>
        </div>

        <div className="premium-card">
          <div className="icon-wrapper green">
            <Bot size={42} />
          </div>
          <h3>Automação com IA</h3>
          <p>
            Automatize jornadas completas com inteligência que aprende com o uso.
          </p>
        </div>

        <div className="premium-card">
          <div className="icon-wrapper purple">
            <RefreshCw size={42} />
          </div>
          <h3>Integração e sincronização</h3>
          <p>
            Conecte sistemas e mantenha dados atualizados em tempo real.
          </p>
        </div>
      </div>
    </section>
  );
}