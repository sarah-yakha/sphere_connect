import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { Link } from "react-router-dom";



export const Login = () => {
    const dispatch = useDispatch()
    
    
    const handleLogin = (email,password) => {
        const err = 'Проверьте введеные данные, или зарегестрируйтесь'
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)        
        .then(console.log("Вы вошли в систему"))
        .catch(console.error)
    }
  return (
<div>
     <h1> Войдите в аккаунт </h1>
    <Form title='Войти' handleClick={handleLogin}/>
    <p>
    Нет аккаунта? Нажми
    <Link to="/Register"> зарегестрироваться </Link>
    </p>
</div>
  )
}
