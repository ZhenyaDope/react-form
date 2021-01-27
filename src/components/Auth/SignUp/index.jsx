import React, { useState } from "react";

// React hook form
import { useForm } from "react-hook-form";

// Assets
import styles from "./index.module.css";

const SignUp = (props) => {
  const error = props.errorSignUp;

  // Submit form
  const submitForm = props.onSubmit;

  // React hook from
  const { register, handleSubmit, errors } = useForm();

  // Password
  const [password, setPassword] = useState("");

  // Matching check reapeat password
  const handlePassword = (e) => {
    const pass = e.target.value;
    setPassword(pass);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <h3 className={styles.form__title}>Sign Up</h3>
      {errors.email ? (
        <div className={styles.error}>Введите корректный адрес почты</div>
      ) : null}
      {error ? (
        <div className={styles.error}>Такой пользователь уже существует</div>
      ) : null}
      <input
        name={"email"}
        ref={register({
          required: true,
          minLength: 12,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          },
        })}
        className={styles.form__input}
        type="text"
        placeholder="E-mail"
      />
      {errors.password ? (
        <div className={styles.error}>Минимальное количество символов 10</div>
      ) : null}
      <input
        name={"password"}
        ref={register({ required: true, minLength: 10 })}
        className={styles.form__input}
        type="password"
        placeholder="Password"
        onChange={(event) => {
          handlePassword(event);
        }}
      />
      {errors.repeatPassword ? (
        <div className={styles.error}>Пароль не совпадает</div>
      ) : null}
      <input
        name={"repeatPassword"}
        ref={register({
          required: true,
          validate: (value) =>
            value === password || "The passwords do not match",
        })}
        className={styles.form__input}
        type="password"
        placeholder="Repeat password"
      />

      <button className={styles.form__btn}>Create</button>
    </form>
  );
};

export default SignUp;
