import React from "react";
import "./Diferencas.scss";

const opcoes = [
  {
    titulo: "Sob medida",
    texto:
      "Projeto exclusivo, com madeira, ferragens e acabamento escolhidos por você. O investimento depende de medidas, materiais e instalação.",
    botao: "Solicitar projeto e orçamento",
    variante: "primario",
  },
  {
    titulo: "Pronta entrega",
    texto:
      "Peças finalizadas disponíveis no showroom — mesas laterais, bancos, espelhos e objetos de decoração prontos para entrega.",
    botao: "Ver pronta entrega",
    variante: "secundario",
  },
];

const Diferencas = () => {
  return (
    <section className="diferencas">
      {opcoes.map((opcao) => (
        <div className="diferencas__card" key={opcao.titulo}>
          <h3 className="diferencas__card-titulo">{opcao.titulo}</h3>
          <p className="diferencas__card-texto">{opcao.texto}</p>
          <button
            className={`diferencas__card-botao diferencas__card-botao--${opcao.variante}`}
          >
            {opcao.botao}
          </button>
        </div>
      ))}
    </section>
  );
};

export default Diferencas;
