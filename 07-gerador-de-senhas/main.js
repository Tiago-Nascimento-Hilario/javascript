import { nanoid } from "nanoid"

const containerParagrafo = document.querySelector(".container-paragrafo");
const containerBotao = document.querySelector(".container-botao");

containerBotao.addEventListener("click", ()=>{
    containerParagrafo.innerHTML = nanoid(8);
    setTimeout(()=>{
       containerParagrafo.innerHTML = "" 
    }, 15000)
})