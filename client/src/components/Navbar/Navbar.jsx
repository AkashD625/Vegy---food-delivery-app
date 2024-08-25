import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
function Navbar() {
  return (
    <div className="navbar">
    <img src={assets.logo} alt="" className="logo" />
    <ul className="navbar-menu">
      <li>Home</li>
      <li>menu</li>
      <li>mobile-app</li>
      <li>Contact us</li>
    </ul>
    <div className="navbar-right">
      <img src={assets.search_icon} alt="" />
      <div className="dot"></div>
    </div>
    <button>Sign in</button>
    </div>
  );
}

export default Navbar;
