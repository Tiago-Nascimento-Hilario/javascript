const html = document.querySelector("html");
const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoCurto = document.querySelector(".app__card-button--curto");
const botaoLongo = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const checkboxMusica = document.querySelector("#alternar-musica");

//código para tocara a múica
const musica = new Audio("./sons/luna-rise-part-one.mp3");
musica.loop = true

checkboxMusica.addEventListener("change", ()=>{
    if(musica.paused){
        musica.play();
    }else{
        musica.pause();
    }
})


// adicionando funções nos botões

botaoFoco.addEventListener("click", ()=>{
    html.setAttribute("data-contexto", "foco");
    banner.setAttribute("src", "./imagens/foco.png");
    titulo.innerHTML = `Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa.</strong>`
    botaoFoco.classList.add("active");
    botaoCurto.classList.remove("active");
    botaoLongo.classList.remove("active");

})

botaoCurto.addEventListener("click", ()=>{
    html.setAttribute("data-contexto", "descanso-curto");
    banner.setAttribute("src", "./imagens/descanso-curto.png");
    titulo.innerHTML = `Que tal dar uma respirada  <strong class="app__title-strong">faça uma pausa curta.</strong>`
    botaoCurto.classList.add("active");
    botaoFoco.classList.remove("active")
    botaoLongo.classList.remove("active");
})

botaoLongo.addEventListener("click", ()=>{
    html.setAttribute("data-contexto","descanso-longo" );
    banner.setAttribute("src", "./imagens/descanso-longo.png");
    titulo.innerHTML = `Hora de voltar a superficíe, <strong class="app__title-strong">faça uma pausa longa.</strong>`
    botaoLongo.classList.add("active");
    botaoFoco.classList.remove("active");
    botaoCurto.classList.remove("active");

})

