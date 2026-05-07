import { MessageCircle, Cpu, Database } from 'lucide-react'; // Importando ícones

export default function Overview() {
  return (
    <section className="section">
      <h2>Uma nova forma <span className="marked_text">de operar</span></h2>

      <p className="subtitle">
        O TotalHub elimina a fragmentação e cria um modelo unificado de comunicação,
        automação e integração.
      </p>

      <div className="new-column-list">
        {/* Card Comunicação Integrada */}
        <div className="new-card card-comunicacao">
          <div className="icon">
            <MessageCircle size={40} /> {/* Ícone de Comunicação */}
          </div>
          <h3>Comunicação integrada</h3>
          <p>Todos os canais em uma única plataforma</p>
        </div>

        {/* Card Automação Inteligente */}
        <div className="new-card card-automacao">
          <div className="icon">
            <Cpu size={40} /> {/* Ícone de Automação */}
          </div>
          <h3>Automação inteligente</h3>
          <p>Jornadas automatizadas com regras e IA</p>
        </div>

        {/* Card Dados Conectados */}
        <div className="new-card card-dados">
          <div className="icon">
            <Database size={40} /> {/* Ícone de Dados */}
          </div>
          <h3>Dados conectados</h3>
          <p>Integração total entre sistemas</p>
        </div>
      </div>
    </section>
  );
}