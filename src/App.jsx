import { Navigate, Route } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/Login/Login";
import { Modal } from "./components/Modal/Modal";
import { auth } from "./firebase";
import { Routing } from "./routes";

function App() {
  
  console.log(auth.currentUser)
  return (
    <>
      <Routing />

      <Modal/>
    </>
  );
}

export default App;
