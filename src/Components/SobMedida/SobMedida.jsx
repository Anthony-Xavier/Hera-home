import React, { useState } from "react";
import "./SobMedida.scss";

const NUMERO_WHATSAPP = "555198144446";

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

const camposIniciais = {
  nome: "",
  telefone: "",
  email: "",
  tipoMovel: "Sala de estar",
  cidade: "",
  medidas: "",
  madeira: "Não sei / preciso de orientação",
  faixaInvestimento: "Até R$ 5.000",
  referencias: "",
};

const montarMensagem = (campos) => {
  const linhas = [
    "Olá! Gostaria de solicitar um projeto sob medida.",
    `Nome: ${campos.nome}`,
    `Telefone: ${campos.telefone}`,
    campos.email && `E-mail: ${campos.email}`,
    `Tipo de móvel: ${campos.tipoMovel}`,
    campos.cidade && `Cidade: ${campos.cidade}`,
    campos.medidas && `Medidas aproximadas: ${campos.medidas}`,
    `Madeira desejada: ${campos.madeira}`,
    `Faixa de investimento: ${campos.faixaInvestimento}`,
    campos.referencias && `Referências: ${campos.referencias}`,
  ].filter(Boolean);

  return encodeURIComponent(linhas.join("\n"));
};

const SobMedida = () => {
  const [campos, setCampos] = useState(camposIniciais);

  const atualizarCampo = (chave) => (e) =>
    setCampos((atual) => ({ ...atual, [chave]: e.target.value }));

  const enviarSolicitacao = (e) => {
    e.preventDefault();
    const mensagem = montarMensagem(campos);
    window.open(
      `https://wa.me/${NUMERO_WHATSAPP}?text=${mensagem}`,
      "_blank",
      "noreferrer",
    );
  };

  return (
    <section className="sobmedida">
      <h3 className="sobmedida__eyebrow">SOB MEDIDA</h3>

      <div className="sobmedida__grid">
        <div className="sobmedida__left">
          <div className="sobmedida__hero">
            <h1 className="sobmedida__titulo">Solicitar projeto e orçamento</h1>
            <p>
              Cada móvel sob medida é único — o investimento varia conforme
              tamanho, madeira, ferragens, acabamento, frete e instalação.
              Preencha o formulário com o máximo de detalhes possível; nossa
              equipe retorna com uma proposta em até 2 dias úteis.
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
            Prefere falar direto?{" "}
            <a
              href={`https://wa.me/${NUMERO_WHATSAPP}`}
              target="_blank"
              rel="noreferrer"
            >
              Fale no WhatsApp
            </a>{" "}
          </p>
        </div>

        <aside className="sobmedida__right">
          <form className="sobmedida__form" onSubmit={enviarSolicitacao}>
            <label className="sobmedida__field">
              <span>Nome</span>
              <input
                type="text"
                placeholder="Seu nome"
                value={campos.nome}
                onChange={atualizarCampo("nome")}
                required
              />
            </label>

            <label className="sobmedida__field">
              <span>Telefone / WhatsApp</span>
              <input
                type="tel"
                placeholder="(11) 99999-9999"
                value={campos.telefone}
                onChange={atualizarCampo("telefone")}
                required
              />
            </label>

            <label className="sobmedida__field">
              <span>E-mail</span>
              <input
                type="email"
                placeholder="voce@email.com"
                value={campos.email}
                onChange={atualizarCampo("email")}
              />
            </label>

            <label className="sobmedida__field">
              <span>Tipo de móvel</span>
              <select
                value={campos.tipoMovel}
                onChange={atualizarCampo("tipoMovel")}
              >
                <option>Sala de estar</option>
                <option>Cozinha</option>
                <option>Quarto</option>
                <option>Escritório</option>
              </select>
            </label>

            <label className="sobmedida__field">
              <span>Cidade</span>
              <input
                type="text"
                placeholder="Cidade / estado"
                value={campos.cidade}
                onChange={atualizarCampo("cidade")}
              />
            </label>

            <label className="sobmedida__field">
              <span>Medidas aproximadas</span>
              <input
                type="text"
                placeholder="Ex: 2,40m x 0,60m x 0,80m"
                value={campos.medidas}
                onChange={atualizarCampo("medidas")}
              />
            </label>

            <label className="sobmedida__field">
              <span>Madeira desejada</span>
              <select
                value={campos.madeira}
                onChange={atualizarCampo("madeira")}
              >
                <option>Não sei / preciso de orientação</option>
                <option>Cumaru</option>
                <option>Freijó</option>
                <option>Carvalho</option>
              </select>
            </label>

            <label className="sobmedida__field">
              <span>Faixa de investimento</span>
              <select
                value={campos.faixaInvestimento}
                onChange={atualizarCampo("faixaInvestimento")}
              >
                <option>Até R$ 5.000</option>
                <option>R$ 5.000 - R$ 10.000</option>
                <option>R$ 10.000 - R$ 15.000</option>
                <option>R$ 15.000 - R$ 20.000</option>
                <option>Acima de R$ 20.000</option>
              </select>
            </label>

            <label className="sobmedida__field">
              <span>Referências (descrição ou links de inspiração)</span>
              <textarea
                placeholder="Conte um pouco sobre o estilo que imagina, links do Pinterest, etc."
                rows="4"
                value={campos.referencias}
                onChange={atualizarCampo("referencias")}
              />
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
