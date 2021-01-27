import React from "react";

// React hook form
import { useForm } from "react-hook-form";

// Assets
import styles from "./index.module.css";

const SignIn = (props) => {
  // React hook from
  const { register, handleSubmit } = useForm();

  // Submit form
  const submitForm = props.onSubmit;

  // Errors
  const error = props.errorSignIn;
  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <h3 className={styles.form__title}>Sign In</h3>
      {error ? (
        <div className={styles.error}>Неверный логин или пароль</div>
      ) : null}
      <input
        name={"email"}
        ref={register({ required: true })}
        className={styles.form__input}
        type="text"
        placeholder="E-mail"
      />
      <input
        name={"password"}
        ref={register({ required: true })}
        className={styles.form__input}
        type="password"
        placeholder="Password"
      />
      <button className={styles.form__btn}>Login</button>
    </form>
  );
};

export default SignIn;
