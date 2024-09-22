import React from "react";
import { NavAuth, NavUser } from "./index";
import "./navbar.scss";

import logo from "../../assets/Navbar/Instagram Logo.svg";
import { Input } from "../Forms";

const Navbar = () => {
  const isAuth = false;
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar-wrap">
          <div className="navbar-logo">
            <img src={logo} alt="" />
          </div>
          <form>
            <Input placeholder="Search" />
          </form>

          {isAuth ? <NavAuth /> : <NavUser />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
