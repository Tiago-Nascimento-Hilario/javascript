import React from "react";
import "./style.css";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";

export const Curriculu = () => {
  return (
    <div className="container-curriculu">
      <h1>Tiago Nascimento Hilario</h1>
      <p className="paragrafo-descricao">
        Sou um desenvolvedor de software, apaixonado por tecnologia. Possuo boa
        capacidade de trabalho em equipe e comunicação. Estou apto para
        contribuir e aprender junto com sua equipe.
      </p>
      <fieldset className="container-dados">
        <legend>Informações</legend>
        <p>Bairro: Jardim itu sabará cidade Porto Alegre Rio grande do Sul</p>
        <div className="email">
          <MdOutlineEmail />
          <p>tnhhilario@gmail.com</p>
        </div>
        <div className="container-whatsapp">
          <IoMdContact />
          <p>
            <a href="https://wa.me/+5521982425617" className="whatssap">
              Whatsapp
            </a>
          </p>
        </div>
      </fieldset>
      <fieldset className="container-rede-sociais">
        <legend>Rede socias</legend>
        <ol>
          <li>
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/tiago-nascimento-hilario/?trk=public_profile_browsemap">
              Linkedin
            </a>
          </li>
          <li>
            <IoLogoGithub />
            <a
              href="https://github.com/Tiago-Nascimento-Hilario"
              target="_blank"
            >
              {" "}
              GitHub
            </a>
          </li>
        </ol>
      </fieldset>
      <fieldset className="container-educacao">
        <legend>Formações</legend>
        <p>Universidade Unopar - Análise e desenvolvimento de software</p>
        <p>Escola de tecnologia Alura</p>
        <ol>
          <li>Formação em Front-end</li>
          <li>Formação em web</li>
          <li>Formação em back-end javascript</li>
        </ol>
      </fieldset>
      <fieldset className="container-idiomas">
        <legend>Idiomas</legend>
        <li>Inglês- técnico</li>
        <li>Espanhol - básico</li>
      </fieldset>
      <fieldset className="container-tecnologias">
        <legend>Tecnologias</legend>
        <ul>
          <li>Javascript</li>
          <li>Html</li>
          <li>Css</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </fieldset>
      <fieldset className="container-experiência">
        <legend>Experiência Profissional</legend>
        <p>Desenvolvedor web | 2 anos</p>
        <br />
        <ol>
          <li>Desenvolvimento de software web</li>
          <li>Tecnologias: Javascript , Html, Css, React.js e Node.js</li>
        </ol>
        <br />
        <p>Diebold Nixdorf | 7 anos </p>
        <br />
        <ol>
          <li>
            Atuação na manutenção do software e hardware dos terminais de
            auto-atendimeto dos bancos Itaú-unibanco, Caixa Econômica Federal,
            Banco do Brasil, Santander, Bradsco e Sicred
          </li>
          <li>Controle de task`s por sla, suporte ao cliente N1</li>
          <li>Atuação em treinamento a novos colabordores da empresa</li>
        </ol>
        <br />
        <p>Itautéc | 9 anos </p>
        <br />
        <ol>
          <li>
            Atuação no suporte técnico as aplicações de serviço do banco
            Itaú-unibanco
          </li>
          <li>
            Atendimento técnico, manutenção corretivas e preventivas nos
            servidores, estações de trabalho e impressoras em rede
          </li>
          <li>Atuação em treinamento a novos colabordores da empresa</li>
        </ol>
      </fieldset>
    </div>
  );
};
