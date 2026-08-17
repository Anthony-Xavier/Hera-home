import React from "react";
import { Link } from "react-router-dom";
import "./Diferencas.scss";

const NUMERO_WHATSAPP = "555198144446";
const MENSAGEM_WHATSAPP = encodeURIComponent(
  "Oi, vim do site Hera Home e gostaria de solicitar um orçamento"
);

const opcoes = [
  {
    titulo: "Sob medida",
    texto:
      "Projeto exclusivo, com madeira, ferragens e acabamento escolhidos por você. O investimento depende de medidas, materiais e instalação.",
    botao: "Solicitar projeto e orçamento",
    variante: "primario",
    tipo: "whatsapp",
    href: `https://wa.me/${NUMERO_WHATSAPP}?text=${MENSAGEM_WHATSAPP}`,
  },
  {
    titulo: "Pronta entrega",
    texto:
      "Peças finalizadas disponíveis no showroom — mesas laterais, bancos, espelhos e objetos de decoração prontos para entrega.",
    botao: "Ver pronta entrega",
    variante: "secundario",
    tipo: "interno",
    href: "/loja",
  },
];

const Diferencas = () => {
  return (
    <section className="diferencas">
      {opcoes.map((opcao) => (
        <div className="diferencas__card" key={opcao.titulo}>
          <h3 className="diferencas__card-titulo">{opcao.titulo}</h3>
          <p className="diferencas__card-texto">{opcao.texto}</p>
          {opcao.tipo === "whatsapp" ? (
            <a
              href={opcao.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`diferencas__card-botao diferencas__card-botao--${opcao.variante}`}
            >
              {opcao.botao}
            </a>
          ) : (
            <Link
              to={opcao.href}
              className={`diferencas__card-botao diferencas__card-botao--${opcao.variante}`}
            >
              {opcao.botao}
            </Link>
          )}
        </div>
      ))}
    </section>
  );
};

export default Diferencas;
