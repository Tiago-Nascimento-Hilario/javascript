import "dotenv/config"
import http from "http";
import app from "./src/api.js"

// const rotas = {
//     "/" : "Primeira rota",
//     "/segunda" : "Segunda rota",
//     "/terceira" : "Terceira rota"
// }

// const servidor = http.createServer((req, res)=>{
//     res.writeHead(200, {"Content-type":"text/plain"});
//     res.end(rotas[req.url])
// })

app.listen(3000, () => {
    console.log("Execuntando servidor");
})
