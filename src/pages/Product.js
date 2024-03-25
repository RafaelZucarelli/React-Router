import React from 'react'

//trazer o id que o usuário acessa página
import { useParams, Link } from "react-router-dom";
import { useFetch } from '../hooks/useFetch';



const Product = () => {
    //rota dinâmica
    const { id } = useParams();

    // carregamento dado individual

    const url = "http://localhost:3000/products/" + id

    const { data: product, loading, error } = useFetch(url)

    console.log(product)

   

  return (
    <div>
      <p>Id do produto: {id}</p>

    
    {loading && <p> Carregando...</p>}
    {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
          {/* 6 - nested routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </div>
  )
}

export default Product
