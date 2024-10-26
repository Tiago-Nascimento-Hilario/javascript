import { useEffect, useState } from "react";
import "./App.css";
import CampoPesquisa from "./components/CampoPesquisa";
import Card from "./components/Card";
import Filtro from "./components/Filtro";
import Sidebar from "./components/Sidebar";

function App() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes"
    )
      .then((repsosta) => repsosta.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
    <div className="container">
      <Sidebar />
      <div className="container-campoPesquisa-filtro">
        <CampoPesquisa />
        <Filtro />
        <ul className="container-cards">
          {dados ? dados.map((item, index)=>(
            <li key={index}>
              <Card id={item.id} imagem={item.imagem_capa} titulo={item.titulo} paragrafo={item.resumo}/>
            </li>
          )):null}
        </ul>
      </div>
    </div>
  );
}

export default App;
