import api from "./api.js";

const ui = {
    async rederizarPensamentos() {
        const listaPensamentos = document.querySelector("#lista-pensamentos");
        try {
            const pensamentos = await api.buscarPensamentos();
            pensamentos.forEach(pensamento => {
                listaPensamentos.innerHTML +=
                    `<li class="li-pensamento" data-id="${pensamento.id}">
                        <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                        <div class="pensamento-conteudo">${pensamento.conteudo}</div>
                        <div class="pensamento-autoria">${pensamento.autoria}</div>
                    </li>`
            });
        } catch (error) {
            alert("Errorao renderizar pensamentos");
        }
    }
}

export default ui;