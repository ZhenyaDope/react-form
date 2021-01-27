import React from "react";

// React router dom
import { NavLink } from "react-router-dom";

// Styles
import styles from "./index.module.css";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>404</h3>
      <p className={styles.subTitle}>Not Found</p>
      <NavLink className={styles.link} to="/">
        На главную
      </NavLink>
    </div>
  );
};

export default NotFound;
