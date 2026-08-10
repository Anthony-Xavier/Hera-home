import React, { useState } from "react";
import "./Contato.scss";

const NUMERO_WHATSAPP = "555198144446";

const camposIniciais = {
  nome: "",
  email: "",
  mensagem: "",
};

const montarMensagem = (campos) => {
  const linhas = [
    "Olá! Vim pelo site e gostaria de falar com vocês.",
    `Nome: ${campos.nome}`,
    campos.email && `E-mail: ${campos.email}`,
    `Mensagem: ${campos.mensagem}`,
  ].filter(Boolean);

  return encodeURIComponent(linhas.join("\n"));
};

const Contato = () => {
  const [campos, setCampos] = useState(camposIniciais);

  const atualizarCampo = (chave) => (e) =>
    setCampos((atual) => ({ ...atual, [chave]: e.target.value }));

  const enviarMensagem = (e) => {
    e.preventDefault();
    const mensagem = montarMensagem(campos);
    window.open(
      `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`,
      "_blank",
      "noreferrer",
    );
  };

  return (
    <section className="contato">
      <div className="contato__cabecalho">
        <h3 className="contato__eyebrow">CONTATO</h3>
        <h2 className="contato__titulo">Fale com a gente</h2>
        <p className="contato__subtitulo">
          Dúvidas, orçamentos ou parcerias — escolha o canal que preferir ou
          mande uma mensagem pelo formulário.
        </p>
      </div>

      <div className="contato__grid">
        <div className="contato__info">
          <div className="contato__info-item">
            <h3 className="contato__info-titulo">Endereço</h3>
            <p className="contato__info-texto">Garopaba, SC</p>
          </div>

          <div className="contato__info-item">
            <h3 className="contato__info-titulo">WhatsApp</h3>
            <a
              className="contato__info-link"
              href={`https://wa.me/${NUMERO_WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              (51) 9814-4446
            </a>
          </div>

          <div className="contato__info-item">
            <h3 className="contato__info-titulo">E-mail</h3>
            <a
              className="contato__info-link"
              href="mailto:contato@herahome.com.br"
            >
              contato@herahome.com.br
            </a>
          </div>
        </div>

        <form className="contato__form" onSubmit={enviarMensagem}>
          <label className="contato__campo">
            <span>Nome</span>
            <input
              type="text"
              placeholder="Seu nome"
              value={campos.nome}
              onChange={atualizarCampo("nome")}
              required
            />
          </label>

          <label className="contato__campo">
            <span>E-mail</span>
            <input
              type="email"
              placeholder="voce@email.com"
              value={campos.email}
              onChange={atualizarCampo("email")}
            />
          </label>

          <label className="contato__campo">
            <span>Mensagem</span>
            <textarea
              placeholder="Como podemos ajudar?"
              rows="5"
              value={campos.mensagem}
              onChange={atualizarCampo("mensagem")}
              required
            />
          </label>

          <button className="contato__submit" type="submit">
            ENVIAR PELO WHATSAPP
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contato;
