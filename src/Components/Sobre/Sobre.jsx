import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Sobre.scss";
import imgHero from "../../assets/img/Quarto-menu.png";
import imgSelecao from "../../assets/img/Cozinha-menu.png";
import imgCorte from "../../assets/img/SalaDeJantara-menu.png";
import imgAcabamento from "../../assets/img/Banheiro-menu.png";

gsap.registerPlugin(ScrollTrigger);

const IconeFerragens = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.7 6.3a1 1 0 0 0 1.4 0l1.6-1.6a4 4 0 0 1 1.9 5.5l-6.2 6.2a2 2 0 0 1-2.8 0l-1.4-1.4a2 2 0 0 1 0-2.8l6.2-6.2a4 4 0 0 1 5.5 1.9l-1.6 1.6a1 1 0 0 0 0 1.4" />
    <path d="m5 19-1.5 1.5M8 16l-3 3" />
  </svg>
);

const IconeAcabamento = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
    <circle cx="12" cy="12" r="3.2" />
  </svg>
);

const IconeProducao = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 5.5 18 2l3 1-2 4-3.5 3.5" />
    <path d="m13 7-8.5 8.5a2 2 0 0 0 0 2.8l1.2 1.2a2 2 0 0 0 2.8 0L17 11" />
  </svg>
);

const IconePersonalizacao = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21v-3.5L14.5 6a1.5 1.5 0 0 1 2 0l1 1a1.5 1.5 0 0 1 0 2L6 20.5H3Z" />
    <path d="m13 7 4 4" />
  </svg>
);

const diferenciais = [
  {
    titulo: "Ferragens importadas",
    texto:
      "Sistemas de corrediças e dobradiças de alta durabilidade e silêncio de uso.",
    Icone: IconeFerragens,
  },
  {
    titulo: "Acabamento artesanal",
    texto:
      "Lixamento e acabamento manual que realçam o veio natural da madeira.",
    Icone: IconeAcabamento,
  },
  {
    titulo: "Produção artesanal",
    texto: "Marcenaria própria, sem terceirização de etapas.",
    Icone: IconeProducao,
  },
  {
    titulo: "Personalização total",
    texto: "Medidas, madeira, cor e ferragens definidas junto com o cliente.",
    Icone: IconePersonalizacao,
  },
];

const processo = [
  {
    titulo: "Seleção da madeira",
    texto: "Escolha de toras e tábuas por veio, cor e estabilidade.",
    imagem: imgSelecao,
  },
  {
    titulo: "Corte e montagem",
    texto: "Corte de precisão e montagem estrutural da peça.",
    imagem: imgCorte,
  },
  {
    titulo: "Acabamento final",
    texto: "Lixamento, óleo ou verniz e instalação das ferragens.",
    imagem: imgAcabamento,
  },
];

const Sobre = () => {
  const heroTextoRef = useRef(null);
  const heroFotoRef = useRef(null);
  const diferenciaisRef = useRef([]);
  const processoCabecalhoRef = useRef(null);
  const etapasRef = useRef([]);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const contexto = gsap.context(() => {
      gsap.fromTo(
        heroTextoRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      );

      gsap.fromTo(
        heroFotoRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, delay: 0.15, ease: "power2.out" },
      );

      gsap.fromTo(
        diferenciaisRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: diferenciaisRef.current[0],
            start: "top 88%",
          },
        },
      );

      gsap.fromTo(
        processoCabecalhoRef.current,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processoCabecalhoRef.current,
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        etapasRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: etapasRef.current[0],
            start: "top 88%",
          },
        },
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
          },
        },
      );
    });

    return () => contexto.revert();
  }, []);

  return (
    <section className="sobre">
      <div className="sobre__hero">
        <div className="sobre__hero-texto" ref={heroTextoRef}>
          <h3 className="sobre__eyebrow">SOBRE A HERA HOME</h3>
          <h1 className="sobre__titulo">
            Marcenaria como ofício, não como produção em série
          </h1>
          <p className="sobre__paragrafo">
            A Hera Home nasceu da vontade de fazer móveis que durem gerações —
            peças pensadas para o espaço de cada cliente, produzidas à mão, com
            madeira selecionada e ferragens de alta durabilidade. Nada sai da
            nossa marcenaria em série: cada projeto é único, do desenho ao
            acabamento final.
          </p>
        </div>

        <div className="sobre__hero-foto" ref={heroFotoRef}>
          <img
            className="sobre__hero-foto-img"
            src={imgHero}
            alt="Quarto com móvel sob medida Hera Home"
          />
        </div>
      </div>

      <div className="sobre__diferenciais">
        {diferenciais.map((item, index) => (
          <div
            className="sobre__diferencial"
            key={item.titulo}
            ref={(el) => (diferenciaisRef.current[index] = el)}
          >
            <h3 className="sobre__diferencial-titulo">{item.titulo}</h3>
            <p className="sobre__diferencial-texto">{item.texto}</p>
          </div>
        ))}
      </div>

      <div className="sobre__processo">
        <div className="sobre__processo-cabecalho" ref={processoCabecalhoRef}>
          <h3 className="sobre__eyebrow">O PROCESSO</h3>
          <h2 className="sobre__processo-titulo">Da tora à peça finalizada</h2>
        </div>

        <div className="sobre__processo-grid">
          {processo.map((etapa, index) => (
            <div
              className="sobre__etapa"
              key={etapa.titulo}
              ref={(el) => (etapasRef.current[index] = el)}
            >
              <div className="sobre__etapa-imagem-wrapper">
                <img
                  className="sobre__etapa-imagem"
                  src={etapa.imagem}
                  alt={etapa.titulo}
                />
              </div>
              <h3 className="sobre__etapa-titulo">{etapa.titulo}</h3>
              <p className="sobre__etapa-texto">{etapa.texto}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="sobre__cta" ref={ctaRef}>
        <p className="sobre__cta-texto">Vamos conversar sobre o seu projeto?</p>
        <Link to="/sobmedida" className="sobre__cta-botao">
          SOLICITAR PROJETO E ORÇAMENTO
        </Link>
      </div>
    </section>
  );
};

export default Sobre;
