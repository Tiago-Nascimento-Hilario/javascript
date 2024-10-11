// Arquivo responśavel pelas requisições a api

const api = {
    async buscarPensamentos() {
        try {
            const response = await fetch("http://localhost:3000/pensamentos");
            return response.json();
        } catch (error) {
            alert("Erro buscar pensamento");
            throw error;
        }
    }
}

export default api;