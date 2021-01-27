import React from "react";
import ReactDOM from "react-dom";

// React router dom
import { BrowserRouter } from "react-router-dom";

// Firebase
import firebase from "firebase";

// Redux
import store from "./store/store";
import { Provider } from "react-redux";

// Components
import App from "./components/App";

// Asseets
import "./index.css";

const firebaseConfig = {
  apiKey: "AIzaSyCZdU_u9-kAX3CZ96XvIQuMrsEnsmjQ42I",
  authDomain: "react-form-33f66.firebaseapp.com",
  databaseURL: "https://react-form-33f66-default-rtdb.firebaseio.com",
  projectId: "react-form-33f66",
  storageBucket: "react-form-33f66.appspot.com",
  messagingSenderId: "273168417735",
  appId: "1:273168417735:web:043a78b987b29cb33e4fe2",
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
