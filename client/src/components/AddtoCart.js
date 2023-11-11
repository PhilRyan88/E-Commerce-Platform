import React from "react";
import { useContext } from "react";
import CartContext from "./CartContext";

export const AddtoCart = () => {
  const { cart, increase, decrease } = useContext(CartContext);
  function increasef() {
    increase();
  }
  return (
    <div>
      <button onClick={increasef}>Add to Cart</button>
    </div>
  );
};
export default AddtoCart;
