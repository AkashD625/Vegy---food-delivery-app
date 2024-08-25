import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
function Navbar() {


      const [menu,setMenu] = useState("home")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("home")}className={menu==="home"?"activi":""}>Home</li>
        <li onClick={()=>setMenu("menu")}className={menu==="menu"?"activi":""}>menu</li>
        <li onClick={()=>setMenu("mobile-app")}className={menu==="mobile-app"?"activi":""}>mobile-app</li>
        <li onClick={()=>setMenu("contact-us")}className={menu==="contact-us"?"activi":""}>Contact us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Navbar;
