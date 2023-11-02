import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Login from "./components/Login/Login";

const Navigater = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="Home" element={<Products />} />
        </Routes>
      </div>
    </>
  );
};

export default Navigater;
