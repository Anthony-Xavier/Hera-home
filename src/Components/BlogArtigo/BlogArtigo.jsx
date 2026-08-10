import React from "react";
import { Link } from "react-router-dom";
import "./BlogArtigo.scss";
import imgMadeiras from "../../assets/img/HomeBlog.jpeg";

const secoes = [
  {
    titulo: "Freijó",
    texto:
      "Madeira brasileira de tom acastanhado e veios discretos, o freijó é leve, estável e se adapta bem a ambientes contemporâneos e clássicos. É a escolha mais versátil do nosso catálogo — ideal para painéis, estantes e móveis de grande superfície.",
  },
  {
    titulo: "Carvalho",
    texto:
      "Madeira clara, com veios marcados e alta resistência mecânica. Combina com ambientes que buscam luminosidade e um acabamento mais europeu. É uma excelente opção para mesas e peças que recebem uso intenso.",
  },
  {
    titulo: "Imbuia",
    texto:
      "Tom mais escuro e aveludado, com veios ondulados característicos. Traz sofisticação a quartos e salas de estar, e envelhece bem com o tempo, ganhando profundidade de cor.",
  },
  {
    titulo: "Ipê",
    texto:
      "Uma das madeiras mais densas e duráveis do mercado brasileiro. Ideal para peças estruturais e móveis que exigem alta resistência, como bancos e mesas externas cobertas.",
  },
  {
    titulo: "Madeira de demolição",
    texto:
      "Peças reaproveitadas de construções antigas, com marcas e história próprias. Cada tábua é única — perfeita para quem busca uma peça exclusiva com apelo sustentável.",
  },
  {
    titulo: "Como decidir",
    texto:
      "Considere três fatores: o uso do móvel (estrutural ou decorativo), a paleta do ambiente (tons claros ou escuros) e o nível de manutenção desejado. Na dúvida, nossa equipe ajuda a decidir durante o processo de orçamento — é só nos contar o que você imagina.",
  },
];

const BlogArtigo = () => {
  return (
    <article className="blog-artigo">
      <div className="blog-artigo__conteudo">
        <h3 className="blog-artigo__eyebrow">Guia completo · Madeiras</h3>
        <h1 className="blog-artigo__titulo">
          Como escolher a madeira certa para o seu móvel sob medida
        </h1>

        <div className="blog-artigo__foto">
          <img
            className="blog-artigo__foto-img"
            src={imgMadeiras}
            alt="Várias amostras de madeira nobre"
          />
        </div>

        <p className="blog-artigo__intro">
          Escolher a madeira certa é uma das decisões mais importantes em um
          projeto sob medida — ela define aparência, durabilidade, peso e até
          o custo final da peça. Neste guia, explicamos as espécies mais
          usadas pela Hera Home e quando cada uma faz mais sentido.
        </p>

        {secoes.map((secao) => (
          <section className="blog-artigo__secao" key={secao.titulo}>
            <h2 className="blog-artigo__secao-titulo">{secao.titulo}</h2>
            <p className="blog-artigo__secao-texto">{secao.texto}</p>
          </section>
        ))}

        <div className="blog-artigo__cta">
          <p className="blog-artigo__cta-texto">
            Pronto para escolher a madeira do seu projeto?
          </p>
          <Link to="/sobmedida" className="blog-artigo__cta-botao">
            SOLICITAR PROJETO E ORÇAMENTO
          </Link>
        </div>

        <Link to="/blog" className="blog-artigo__voltar">
          Voltar ao blog
        </Link>
      </div>
    </article>
  );
};

export default BlogArtigo;
