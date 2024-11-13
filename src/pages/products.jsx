import React from 'react'
import Header from '../components/header';
import { products } from '../data/products';
import ProductCard from '../components/productCard';
import { useTranslation } from 'react-i18next';

const Products = () => {
  const { i18n } = useTranslation()
  
  return (
    <div>
      <Header />

      <div className="container mx-auto py-8 px-4 flex gap-8 flex-wrap justify-between">
        {products[i18n.language].map((item) => {
          return (
            <ProductCard item={item} key={item.id}/>
          );
        })}
      </div>
    </div>
  );
}

export default Products