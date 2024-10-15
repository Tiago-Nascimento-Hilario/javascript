import api from "./api.js";

const ui = {


    async preencherFormulario(pensamentoId){
        const pensamento = await api.buscarPensamentoId(pensamentoId);
        document.querySelector("#pensamento-id").value = pensamento.id;     
        document.querySelector("#pensamento-conteudo").value = pensamento.conteudo;
        document.querySelector("#pensamento-autoria").value = pensamento.autoria;  
  },

    async rederizarPensamentos() {
        
        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(ui.adicionaPensamentoNaLista);
        } catch (error) {
            alert("Error ao renderizar pensamentos");
        }
    },


    limpaFormulario() {
        document.querySelector("#pensamento-form").reset();
    },

    adicionaPensamentoNaLista(pensamento) {
        const listaPensamentos = document.querySelector("#lista-pensamentos");

        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id);
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "/06-projeto/assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.textContent = pensamento.conteudo;
        pensamentoConteudo.classList.add("pensamento-conteudo");


        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.textContent = pensamento.autoria;
        pensamentoAutoria.classList.add("pensamento-autoria");

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id);

        const imgEditar = document.createElement("img");
        imgEditar.src = "/06-projeto/assets/imagens/icone-editar.png";
        imgEditar.alt = "Editar";

        botaoEditar.appendChild(imgEditar);

        const icones = document.createElement("div");
        icones.classList.add("icones");
        icones.appendChild(botaoEditar)


        const botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("botao-excluir");
        botaoExcluir.onclick = async () =>{
            try {
                await api.excluirpensamento(pensamento.id)
                ui.rederizarPensamentos()
            } catch (error) {
                alert("Erro ao excluir pensamento")
                throw error
            }
        }

        const imgExcluir = document.createElement("img");
        imgExcluir.src = "/06-projeto/assets/imagens/icone-excluir.png";
        imgExcluir.alt = "Exluir";

        botaoExcluir.appendChild(imgExcluir);
        icones.appendChild(botaoExcluir);

        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(icones);
        listaPensamentos.appendChild(li);

        pensamentoConteudo.addEventListener("click", () => {

            const conteudoEditado = prompt("Editar Conteudo")
            if (conteudoEditado === "") {
                pensamentoConteudo.textContent = pensamento.conteudo
            } else {
                pensamentoConteudo.textContent = conteudoEditado
            }
        })

    },
}

export default ui;