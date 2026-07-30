import React from "react";
import "./Principal.scss";
import imgMenu from "../../assets/img/Img-menu.png";

const Principal = () => {
  return (
    <div className="principal">
      <div className="principal__imagem-wrapper">
        <img className="principal__imagem" src={imgMenu} alt="Principal" />

        <div className="principal__conteudo">
          <h2 className="principal__titulo">
            Projetando lares com <span>alma</span> e propósito. Móveis que
            atravessam gerações.
          </h2>

          <p className="principal__texto">
            Design atemporal em madeira de alta qualidade, feito sob medida para
            o seu espaço. Marcenaria artesanal inspirada na elegância clássica e
            executada com a precisão do mobiliário moderno.
          </p>
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
