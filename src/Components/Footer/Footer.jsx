import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const navegacao = [
  { label: "Portfólio", path: "/portfolio" },
  { label: "Pronta entrega", path: "/loja" },
  { label: "Solicitar orçamento", path: "/sobMedida" },
  { label: "Blog das madeiras", path: "/blog" },
];

const categorias = [
  { label: "Mesas laterais", path: "/loja" },
  { label: "Bancos", path: "/loja" },
  { label: "Espelhos", path: "/loja" },
  { label: "Decoração", path: "/loja" },
];

const Footer = () => {
  const ano = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__conteudo">
        <div className="footer__coluna footer__coluna--marca">
          <h2 className="footer__logo">Hera Home</h2>
          <p className="footer__texto">
            Marcenaria de alto padrão. Móveis sob medida com madeira
            selecionada, ferragens importadas e acabamento artesanal.
          </p>
        </div>

        <nav className="footer__coluna">
          <h3 className="footer__titulo">Navegação</h3>
          <ul className="footer__lista">
            {navegacao.map(({ label, path }) => (
              <li key={label}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__coluna">
          <h3 className="footer__titulo">Categorias</h3>
          <ul className="footer__lista">
            {categorias.map(({ label, path }) => (
              <li key={label}>
                <Link to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__coluna">
          <h3 className="footer__titulo">Contato</h3>
          <ul className="footer__lista">
            <li>Garopaba, SC</li>
            <li>
              <a href="https://wa.me/555198144446">WhatsApp: (51) 9814-4446</a>
            </li>
            <li>
              <a href="mailto:contato@herahome.com.br">
                contato@herahome.com.br
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__base">
        <p>© {ano} Hera Home Marcenaria. Todos os direitos reservados.</p>
        <p>Design e produção sob medida.</p>
      </div>
    </footer>
  );
};

export default Footer;
