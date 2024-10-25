import Logo from "../../assets/logo.svg";
import Feed from "../../assets/feed.svg";
import Perfil from "../../assets/account_circle.svg";
import Sobre from "../../assets/info.svg";
import Sair from "../../assets/logout.svg";
import "./style.css";


export default function Sidebar() {
  return (
    <aside>
      <img src={Logo} alt="Logo do Codeconnect" />
      <nav>
        <ul className="lista-sidebar">
          <li>
            <a href="#" className="item-link item-link-publicacao">Publicar</a>
          </li>
          <li>
            <a href="#" className="item-link item-link-ativo">
              <img src={Feed} alt="imagem icone feed" />
              <span>feed</span>
            </a>
          </li>
          <li>
            <a href="#" className="item-link">
              <img src={Perfil} alt="imagem icone perfil" />
              <span>perfil</span>
            </a>
          </li>
          <li>
            <a href="#" className="item-link">
              <img src={Sobre} alt="imagem icone sobre" />
              <span>sobre nós</span>
            </a>
          </li>

          <li>
            <a href="#" className="item-link">
              <img src={Sair} alt="imagem icone sair" />
              <span>sair</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
