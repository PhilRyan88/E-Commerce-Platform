import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
// const products = [
//   {
//     id: 1,
//     title: "Apple iPhone 15",
//     price: "Rs. 1,00,000"
//   },
//   {
//     id: 2,
//     title: "Apple iPhone 13",
//     price: "Rs. 70,000"
//   },
//   {
//     id: 3,
//     title: "Google Pixel 7",
//     price: "Rs. 50,000"
//   },
//   {
//     id: 4,
//     title: "Nokia 1100",
//     price: "Rs. 2,000"
//   },
//   {
//     id: 5,
//     title: "Samsung Galaxy S10",
//     price: "Rs. 1,00,000"
//   },
//   {
//     id: 6,
//     title: "Sony Xperia S10",
//     price: "Rs. 1,00,000"
//   }
// ];
function Products() {
  const [products, setProducts] = useState([]);
  console.log("rerendered");

  useEffect(function () {
    console.log("useEffect");
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products")
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setProducts(res);
      });
  }, []);

  // if the prev value of setState is same as the current value;

  return (
    <div>
      {products.map(function (item) {
        return <ProductCard product={item} key={item.id} />;
      })}
    </div>
  );
}

export default Products;

// two types
// named export
// default export

//there can only be one default export
// there can be multiple named exports

// exported like an object
//

// props - properties - arguments

// array = [1,2,3,4]
// map
// array.map(function(item, index) {return item*2})

// [2,4,6,8]

// Keys in react
// how to add css in react
// useState hooks
// useEffect hook
// Api call in react
// context api if time permits

// when you write

//import ProductCard from "../ProductCard";

// js with samename
// folder with this name
// inside that if there is an index.js

// DOM

// I would create a copy of this dom for myself
// in js

// js says I would change the whole thing
// I would rerender the whole thing

// insted of this
// I will keep a copy of this dom with myself

// whenver there is a change in this dom
// I will manipulate that particular part and display it on to the screen
// it would need an identifier of each element
// but when maps come into picture

// I want to do an api call in order to get the data
// js says I have a concept of ajax
// javascript is single threaded

// ajax
// async javascript and xml

// rest of the things in the js file would be in sync
// this part would only be async

// fetch(url, method)

// two ways to solve this issue

// 1st way - somehow you make all this sync

// 2nd way - once the data arrives somehow you could retail the data
// rerender the component.

// state in react
// state variable
// once set it would retail the value on rerenders
// and do a rerender for you with the new value

// you can not directly set it instead u need a setter function for this

// useState hook

// what is this hook ?
// hook is a helper function which does repetitive work for you
// one type of hook is a custom hook that you can build
// second default hooks that react provided

// useState hook
// useState(defaul value that you want for a varibale)

// returns [state var, Setter function]

// useEffect hook

// useEffect(function() {}, [])
//callback function inside the useEffect would be called
// based on the values or existance of this dependency array

// if you want to do something at the load the of the page
// each rerender of the page
// if this dependency array is not passed at all
// the function would be called on every rerender and the mounting phase
// if it is passed empty it will be called only once on the mounting phase
// you pass a state variable or a prop which is a state variable in the other component
// function would be called everytime this state variable is changed
