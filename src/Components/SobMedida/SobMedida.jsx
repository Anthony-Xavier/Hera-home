import React from "react";
import "./SobMedida.scss";

const itens = [
  {
    texto:
      "Você descreve o projeto: tipo de móvel, medidas, madeira e faixa de investimento.",
  },
  {
    texto: "Nossa equipe analisa e retorna com uma proposta e prazo estimado.",
  },
  {
    texto:
      "Ajustamos detalhes de design, madeira e ferragens até aprovação final.",
  },
  {
    texto: "Produção artesanal, com acompanhamento até a entrega e instalação.",
  },
];

const SobMedida = () => {
  return (
    <section className="sobmedida">
      <h2 className="sobmedida__visually-hidden">Sob Medida</h2>

      <div className="sobmedida__grid">
        <div className="sobmedida__left">
          <div className="sobmedida__hero">
            <span className="sobmedida__eyebrow">Sob medida</span>
            <h1>Solicitar projeto e orçamento</h1>
            <p>
              Cada móvel sob medida é único — o investimento varia conforme tamanho,
              madeira, ferragens, acabamento, frete e instalação. Preencha o
              formulário com o máximo de detalhes possível; nossa equipe retorna com
              uma proposta em até 2 dias úteis.
            </p>
          </div>

          <ol className="sobmedida__steps">
            {itens.map((item, index) => (
              <li className="sobmedida__step" key={index}>
                <span className="sobmedida__step-number">{index + 1}</span>
                <p className="sobmedida__step-text">{item.texto}</p>
              </li>
            ))}
          </ol>

          <p className="sobmedida__contact">
            Prefere falar direto? <a href="#">Fale no WhatsApp</a>
          </p>
        </div>

        <aside className="sobmedida__right">
          <form className="sobmedida__form">
            <label className="sobmedida__field">
              <span>Nome</span>
              <input type="text" placeholder="Seu nome" />
            </label>

            <label className="sobmedida__field">
              <span>Telefone / WhatsApp</span>
              <input type="tel" placeholder="(11) 99999-9999" />
            </label>

            <label className="sobmedida__field">
              <span>E-mail</span>
              <input type="email" placeholder="voce@email.com" />
            </label>

            <label className="sobmedida__field">
              <span>Tipo de móvel</span>
              <select>
                <option>Sala de estar</option>
                <option>Cozinha</option>
                <option>Quarto</option>
                <option>Escritório</option>
              </select>
            </label>

            <label className="sobmedida__field">
              <span>Cidade</span>
              <input type="text" placeholder="Cidade / estado" />
            </label>

            <label className="sobmedida__field">
              <span>Medidas aproximadas</span>
              <input type="text" placeholder="Ex: 2,40m x 0,60m x 0,80m" />
            </label>

            <label className="sobmedida__field">
              <span>Madeira desejada</span>
              <select>
                <option>Não sei / preciso de orientação</option>
                <option>Cumaru</option>
                <option>Freijó</option>
                <option>Carvalho</option>
              </select>
            </label>

            <label className="sobmedida__field">
              <span>Faixa de investimento</span>
              <select>
                <option>Até R$ 10.000</option>
                <option>R$ 10.000 +</option>
                <option>R$ 20.000 +</option>
              </select>
            </label>

            <label className="sobmedida__field">
              <span>Referências (descrição ou links de inspiração)</span>
              <textarea placeholder="Conte um pouco sobre o estilo que imagina, links do Pinterest, etc." rows="4" />
            </label>

            <label className="sobmedida__field sobmedida__field--file">
              <span>Fotos de referência (opcional)</span>
              <input type="file" />
            </label>

            <button className="sobmedida__submit" type="submit">
              ENVIAR SOLICITAÇÃO
            </button>
          </form>
        </aside>
      </div>
    </section>
  );
};

export default SobMedida;
