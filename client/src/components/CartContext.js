import { createContext } from "react";

const CartContext = createContext({
  cart: {},
  increase: () => {},
  decrease: () => {},
});

export default CartContext;
