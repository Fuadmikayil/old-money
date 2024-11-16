import React from "react";
import Header from "../components/header";
import { products } from "../data/products";
const Products = () => {
  return (
    <div>
      <Header />
      {products.map((item, index) => {
        return (
          <div className="container mx-auto p-8 flex gap-8 flex-wrap justify-between">
            <div className=" w-1/4 flex flex-col gap-4 ">
              <div className="h-20">
                <img
                  className="w-full h-full object-cover"
                  src={item.img}
                  alt=""
                />
              </div>
              <h2>{item.name}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
