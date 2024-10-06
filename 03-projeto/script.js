

const lista = document.getElementById("lista");
const botao = document.getElementById("botao-adicionar");
let listaTotal = [];


function adicionarItemLista(event) {

    event.preventDefault();
    const inputLista = document.getElementById("itemInput").value;
    
    if (inputLista) {
        listaTotal.push(inputLista);
        inputLista.value = "";
        atulalizaLista();
        
    } else {
        alert("input vazio")
    }
}

function atulalizaLista() {
    
    const inputLista = document.getElementById("itemInput").value;

    lista.innerText = "";
    listaTotal.forEach((item, index) => {

        const li = document.createElement("li");
        const button = document.createElement("button");
        button.innerText = 'remover';    
        
        li.appendChild(button);

        li.innerHTML = ` ${item} <button>remover</button>`
        lista.appendChild(li)
    })
}

botao.addEventListener("click", adicionarItemLista)