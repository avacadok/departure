import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [show, setShow] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('/login', { email, password })
    .then((response) => {
      console.log(response.data)
      if (response.data.error) {
        setErrMsg(response.data.error);
        setShow(true);
      } else {
        props.setLoginStatus(true)
        setShow(false);
        setEmail('');
        setPassword('');
      }
    })
    .catch(err => console.log("err from register", err))
  }

  return (
    <>
      <div className="page-title">Hello Traveler</div>

      <section className="login-section">
        <div className="login-info">
          <Link to={'/login'} className="user-login">Log in</Link>
          <Link to={'/register'} className="user-signup">Sign Up</Link>
        </div>

        {show ? <p className="err-msg"> 
        <i className="fa-solid fa-triangle-exclamation"></i> {errMsg} </p> : <></>}

        <div className="input-email">
          <input type={'email'} 
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email} >
          </input>
        </div>

        <form className="input-password">
          <input type={'password'} 
          placeholder="Password"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
          value={password}>
          </input>
        </form>

        <button className="confirm-button" type="submit" 
        onClick={handleLogin}>
          Log in
        </button>

      </section>
    </>
  )

}

export default Login;