import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Loja from "./Pages/Loja/Loja";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import SobMedida from "./Pages/SobMedida/SobMedida";
import Blog from "./Pages/Blog/Blog";
import BlogArtigo from "./Pages/BlogArtigo/BlogArtigo";
import Sobre from "./Pages/Sobre/Sobre";
import Contato from "./Pages/Contato/Contato";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/portifolio" element={<Portfolio />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/sobmedida" element={<SobMedida />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/como-escolher-madeira" element={<BlogArtigo />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
