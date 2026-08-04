import "./Portfolio.scss";

import React, { useEffect, useRef, useState } from "react";

import imgCozinha from "../../assets/img/Cozinha-menu.png";
import imgQuarto from "../../assets/img/Quarto-menu.png";
import imgSalaDeJantar from "../../assets/img/SalaDeJantara-menu.png";
import imgGenerico from "../../assets/img/Img-menu.png";
import imgHomeOffice from "../../assets/img/HomeBlog.jpeg";

const filtros = [
  { chave: "todos", rotulo: "Todos" },
  { chave: "salas", rotulo: "Salas" },
  { chave: "quartos", rotulo: "Quartos" },
  { chave: "home-office", rotulo: "Home Office" },
  { chave: "cozinhas", rotulo: "Cozinhas" },
];

const projetos = [
  {
    id: 1,
    categoria: "salas",
    ambiente: "Sala de Estar",
    titulo: "Painel de TV suspenso",
    material: "Freijó",
    imagem: imgSalaDeJantar,
  },
  {
    id: 2,
    categoria: "salas",
    ambiente: "Sala de Estar",
    titulo: "Rack baixo sob medida",
    material: "Carvalho",
    imagem: imgGenerico,
  },
  {
    id: 3,
    categoria: "salas",
    ambiente: "Sala de Jantar",
    titulo: "Buffet com portas ripadas",
    material: "Imbuia",
    imagem: imgSalaDeJantar,
  },
  {
    id: 4,
    categoria: "quartos",
    ambiente: "Quarto",
    titulo: "Guarda-roupa de canto",
    material: "Imbuia",
    imagem: imgQuarto,
  },
  {
    id: 5,
    categoria: "quartos",
    ambiente: "Quarto",
    titulo: "Cabeceira estofada",
    material: "Freijó",
    imagem: imgQuarto,
  },
  {
    id: 6,
    categoria: "quartos",
    ambiente: "Quarto",
    titulo: "Criado-mudo suspenso",
    material: "Carvalho",
    imagem: imgQuarto,
  },
  {
    id: 7,
    categoria: "home-office",
    ambiente: "Home Office",
    titulo: "Estante biblioteca",
    material: "Carvalho",
    imagem: imgHomeOffice,
  },
  {
    id: 8,
    categoria: "home-office",
    ambiente: "Home Office",
    titulo: "Mesa de trabalho sob medida",
    material: "Freijó",
    imagem: imgGenerico,
  },
  {
    id: 9,
    categoria: "home-office",
    ambiente: "Home Office",
    titulo: "Painel organizador",
    material: "Imbuia",
    imagem: imgHomeOffice,
  },
  {
    id: 10,
    categoria: "cozinhas",
    ambiente: "Cozinha",
    titulo: "Marcenaria de cozinha integrada",
    material: "Freijó",
    imagem: imgCozinha,
  },
  {
    id: 11,
    categoria: "cozinhas",
    ambiente: "Cozinha",
    titulo: "Ilha gourmet sob medida",
    material: "Carvalho",
    imagem: imgCozinha,
  },
  {
    id: 12,
    categoria: "cozinhas",
    ambiente: "Cozinha",
    titulo: "Armário aéreo com iluminação",
    material: "Imbuia",
    imagem: imgCozinha,
  },
];

const Portfolio = () => {
  const [filtroAtivo, setFiltroAtivo] = useState("todos");
  const gridRef = useRef(null);
  const arrastoRef = useRef({ ativo: false, inicioX: 0, scrollInicial: 0, moveu: false });

  const projetosFiltrados =
    filtroAtivo === "todos"
      ? projetos
      : projetos.filter((projeto) => projeto.categoria === filtroAtivo);

  useEffect(() => {
    if (gridRef.current) {
      gridRef.current.scrollLeft = 0;
    }
  }, [filtroAtivo]);

  const handlePointerDown = (e) => {
    const grid = gridRef.current;
    if (!grid) return;

    arrastoRef.current = {
      ativo: true,
      inicioX: e.pageX,
      scrollInicial: grid.scrollLeft,
      moveu: false,
    };
    grid.setPointerCapture(e.pointerId);
    grid.classList.add("portfolio__grid--arrastando");
  };

  const handlePointerMove = (e) => {
    const grid = gridRef.current;
    const arrasto = arrastoRef.current;
    if (!grid || !arrasto.ativo) return;

    const delta = e.pageX - arrasto.inicioX;
    if (Math.abs(delta) > 5) arrasto.moveu = true;
    grid.scrollLeft = arrasto.scrollInicial - delta;
  };

  const handlePointerUp = (e) => {
    const grid = gridRef.current;
    arrastoRef.current.ativo = false;
    grid?.classList.remove("portfolio__grid--arrastando");
    try {
      grid?.releasePointerCapture(e.pointerId);
    } catch {
      // ponteiro já liberado
    }
  };

  return (
    <section className="portfolio">
      <div className="portfolio__cabecalho">
        <h3 className="portfolio__titulos portfolio__titulos--h3">
          PORTFÓLIO
        </h3>
        <h2 className="portfolio__titulos portfolio__titulos--h2">
          Projetos sob medida por ambiente
        </h2>
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

      <div
        className="portfolio__grid"
        ref={gridRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {projetosFiltrados.map((projeto) => (
          <div className="portfolio__card" key={projeto.id}>
            <div className="portfolio__card-imagem-wrapper">
              <img
                className="portfolio__card-imagem"
                src={projeto.imagem}
                alt={projeto.titulo}
                draggable={false}
              />
            </div>
            <span className="portfolio__card-ambiente">
              {projeto.ambiente.toUpperCase()}
            </span>
            <h4 className="portfolio__card-titulo">{projeto.titulo}</h4>
            <span className="portfolio__card-material">
              {projeto.material}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
