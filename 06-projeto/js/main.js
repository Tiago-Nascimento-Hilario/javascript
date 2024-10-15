import ui from "./ui.js";
import api from "./api.js";


async function controlarEnvioFormulario(event){
    event.preventDefault();
    
    const id  = document.querySelector("#pensamento-id").value;
    const conteudo = document.querySelector("#pensamento-conteudo").value;
    const autoria = document.querySelector("#pensamento-autoria").value;

    try {
        if(id){
            await api.editarPensamento({ id, conteudo, autoria })
        }else{
            await api.salvarPensamento({conteudo, autoria})
        }
        ui.rederizarPensamentos();
    } catch {
        alert("Ocorreu um erro ao salvar pensamento");
    }
}



document.addEventListener("DOMContentLoaded", ()=>{
 
    ui.rederizarPensamentos();

    const formularioPensamento = document.querySelector("#pensamento-form");
    formularioPensamento.addEventListener("submit", controlarEnvioFormulario)

    const btnCancelar = document.querySelector("#botao-cancelar");

    btnCancelar.addEventListener("click", ui.limpaFormulario)

})

