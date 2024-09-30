import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "./Form";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { Logo } from "../logo/Logo";
import styles from './Form.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import writeUsers from "./usersDatabase";


export const SignUp = () => {

  const dispatch = useDispatch()
  const userP = useSelector((state) => state.user);
  const handleRegister = (email, password , nickname ) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user)
        const addUser = {
          email: user.email,
          nickname: nickname,
            id: user.uid,
            token: user.accessToken,
        }
        dispatch(setUser({
            email: user.email,
            id: user.uid,
            nickname: nickname,
            token: user.accessToken,
        }))
        writeUsers(addUser)
        localStorage.setItem('userNick',JSON.stringify(addUser))
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
