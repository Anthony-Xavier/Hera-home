import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Loja from "./Pages/Loja/Loja";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import SobMedida from "./Pages/SobMedida/SobMedida";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portifolio" element={<Portfolio />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/sobmedida" element={<SobMedida />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
