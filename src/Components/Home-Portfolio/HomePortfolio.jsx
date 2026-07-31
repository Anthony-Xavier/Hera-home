import "./HomePortfolio.scss";

import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgCozinha from "../../assets/img/Cozinha-menu.png";
import imgQuarto from "../../assets/img/Quarto-menu.png";
import imgSalaDeJantara from "../../assets/img/SalaDeJantara-menu.png";

gsap.registerPlugin(ScrollTrigger);

const ambientes = [
  {
    titulo: "Dormitórios",
    descricao: "Descanso e funcionalidade em equilíbrio com a rotina.",
    imagem: imgQuarto,
  },
  {
    titulo: "Cozinha",
    descricao:
      "A cozinha é o coração da casa, onde o sabor, o afeto e o prazer de compartilhar se encontram todos os dias.",
    imagem: imgCozinha,
  },
  {
    titulo: "Sala de Jantar",
    descricao:
      "O espaço para refeições é onde a família se reúne para compartilhar momentos especiais e criar memórias duradouras.",
    imagem: imgSalaDeJantara,
  },
];

const HomePortfolio = () => {
  const wrappersRef = useRef([]);
  const cardsRef = useRef([]);
  const imagensRef = useRef([]);
  const conteudosRef = useRef([]);

  useLayoutEffect(() => {
    const contexto = gsap.context(() => {
      wrappersRef.current.forEach((wrapper, index) => {
        const card = cardsRef.current[index];
        const imagem = imagensRef.current[index];
        const conteudo = conteudosRef.current[index];

        // O card sai fantasmagórico (opacidade caindo) enquanto o próximo desliza por cima
        if (index < wrappersRef.current.length - 1) {
          gsap.fromTo(
            card,
            { opacity: 1 },
            {
              opacity: 0.15,
              ease: "none",
              scrollTrigger: {
                trigger: wrapper,
                start: "center top",
                end: "bottom top",
                scrub: true,
              },
            },
          );
        }

        // Parallax suave da imagem enquanto o card fica "grudado" na tela
        gsap.fromTo(
          imagem,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );

        // Entrada do texto quando o card assume o topo da pilha
        gsap.fromTo(
          conteudo,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "top 75%",
              end: "top 25%",
              scrub: true,
            },
          },
        );
      });
    });

    return () => contexto.revert();
  }, []);

  return (
    <section className="home-portfolio">
      <div className="home-portfolio__header">
        <div className="home-portfolio__titulos">
          <h3 className="home-portfolio__titulos home-portfolio__titulos--h3">
            PORTFÓLIO
          </h3>
          <h2 className="home-portfolio__titulos home-portfolio__titulos--h2">
            Projetos por ambiente
          </h2>
        </div>

        <Link to="/portfolio" className="home-portfolio__ver-tudo">
          Ver tudo
        </Link>
      </div>

      <div className="home-portfolio__stack">
        {ambientes.map((ambiente, index) => (
          <div
            className="home-portfolio__card-wrapper"
            key={ambiente.titulo}
            ref={(el) => (wrappersRef.current[index] = el)}
          >
            <div
              className="home-portfolio__card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <img
                className="home-portfolio__card-imagem"
                src={ambiente.imagem}
                alt={ambiente.titulo}
                ref={(el) => (imagensRef.current[index] = el)}
              />
              <div className="home-portfolio__card-overlay" />

              <div
                className="home-portfolio__card-conteudo"
                ref={(el) => (conteudosRef.current[index] = el)}
              >
                <h2 className="home-portfolio__card-titulo">
                  {ambiente.titulo}
                </h2>
                <p className="home-portfolio__card-descricao">
                  {ambiente.descricao}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePortfolio;
