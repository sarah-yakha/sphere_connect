import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { Link } from "react-router-dom";


export const SignUp = () => {

    const handleRegister = (email,password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)        
        .then(console.log)
        .catch(alert('Пользователь с таки email уже зарегестрирован'))
    }

  return (
<div>
             <h1> Создайте аккаунт </h1>
    <Form title='Зарегистрироваться' handleClick={handleRegister}/>
    <p>
   Есть аккаунт? Нажми
    <Link to="/Login"> войти </Link>
    </p>

</div>
  )
}
