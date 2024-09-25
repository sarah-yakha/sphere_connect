import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { auth } from "../firebase";
import { Login } from "../components/form/Login";
import { ModalAuth } from "../components/Modal/ModalAuth";

const Template = () => {
  const [count,setCount] = useState(0)
  useEffect(()=>{
    setCount(count + 1)
   },auth.currentUser)
  const [modalActive, setModalActive] = useState(true)
  return (
    <div>
      <Navbar />

      {auth.currentUser == null ? <ModalAuth active={modalActive} setActive={setModalActive}/> : <Outlet />}
    </div>
  );
};

export default Template;
