import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase';

import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth 
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/')
      })
      .catch(error => alert.apply(error.message))
  }

  const signUp = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (

    <div className="login">
      <Link to="/">

        <img className="login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG24.png" alt="" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form action="">
          <h5>Email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button className="button__large" onClick={signIn} type="submit">Sign in</button>
        </form>

        <button className="button__register" onClick={signUp}>Sign up</button>
      </div>
    </div>

  )
}

export default Login;