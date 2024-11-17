import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

const ProductDetail = () => {

  const {id,name} = useParams()
  console.log(id)

  const productDetail = products.find(item => item.id == id)
  

  return (
    <>
      <h1 className="text-8xl">HAKUNA NECESEN? {id} </h1>
      <h1 className="text-8xl">HAKUNA Name? {productDetail.name} </h1>
    </>
  );
}

export default ProductDetail