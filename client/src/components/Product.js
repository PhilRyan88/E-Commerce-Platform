import React from "react";
import { ProductCard } from "./ProductCard";
import AddtoCart from "./AddtoCart";

const Product = () => {
  return (
    <div>
      <center>
        <h1>Product</h1>
      </center>
      <ProductCard />
      <AddtoCart />
    </div>
  );
};

export default Product;
