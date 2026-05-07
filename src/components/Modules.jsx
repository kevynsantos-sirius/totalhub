import { FileText, PenLine, Bot, RefreshCw } from "lucide-react";

export default function Modules() {
  return (
    <section id="modulos" className="section">
      <h2>Ecossistema TotalHub</h2>

      <div className="grid">
        <div className="card docs">
          <div className="icon docs-icon">
            <FileText size={28} />
          </div>
          <h3>TotalDocs</h3>
          <p>Gestão e comunicação omnichannel de documentos</p>
        </div>

        <div className="card sign">
          <div className="icon sign-icon">
            <PenLine size={28} />
          </div>
          <h3>TotalSign</h3>
          <p>Assinatura digital integrada ao fluxo</p>
        </div>

        <div className="card bot">
          <div className="icon bot-icon">
            <Bot size={28} />
          </div>
          <h3>TotalBot</h3>
          <p>Automação de atendimento e comunicação</p>
        </div>

        <div className="card sync">
          <div className="icon sync-icon">
            <RefreshCw size={28} />
          </div>
          <h3>TotalSync</h3>
          <p>Integração e orquestração de sistemas</p>
        </div>
      </div>
    </section>
  );
}