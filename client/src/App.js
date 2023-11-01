import "./App.css";
import Products from "./components/Products";
import CartContext from "./components/CartContext";
//import Login from "./components/Login/Login";
//import { Routes, Route } from "react-router-dom";
import { useState } from "react";
// Products()

export default function App() {
  const [cart, setCart] = useState({});
  function increase() {
    console.log("increment");
  }

  function decrease() {
    console.log("decrement");
  }

  return (
    <CartContext.Provider value={{ cart, increase, decrease }}>
      <div className="App">
        <Products />
      </div>
    </CartContext.Provider>
  );
}

// Library vs framework

// framework says you have to follow a particular way that i am suggesting
// library says u can write the code in any way just that providing the utilities

// Components

// component in react is nothing but a function
// react is built on top of js
// you write js in react mostly
// Component is a way to structure your code into smaller units
// integrate these components to make a webpage
// in react evrything is unidirectional
// it start from the parent to the child

// npx create-react-app

// component in react
// it is a simple function
// which returns some html

// html written inside js is knows as
// jsx
// javascript xml notation
