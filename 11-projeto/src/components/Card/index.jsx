import React from 'react'
import './style.css'

import post from '../../json/index.json'

export const Card = () => {
  return (
    <div className='container-card'>
      <div className='container-linha-card'>Projetos</div>
        <ul>
          {post.map((data)=>(
            <li key={data.id}>
              <p>{data.titulo}</p>
              <img src={data.img} alt="imagem post" />
            </li>
          ))}
        </ul>
    </div>
  )
}
