// Arquivo responśavel pelas requisições a api

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch("http://localhost:3000/pensamentos");
            return await response.json();
        } catch (error) {
            alert("Erro ao buscar pensamento");
            throw error;
        }
    },

    async salvarPensamento(pensamento){
        try {
          const response = await fetch("http://localhost:3000/pensamentos",{
            method: "POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(pensamento)
          });
          return await response.json();  
        } catch (error) {
            alert("Erro ao buscar pensamento");
            throw error;
        }
    },

    async buscarPensamentoId(id){
        try {
            const response = await fetch("http://localhost:3000/pensamentos")
            return response.json();
        } catch {
            alert("Error ao buscar pensamento");
        }
    },
    async editarPensamento(pensamento) {
        try {
          const response = await fetch(`http://localhost:3000/pensamentos/${pensamento.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(pensamento)
          })
          return await response.json()
        }
        catch {
          alert('Erro ao editar pensamento')
          throw error
        }
      },
}

export default api;