import React from "react";
import ContatoSection from "../../Components/Contato/Contato";
import Seo from "../../Components/Seo/Seo";

const Contato = () => {
  return (
    <>
      <Seo
        title="Contato"
        description="Fale com a Hera Home em Garopaba, SC. Tire dúvidas, peça orçamentos ou fale pelo WhatsApp, e-mail ou formulário."
        path="/contato"
      />
      <ContatoSection />
    </>
  );
};

export default Contato;
