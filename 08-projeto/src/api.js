import express from  "express";


const livros = [
 {
    id:1,
    titulo: "O senhor dos Anéis"
 },
 {
    id:2,
    titulo: "A bíblia"
 }   
]

function buscarLivros(id){
    return livros.findIndex(livro =>{
        return livro.id === Number(id)
    })
}

const app = express();
app.use(express.json()) // Middleware 

// busca lista de livros
app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});

// Adicona livro
app.post("/livros", (req, res)=>{
  livros.push(req.body);
  res.status(201).send("Livro cadastrado com sucesso!")  
})

// filtra livro
app.get("/livros/:id", (req, res)=>{ //:id indica que vai ser uma ifromação váriável
    const index = buscarLivros(req.params.id);
    res.status(200).json(livros[index])

})

// Alterar um registro
app.put("/livros/:id", (req, res)=>{
    const index = buscarLivros(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
})

// Excluir um registro
app.delete("/livros/:id", (req, res)=>{
    const index = buscarLivros(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro excluído com sucesso!")
})
export default app;