import React from "react";
import PortfolioSection from "../../Components/Porfolio/Portfolio";
import Seo from "../../Components/Seo/Seo";

const Portfolio = () => {
  return (
    <>
      <Seo
        title="Portfólio de projetos sob medida"
        description="Confira projetos executados pela Hera Home: salas, quartos, cozinhas, home office e banheiros em freijó, carvalho e imbuia, da concepção ao acabamento final."
        path="/portifolio"
      />
      <PortfolioSection />
    </>
  );
};

export default Portfolio;
