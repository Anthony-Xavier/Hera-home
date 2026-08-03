import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Principal from "../../Components/Principal/Principal";
import Diferenciais from "../../Components/Diferenciais/Diferenciais";
import HomePortfolio from "../../Components/Home-Portfolio/HomePortfolio";
import HomeBlog from "../../Components/Home-Blog/HomeBlog";
import Depoimento from "../../Components/Depoimento/Depoimento";
const Home = () => {
  return (
    <>
      <NavBar />
      <Principal />
      <Diferenciais />
      <HomePortfolio />
      <HomeBlog />
      <Depoimento />
    </>
  );
};

export default Home;
