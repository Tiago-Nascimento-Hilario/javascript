const html = document.querySelector("html");
const botaoFoco = document.querySelector(".app__card-button--foco");
const botaoCurto = document.querySelector(".app__card-button--curto");
const botaoLongo = document.querySelector(".app__card-button--longo");
const botaoComecar = document.querySelector("#start")
const botaoParar = document.querySelector("#pause")
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const containerTimer = document.querySelector("#timer")
const checkboxMusica = document.querySelector("#alternar-musica");

//código para tocara a múica
const musica = new Audio("./sons/luna-rise-part-one.mp3");
const musicaPlay = new Audio("./sons/play.wav");
const musicaPause = new Audio("./sons/pause.mp3");
const musicaFinal = new Audio("./sons/beep.mp3");
musica.loop = true

checkboxMusica.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;


function startRelogio(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: "2-digit", second: "2-digit"})
    containerTimer.innerHTML = `<p>${tempoFormatado}</p>`
}

const contagemRegressiva = ()=>{
    if(tempoDecorridoEmSegundos <= 0){
        pausar();
        musicaFinal.play()
        return;
    }
    tempoDecorridoEmSegundos -= 1
    startRelogio()
}


function iniciar(){
    musicaPlay.play()
    startRelogio()
    
    intervaloId = setInterval(contagemRegressiva, 1000)
}
function pausar(){
    musicaPause.play()
    clearInterval(intervaloId);
    intervaloId = null
}
// adicionando funções nos botões

botaoFoco.addEventListener("click", () => {
    html.setAttribute("data-contexto", "foco");
    banner.setAttribute("src", "./imagens/foco.png");
    titulo.innerHTML = `Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa.</strong>`
    botaoFoco.classList.add("active");
    botaoCurto.classList.remove("active");
    botaoLongo.classList.remove("active");
    tempoDecorridoEmSegundos = 1500;
    startRelogio();
    
})

botaoCurto.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-curto");
    banner.setAttribute("src", "./imagens/descanso-curto.png");
    titulo.innerHTML = `Que tal dar uma respirada  <strong class="app__title-strong">faça uma pausa curta.</strong>`
    botaoCurto.classList.add("active");
    botaoFoco.classList.remove("active")
    botaoLongo.classList.remove("active");
    tempoDecorridoEmSegundos = 300;
    startRelogio();
})

botaoLongo.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-longo");
    banner.setAttribute("src", "./imagens/descanso-longo.png");
    titulo.innerHTML = `Hora de voltar a superficíe, <strong class="app__title-strong">faça uma pausa longa.</strong>`
    botaoLongo.classList.add("active");
    botaoFoco.classList.remove("active");
    botaoCurto.classList.remove("active");
    tempoDecorridoEmSegundos = 900;
    startRelogio();

})


botaoComecar.addEventListener("click", iniciar);
botaoParar.addEventListener("click", pausar)

startRelogio();