import React from "react";
import LojaSection from "../../Components/Loja/Loja";
import Seo from "../../Components/Seo/Seo";

const Loja = () => {
  return (
    <>
      <Seo
        title="Loja — peças de pronta entrega"
        description="Móveis de madeira maciça prontos para entrega imediata no showroom da Hera Home em Garopaba, SC. Mesas, bancos, criados-mudos, espelhos e mais."
        path="/loja"
      />
      <LojaSection />
    </>
  );
};

export default Loja;
