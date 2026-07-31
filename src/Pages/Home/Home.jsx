import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Principal from "../../Components/Principal/Principal";
import Diferenciais from "../../Components/Diferenciais/Diferenciais";
import HomePortfolio from "../../Components/Home-Portfolio/HomePortfolio";
const Home = () => {
  return (
    <>
      <NavBar />
      <Principal />
      <Diferenciais />
      <HomePortfolio />
    </>
  );
};

export default Home;
