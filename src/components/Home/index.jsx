import React, { useEffect, useState } from "react";

// Firebase db
import firebase from "firebase";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { changeAuth, setUser } from "../../store/actionCreators";

// Assets
import styles from "./index.module.css";

const Home = () => {
  // Dispatch
  const dispatch = useDispatch();

  //  Check user name
  useEffect(() => {
    const name = firebase.auth().currentUser.displayName;
    if (name !== null) {
      dispatch(setUser(name));
    }
  }, []);

  // New user name
  const [newName, setNewName] = useState("");

  // User name
  const userName = useSelector((store) => store.user.name);

  // Logout account
  const logout = () => {
    firebase.auth().signOut();
    dispatch(changeAuth(false));
  };

  // Change input
  const changeInputName = (event) => {
    const value = event.target.value;
    setNewName(value);
  };

  // Change user name
  const changeUserName = () => {
    const user = firebase.auth().currentUser;
    user.updateProfile({ displayName: newName });
    dispatch(setUser(newName));
  };

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        Привет, {userName !== null ? userName : "Аноним"}
      </h1>
      <p>Задайте имя пользователя</p>
      <input
        className={styles.input}
        onChange={(event) => changeInputName(event)}
      />
      <button className={styles.btn} onClick={changeUserName}>
        Сменить имя
      </button>
      <button className={styles.btn} onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
