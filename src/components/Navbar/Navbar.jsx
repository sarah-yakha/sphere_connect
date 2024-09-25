import React, { useEffect, useState } from "react";
import { NavAuth, NavUser } from "./index";
import "./navbar.scss";

import logo from "../../assets/Navbar/Instagram Logo.svg";
import { Input } from "../Forms";
import { auth } from "../../firebase";

const Navbar = () => {
  const [count,setCount] = useState(0)
 useEffect(()=>{
  setCount(count + 1)
 },auth.currentUser)
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrap">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <form className="navbar-form">
            <Input placeholder="Search" />
          </form>

          {auth.currentUser == null ? <NavAuth /> : <NavUser />}
          {console.log(auth.currentUser)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
