import http from "http";


const rotas = {
    "/" : "Primeira rota",
    "/segunda" : "Segunda rota",
    "/terceira" : "Terceira rota"
}

const servidor = http.createServer((req, res)=>{
    res.writeHead(200, {"Content-type":"text/plain"});
    res.end(rotas[req.url])
})

servidor.listen(3000, () => {
    console.log("Execuntando servidor");
})
