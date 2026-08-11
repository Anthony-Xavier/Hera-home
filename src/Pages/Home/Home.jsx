import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Principal from "../../Components/Principal/Principal";
import Diferenciais from "../../Components/Diferenciais/Diferenciais";
import HomePortfolio from "../../Components/Home-Portfolio/HomePortfolio";
import HomeBlog from "../../Components/Home-Blog/HomeBlog";
import Depoimento from "../../Components/Depoimento/Depoimento";
import Diferencas from "../../Components/Diferencas/Diferencas";
import Seo from "../../Components/Seo/Seo";

const Home = () => {
  return (
    <>
      <Seo
        title="Marcenaria e móveis de madeira sob medida"
        description="Marcenaria artesanal em Garopaba, SC. Móveis de madeira maciça sob medida e peças de pronta entrega — freijó, carvalho, imbuia e mais. Do projeto ao acabamento final."
        path="/"
      />
      <Principal />
      <Diferenciais />
      <HomePortfolio />
      <HomeBlog />
      <Depoimento />
      <Diferencas />
    </>
  );
};

export default Home;
