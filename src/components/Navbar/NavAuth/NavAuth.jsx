import React, { useState } from "react";
import { Button, Input } from "../../Forms";
import "./navAuth.scss"
import { Link } from "react-router-dom";
import { auth } from "../../../firebase";
import { Login } from "../../form/Login";
import { ModalAuth } from "../../Modal/ModalAuth";
const NavAuth = () => {
  
  return (
    <div className="navAuth">
    <Button variant="solid" onClick={() => setModalActive(true)}>Kju</Button>
      <Button variant="outline"><Link to="/Register">Регистрация</Link></Button>
      
    </div>
  );
};


export default NavAuth;
