import "./HomeBlog.scss";

import React from "react";
import { Link } from "react-router-dom";
import imgHomeBlog from "../../assets/img/HomeBlog.jpeg";

const HomeBlog = () => {
  return (
    <section className="home-blog">
      <div className="home-blog__foto">
        <img
          className="home-blog__foto-img"
          src={imgHomeBlog}
          alt="Madeiras nobres"
        />
      </div>

      <div className="home-blog__conteudo">
        <h3 className="home-blog__titulos home-blog__titulos--h3">
          Madeiras nobres
        </h3>
        <h2 className="home-blog__titulos home-blog__titulos--h2">
          Cada madeira conta uma história
        </h2>
        <p className="home-blog__texto">
          Trabalhamos com espécies selecionadas por durabilidade, textura e
          veios únicos, cada tábua é escolhida a olho antes de virar peça. No
          nosso blog explicamos as principais madeiras e como escolher a certa
          para o seu projeto.
        </p>
        <Link to="/blog" className="home-blog__link">
          CONHECER AS MADEIRAS
        </Link>
      </div>
    </section>
  );
};

export default HomeBlog;
