import React from "react";
import { Button, Input } from "../../Forms";
import "./navAuth.scss"

const NavAuth = () => {
  return (
    <div className="navAuth">
      <Button variant="solid">Войти</Button>
      <Button variant="outline">Регистрация</Button>
    </div>
  );
};

export default NavAuth;
