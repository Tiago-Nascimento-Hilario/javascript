const item = document.getElementById("input-item");
const botaoSalvaItem = document.getElementById("adicionar-botao");
const listaDeCompras = document.getElementById("lista-de-compras");
const listaItensComprados = document.getElementById("itens-comprados")
let contador = 0;

let data = new Date()


const novaData = data.toLocaleDateString("pt-BR");
const novoHorario = data.toLocaleTimeString("pt-BR");



botaoSalvaItem.addEventListener("click", adicionarItem);

function adicionarItem(event) {
    event.preventDefault();

    const itemDaLista = document.createElement("li");

    const itemListaContainer = document.createElement("div");
    itemListaContainer.classList.add("item-lista-container");

    const containerNomeCompra = document.createElement("div");
    containerNomeCompra.classList.add("container-nome-compra");

    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");


    const data = document.createElement("span");
    data.innerText = ` ${novaData}  ${novoHorario}`;

    const itemListaTexto = document.createElement("p");
    itemListaTexto.classList.add("item-lista-texto");
    itemListaTexto.innerText = item.value 
    itemListaTexto.appendChild(data);

    

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-botoes")

    const botaoAcaoExcluir = document.createElement("button");
    botaoAcaoExcluir.classList.add("botao-acao");
    const imgExcluir = document.createElement("img");
    imgExcluir.classList.add("img-excluir");
    imgExcluir.src = "img/delete.svg"

    const botaoAcaoEditar = document.createElement("button");
    botaoAcaoEditar.classList.add("botao-acao");
    const imgEditar = document.createElement("img");
    imgEditar.classList.add("img-editar");
    imgEditar.src = "img/edit.svg"


    if (item.value == "") {
        alert("Preencha o campo para adicionar")
    } else {

        item.value = ""

        itemListaContainer.appendChild(containerNomeCompra);

        containerNomeCompra.appendChild(checkboxContainer);

        checkboxContainer.appendChild(checkboxLabel);

        checkboxLabel.appendChild(checkboxInput);

        checkboxLabel.appendChild(checkboxCustomizado);

        containerNomeCompra.appendChild(itemListaTexto);

        containerBotoes.appendChild(botaoAcaoExcluir);

        botaoAcaoExcluir.appendChild(imgExcluir);

        containerBotoes.appendChild(botaoAcaoEditar);

        botaoAcaoEditar.appendChild(imgEditar);

        itemListaContainer.appendChild(containerBotoes);

        itemDaLista.appendChild(itemListaContainer);

        listaDeCompras.appendChild(itemDaLista);

    }
    checkboxLabel.addEventListener("click", adicionaItemListaComprados);

    function adicionaItemListaComprados(event) {

        const checkboxInput = event.currentTarget.querySelector(".checkbox-input");
        const checkboxCustomizado = event.currentTarget.querySelector(".checkbox-customizado");

        if (checkboxInput.checked && checkboxInput.id) {
            checkboxCustomizado.classList.add("checked");
            listaItensComprados.appendChild(itemDaLista);
        } else {
            checkboxCustomizado.classList.remove("checked");
        }
    }

}