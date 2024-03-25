import React from 'react'

//trazer o id que o usuário acessa página
import { useParams } from "react-router-dom";



const Product = () => {
    //rota dinâmica
    const { id } = useParams();

  return (
    <div>
      <p>Id do produto: {id}</p>
    </div>
  )
}

export default Product
