import React from "react";

// React router dom
import { Route, Switch } from "react-router-dom";

// Components
import Auth from "./Auth";
import NotFound from "./NotFound";
import Home from "./Home";

// Redux
import { useSelector } from "react-redux";

// Assets
import styles from "./App.module.css";

const App = () => {
  // Flag authentication
  const hasAuth = useSelector(({ auth }) => auth.isAuth);

  return (
    <div className={styles.app}>
      {hasAuth ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Auth} />
          <Route component={NotFound} />
        </Switch>
      )}
    </div>
  );
};

export default App;
