import React from "react";
import firebase  from "firebase/app";
import { auth } from "../firebase";

//Icons
import google from "../assets/google-icon.png";

// Styles
import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginPage}>
      <div className={styles.loginCard}>
        <h3>Welcom to Erigram !</h3>
        <div 
        className={styles.button}
        onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <img src={google} alt="google" /> Sign in with Google
        </div>
      </div>
    </div>
  );
};

export default Login;
