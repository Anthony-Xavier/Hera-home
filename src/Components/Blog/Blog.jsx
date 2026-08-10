import React from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";
import imgMadeiras from "../../assets/img/HomeBlog.jpeg";
import imgQuarto from "../../assets/img/Quarto-menu.png";
import imgCozinha from "../../assets/img/Cozinha-menu.png";
import imgSalaDeJantar from "../../assets/img/SalaDeJantara-menu.png";
import imgBanheiro from "../../assets/img/Banheiro-menu.png";
import imgGenerico from "../../assets/img/Img-menu.png";

const posts = [
  {
    id: 1,
    categoria: "MADEIRAS",
    titulo: "Freijó: a madeira mais versátil para móveis sob medida",
    texto:
      "Por que o freijó é a escolha mais comum em projetos residenciais de alto padrão.",
    imagem: imgQuarto,
  },
  {
    id: 2,
    categoria: "COMPARATIVO",
    titulo: "Carvalho vs. Imbuia: qual combina com o seu ambiente",
    texto:
      "Diferenças de cor, veio e durabilidade entre duas das madeiras nobres mais usadas.",
    imagem: imgCozinha,
  },
  {
    id: 3,
    categoria: "SUSTENTABILIDADE",
    titulo: "Madeira de demolição: história e sustentabilidade",
    texto: "Como peças de demolição ganham nova vida em móveis exclusivos.",
    imagem: imgSalaDeJantar,
  },
  {
    id: 4,
    categoria: "MANUTENÇÃO",
    titulo: "Como cuidar de móveis de madeira maciça",
    texto: "Óleo, limpeza e cuidados para preservar o acabamento por décadas.",
    imagem: imgBanheiro,
  },
  {
    id: 5,
    categoria: "MATERIAIS",
    titulo: "Ferragens importadas: por que fazem diferença",
    texto:
      "O papel de corrediças e dobradiças na durabilidade de um móvel sob medida.",
    imagem: imgGenerico,
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="blog__cabecalho">
        <h3 className="blog__eyebrow">BLOG DAS MADEIRAS</h3>
        <h2 className="blog__titulo">Guias para conhecer e escolher madeira</h2>
        <p className="blog__subtitulo">
          Tudo o que você precisa saber antes de decidir a madeira do seu
          próximo móvel sob medida.
        </p>
      </div>

      <Link to="/blog/como-escolher-madeira" className="blog__destaque">
        <div className="blog__foto">
          <img
            className="blog__foto-img"
            src={imgMadeiras}
            alt="Tábuas de madeira nobre"
          />
        </div>

        <div className="blog__conteudo">
          <h3 className="blog__eyebrow">GUIA COMPLETO</h3>
          <h2 className="blog__conteudo-titulo">
            Como escolher a madeira certa para o seu móvel
          </h2>
          <p className="blog__conteudo-texto">
            Um guia prático sobre freijó, carvalho, imbuia, ipê e madeira de
            demolição — durabilidade, aparência, custo e o melhor uso para
            cada ambiente.
          </p>
          <span className="blog__conteudo-link">Ler artigo completo</span>
        </div>
      </Link>

      <div className="blog__posts">
        {posts.map((post) => (
          <article className="blog__post" key={post.id}>
            <div className="blog__post-imagem-wrapper">
              <img
                className="blog__post-imagem"
                src={post.imagem}
                alt={post.titulo}
              />
            </div>
            <h3 className="blog__post-categoria">{post.categoria}</h3>
            <h2 className="blog__post-titulo">{post.titulo}</h2>
            <p className="blog__post-texto">{post.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
