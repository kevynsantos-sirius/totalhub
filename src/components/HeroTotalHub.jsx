import { useState } from "react";
import image from '../assets/background.png';

export default function HeroTotalHub() {

  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="overlay"></div>

      <div className="hero-text">
        <h1>
          Sua operação está espalhada em várias ferramentas{" "}
          <text>que não se conversam?</text>
        </h1>

        <p>
          Empresas continuam operando com comunicação fragmentada,
          processos manuais e pouca visibilidade. Isso gera custos, atrasos e
          perda de eficiência.
        </p>

        <p className="subtitle">
          O <strong>TotalHub</strong> transforma esse cenário em uma operação
          automatizada, integrada e orientada por dados.
        </p>

        <button className="cta-button-primary">
          Solicitar demonstração
          <span className="arrow">→</span>
        </button>
      </div>
    </section>
  );
}