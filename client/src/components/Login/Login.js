import React from "react";
import "./Login.css";
//import App from "../../App";
import { Routes, Route, useNavigate } from "react-router-dom";
//import { useState } from "react";
import Products from "../Products";
export const Login = () => {
  const nav = useNavigate();
  const goToHome = () => {
    nav("/Home");
  };
  //const [button, setButton] = useState(false);
  return (
    <div className="container">
      <div className="login-box">
        <h2>E-Commerce Login</h2>
        <form>
          <div className="input-box">
            <input type="email" required inputMode="email" />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forgot-password">
            <a href="#">Forgot Password</a>
          </div>
          <button type="submit" className="btn" onClick={goToHome}>
            Login
          </button>
          <div className="signup-link">
            <a href="#">Signup</a>
          </div>
        </form>
        <div>
          <Routes>
            <Route path="Home" element={<Products />} />
          </Routes>
        </div>
      </div>
      <span style={{ "--i": 0 }}></span>
      <span style={{ "--i": 1 }}></span>
      <span style={{ "--i": 2 }}></span>
      <span style={{ "--i": 3 }}></span>
      <span style={{ "--i": 4 }}></span>
      <span style={{ "--i": 5 }}></span>
      <span style={{ "--i": 6 }}></span>
      <span style={{ "--i": 7 }}></span>
      <span style={{ "--i": 8 }}></span>
      <span style={{ "--i": 9 }}></span>
      <span style={{ "--i": 10 }}></span>
      <span style={{ "--i": 11 }}></span>
      <span style={{ "--i": 12 }}></span>
      <span style={{ "--i": 13 }}></span>
      <span style={{ "--i": 14 }}></span>
      <span style={{ "--i": 15 }}></span>
      <span style={{ "--i": 16 }}></span>
      <span style={{ "--i": 17 }}></span>
      <span style={{ "--i": 18 }}></span>
      <span style={{ "--i": 19 }}></span>
      <span style={{ "--i": 20 }}></span>
      <span style={{ "--i": 21 }}></span>
      <span style={{ "--i": 22 }}></span>
      <span style={{ "--i": 23 }}></span>
      <span style={{ "--i": 24 }}></span>
      <span style={{ "--i": 25 }}></span>
      <span style={{ "--i": 26 }}></span>
      <span style={{ "--i": 27 }}></span>
      <span style={{ "--i": 28 }}></span>
      <span style={{ "--i": 29 }}></span>
      <span style={{ "--i": 30 }}></span>
      <span style={{ "--i": 31 }}></span>
      <span style={{ "--i": 32 }}></span>
      <span style={{ "--i": 33 }}></span>
      <span style={{ "--i": 34 }}></span>
      <span style={{ "--i": 35 }}></span>
      <span style={{ "--i": 36 }}></span>
      <span style={{ "--i": 37 }}></span>
      <span style={{ "--i": 38 }}></span>
      <span style={{ "--i": 39 }}></span>
      <span style={{ "--i": 40 }}></span>
      <span style={{ "--i": 41 }}></span>
      <span style={{ "--i": 42 }}></span>
      <span style={{ "--i": 43 }}></span>
      <span style={{ "--i": 44 }}></span>
      <span style={{ "--i": 45 }}></span>
      <span style={{ "--i": 46 }}></span>
      <span style={{ "--i": 47 }}></span>
      <span style={{ "--i": 48 }}></span>
      <span style={{ "--i": 49 }}></span>
    </div>
  );
};
export default Login;
