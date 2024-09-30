import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "../../components/form/Form";
import { Link, unstable_HistoryRouter } from "react-router-dom";
import { Logo } from "../../components/logo/Logo";
import styles from "./register.module.scss";
// import styles from "./form.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import writeUsers from "../../components/form/usersDatabase";

export const SignUp = () => {
  const dispatch = useDispatch();
  const userP = useSelector((state) => state.user);
  const handleRegister = (email, password, nickname) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        const addUser = {
          email: user.email,
          nickname: nickname,
          id: user.uid,
          token: user.accessToken,
        };
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            nickname: nickname,
            token: user.accessToken,
          })
        );
        writeUsers(addUser);
        localStorage.setItem("userNick", JSON.stringify(addUser));
      })
      .catch(alert("Пользователь с таки email уже зарегестрирован"));
  };

  return (
    <div className="container">
      <div className={styles.register}>
        {/* <Logo /> */}
        <h1 className={styles.headerText}> Создайте аккаунт </h1>
        <Form title="Зарегистрироваться" handleClick={handleRegister} />
        <p>
          Есть аккаунт? Нажми
          <Link to="/Login"> войти </Link>
        </p>
      </div>
    </div>
  );
};
