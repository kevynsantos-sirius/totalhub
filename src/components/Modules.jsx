import { FileText, PenLine, Bot, RefreshCw } from "lucide-react";

export default function Modules() {
  return (
    <section id="modulos" className="section">
      <h2 className="subtitle_modules">Ecossistema <span className="marked_text">TotalHub</span></h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4"> {/* Ajuste o grid para ser mais responsivo */}
        {/* Card TotalDocs */}
        <div className="flex flex-col items-center">
          <div className="icon docs-icon mb-2"> {/* Ícone com espaçamento abaixo */}
            <FileText size={100} />
          </div>
          <div className="card docs p-4"> {/* Card com padding */}
            <h3>TotalDocs</h3>
            <p>Gestão e comunicação omnichannel de documentos</p>
          </div>
        </div>

        {/* Card TotalSign */}
        <div className="flex flex-col items-center">
          <div className="icon sign-icon mb-2"> {/* Ícone com espaçamento abaixo */}
            <PenLine size={100} />
          </div>
          <div className="card sign p-4"> {/* Card com padding */}
            <h3>TotalSign</h3>
            <p>Assinatura digital integrada ao fluxo</p>
          </div>
        </div>

        {/* Card TotalBot */}
        <div className="flex flex-col items-center">
          <div className="icon bot-icon mb-2"> {/* Ícone com espaçamento abaixo */}
            <Bot size={100} />
          </div>
          <div className="card bot p-4"> {/* Card com padding */}
            <h3>TotalBot</h3>
            <p>Automação de atendimento e comunicação</p>
          </div>
        </div>

        {/* Card TotalSync */}
        <div className="flex flex-col items-center">
          <div className="icon sync-icon mb-2"> {/* Ícone com espaçamento abaixo */}
            <RefreshCw size={100} />
          </div>
          <div className="card sync p-4"> {/* Card com padding */}
            <h3>TotalSync</h3>
            <p>Integração e orquestração de sistemas</p>
          </div>
        </div>
      </div>
    </section>
  );
}