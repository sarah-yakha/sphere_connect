import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { Link } from "react-router-dom";
import { Logo } from "../logo/Logo";
import styles from "./Form.module.scss";
import { setUser } from "../../store/slices/userSlice";
import { addUser } from "../../store/slices/messageSlice";
import { auth } from "../../firebase";


export const Login = () => {
    const dispatch = useDispatch()

    
    
    
    const handleLogin = async (email,password,nickname) => {
    console.log(email,password,nickname)
        const auth = await getAuth();
       await signInWithEmailAndPassword(auth, email, password)        
        .then(({user}) => {
    dispatch(addUser(email))
            console.log(user)
            dispatch(setUser({
              email: user.email,
              id: user.uid,
              nickname: nickname,
              token: user.accessToken,
          }))
        })
        .catch(console.error())
    }
  return (
    <div className={styles.contain}>
      <Logo />
      <h1 className={styles.headerText}> Войдите в аккаунт </h1>
      <Form title="Войти" handleClick={handleLogin} login />
      <p>
        Нет аккаунта? Нажми
        <Link to="/Register"> зарегестрироваться </Link>
      </p>
    </div>
  );
};
