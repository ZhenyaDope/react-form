import React from "react";
import { useState } from "react";

// Firebase
import firebase from "firebase";

// Components
import SignUp from "./SignUp";
import SignIn from "./SignIn";

// Redux
import { useDispatch } from "react-redux";
import { changeAuth, setUser } from "../../store/actionCreators";

// Assets
import styles from "./index.module.css";

const Auth = () => {
  // Dispatch
  const dispatch = useDispatch();

  // Active button
  const [currentBtn, setCurrentBtn] = useState(true);

  // Error authorization
  const [errorSignIn, setErrorSignIn] = useState(false);
  const [errorSignUp, setErrorSignUp] = useState(false);

  // Registration account
  const createAccount = ({ email, password }) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((data) => setCurrentBtn(!currentBtn))
      .catch((error) =>
        error.code === "auth/email-already-in-use"
          ? setErrorSignUp(true)
          : setErrorSignUp(false)
      );
  };

  // Login account
  const loginAccount = ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((data) => {
        const name = data.user.displayName;
        dispatch(changeAuth(true));
        dispatch(setUser(name));
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/wrong-password":
            return setErrorSignIn(true);
          case "auth/invalid-email":
            return setErrorSignIn(true);
          default:
            return setErrorSignIn(false);
        }
      });
  };

  // Switching form
  const switchForm = () => {
    setCurrentBtn(!currentBtn);
  };

  return (
    <div className={styles.auth}>
      <div className={styles.left__wrapper}></div>
      <div className={styles.right__wrapper}>
        <div className={styles.control__panel}>
          <button
            onClick={switchForm}
            className={`${styles.control__btn} ${styles.btn__signUp} ${
              currentBtn ? styles.btn__active : ""
            }`}
          >
            Sign up
          </button>
          <button
            onClick={switchForm}
            className={`${styles.control__btn} ${styles.btn__signIn}  ${
              currentBtn ? "" : styles.btn__active
            }`}
          >
            Sign in
          </button>
        </div>
        {currentBtn ? (
          <SignUp errorSignUp={errorSignUp} onSubmit={createAccount} />
        ) : (
          <SignIn errorSignIn={errorSignIn} onSubmit={loginAccount} />
        )}
      </div>
    </div>
  );
};

export default Auth;
