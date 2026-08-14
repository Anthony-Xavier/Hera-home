import React from "react";
import "./Depoimento.scss";

const depoimentos = [
  {
    texto:
      "Do projeto aos últimos detalhes, tudo pensado com muito carinho e profissionalismo. Parabéns pelo lindo trabalho e por transformar minhas ideias em realidade!",
    autor: "Adriana Herminia.",
  },
  {
    texto:
      "Encomendamos uma mesa sob medida e o resultado superou qualquer expectativa. Atendimento atencioso do início ao fim.",
    autor: "Marcos T. — Curitiba",
  },
  {
    texto:
      "Peças que parecem ter alma. Nossa casa ganhou outro aconchego depois da reforma com a Hera Home.",
    autor: "Beatriz L. — Belo Horizonte",
  },
];

const Depoimento = () => {
  return (
    <section className="depoimento">
      <div className="depoimento__titulos">
        <h3 className="depoimento__titulos depoimento__titulos--h3">
          Depoimentos
        </h3>
        <h2 className="depoimento__titulos depoimento__titulos--h2">
          Quem já mobiliou com a Hera Home
        </h2>
      </div>

      <div className="depoimento__lista">
        {depoimentos.map((depoimento) => (
          <blockquote className="depoimento__item" key={depoimento.autor}>
            <p className="depoimento__item-texto">“{depoimento.texto}”</p>
            <cite className="depoimento__item-autor">{depoimento.autor}</cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Depoimento;
