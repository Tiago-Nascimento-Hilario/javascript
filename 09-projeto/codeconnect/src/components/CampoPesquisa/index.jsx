import { useState } from "react"
import "./style.css"

export default function CampoPesquisa(){
    const [ termoPesquia, setTermoPesquisa ] = useState("");
    console.log(termoPesquia)
    return(
        <input 
            type="search" 
            placeholder="Faça sua pesquisa!"
            value={termoPesquia}
            onChange={(dado)=>setTermoPesquisa(dado.target.value)}/>
    )
}