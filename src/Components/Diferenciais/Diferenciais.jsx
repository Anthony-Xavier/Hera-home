import React from "react";
import "./Diferenciais.scss";

const IconeMovel = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 13a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3H4z" />
    <path d="M5 16v3M19 16v3M4 11V8a2 2 0 0 1 2-2h1v5M18 11V6h1a2 2 0 0 1 2 2v3" />
  </svg>
);

const IconeProjeto = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="1" />
    <path d="M3 9h18M9 9v11" />
  </svg>
);

const IconeArtesanal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 3.5 20.5 9.5 9.5 20.5 3.5 14.5z" />
    <path d="M14.5 3.5 3.5 14.5M11 7l3 3" />
  </svg>
);

const itens = [
  { titulo: "Moveis de madeira nobre sob medida", icone: <IconeMovel /> },
  { titulo: "Projeto de design de interiores", icone: <IconeProjeto /> },
  { titulo: "Peças artesanais exclusivas em madeira", icone: <IconeArtesanal /> },
];

const Diferenciais = () => {
  return (
    <div className="diferenciais">
      <div className="diferenciais__titulos">
        <h3 className="diferenciais__titulos diferenciais__titulos--h3">
          DIFERENCIAIS
        </h3>
        <div className="diferenciais__divisor">
          <span className="diferenciais__divisor-linha" />
          <span className="diferenciais__divisor-losango" />
          <span className="diferenciais__divisor-linha" />
        </div>
        <h2 className="diferenciais__titulos diferenciais__titulos--h2">
          O que torna cada peça exclusiva
        </h2>
      </div>
      <div className="diferenciais__lista">
        {itens.map((item) => (
          <div className="diferenciais__item" key={item.titulo}>
            <span className="diferenciais__item-circulo">{item.icone}</span>
            <p className="diferenciais__item-titulo">{item.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diferenciais;
