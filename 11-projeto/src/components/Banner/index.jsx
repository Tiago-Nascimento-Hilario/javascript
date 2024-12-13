import React from "react";
import "./style.css";

export const Banner = () => {
  return (
    <div className="container-banner">
      <div className="sub-container">
        <h1>Olá!</h1>
        <p>
          Boas vindas ao meu espaço pessoal! Eu sou Tiago, desenvolvedor de
          software. Aqui compartilho vários conhecimentos que adquiri através da realização
          projetos, formações e estudos ao longo da minha carreira.
        </p>
      </div>
      <img
        src="https://github.com/Tiago-Nascimento-Hilario.png"
        alt="Foto do perfil"
      />
    </div>
  );
};
