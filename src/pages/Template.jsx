import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { auth } from "../firebase";
import { Login } from "../components/form/Login";
import { ModalAuth } from "../components/Modal/ModalAuth";
import { SignUp } from "../components/form/SignUp";
import { Authorized } from "../components/auth/authorized";

const Template = () => {
  
  const [count,setCount] = useState(0)
  useEffect(()=>{
    setCount(count + 1)
    
   },auth.currentUser)
   
  
  return (
    <div>
      <Navbar />

      {auth.currentUser == null ? <Authorized /> : <Outlet />}
    </div>
  );
};

export default Template;
