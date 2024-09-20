import { Route, Routes } from "react-router-dom";

import { SignUp } from "../components/form/SignUp";
import { Login } from "../components/form/Login";



export const Routing = () => {
  return (
    <Routes>
    
    <Route path='/' element={<SignUp />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Register' element={<SignUp />}/>
   
    </Routes>
  );
};