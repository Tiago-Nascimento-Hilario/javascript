const btnPedra = document.querySelector("#pedra");
const btnPapel = document.querySelector("#papel");
const btnTesoura = document.querySelector("#tesoura");
const titulo = document.querySelector("#titulo");


btnPedra.addEventListener("click", jogarPedra);
btnPapel.addEventListener("click", jogarPapel);
btnTesoura.addEventListener("click", jogarTesoura);

const computador = "pedra";

function jogarPedra() {
    if (computador === 'pedra') {
        titulo.textContent = 'Empatamos!' + ` Escolhi ${computador}`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    } else if (computador === 'papel') {
        titulo.textContent = `${computador} Ganhei!`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    } else if (computador === 'tesoura') {
        titulo.textContent = `${computador} Parabêns! você ganhou`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    }
}

function jogarPapel() {

    if (computador === 'papel') {
        titulo.textContent = 'Empatamos!' + ` Escolhi ${computador}`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    } else if (computador === 'pedra') {
        titulo.textContent = `${computador} Parabêns! você ganhou`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    } else if (computador === 'tesoura') {
        titulo.textContent = `${computador} Ganhei!`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    }
}


function jogarTesoura() {

    if (computador === 'tesoura') {
        titulo.textContent = 'Empatamos!' + ` Escolhi ${computador}`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    } else if (computador === 'pedra') {
        titulo.textContent = `${computador} Ganhei!`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    } else if (computador === 'papel') {
        titulo.textContent = `${computador} Parabêns! você ganhou`;
        setTimeout(() => {
            titulo.textContent = 'Vamos jogar!';
        }, 3000);
    }
}