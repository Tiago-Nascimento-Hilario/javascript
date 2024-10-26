import "./style.css";
import code from "./assets/aprovar.svg"
import comentar from "./assets/Property 1=Comentar.svg"
import compartilhar from "./assets/Property 1=Compartilhar.svg"
import fotoCard from "./assets/Code editor.svg"
import fotoUsuario from "./assets/Property 1=Default.svg"

export default function Card({id, imagem, titulo, paragrafo}) {
  return (
    <div className="container-card">
      <img src={imagem} alt="imagem do card" className="fotoCard" />
      <h3 className="titulo">{titulo}</h3>
      <p className="paragrafo">{paragrafo}</p>
      <div className="container-card-rodape">
            <div className="rodape-icones-imagem">
                <img src={code} alt="imagem icone aprovar" />
                <img src={comentar} alt="imagem icone comentar" />
                <img src={compartilhar} alt="imagem icone compartilhar" />
            </div>  
            <div className="rodape-imagem-usuario">
                <img src={fotoUsuario} alt="foto usuario"/>
            </div>
      </div>
    </div>
  );
}
