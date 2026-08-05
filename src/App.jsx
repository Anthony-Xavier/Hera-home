import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Loja from "./Pages/Loja/Loja";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/portifolio" element={<Portfolio />} />
        <Route path="/loja" element={<Loja />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
