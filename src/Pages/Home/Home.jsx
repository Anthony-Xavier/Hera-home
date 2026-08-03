import React from "react";

import NavBar from "../../Components/NavBar/NavBar";
import Principal from "../../Components/Principal/Principal";
import Diferenciais from "../../Components/Diferenciais/Diferenciais";
import HomePortfolio from "../../Components/Home-Portfolio/HomePortfolio";
import HomeBlog from "../../Components/Home-Blog/HomeBlog";
const Home = () => {
  return (
    <>
      <NavBar />
      <Principal />
      <Diferenciais />
      <HomePortfolio />
      <HomeBlog />
    </>
  );
};

export default Home;
