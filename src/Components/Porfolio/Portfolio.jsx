import "./Portfolio.scss";

import React, { useState } from "react";

import imgGenerico from "../../assets/img/Img-menu.png";
import imgHomeOffice from "../../assets/img/HomeBlog.jpeg";
import imgSala1 from "../../assets/img/Sala.jpeg";
import imgSala2 from "../../assets/img/Sala2.jpeg";
import imgSala3 from "../../assets/img/Sala3.jpeg";
import imgQuarto1 from "../../assets/img/Quarto.jpeg";
import imgQuarto2 from "../../assets/img/Quarto2.jpeg";
import imgCozinha1 from "../../assets/img/Cozinha.jpeg";
import imgCozinha2 from "../../assets/img/Cozinha2.jpeg";
import imgCozinha3 from "../../assets/img/Cozinha3.jpeg";
import imgCozinha4 from "../../assets/img/Cozinha4.jpeg";
import imgBanheiro from "../../assets/img/Banheiro.jpeg";

const filtros = [
  { chave: "todos", rotulo: "Todos" },
  { chave: "salas", rotulo: "Salas" },
  { chave: "quartos", rotulo: "Quartos" },
  { chave: "home-office", rotulo: "Home Office" },
  { chave: "cozinhas", rotulo: "Cozinhas" },
  { chave: "banheiros", rotulo: "Banheiros" },
];

const projetos = [
  {
    id: 1,
    categoria: "salas",
    ambiente: "Sala de Estar",
    imagem: imgSala1,
  },
  {
    id: 2,
    categoria: "salas",
    ambiente: "Sala de Estar",
    imagem: imgSala2,
  },
  {
    id: 3,
    categoria: "salas",
    ambiente: "Sala de Jantar",

    imagem: imgSala3,
  },
  {
    id: 4,
    categoria: "home-office",
    ambiente: "Home Office",

    imagem: imgQuarto1,
  },
  {
    id: 5,
    categoria: "quartos",
    ambiente: "Quarto",

    imagem: imgQuarto2,
  },
  {
    id: 10,
    categoria: "cozinhas",
    ambiente: "Cozinha",

    imagem: imgCozinha1,
  },
  {
    id: 11,
    categoria: "cozinhas",
    ambiente: "Cozinha",

    imagem: imgCozinha2,
  },
  {
    id: 12,
    categoria: "cozinhas",
    ambiente: "Cozinha",

    imagem: imgCozinha3,
  },
  {
    id: 13,
    categoria: "cozinhas",
    ambiente: "Cozinha",

    imagem: imgCozinha4,
  },
  {
    id: 14,
    categoria: "banheiros",
    ambiente: "Banheiro",

    imagem: imgBanheiro,
  },
];

const Portfolio = () => {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");

  const projetosFiltrados =
    filtroAtivo === "todos"
      ? projetos
      : projetos.filter((projeto) => projeto.categoria === filtroAtivo);

  return (
    <section className="portfolio">
      <div className="portfolio__cabecalho">
        <h3 className="portfolio__titulos portfolio__titulos--h3">PORTFÓLIO</h3>
        <h1 className="portfolio__titulos portfolio__titulos--h2">
          Projetos sob medida por ambiente
        </h1>
        <p className="portfolio__subtitulo">
          Uma seleção de projetos executados pela Hera Home — da concepção ao
          acabamento final.
        </p>
      </div>

      <div className="portfolio__filtros">
        {filtros.map((filtro) => (
          <button
            key={filtro.chave}
            type="button"
            className={`portfolio__filtro-botao${
              filtroAtivo === filtro.chave
                ? " portfolio__filtro-botao--ativo"
                : ""
            }`}
            onClick={() => setFiltroAtivo(filtro.chave)}
          >
            {filtro.rotulo}
          </button>
        ))}
      </div>

      <div className="portfolio__grid">
        {projetosFiltrados.map((projeto) => (
          <div className="portfolio__card" key={projeto.id}>
            <div className="portfolio__card-imagem-wrapper">
              <img
                className="portfolio__card-imagem"
                src={projeto.imagem}
                alt={`Projeto de marcenaria sob medida — ${projeto.ambiente}`}
              />
            </div>
            <span className="portfolio__card-ambiente">
              {projeto.ambiente.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
