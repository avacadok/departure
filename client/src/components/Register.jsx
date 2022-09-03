import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [matchPassword, setMatchPassword] = useState('');
  const [email, setEmail] = useState('');
  const [matchEmail, setMatchEmail] = useState('');
  const [registerStat, setRegisterStat] = useState(false);

  const userRegister = (e) => {
    e.preventDefault();
    axios.post('/register', { username, email, password })
      .then((response) => {
        console.log(response);
        setRegisterStat(true);
        setUsername('');
        setEmail('');
        setPassword('');
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

        {registerStat ? <p className="register-msg">Welcome to Depawture <b>PAWRENT</b>, please click the <b>LOG IN</b> button to sign into your account 🖤</p> : <></>}

        <div className="input-username">
          <input type={'name'} 
          placeholder="Username" 
          onChange={(e) => setUsername(e.target.value)} 
          value={username}>
          </input>
        </div>

        <div className="input-email">
          <input type={'email'} 
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}>
          </input>
        </div>

        {/* <div className="input-email">
          <input type={'email'} placeholder="Confirm email" >
          </input>
        </div> */}

        <form className="input-password">
          <input type={'password'} 
          placeholder="Password"
          autoComplete="on"
          onChange={(e) => setPassword(e.target.value)}
          value={password}>
          </input>
        </form>

        {/* <form className="input-password">
          <input type={'password'} placeholder="Confirm password" autoComplete="on">
          </input>
        </form> */}

        <button className="confirm-button" type="submit"
          onClick={userRegister} >
          Sign up
        </button>

      </section>
    </>
  )

}

export default Register;