import { FileText, PenLine, Bot, RefreshCw } from "lucide-react";

export default function Ecosystem() {
  return (
    <section className="section" id="ecosystem">
      <h2>Ecossistema Total</h2>

      <p>
        Plataformas que conectam dados, automatizam jornadas e criam inteligência contínua.
      </p>
      <p className="text-block">
        Cada plataforma resolve uma etapa da operação. Juntas, elas criam um fluxo contínuo onde dados geram inteligência e inteligência orienta novas ações.
      </p>
      <div className="grid">

        <div className="card docs">
          <div className="icon docs-icon">
            <FileText size={28} />
          </div>
          <h3>TotalDocs</h3>
          <p>Gestão de documentos e comunicação com controle e automação.</p>
        </div>

        <div className="card sign">
          <div className="icon sign-icon">
            <PenLine size={28} />
          </div>
          <h3>TotalSign</h3>
          <p>Assinatura digital com segurança e integração aos processos.</p>
        </div>

        <div className="card bot">
          <div className="icon bot-icon">
            <Bot size={28} />
          </div>
          <h3>TotalBot</h3>
          <p>IA para automatizar interações e executar jornadas.</p>
        </div>

        <div className="card sync">
          <div className="icon sync-icon">
            <RefreshCw size={28} />
          </div>
          <h3>TotalSync</h3>
          <p>Integração e sincronização de dados em tempo real.</p>
        </div>

      </div>
    </section>
  );
}