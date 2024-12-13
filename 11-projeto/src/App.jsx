import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home";
import { Sobre } from "./pages/sobre";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

function App() {
  return (

      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="*" element={<p>Página não encontrada</p>} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
}

export default App;
