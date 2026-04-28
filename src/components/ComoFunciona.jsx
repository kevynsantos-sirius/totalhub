import { Link, FileText, Bot, PenLine } from "lucide-react";

export default function ComoFunciona() {
  return (
    <section className="section" id="como">
      <h2>Como funciona</h2>

      <p className="text-block">
        As plataformas atuam de forma integrada, criando um fluxo contínuo de dados, execução e aprendizado dentro da operação.
      </p>

      <div className="flow">

        <div className="flow-item sync">
          <div className="flow-icon">
            <Link size={24} />
          </div>
          <p>TotalSync conecta os dados</p>
        </div>

        <div className="flow-line"></div>

        <div className="flow-item docs">
          <div className="flow-icon">
            <FileText size={24} />
          </div>
          <p>TotalDocs organiza</p>
        </div>

        <div className="flow-line"></div>

        <div className="flow-item bot">
          <div className="flow-icon">
            <Bot size={24} />
          </div>
          <p>TotalBot executa</p>
        </div>

        <div className="flow-line"></div>

        <div className="flow-item sign">
          <div className="flow-icon">
            <PenLine size={24} />
          </div>
          <p>TotalSign formaliza</p>
        </div>

      </div>
    </section>
  );
}