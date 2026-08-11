import React from "react";
import SobreSection from "../../Components/Sobre/Sobre";
import Seo from "../../Components/Seo/Seo";

const Sobre = () => {
  return (
    <>
      <Seo
        title="Sobre a Hera Home"
        description="Marcenaria como ofício, não como produção em série. Conheça a história, o processo artesanal e os valores por trás dos móveis sob medida da Hera Home."
        path="/sobre"
      />
      <SobreSection />
    </>
  );
};

export default Sobre;
