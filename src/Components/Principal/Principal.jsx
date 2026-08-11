import React from "react";
import "./Principal.scss";
import imgMenu from "../../assets/img/Img-menu.png";

const Principal = () => {
  return (
    <div className="principal">
      <div className="principal__imagem-wrapper">
        <img
          className="principal__imagem"
          src={imgMenu}
          alt="Móvel de madeira maciça sob medida feito pela Hera Home"
        />

        <div className="principal__conteudo">
          <h1 className="principal__titulo">
            Madeira. <span>Design</span>. História.
            <br />
            Móveis feitos para atravessar gerações.
          </h1>
        </div>
      </div>
      <div className="principal__botoes">
        <button className="principal__botao principal__botao--primario">
          Solicitar projeto sob medida
        </button>
        <button className="principal__botao principal__botao--secundario">
          Ver peças a pronta entrega
        </button>
      </div>
    </div>
  );
};

export default Principal;
