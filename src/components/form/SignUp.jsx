import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { Logo } from "../logo/Logo";
import styles from './Form.module.css'
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";


export const SignUp = () => {
  const dispatch = useDispatch()
  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
        }))
    })
      .catch(alert("Пользователь с таки email уже зарегестрирован"));
  };

  return (
    <div className={styles.contain}>
    <Logo />
      <h1  className={styles.headerText}> Создайте аккаунт </h1>
      <Form title="Зарегистрироваться" handleClick={handleRegister} />
      <p>
        Есть аккаунт? Нажми
        <Link to="/Login"> войти </Link>
      </p>
    </div>
  );
};
