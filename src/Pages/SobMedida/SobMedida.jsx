import React from "react";
import SobMedidaSection from "../../Components/SobMedida/SobMedida";
import Seo from "../../Components/Seo/Seo";
const SobMedida = () => {
  return (
    <div>
      <Seo
        title="Solicitar projeto sob medida"
        description="Peça um orçamento de móvel sob medida com a Hera Home: conte o projeto, a madeira e as medidas e receba uma proposta personalizada pelo WhatsApp."
        path="/sobmedida"
      />
      <SobMedidaSection />
    </div>
  );
};

export default SobMedida;
