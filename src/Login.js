import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

  }

  const signUp = e => {
    e.preventDefault();

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
