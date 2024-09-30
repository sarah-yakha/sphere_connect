import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from "../Form";
import { Link } from "react-router-dom";
import { Logo } from "../../logo/Logo";
import styles from "./login.module.scss";
import { setUser } from "../../../store/slices/userSlice";
import { addUser } from "../../../store/slices/messageSlice";
import { auth } from "../../../firebase";

export const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = async (email, password, nickname) => {
    login = auth.currentUser.email;
    const err = "Проверьте введеные данные, или зарегестрируйтесь";
    const auth = await getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(addUser(email));
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            nickname: nickname,
            token: user.accessToken,
          })
        );
      })
      .catch(console.error());
  };
  return (
    <div className="container">
      <div className={styles.login}>
        {/* <Logo /> */}
        <h1 className={styles.headerText}> Войдите в аккаунт </h1>
        <Form title="Войти" handleClick={handleLogin} />
        <p>
          Нет аккаунта?
          <Link to="/Register"> Регистрация </Link>
        </p>
      </div>
    </div>
  );
};
