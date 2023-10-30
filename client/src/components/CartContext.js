import { createContext } from "react";

const CartContext = createContext({
  cart: {},
  increase: () => {},
});

export default CartContext;
